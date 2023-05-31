// Fast seeded RNG adapted from the public-domain implementation
// by @byrc: https://github.com/bryc/code/blob/master/jshash/PRNGs.md

/**
 * Mulberry32 is minimalistic generator utilizing a 32-bit state, originally
 * intended for embedded applications. It appears to be very good; the author
 * states it passes all tests of gjrand, and this JavaScript implementation
 * is very fast. But since the state is 32-bit like Xorshift, it's period
 * (how long the random sequence lasts before repeating) is significantly
 * less than those with 128-bit states, but it's still quite large, at
 * around 4 billion.
 *
 * The original implementation in C of algorithm is:
 * https://gist.github.com/tommyettinger/46a874533244883189143505d203312c
 *
 * @example
 *  const randFn = mulberry32('string seed')
 *  const randomNumber = randFn() // [0, 1] random float
 *
 * @param {string|null} seed The seed to use, this param is optional,
 * if the seed not is provider a random seed is used.
 *
 * @return {function(): number} The generator random function.
 */
export default function mulberry32 (seed: string | null): () => number {
  if (!seed) { seed = Math.random().toString(36) } // support no-seed usage
  var a = xmur3(seed)()
  return function () {
    a |= 0
    a = a + 0x6D2B79F5 | 0
    var t = Math.imul(a ^ a >>> 15, 1 | a)
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t
    return ((t ^ t >>> 14) >>> 0) / 4294967296
  }
}

/**
 * Algorithm based MurmurHash3's mixing function.
 *
 * Most of the generators here have no built-in seed generating procedure
 * (for sake of simplicity), but accept one or more 32-bit values as the
 * initial state of the PRNG. Similar seeds (e.g. a simple seed of 1 and 2)
 * can cause correlations in weaker PRNGs, resulting in the output having
 * similar properties (such as randomly generated levels being similar).
 * To avoid this, it is best practice to initialize PRNGs with a
 * well-distributed seed.
 *
 * There are various ways to seed a PRNG, but care must be taken. Certain
 * generators have their own seeding procedure (jsf32, sfc32, gjrand32,
 * v3b), which typically fill the state with some preset data and run the
 * generator a few times in advance. This appears to work, and is often
 * by design, but it can reduce the effective number of input states
 * dramatically.
 *
 * I propose using a separate hash function to initialize the entire
 * state. Hash functions are very good at generating seeds for PRNGs
 * from short strings. A good hash function will generate very different
 * results even when two strings are similar.
 *
 * Each subsequent call to the return function of xmur3 produces a new
 * "random" 32-bit hash value to be used as a seed in a PRNG. Here's
 * how you might use it:
 *
 * @example
 * // Create xmur3 state:
 * var seed = xmur3("apples");
 *
 * // Output one 32-bit hash to provide the seed for mulberry32.
 * var rand = mulberry32(seed());
 *
 * // Obtain sequential random numbers like so:
 * rand();
 *
 *
 * @param {string} str The seed to use. This param cannot be null|undefined
 * @return {function(): number} The generator random seed function. Each
 * subsequent call to the return function of xmur3 produces a new "random"
 * 32-bit hash value to be used as a seed in a PRNG.
 */
function xmur3 (str: string): () => number {
  for (var i = 0, h = 1779033703 ^ str.length; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353)
    h = h << 13 | h >>> 19
  }
  return function () {
    h = Math.imul(h ^ h >>> 16, 2246822507)
    h = Math.imul(h ^ h >>> 13, 3266489909)
    return (h ^= h >>> 16) >>> 0
  }
}
