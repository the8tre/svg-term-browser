"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reel = void 0;
const react_1 = __importDefault(require("react"));
const PERCEPTIBLE = 1 / 60;
const Reel = (props) => {
    if (props.duration === 0) {
        return (react_1.default.createElement("svg", { x: "0", y: "0", width: props.width }, props.children));
    }
    const factor = Math.pow(10, magnitude(PERCEPTIBLE / (props.duration / 100)) + 1);
    const p = (s) => Math.round((s / (props.duration / 100)) * factor) / factor;
    const animName = 'n';
    const keyframeBody = props.stamps
        .map((stamp, i) => `${p(stamp)}%{transform:translateX(-${props.frameWidth * i}px)}`)
        .join('');
    const css = `@keyframes ${animName}{${keyframeBody}}`;
    const animStyle = {
        animationDuration: `${props.duration}s`,
        animationIterationCount: 'infinite',
        animationName: animName,
        animationTimingFunction: 'steps(1,end)',
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("style", null, css),
        react_1.default.createElement("g", { style: animStyle },
            react_1.default.createElement("svg", { x: "0", y: "0", width: props.width }, props.children))));
};
exports.Reel = Reel;
function magnitude(x) {
    const y = Math.abs(x);
    if (y > 1)
        return 0;
    const result = Math.floor(Math.log(y) / Math.log(10) + 1);
    return result === 0 ? result : -1 * result;
}
//# sourceMappingURL=Reel.js.map