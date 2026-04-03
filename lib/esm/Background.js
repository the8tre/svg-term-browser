import * as React from "react";
import { color } from "./color";
export const Background = props => {
    return (React.createElement("rect", { height: props.height, width: props.width, fill: color(props.fill) }));
};
//# sourceMappingURL=Background.js.map