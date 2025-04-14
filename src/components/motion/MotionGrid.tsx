import { RawMotionWrapper } from "./MotionWrapper";
import { BottomTile } from "../tile/Bottom";
import { LeftTile } from "../tile/Left";
import { RightTile } from "../tile/Right";
import { TopTile } from "../tile/Top";

export function MotionGrid({ index }: { index: number }) {
  return (
    <RawMotionWrapper index={index}>
      <div className="relative w-full h-full" >
        <LeftTile />
        <RightTile />
        <TopTile />
        <BottomTile />
      </div>
    </RawMotionWrapper>
  )
}
