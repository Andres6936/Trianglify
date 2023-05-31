import type {CanvasRenderingContext2D} from "canvas";

export default function getScalingRatio (ctx: CanvasRenderingContext2D): number {
  // adapted from https://gist.github.com/callumlocke/cc258a193839691f60dd
  const backingStoreRatio = 1

  const devicePixelRatio = (typeof window !== 'undefined' && window.devicePixelRatio) || 1
  // Return the draw ratio
  return devicePixelRatio / backingStoreRatio
}
