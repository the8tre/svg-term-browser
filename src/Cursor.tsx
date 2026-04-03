import React from "react";
import { color, ColorInput } from "./color";

type RectProps = React.SVGProps<"rect">;

export interface CursorProps {
  height: RectProps["height"];
  width: RectProps["height"];
  x?: RectProps["x"];
  y?: RectProps["y"];
  fill: ColorInput<never>;
}

export const Cursor: React.FunctionComponent<CursorProps> = props => {
  return (
    <rect
      height={props.height}
      width={props.width}
      x={props.x}
      y={props.y}
      fill={color(props.fill)!}
    />
  );
};
