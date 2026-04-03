import * as React from 'react';
export const Frame = (props) => {
    return (React.createElement("svg", { x: props.offset * props.width },
        React.createElement("use", { xlinkHref: "#a" }),
        props.children));
};
//# sourceMappingURL=Frame.js.map