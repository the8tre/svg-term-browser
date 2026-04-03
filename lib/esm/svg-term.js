import * as React from "react";
import { Background } from "./Background";
import { Document } from "./Document";
import { Frame } from "./Frame";
import { Reel } from "./Reel";
import { Registry } from "./Registry";
import { Window } from "./Window";
import { Word } from "./Word";
import { toViewModel } from "./to-view-model";
import { from, to } from "./util";
export const SvgTerm = props => {
    const bound = { from: props.from, to: props.to, at: props.at, cast: props.cast };
    const data = toViewModel({
        cast: props.cast,
        cursor: props.cursor,
        height: props.height,
        theme: props.theme,
        from: from(bound),
        to: to(bound)
    });
    return (React.createElement(Window, { decorations: props.decorations, width: data.width, height: data.displayHeight, background: props.theme.background, paddingX: props.paddingX, paddingY: props.paddingY },
        React.createElement(Document, { width: data.width, height: data.displayHeight, x: props.decorations ? 15 + props.paddingX : props.paddingX, y: props.decorations ? 50 + props.paddingY : props.paddingY },
            React.createElement("g", { style: {
                    fontFamily: props.theme.fontFamily,
                    fontSize: props.theme.fontSize,
                } },
                React.createElement(Registry, { frameHeight: props.cast.height, frameWidth: props.cast.width, hasCursors: data.frames.some((frame) => frame.cursor.visible), hasFrames: data.frames.length > 0, items: data.registry, theme: props.theme }),
                React.createElement(Background, { width: data.width, height: data.displayHeight, fill: props.theme.background }),
                React.createElement(Reel, { duration: data.duration, frameWidth: props.cast.width, stamps: data.stamps, width: data.frames.length * props.cast.width }, data.frames.map((frame, index) => {
                    return (React.createElement(Frame, { key: frame.stamp, offset: index, width: data.width },
                        frame.cursor.visible && (React.createElement("use", { key: "cursor", xlinkHref: "#b", x: frame.cursor.x - props.theme.fontSize * 1.2, y: frame.cursor.y === 0
                                ? 0
                                : frame.cursor.y + props.theme.lineHeight * 0.75 })),
                        frame.lines.map((line, index) => {
                            if (typeof line.id === "number") {
                                return (React.createElement("use", { key: `${line.id}-${index}`, xlinkHref: `#${line.id}`, y: line.y }));
                            }
                            return line.words.map((word, wordIndex) => {
                                return (React.createElement(Word, { key: `${index}-${wordIndex}`, bg: word.attr.bg, bold: word.attr.bold, fg: word.attr.fg, inverse: word.attr.inverse, theme: props.theme, underline: word.attr.underline, x: word.x, y: line.y + props.theme.fontSize }, word.children));
                            });
                        })));
                }))))));
};
//# sourceMappingURL=svg-term.js.map