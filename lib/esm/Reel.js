import React from 'react';
const PERCEPTIBLE = 1 / 60;
export const Reel = (props) => {
    if (props.duration === 0) {
        return (React.createElement("svg", { x: "0", y: "0", width: props.width }, props.children));
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
    return (React.createElement(React.Fragment, null,
        React.createElement("style", null, css),
        React.createElement("g", { style: animStyle },
            React.createElement("svg", { x: "0", y: "0", width: props.width }, props.children))));
};
function magnitude(x) {
    const y = Math.abs(x);
    if (y > 1)
        return 0;
    const result = Math.floor(Math.log(y) / Math.log(10) + 1);
    return result === 0 ? result : -1 * result;
}
//# sourceMappingURL=Reel.js.map