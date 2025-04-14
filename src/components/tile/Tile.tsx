import { HTMLMotionProps, motion } from "motion/react"
import { cn } from "../../lib/utils"

interface TileProps extends HTMLMotionProps<"div"> { }
export function Tile({ className, ...props }: TileProps) {
  return (
    <motion.div
      className={cn(
        "absolute pointer-events-none bg-(--dropbox-color)",
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.4 }}
      transition={{ duration: 1.5, ease: "easeInOut", delay: 1.25 }}
      {...props}
    />
  )
}
