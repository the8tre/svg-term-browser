import * as React from "react";
import { Attributes } from "load-asciicast";
import { RGBTuple } from "./default-theme";
export interface RegistryWord {
    attr: Attributes;
    x: number;
    children: string;
    offset: number;
}
export interface RegistryItem {
    type: "line" | string;
    id: string | number;
    words: RegistryWord[];
}
export interface RegistryProps {
    items: RegistryItem[];
    theme: {
        fontSize: number;
        lineHeight: number;
        cursor: RGBTuple;
    };
    hasFrames: boolean;
    frameHeight: number;
    frameWidth: number;
    hasCursors: boolean;
}
export declare const Registry: React.FunctionComponent<RegistryProps>;
export interface LineWordProps {
    attr: {
        inverse?: boolean;
        bg?: boolean;
        bold?: boolean;
        underline?: boolean;
        fg?: number | string;
    };
    children: string;
    x: number;
}
export interface LineSymbolProps {
    id: string | number;
    words: LineWordProps[];
    theme: {
        fontSize: number;
        lineHeight: number;
    };
}
//# sourceMappingURL=Registry.d.ts.map