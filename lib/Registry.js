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
exports.Registry = void 0;
const React = __importStar(require("react"));
const Cursor_1 = require("./Cursor");
const Word_1 = require("./Word");
const Registry = props => {
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
                React.createElement(Cursor_1.Cursor, { height: props.theme.fontSize * props.theme.lineHeight, fill: props.theme.cursor, width: props.theme.fontSize * 0.66 })))
        ]));
};
exports.Registry = Registry;
const LineSymbol = props => {
    return (React.createElement("symbol", { id: String(props.id) }, props.words.map((word, index) => (React.createElement(Word_1.Word, { bg: word.attr.bg, bold: word.attr.bold, fg: word.attr.fg, inverse: word.attr.inverse, key: index, theme: props.theme, underline: word.attr.underline, x: word.x, y: props.theme.fontSize }, word.children)))));
};
//# sourceMappingURL=Registry.js.map