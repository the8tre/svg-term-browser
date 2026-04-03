"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadCast = loadCast;
const load_asciicast_1 = require("load-asciicast");
;
function loadCast(input, options = {}) {
    if (!input) {
        throw new TypeError(`svg-term.reder: missing input`);
    }
    const { width, height, idle, fps } = options;
    return (0, load_asciicast_1.load)(input, {
        width,
        height: height ? height + 1 : undefined,
        idle: idle ? idle / 1000 : undefined,
        fps
    });
}
//# sourceMappingURL=load-cast.js.map