import { load } from "load-asciicast";
;
export function loadCast(input, options = {}) {
    if (!input) {
        throw new TypeError(`svg-term.reder: missing input`);
    }
    const { width, height, idle, fps } = options;
    return load(input, {
        width,
        height: height ? height + 1 : undefined,
        idle: idle ? idle / 1000 : undefined,
        fps
    });
}
//# sourceMappingURL=load-cast.js.map