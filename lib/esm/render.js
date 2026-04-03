import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server.browser";
import { loadCast } from "./load-cast";
import { defaultTheme } from "./default-theme";
import { SvgTerm } from "./svg-term";
export function render(input, options) {
    const cast = typeof input === "string" ? loadCast(input, options) : input;
    const theme = Object.assign({}, (options.theme || defaultTheme));
    theme.fontFamily =
        "fontFamily" in theme ? theme.fontFamily : defaultTheme.fontFamily;
    theme.fontSize = "fontSize" in theme ? theme.fontSize : defaultTheme.fontSize;
    theme.lineHeight =
        "lineHeight" in theme ? theme.lineHeight : defaultTheme.lineHeight;
    const paddingX = typeof options.paddingX === "number" ? options.paddingX : 0;
    const paddingY = typeof options.paddingY === "number" ? options.paddingY : 0;
    const decorations = typeof options.window === "boolean" ? options.window : false;
    const cursor = typeof options.cursor === "boolean" ? options.cursor : false;
    return renderToStaticMarkup(React.createElement(SvgTerm, { cast: cast, theme: theme, paddingX: paddingX, paddingY: paddingY, decorations: decorations, cursor: cursor, height: options.height }));
}
//# sourceMappingURL=render.js.map