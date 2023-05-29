import type {Options} from "./Options";
import type {Scale} from "chroma-js";

export type Param = {
    xPercent: number,
    yPercent: number,
    xScale: Scale,
    yScale: Scale,
    opts: Options,
    random: () => number,
}