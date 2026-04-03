const NOOP = (_) => () => true;
const MAX = (max) => ([f]) => f <= max;
const MIN = (min) => ([f]) => f >= min;
function nearest(stamp, { cast, max, min }) {
    return cast.frames
        .filter(typeof max === "number" && !isNaN(max) ? MAX(max) : NOOP)
        .filter(typeof min === "number" && !isNaN(min) ? MIN(min) : NOOP)
        .sort(([a], [b]) => Math.abs(stamp - a) - Math.abs(stamp - b))[0][0];
}
export function from(options) {
    const { at, from, cast } = options;
    if (typeof at === "number") {
        return nearest(at / 1000, { cast });
    }
    return typeof from === "number" && !isNaN(from)
        ? nearest(from / 1000, { cast, min: from / 1000 })
        : 0;
}
export function to(options) {
    const { at, to, cast } = options;
    if (typeof at === "number") {
        return nearest(at / 1000, { cast });
    }
    return typeof to === "number" && !isNaN(to)
        ? nearest(to / 1000, { cast, max: to / 1000 })
        : cast.duration;
}
//# sourceMappingURL=util.js.map