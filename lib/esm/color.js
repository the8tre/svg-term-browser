import rgb from "ansi-to-rgb";
export function color(input, theme, fallback) {
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
    const r = rgb[Number(input)];
    if (r) {
        return `rgb(${r.join(", ")})`;
    }
    if (!fallback) {
        throw new TypeError(`color: Unknown ANSI color ${String(input)}`);
    }
    return color(fallback, theme);
}
//# sourceMappingURL=color.js.map