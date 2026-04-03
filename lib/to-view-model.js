"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toViewModel = toViewModel;
const lodash_1 = require("lodash");
function toViewModel(options) {
    const { cursor: cursorOption, cast, theme, from, to } = options;
    const loadedFrames = cast.frames;
    const stamps = loadedFrames
        .filter(([stamp]) => stamp >= from && stamp <= to)
        .map(([stamp]) => stamp - from);
    const fontSize = theme.fontSize;
    const lineHeight = theme.lineHeight;
    const height = typeof options.height === 'number' ? options.height : cast.height;
    const frames = loadedFrames
        .filter(([stamp]) => stamp >= from && stamp <= to)
        .map(([delta, data]) => [delta, data, liner(data)])
        .map(([stamp, data, l]) => {
        const lines = l
            .map((chars, y) => {
            const words = toWords(chars);
            return {
                y: y * fontSize * lineHeight,
                words,
                hash: JSON.stringify(words),
                ref: null
            };
        });
        const cursor = getCursor(data);
        const cl = lines[cursor.y] || { y: 0 };
        cursor.x = cursor.x + 2;
        cursor.y = Math.max(0, cl.y - 1);
        cursor.visible = cursorOption === false ? false : cursor.visible;
        return {
            cursor,
            lines,
            stamp: (Math.round(stamp * 100) / 100) - from
        };
    });
    const candidates = (0, lodash_1.flatMap)(frames, 'lines').filter(line => line.words.length > 0);
    const hashes = (0, lodash_1.groupBy)(candidates, 'hash');
    const registry = (0, lodash_1.entries)(hashes)
        .filter(([_, lines]) => lines.length > 1)
        .map(([hash, [line]], index) => {
        const id = index + 1;
        const words = line.words.slice(0);
        frames.forEach(frame => {
            frame.lines
                .filter(line => line.hash === hash)
                .forEach(l => {
                l.words = [];
                l.id = id;
            });
        });
        return { type: 'line', words, id };
    });
    return {
        width: cast.width,
        displayWidth: cast.width,
        height: cast.height,
        displayHeight: height * fontSize * lineHeight,
        duration: to - from,
        registry,
        stamps,
        frames
    };
}
function getCursor(data) {
    if (data.hasOwnProperty('cursor')) {
        const frame = data;
        return frame.cursor;
    }
    const frame = data;
    return frame.screen.cursor;
}
function liner(data) {
    if (data.hasOwnProperty('lines')) {
        const frame = data;
        return toOne(frame.lines);
    }
    const frame = data;
    return frame.screen.lines;
}
function toWords(chars) {
    return chars
        .reduce((words, [point, attr]) => {
        if (words.length === 0) {
            words.push({
                attr,
                x: 0,
                children: '',
                offset: 0
            });
        }
        const word = words[words.length - 1];
        const children = String.fromCodePoint(point);
        if (children === ' ' && !('bg' in attr) && !attr.inverse) {
            word.offset = word.offset + 1;
            return words;
        }
        if ((0, lodash_1.isEqual)(word.attr, attr) && word.offset === 0) {
            word.children += children;
        }
        else {
            words.push({
                attr,
                x: word.x + word.children.length + word.offset,
                children,
                offset: 0
            });
        }
        return words;
    }, [])
        .filter((word) => {
        if ('bg' in word.attr || word.attr.inverse) {
            return true;
        }
        const trimmed = word.children.trim();
        if ((trimmed === '' || trimmed === '⏎')) {
            return false;
        }
        return true;
    });
}
function toOne(arrayLike) {
    return Object.entries(arrayLike)
        .sort((a, b) => a[0] - b[0])
        .map(e => e[1])
        .map((words) => words.reduce((chars, word) => {
        const [content, attr] = word;
        chars.push(...content.split('').map((char) => [char.codePointAt(0), attr]));
        return chars;
    }, []), []);
}
//# sourceMappingURL=to-view-model.js.map