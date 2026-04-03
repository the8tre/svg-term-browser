import { LoadCastOptions, LoadedCast } from "./load-cast";
import { Theme } from "./default-theme";
export interface SvgTermOptions extends LoadCastOptions {
    at?: number;
    from?: number;
    to?: number;
    paddingX: number;
    paddingY: number;
    theme?: Theme;
    window?: boolean;
    cursor?: boolean;
}
export type SvgTermColor = [number, number, number];
export declare function render(input: string | LoadedCast, options: SvgTermOptions): string;
//# sourceMappingURL=render.d.ts.map