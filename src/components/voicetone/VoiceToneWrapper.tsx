import { Link } from "../LinkWrapper"
import { cn } from "../../lib/utils"
import { motion } from "motion/react"
import { usePosition } from "../../hooks/usePosition";

export function VoiceToneWrapper({ index, children }: { index: number, children: React.ReactNode }) {
  const { transform, animationEnd } = usePosition(index);
  return (
    <motion.div
      style={{
        height: "calc(50% - var(--dropbox-btn-size) / 2 - var(--nav-tile-gap) * 2)",
        left: "20%",
        top: "var(--nav-tile-gap)",
        width: "calc(30% + var(--dropbox-btn-size) / 2)",
        transform: transform,
      }}
    >
      <Link
        className={cn(
          "gap-8 bg-[#fad24b] text-[#684505] fill-[#684505]",
          animationEnd && "pointer-events-auto",
        )}
        title="Voice & Tone"
      >
        {children}
      </Link>
    </motion.div>
  )
}
