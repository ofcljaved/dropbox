import { useMotionTemplate } from "motion/react";
import { useGridScale } from "../../hooks/useGridScale";
import { Tile } from "./Tile";

export function LeftTile() {
  const scale = useGridScale();
  const transform = useMotionTemplate`translateY(-50%) scaleX(${scale})`;
  return (
    <Tile
      style={{
        transform: transform
      }}
      className="left-0  top-1/2 h-[300vh] w-[1px] origin-[0%]"
    />
  )
}
