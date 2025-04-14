import { useMotionValue, useMotionValueEvent, motion } from "motion/react";
import { usePosition } from "../../hooks/usePosition";
import { Link } from "../LinkWrapper";
import { cn } from "../../lib/utils";

export function LogoWrapper({ index, children, onChange }: {
  index: number
  children: React.ReactNode
  onChange?: (value: boolean) => void
}) {
  const hover = useMotionValue(0);

  useMotionValueEvent(hover, 'change', (curr) => {
    onChange && onChange(!!curr);
  })
  return (
    <RawLogoWrapper index={index}>
      <Link
        onHoverStart={() => {
          hover.set(1);
        }}
        onHoverEnd={() => {
          hover.set(0);
        }}
        className={cn(
          "gap-8 bg-[#3dd3ee] text-[#055463] fill-[#055463]",
        )}
        title="Logo"
      >
        {children}
      </Link>
    </RawLogoWrapper>
  )
}

export function RawLogoWrapper({ index, children }: {
  index: number
  children: React.ReactNode
}) {
  const transform = usePosition(index);

  return (
    <motion.div
      style={{
        height: "calc(50% + var(--dropbox-btn-size) / 2 - var(--nav-tile-gap))",
        right: "20%",
        top: "var(--nav-tile-gap)",
        width: "calc(30% - var(--dropbox-btn-size) / 2 - var(--nav-tile-gap))",
        transformOrigin: "0% 100%",
        transform: transform,
      }}
    >
      {children}
    </motion.div>
  )
}
