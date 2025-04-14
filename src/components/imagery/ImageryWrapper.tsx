import { motion, useMotionValue, useMotionValueEvent } from "motion/react"
import { usePosition } from "../../hooks/usePosition";
import { Link } from "../LinkWrapper";
import { cn } from "../../lib/utils";

export function ImageryWrapper({ index, children, onChange }: {
  index: number,
  children: React.ReactNode,
  onChange?: (value: number) => void
}) {
  const rotate = useMotionValue(-25);

  useMotionValueEvent(rotate, 'change', (curr) => {
    onChange && onChange(curr);
  })

  return (
    <RawImageryWrapper index={index}>
      <Link
        onHoverStart={() => {
          rotate.set(rotate.get() + 180);
        }}
        onHoverEnd={() => {
          rotate.set(rotate.get() + 180);
        }}
        className={cn(
          "gap-8 bg-[#892055] text-[#ffafa5] fill-[#ffafa5]",
        )}
        title="Imagery"
      >
        {children}
      </Link>
    </RawImageryWrapper>
  )
}

export function RawImageryWrapper({ index, children }: {
  index: number,
  children: React.ReactNode,
}) {
  const transform = usePosition(index);


  return (
    <motion.div
      style={{
        height: "calc(50% - var(--dropbox-btn-size) / 2 - var(--nav-tile-gap) * 2)",
        right: "20%",
        bottom: "var(--nav-tile-gap)",
        width: "calc(30% + var(--dropbox-btn-size) / 2)",
        transformOrigin: "0% 0%",
        transform: transform,
      }}
    >
      {children}
    </motion.div>
  )
}
