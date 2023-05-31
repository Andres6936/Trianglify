import type {Options} from "./Options.js";
import type {Scale} from "chroma-js";
import type {Point} from "./Point.js";

export type Param = {
    centroid: {x: number, y: number},
    xPercent: number,
    yPercent: number,
    vertexIndices: number[],
    vertices: Point[],
    xScale: Scale,
    yScale: Scale,
    points: Point[],
    opts: Options,
    random: () => number,
}