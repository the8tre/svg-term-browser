import * as React from "react";
export interface WordProps {
    inverse?: boolean;
    bg?: boolean;
    bold?: boolean;
    underline?: boolean;
    fg?: string | number;
    children: string;
    x: number;
    y: number;
    theme: {
        fontSize: number;
        lineHeight: number;
    };
}
export declare const Word: React.FunctionComponent<WordProps>;
//# sourceMappingURL=Word.d.ts.map