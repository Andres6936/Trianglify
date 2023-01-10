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
 * @param {string|undefined} seed The seed to use, this param is optional,
 * if the seed not is provider a random seed is used.
 *
 * @return {function(): *} The generator random function.
 */
export default function mulberry32 (seed) {
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

function xmur3 (str) {
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
