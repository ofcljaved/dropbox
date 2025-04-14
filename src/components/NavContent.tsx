import { Color } from "./color/Color";
import { Iconography } from "./iconography/Iconography";
import { Imagery } from "./imagery/Imagery";
import { Logo } from "./logo/Logo";
import { Motion } from "./motion/Motion";
import { Strategy } from "./strategy/Strategy";
import { Typography } from "./typography/Typography";
import { VoiceTone } from "./voicetone/VoiceTone";

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
