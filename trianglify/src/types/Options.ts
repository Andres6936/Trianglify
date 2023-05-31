import type {BrewerPalettes} from "./BrewerPalettes.js";
import type {Color, InterpolationMode} from "chroma-js";
import type {Param} from "./Param.js";
import type {Point} from "./Point.js";

export type Options = {
    width: number,
    height: number,
    cellSize: number,
    variance: number,
    seed: string | null,
    xColors: string | string[],
    yColors: string,
    palette: BrewerPalettes,
    colorSpace: InterpolationMode,
    colorFunction: (param: Param) => Color
    fill: boolean,
    strokeWidth: number,
    points: Point[] | null
}