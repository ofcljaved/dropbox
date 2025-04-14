import { useAnimationEnd } from "../hooks/useAnimationEnd";
import { cn } from "../lib/utils";
import { ColorGrid } from "./color/ColorGrid";
import { IconographyGrid } from "./iconography/IconographyGrid";
import { ImageryGrid } from "./imagery/ImageryGrid";
import { LogoGrid } from "./logo/LogoGrid";
import { MotionGrid } from "./motion/MotionGrid";
import { StrategyGrid } from "./strategy/StrategyGrid";
import { TypographyGrid } from "./typography/TypographyGrid";
import { VoiceToneGrid } from "./voicetone/VoiceToneGrid";
import { motion } from "motion/react";

export function NavGrid() {
  const animationEnd = useAnimationEnd();
  console.log(animationEnd);
  return (
    <motion.div
      className={cn(
        "absolute inset-0 z-1 items-stretch *:absolute *:p-0 *:origin-[100%_100%] *:pointer-events-auto",
        animationEnd ? "opacity-0" : "opacity-100"
      )}>
      <StrategyGrid index={0} />
      <VoiceToneGrid index={1} />
      <LogoGrid index={2} />
      <TypographyGrid index={3} />
      <IconographyGrid index={4} />
      <ColorGrid index={5} />
      <ImageryGrid index={6} />
      <MotionGrid index={7} />
    </motion.div>
  )
}
