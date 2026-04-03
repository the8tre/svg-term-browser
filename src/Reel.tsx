import React from 'react';

const PERCEPTIBLE = 1 / 60;

export interface ReelProps {
  duration: number;
  width: number;
  frameWidth: number;
  stamps: number[];
}

export const Reel: React.FunctionComponent<ReelProps> = (props) => {
  if (props.duration === 0) {
    return (
      <svg x="0" y="0" width={props.width}>
        {props.children}
      </svg>
    );
  }

  const factor = Math.pow(10, magnitude(PERCEPTIBLE / (props.duration / 100)) + 1);
  const p = (s: number): number => Math.round((s / (props.duration / 100)) * factor) / factor;

  const animName = 'n';
  const keyframeBody = props.stamps
    .map((stamp, i) => `${p(stamp)}%{transform:translateX(-${props.frameWidth * i}px)}`)
    .join('');
  const css = `@keyframes ${animName}{${keyframeBody}}`;

  const animStyle: React.CSSProperties = {
    animationDuration: `${props.duration}s`,
    animationIterationCount: 'infinite',
    animationName: animName,
    animationTimingFunction: 'steps(1,end)',
  };

  return (
    <>
      <style>{css}</style>
      <g style={animStyle}>
        <svg x="0" y="0" width={props.width}>
          {props.children}
        </svg>
      </g>
    </>
  );
};

function magnitude(x: number): number {
  const y = Math.abs(x);
  if (y > 1) return 0;
  const result = Math.floor(Math.log(y) / Math.log(10) + 1);
  return result === 0 ? result : -1 * result;
}
