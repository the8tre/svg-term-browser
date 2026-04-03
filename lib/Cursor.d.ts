import React from "react";
import { ColorInput } from "./color";
type RectProps = React.SVGProps<"rect">;
export interface CursorProps {
    height: RectProps["height"];
    width: RectProps["height"];
    x?: RectProps["x"];
    y?: RectProps["y"];
    fill: ColorInput<never>;
}
export declare const Cursor: React.FunctionComponent<CursorProps>;
export {};
//# sourceMappingURL=Cursor.d.ts.map