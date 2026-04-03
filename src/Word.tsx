import * as React from "react";
import { color, ColorInput } from "./color";
import { Theme } from "./default-theme";

export interface WordProps {
  inverse?: boolean;
  bg?: boolean;
  bold?: boolean;
  underline?: boolean;
  fg?: string | number;
  children: string;
  x: number;
  y: number;
  theme: {
    fontSize: number;
    lineHeight: number;
  };
}

export const Word: React.FunctionComponent<WordProps> = props => {
  const bgFill = props.inverse ? fg(props) : bg(props);
  const textFill = props.inverse ? bg(props) : fg(props);

  return (
    <>
      {(props.inverse || props.bg) && (
        <rect
          fill={bgFill}
          height={props.theme.fontSize * props.theme.lineHeight}
          width={props.children.length > 0 ? props.children.length : 0}
          x={props.x * props.theme.fontSize * 0.6}
          y={props.y - props.theme.fontSize}
        />
      )}
      <text
        style={{
          fill: textFill,
          textDecoration: props.underline ? "underline" : undefined,
          fontWeight: props.bold ? "bold" : undefined,
          whiteSpace: "pre",
        }}
        x={props.x * props.theme.fontSize * 0.6}
        y={props.y}
      >
        {props.children}
      </text>
    </>
  );
};

function bg(props: WordProps): string | undefined {
  const b = typeof props.bg === "undefined" ? undefined : props.bg;
  return color(b as any, props.theme as any, (props.theme as any).background) ?? undefined;
}

function fg(props: WordProps): string | undefined {
  if (props.bold && !props.fg) {
    return color((props.theme as any).bold, props.theme as any) ?? undefined;
  }
  const d = props.bold ? (props.theme as any).bold : (props.theme as any).text;
  const f = typeof props.fg === "undefined" ? d : props.fg;
  return color(f, props.theme as any, d) ?? undefined;
}
