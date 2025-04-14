import { HTMLMotionProps, SVGMotionProps, motion, } from "motion/react"
import { useState } from "react";
import { cn } from "../../lib/utils";
import { ImageryWrapper } from "./ImageryWrapper";

export function Imagery({ index }: { index: number }) {
  const [value, setValue] = useState(-25);

  return (
    <ImageryWrapper index={index} onChange={setValue}>
      <div className="flex flex-1 flex-col justify-end relative items-stretch" >
        <div className="aspect-[5/4] w-full h-full max-w-full max-h-[min(100%,20vh)] absolute bottom-0 right-0">
          <div className="aspect-[5/4] max-h-full relative mt-auto ml-auto">
            <ImagerySvg
              className=""
              value={value}
            />
            <div className="z-[2] absolute inset-0 border-2 border-white opacity-0 group-hover:opacity-100" />
          </div>
        </div>
      </div>
    </ImageryWrapper>
  )
}

interface ImagerySvgrops extends SVGMotionProps<SVGSVGElement> {
  value: number;
}

function ImagerySvg({ className, value }: ImagerySvgrops) {
  return (
    <div
      style={{ transition: "background-color 0.35s cubic-bezier(.4,0,.2,1)" }}
      className="w-full h-full relative overflow-hidden bg-current group-hover:bg-transparent"
    >
      <svg
        className={cn(
          "overflow-hidden absolute w-[calc(100%_+_8px)] h-[calc(75%_+_4px)] left-[-4px] bottom-[-4px] z-[2] stroke-transparent stroke-3 fill-(--accent-pink)",
          "group-hover:stroke-white",
          className
        )}
        viewBox="0 0 250 150" fill="none"
      >
        <defs>
          <path id="imagery-hills-path" d="M39 64.6059C16.4306 64.6059 0 83.8921 0 83.8921V150H250V34.2917C250 34.2917 229 0 202.602 0C155 0 136.444 87.8921 100 87.8921C77 87.8921 64 64.6059 39 64.6059Z"></path>
          <clipPath id="imagery-hills-clip">
            <use xlinkHref="#imagery-hills-path"></use>
          </clipPath>
        </defs>
        <g>
          <use xlinkHref="#imagery-hills-path" strokeWidth="4px" clipPath="url(#imagery-hills-clip)"></use>
        </g>
      </svg>
      <SunMoon value={value} />
    </div >
  )
}

interface SunMoonProps extends HTMLMotionProps<"div"> {
  value: number;
}
function SunMoon({ value }: SunMoonProps) {
  return (
    <motion.div
      animate={{
        rotateZ: value + "deg",
      }}
      transition={{
        duration: 0.7,
        ease: [0.4, 0.2, 0.2, 1],
      }}
      className={cn(
        "absolute top-1/4 left-[17%] h-[70%] aspect-square",
        "*:absolute *:aspect-square *:h-[30%] *:stroke-transparent *:fill-(--accent-pink) *:stroke-3 *:group-hover:stroke-white"
      )}
    >
      <svg
        className="top-0 left-[35%]"
        viewBox="-2 -2 44 44"
      >
        <defs>
          <circle id="imagery-sun-path" cx="20" cy="20" r="20"></circle>
          <clipPath id="imagery-sun-clip">
            <use xlinkHref="#imagery-sun-path"></use>
          </clipPath>
        </defs>
        <g>
          <use xlinkHref="#imagery-sun-path" strokeWidth="4px" clipPath="url(#imagery-sun-clip)"></use>
        </g>
      </svg>
      <motion.svg
        animate={{
          rotateZ: -value + "deg",
        }}
        transition={{
          duration: 0.7,
          ease: [0.4, 0.2, 0.2, 1],
        }}
        className="bottom-0 left-[35%]" viewBox="-2 -2 44 44"
      >
        <defs>
          <path id="imagery-moon-path" d="M37.789 27.8581C37.789 27.8581 25.4475 32.7572 15.6202 22.5197C5.79294 12.2821 11.3735 0.765137 11.3735 0.765137C9.44381 1.70298 7.6356 2.97261 6.03402 4.57419C-1.71664 12.3248 -1.69319 24.9146 6.08638 32.6942C13.866 40.4737 26.4557 40.4972 34.2064 32.7465C35.6825 31.2704 36.8767 29.6187 37.789 27.8581Z"></path>
          <clipPath id="imagery-moon-clip">
            <use xlinkHref="#imagery-moon-path"></use>
          </clipPath>
        </defs>
        <g>
          <use xlinkHref="#imagery-moon-path" strokeWidth="4px" clipPath="url(#imagery-moon-clip)"></use>
        </g>
      </motion.svg>
    </motion.div>
  )
}
