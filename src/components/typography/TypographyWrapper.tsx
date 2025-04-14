import { Link } from "../LinkWrapper"
import { cn } from "../../lib/utils"
import { motion } from "motion/react"
import { usePosition } from "../../hooks/usePosition";

export function TypographyWrapper({ index, children }: { index: number, children: React.ReactNode }) {
  return (
    <RawTypographyWrapper index={index}>
      <Link
        className={cn(
          "rounded-tr-lg gap-8 bg-[#fa551e] text-[#4e0119] fill-[#4e0119]",
        )}
        title="Typography"
      >
        {children}
      </Link>
    </RawTypographyWrapper>
  )
}

export function RawTypographyWrapper({ index, children }: { index: number, children: React.ReactNode }) {
  const transform = usePosition(index);
  return (
    <motion.div
      style={{
        height: "calc(50% - var(--dropbox-btn-size) / 2 - var(--nav-tile-gap) * 2)",
        right: "var(--nav-tile-gap)",
        top: "var(--nav-tile-gap)",
        width: "calc(20% - var(--nav-tile-gap) * 2)",
        transformOrigin: "0 100%",
        transform: transform,
      }}
    >
      {children}
    </motion.div>
  )
}

