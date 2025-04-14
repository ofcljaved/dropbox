import { useMotionTemplate } from "motion/react";
import { useGridScale } from "../../hooks/useGridScale";
import { Tile } from "./Tile";

export function RightTile() {
  const scale = useGridScale();
  const transform = useMotionTemplate`translateY(-50%) scaleX(${scale})`;
  return (
    <Tile
      style={{
        transform: transform
      }}
      className="right-0  top-1/2 h-[300vh] w-[1px] origin-[100%]"
    />
  )
}
