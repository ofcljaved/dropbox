import { Color } from "./Color";
import { Iconography } from "./Iconography";
import { Imagery } from "./Imagery";
import { Logo } from "./Logo";
import { Motion } from "./Motion";
import { Strategy } from "./Strategy";
import { Typography } from "./Typography";
import { VoiceTone } from "./VoiceTone";

export function NavContent() {
  return (
    <nav className="absolute inset-0 z-[2] *:absolute *:p-0 *:origin-[100%_100%] *:pointer-events-auto">
      <Strategy index={0} />
      <VoiceTone index={1} />
      <Logo index={2} />
      <Typography index={3} />
      <Iconography index={4} />
      <Color index={5} />
      <Imagery index={6} />
      <Motion index={7} />
    </nav>
  )
}
