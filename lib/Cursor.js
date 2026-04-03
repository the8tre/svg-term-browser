"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cursor = void 0;
const react_1 = __importDefault(require("react"));
const color_1 = require("./color");
const Cursor = props => {
    return (react_1.default.createElement("rect", { height: props.height, width: props.width, x: props.x, y: props.y, fill: (0, color_1.color)(props.fill) }));
};
exports.Cursor = Cursor;
//# sourceMappingURL=Cursor.js.map