import { Logo } from "./Logo";
import { Strategy } from "./Strategy";
import { Typography } from "./Typography";
import { VoiceTone } from "./VoiceTone";

export function NavContent() {
  return (
    <nav className="absolute inset-0 z-[2] *:absolute *:p-0 *:origin-[100%_100%] *:pointer-events-auto">
      <Strategy />
      <VoiceTone />
      <Logo />
      <Typography />
    </nav>
  )
}
