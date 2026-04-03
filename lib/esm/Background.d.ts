import * as React from "react";
import { ColorInput } from "./color";
type RectProps = React.SVGProps<"rect">;
export interface BackgroundProps {
    height: RectProps["height"];
    width: RectProps["width"];
    fill: ColorInput<never>;
}
export declare const Background: React.FunctionComponent<BackgroundProps>;
export {};
//# sourceMappingURL=Background.d.ts.map