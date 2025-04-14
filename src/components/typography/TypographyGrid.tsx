import { RawTypographyWrapper } from "./TypographyWrapper";
import { BottomTile } from "../tile/Bottom";
import { LeftTile } from "../tile/Left";
import { RightTile } from "../tile/Right";
import { TopTile } from "../tile/Top";

export function TypographyGrid({ index }: { index: number }) {
  return (
    <RawTypographyWrapper index={index}>
      <div className="relative w-full h-full" >
        <LeftTile />
        <RightTile />
        <TopTile />
        <BottomTile />
      </div>
    </RawTypographyWrapper>
  )
}
