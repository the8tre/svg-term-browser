import * as React from "react";
import { LoadedCast } from "./load-cast";
import { Theme } from "./default-theme";
export interface SvgTermProps {
    cast: LoadedCast;
    theme: Theme;
    paddingX: number;
    paddingY: number;
    height?: number;
    decorations: boolean;
    from?: number;
    to?: number;
    at?: number;
    cursor: boolean;
}
export declare const SvgTerm: React.FunctionComponent<SvgTermProps>;
//# sourceMappingURL=svg-term.d.ts.map