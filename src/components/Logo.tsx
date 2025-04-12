import { useMotionValue, useMotionValueEvent } from "motion/react";
import { Link } from "./LinkWrapper"
import { LottieSvg } from "./LottieSvg"
import { useState } from "react";

export function Logo() {
  const hover = useMotionValue(0);
  const [value, setValue] = useState(!!hover.get());

  useMotionValueEvent(hover, 'change', (curr) => {
    setValue(!!curr);
  })
  return (
    <div
      style={{
        height: "calc(50% + var(--dropbox-btn-size) / 2 - var(--nav-tile-gap))",
        right: "20%",
        top: "var(--nav-tile-gap)",
        width: "calc(30% - var(--dropbox-btn-size) / 2 - var(--nav-tile-gap))"
      }}
    >
      <Link
        onHoverStart={() => {
          hover.set(1);
        }}
        onHoverEnd={() => {
          hover.set(0);
        }}
        className="gap-8 bg-[#3dd3ee] text-[#055463] fill-[#055463]"
        title="Logo"
      >
        <div className="flex flex-1 flex-col justify-end relative items-stretch" >
          <div className="w-full max-w-full h-[min(100%,35vh)] absolute bottom-0 right-0]">
            {!value && <LottieSvg />}
            {value && <LottieSvg animate={true} fill="transparent" className="stroke-white steoke-[5px]" />}
          </div>
        </div>
      </Link>
    </div>
  )
}
