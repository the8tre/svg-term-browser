import * as React from 'react';
export const Document = (props) => {
    return (React.createElement("svg", { height: props.height * 10, viewBox: [0, 0, props.width, props.height].join(' '), width: props.width * 10, x: props.x, xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", y: props.y }, props.children));
};
//# sourceMappingURL=Document.js.map