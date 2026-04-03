import * as React from "react";
import { Cursor } from "./Cursor";
import { Word } from "./Word";
export const Registry = props => {
    return (React.createElement("defs", null,
        props.items.map(item => {
            switch (item.type) {
                case "line":
                    return React.createElement(LineSymbol, Object.assign({ key: item.id, theme: props.theme }, item));
                default:
                    throw new TypeError(`Unknown Registry item of type ${item.type}`);
            }
        }),
        props.hasFrames && [
            React.createElement("symbol", { id: "a", key: "a" },
                React.createElement("rect", { height: props.frameHeight, width: props.frameWidth, x: "0", y: "0", fill: "transparent" })),
            props.hasCursors && (React.createElement("symbol", { id: "b", key: "b" },
                React.createElement(Cursor, { height: props.theme.fontSize * props.theme.lineHeight, fill: props.theme.cursor, width: props.theme.fontSize * 0.66 })))
        ]));
};
const LineSymbol = props => {
    return (React.createElement("symbol", { id: String(props.id) }, props.words.map((word, index) => (React.createElement(Word, { bg: word.attr.bg, bold: word.attr.bold, fg: word.attr.fg, inverse: word.attr.inverse, key: index, theme: props.theme, underline: word.attr.underline, x: word.x, y: props.theme.fontSize }, word.children)))));
};
//# sourceMappingURL=Registry.js.map