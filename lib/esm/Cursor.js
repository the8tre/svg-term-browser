import React from "react";
import { color } from "./color";
export const Cursor = props => {
    return (React.createElement("rect", { height: props.height, width: props.width, x: props.x, y: props.y, fill: color(props.fill) }));
};
//# sourceMappingURL=Cursor.js.map