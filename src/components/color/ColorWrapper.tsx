import { motion } from "motion/react"
import { usePosition } from "../../hooks/usePosition";
import { Link } from "../LinkWrapper";
import { cn } from "../../lib/utils";

export function ColorWrapper({ index, children }: { index: number, children: React.ReactNode }) {
  const { transform, animationEnd } = usePosition(index);
  return (
    <motion.div
      style={{
        height: "calc(50% + var(--dropbox-btn-size) / 2 - var(--nav-tile-gap))",
        left: "20%",
        bottom: "var(--nav-tile-gap)",
        width: "calc(30% - var(--dropbox-btn-size) / 2 - var(--nav-tile-gap))",
        transformOrigin: "100% 0%",
        transform: transform,
      }}
    >
      <Link
        className={cn(
          "gap-8 bg-[#ff8c19] text-[#6d2e09] fill-[#6d2e09]",
          animationEnd && "pointer-events-auto",
        )}
        title="Color"
      >
        {children}
      </Link>
    </motion.div>
  )
}
