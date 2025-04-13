import { useMotionValue, useMotionValueEvent, motion } from "motion/react";
import { Link } from "./LinkWrapper"
import { LottieSvg } from "./LottieSvg"
import { useState } from "react";
import { usePosition } from "../hooks/usePosition";
import { cn } from "../lib/utils";

export function Logo({ index }: { index: number }) {
  const { transform, animationEnd } = usePosition(index);
  const hover = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  useMotionValueEvent(hover, 'change', (curr) => {
    setIsHovered(!!curr);
  })
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
      <Link
        onHoverStart={() => {
          hover.set(1);
        }}
        onHoverEnd={() => {
          hover.set(0);
        }}
        className={cn(
          "gap-8 bg-[#3dd3ee] text-[#055463] fill-[#055463]",
          animationEnd && "pointer-events-auto",
        )}
        title="Logo"
      >
        <div className="flex flex-1 flex-col justify-end relative items-stretch" >
          <div className="w-full max-w-full h-[min(100%,35vh)] absolute bottom-0 right-0]">
            <LottieSvg
              type="initial"
              key={1}
              isHovered={isHovered}
              fill="#055463"
            />
            <LottieSvg
              type="hover"
              key={2}
              isHovered={isHovered}
              className="stroke-white stroke-[5px] group-hover:opacity-100"
              style={{ transition: "opacity 0.35s ease" }}
            />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
