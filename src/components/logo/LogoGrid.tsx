import { RawLogoWrapper } from "./LogoWrapper";
import { BottomTile } from "../tile/Bottom";
import { LeftTile } from "../tile/Left";
import { RightTile } from "../tile/Right";
import { TopTile } from "../tile/Top";

export function LogoGrid({ index }: { index: number }) {

  return (
    <RawLogoWrapper index={index}>
      <div className="relative w-full h-full" >
        <LeftTile />
        <RightTile />
        <TopTile />
        <BottomTile />
      </div>
    </RawLogoWrapper>
  )
}
