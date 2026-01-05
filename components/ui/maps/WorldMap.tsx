import React from "react";
import { worldMapPath, worldMapViewBox } from "./WorldMapPath";

interface WorldMapProps extends React.SVGProps<SVGSVGElement> {
  fill?: string;
  stroke?: string;
}

export function WorldMap({ fill = "currentColor", stroke = "none", className, ...props }: WorldMapProps) {
  return (
    <svg
      viewBox={worldMapViewBox}
      fill={fill}
      stroke={stroke}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d={worldMapPath} />
    </svg>
  );
}
