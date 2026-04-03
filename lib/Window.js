"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Window = void 0;
const react_1 = __importDefault(require("react"));
const color_1 = require("./color");
const Window = props => {
    const paddingTop = props.decorations ? props.paddingY + 40 : props.paddingY;
    const paddingBottom = props.decorations
        ? props.paddingY + 20
        : props.paddingY;
    const paddingX = props.decorations ? props.paddingX + 20 : props.paddingX;
    const width = props.width * 10 + paddingX * 2;
    const height = props.height * 10 + paddingTop + paddingBottom;
    return (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", width: width, height: height },
        react_1.default.createElement("rect", { key: "bg", width: width, height: height, rx: props.decorations ? 5 : 0, ry: props.decorations ? 5 : 0, fill: (0, color_1.color)(props.background) }),
        props.decorations && (react_1.default.createElement("svg", { y: "0%", x: "0%" },
            react_1.default.createElement("circle", { key: "red", cx: 20, cy: 20, r: 6, fill: "#ff5f58" }),
            react_1.default.createElement("circle", { key: "yellow", cx: 40, cy: 20, r: 6, fill: "#ffbd2e" }),
            react_1.default.createElement("circle", { key: "green", cx: 60, cy: 20, r: 6, fill: "#18c132" }))),
        props.children));
};
exports.Window = Window;
//# sourceMappingURL=Window.js.map