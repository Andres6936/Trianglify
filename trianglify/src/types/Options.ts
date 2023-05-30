import type {BrewerPalettes} from "./BrewerPalettes";
import type {Color, InterpolationMode} from "chroma-js";
import type {Param} from "./Param";
import type {Point} from "./Point";

export type Options = {
    width: number,
    height: number,
    cellSize: number,
    variance: number,
    seed: string | null,
    xColors: string,
    yColors: string,
    palette: BrewerPalettes,
    colorSpace: InterpolationMode,
    colorFunction: (param: Param) => Color
    fill: boolean,
    strokeWidth: number,
    points: Point[] | null
}