import * as React from "react";
import { color, ColorInput } from "./color";

type RectProps = React.SVGProps<"rect">;

export interface BackgroundProps {
  height: RectProps["height"];
  width: RectProps["width"];
  fill: ColorInput<never>;
}

export const Background: React.FunctionComponent<BackgroundProps> = props => {
  return (
    <rect
      height={props.height}
      width={props.width}
      fill={color(props.fill)!}
    />
  );
};
