import type {BrewerPalettes} from "./BrewerPalettes";
import type {InterpolationMode} from "chroma-js";

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
    fill: boolean,
    strokeWidth: number,
}