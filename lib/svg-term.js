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
exports.SvgTerm = void 0;
const React = __importStar(require("react"));
const Background_1 = require("./Background");
const Document_1 = require("./Document");
const Frame_1 = require("./Frame");
const Reel_1 = require("./Reel");
const Registry_1 = require("./Registry");
const Window_1 = require("./Window");
const Word_1 = require("./Word");
const to_view_model_1 = require("./to-view-model");
const util_1 = require("./util");
const SvgTerm = props => {
    const bound = { from: props.from, to: props.to, at: props.at, cast: props.cast };
    const data = (0, to_view_model_1.toViewModel)({
        cast: props.cast,
        cursor: props.cursor,
        height: props.height,
        theme: props.theme,
        from: (0, util_1.from)(bound),
        to: (0, util_1.to)(bound)
    });
    return (React.createElement(Window_1.Window, { decorations: props.decorations, width: data.width, height: data.displayHeight, background: props.theme.background, paddingX: props.paddingX, paddingY: props.paddingY },
        React.createElement(Document_1.Document, { width: data.width, height: data.displayHeight, x: props.decorations ? 15 + props.paddingX : props.paddingX, y: props.decorations ? 50 + props.paddingY : props.paddingY },
            React.createElement("g", { style: {
                    fontFamily: props.theme.fontFamily,
                    fontSize: props.theme.fontSize,
                } },
                React.createElement(Registry_1.Registry, { frameHeight: props.cast.height, frameWidth: props.cast.width, hasCursors: data.frames.some((frame) => frame.cursor.visible), hasFrames: data.frames.length > 0, items: data.registry, theme: props.theme }),
                React.createElement(Background_1.Background, { width: data.width, height: data.displayHeight, fill: props.theme.background }),
                React.createElement(Reel_1.Reel, { duration: data.duration, frameWidth: props.cast.width, stamps: data.stamps, width: data.frames.length * props.cast.width }, data.frames.map((frame, index) => {
                    return (React.createElement(Frame_1.Frame, { key: frame.stamp, offset: index, width: data.width },
                        frame.cursor.visible && (React.createElement("use", { key: "cursor", xlinkHref: "#b", x: frame.cursor.x - props.theme.fontSize * 1.2, y: frame.cursor.y === 0
                                ? 0
                                : frame.cursor.y + props.theme.lineHeight * 0.75 })),
                        frame.lines.map((line, index) => {
                            if (typeof line.id === "number") {
                                return (React.createElement("use", { key: `${line.id}-${index}`, xlinkHref: `#${line.id}`, y: line.y }));
                            }
                            return line.words.map((word, wordIndex) => {
                                return (React.createElement(Word_1.Word, { key: `${index}-${wordIndex}`, bg: word.attr.bg, bold: word.attr.bold, fg: word.attr.fg, inverse: word.attr.inverse, theme: props.theme, underline: word.attr.underline, x: word.x, y: line.y + props.theme.fontSize }, word.children));
                            });
                        })));
                }))))));
};
exports.SvgTerm = SvgTerm;
//# sourceMappingURL=svg-term.js.map