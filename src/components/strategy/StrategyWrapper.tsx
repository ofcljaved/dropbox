import { Link } from "../LinkWrapper"
import { cn } from "../../lib/utils"
import { motion } from "motion/react"
import { usePosition } from "../../hooks/usePosition";

export function StrategyWrapper({ index, children }: { index: number, children: React.ReactNode }) {
  return (
    <RawStrategyWrapper index={index}>
      <Link
        className={cn(
          "gap-8 rounded-tl-lg bg-[#283750] text-[#b4c8e1] fill-[#b4c8e1]",
        )}
        title="Framework"
      >
        {children}
      </Link>
    </RawStrategyWrapper>
  )
}

export function RawStrategyWrapper({ index, children }: { index: number, children: React.ReactNode }) {
  const transform = usePosition(index);
  return (
    <motion.div
      style={{
        height: "calc(50% + var(--dropbox-btn-size) / 2 - var(--nav-tile-gap))",
        left: "var(--nav-tile-gap)",
        top: "var(--nav-tile-gap)",
        width: "calc(20% - var(--nav-tile-gap) * 2)",
        transform: transform,
      }}
    >
      {children}
    </motion.div>
  )
}

