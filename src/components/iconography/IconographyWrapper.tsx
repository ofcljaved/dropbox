import { motion } from "motion/react"
import { usePosition } from "../../hooks/usePosition";
import { Link } from "../LinkWrapper";
import { cn } from "../../lib/utils";

export function IconographyWrapper({ index, children }: { index: number, children: React.ReactNode }) {
  return (
    <RawIconographyWrapper index={index}>
      <Link
        className={cn(
          "rounded-bl-lg gap-8 bg-[#b4dc19] text-[#175641] fill-[#175641]",
        )}
        title="Iconography"
      >
        {children}
      </Link>
    </RawIconographyWrapper>
  )
}

export function RawIconographyWrapper({ index, children }: { index: number, children: React.ReactNode }) {
  const transform = usePosition(index);
  return (
    <motion.div
      style={{
        height: "calc(50% - var(--dropbox-btn-size) / 2 - var(--nav-tile-gap) * 2)",
        left: "var(--nav-tile-gap)",
        bottom: "var(--nav-tile-gap)",
        width: "calc(20% - var(--nav-tile-gap) * 2)",
        transformOrigin: "100% 0%",
        transform: transform,
      }}
    >
      {children}
    </motion.div>
  )
}
