import { BottomTile } from "../tile/Bottom";
import { LeftTile } from "../tile/Left";
import { RightTile } from "../tile/Right";
import { TopTile } from "../tile/Top";
import { RawStrategyWrapper } from "./StrategyWrapper";

export function StrategyGrid({ index }: { index: number }) {
  return (
    <RawStrategyWrapper index={index}>
      <div className="relative w-full h-full" >
        <LeftTile />
        <RightTile />
        <TopTile />
        <BottomTile />
      </div>
    </RawStrategyWrapper>
  )
}
