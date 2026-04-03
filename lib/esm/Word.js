import * as React from "react";
import { color } from "./color";
export const Word = props => {
    const bgFill = props.inverse ? fg(props) : bg(props);
    const textFill = props.inverse ? bg(props) : fg(props);
    return (React.createElement(React.Fragment, null,
        (props.inverse || props.bg) && (React.createElement("rect", { fill: bgFill, height: props.theme.fontSize * props.theme.lineHeight, width: props.children.length > 0 ? props.children.length : 0, x: props.x * props.theme.fontSize * 0.6, y: props.y - props.theme.fontSize })),
        React.createElement("text", { style: {
                fill: textFill,
                textDecoration: props.underline ? "underline" : undefined,
                fontWeight: props.bold ? "bold" : undefined,
                whiteSpace: "pre",
            }, x: props.x * props.theme.fontSize * 0.6, y: props.y }, props.children)));
};
function bg(props) {
    var _a;
    const b = typeof props.bg === "undefined" ? undefined : props.bg;
    return (_a = color(b, props.theme, props.theme.background)) !== null && _a !== void 0 ? _a : undefined;
}
function fg(props) {
    var _a, _b;
    if (props.bold && !props.fg) {
        return (_a = color(props.theme.bold, props.theme)) !== null && _a !== void 0 ? _a : undefined;
    }
    const d = props.bold ? props.theme.bold : props.theme.text;
    const f = typeof props.fg === "undefined" ? d : props.fg;
    return (_b = color(f, props.theme, d)) !== null && _b !== void 0 ? _b : undefined;
}
//# sourceMappingURL=Word.js.map