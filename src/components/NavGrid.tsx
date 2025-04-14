import { easeInOut } from "motion";
import { useLoading } from "../context/loadingContext";
import { cn } from "../lib/utils";
import { ColorGrid } from "./color/ColorGrid";
import { IconographyGrid } from "./iconography/IconographyGrid";
import { ImageryGrid } from "./imagery/ImageryGrid";
import { LogoGrid } from "./logo/LogoGrid";
import { MotionGrid } from "./motion/MotionGrid";
import { StrategyGrid } from "./strategy/StrategyGrid";
import { TypographyGrid } from "./typography/TypographyGrid";
import { VoiceToneGrid } from "./voicetone/VoiceToneGrid";
import { motion, useMotionValue, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { DropBoxGrid } from "./dropbox/DropBoxGrid";

export function NavGrid() {
  const { scrollYProgress } = useScroll();
  const manualScroll = useMotionValue(0);
  const { loading } = useLoading();

  useMotionValueEvent(scrollYProgress, "change", (curr) => {
    if (loading) return;
    manualScroll.set(curr);
  });

  const opacity = useTransform(manualScroll, [0.85, 1], [1, 0], { ease: easeInOut });

  return (
    <motion.div
      style={{
        opacity: opacity,
      }}
      className={cn(
        "absolute inset-0 z-1 items-stretch *:absolute *:p-0 *:origin-[100%_100%] *:pointer-events-auto",
      )}>
      <DropBoxGrid />
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
