import { RawVoiceToneWrapper } from "./VoiceToneWrapper";
import { BottomTile } from "../tile/Bottom";
import { LeftTile } from "../tile/Left";
import { RightTile } from "../tile/Right";
import { TopTile } from "../tile/Top";

export function VoiceToneGrid({ index }: { index: number }) {
  return (
    <RawVoiceToneWrapper index={index}>
      <div className="relative w-full h-full" >
        <LeftTile />
        <RightTile />
        <TopTile />
        <BottomTile />
      </div>
    </RawVoiceToneWrapper>
  )
}
