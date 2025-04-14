import { useMotionTemplate } from "motion/react";
import { useGridScale } from "../../hooks/useGridScale";
import { Tile } from "./Tile";

export function BottomTile() {
  const scale = useGridScale();
  const transform = useMotionTemplate`translateX(50%) scaleY(${scale})`;
  return (
    <Tile
      style={{
        transform: transform
      }}
      className="right-1/2  bottom-0 h-[1px] w-[300vw] origin-[50%_100%]"
    />
  )
}
