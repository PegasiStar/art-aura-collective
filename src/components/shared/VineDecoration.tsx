import { CSSProperties } from "react";
import vinesLeft from "@/assets/vines-left.png";
import vinesRight from "@/assets/vines-right.png";
import cattailsLeft from "@/assets/cattails-left.png";
import cattailsRight from "@/assets/cattails-right.png";
import grassLeft from "@/assets/grass-left.png";

interface VineDecorationProps {
  variant: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "cattails-left" | "cattails-right" | "grass-left";
  className?: string;
  style?: CSSProperties;
}

const VineDecoration = ({ variant, className = "", style }: VineDecorationProps) => {
  const decorations = {
    "top-left": {
      src: vinesLeft,
      position: "top-0 left-0",
      size: "w-48 md:w-64 lg:w-80",
    },
    "top-right": {
      src: vinesRight,
      position: "top-0 right-0",
      size: "w-48 md:w-64 lg:w-80",
    },
    "bottom-left": {
      src: cattailsLeft,
      position: "bottom-0 left-0",
      size: "w-32 md:w-40 lg:w-52",
    },
    "bottom-right": {
      src: cattailsRight,
      position: "bottom-0 right-0",
      size: "w-32 md:w-48 lg:w-64",
    },
    "cattails-left": {
      src: cattailsLeft,
      position: "bottom-0 left-0",
      size: "w-24 md:w-32 lg:w-40",
    },
    "cattails-right": {
      src: cattailsRight,
      position: "bottom-0 right-0",
      size: "w-28 md:w-36 lg:w-48",
    },
    "grass-left": {
      src: grassLeft,
      position: "bottom-0 left-0",
      size: "w-16 md:w-20 lg:w-24",
    },
  };

  const deco = decorations[variant];

  return (
    <img
      src={deco.src}
      alt=""
      aria-hidden="true"
      style={style}
      className={`absolute ${deco.position} ${deco.size} pointer-events-none select-none ${className}`}
    />
  );
};

export default VineDecoration;
