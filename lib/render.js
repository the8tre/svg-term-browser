"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = render;
const React = __importStar(require("react"));
const server_browser_1 = require("react-dom/server.browser");
const load_cast_1 = require("./load-cast");
const default_theme_1 = require("./default-theme");
const svg_term_1 = require("./svg-term");
function render(input, options) {
    const cast = typeof input === "string" ? (0, load_cast_1.loadCast)(input, options) : input;
    const theme = Object.assign({}, (options.theme || default_theme_1.defaultTheme));
    theme.fontFamily =
        "fontFamily" in theme ? theme.fontFamily : default_theme_1.defaultTheme.fontFamily;
    theme.fontSize = "fontSize" in theme ? theme.fontSize : default_theme_1.defaultTheme.fontSize;
    theme.lineHeight =
        "lineHeight" in theme ? theme.lineHeight : default_theme_1.defaultTheme.lineHeight;
    const paddingX = typeof options.paddingX === "number" ? options.paddingX : 0;
    const paddingY = typeof options.paddingY === "number" ? options.paddingY : 0;
    const decorations = typeof options.window === "boolean" ? options.window : false;
    const cursor = typeof options.cursor === "boolean" ? options.cursor : false;
    return (0, server_browser_1.renderToStaticMarkup)(React.createElement(svg_term_1.SvgTerm, { cast: cast, theme: theme, paddingX: paddingX, paddingY: paddingY, decorations: decorations, cursor: cursor, height: options.height }));
}
//# sourceMappingURL=render.js.map