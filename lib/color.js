"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.color = color;
const ansi_to_rgb_1 = __importDefault(require("ansi-to-rgb"));
function color(input, theme, fallback) {
    if (!input) {
        return null;
    }
    if (Array.isArray(input)) {
        return `rgb(${input.join(", ")})`;
    }
    const c = theme ? theme[input] : null;
    if (c) {
        return `rgb(${c.join(", ")})`;
    }
    const r = ansi_to_rgb_1.default[Number(input)];
    if (r) {
        return `rgb(${r.join(", ")})`;
    }
    if (!fallback) {
        throw new TypeError(`color: Unknown ANSI color ${String(input)}`);
    }
    return color(fallback, theme);
}
//# sourceMappingURL=color.js.map