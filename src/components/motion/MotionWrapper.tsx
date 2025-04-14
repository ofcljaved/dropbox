import { Link } from "../LinkWrapper"
import { cn } from "../../lib/utils"
import { motion } from "motion/react"
import { usePosition } from "../../hooks/usePosition";

export function MotionWrapper({ index, children }: { index: number, children: React.ReactNode }) {
  const { transform, animationEnd } = usePosition(index);
  return (
    <motion.div
      style={{
        height: "calc(50% + var(--dropbox-btn-size) / 2 - var(--nav-tile-gap))",
        right: "var(--nav-tile-gap)",
        bottom: "var(--nav-tile-gap)",
        width: "calc(20% - var(--nav-tile-gap) * 2)",
        transformOrigin: "0% 0%",
        transform: transform,
      }}
    >
      <Link
        className={cn(
          "gap-4 rounded-br-lg bg-[#c8aff0] text-[#682760] fill-[#682760]",
          animationEnd && "pointer-events-auto *:pointer-events-auto",
        )}
        title="Motion"
      >
        {children}
      </Link>
    </motion.div>
  )
}
