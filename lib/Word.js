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
exports.Word = void 0;
const React = __importStar(require("react"));
const color_1 = require("./color");
const Word = props => {
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
exports.Word = Word;
function bg(props) {
    var _a;
    const b = typeof props.bg === "undefined" ? undefined : props.bg;
    return (_a = (0, color_1.color)(b, props.theme, props.theme.background)) !== null && _a !== void 0 ? _a : undefined;
}
function fg(props) {
    var _a, _b;
    if (props.bold && !props.fg) {
        return (_a = (0, color_1.color)(props.theme.bold, props.theme)) !== null && _a !== void 0 ? _a : undefined;
    }
    const d = props.bold ? props.theme.bold : props.theme.text;
    const f = typeof props.fg === "undefined" ? d : props.fg;
    return (_b = (0, color_1.color)(f, props.theme, d)) !== null && _b !== void 0 ? _b : undefined;
}
//# sourceMappingURL=Word.js.map