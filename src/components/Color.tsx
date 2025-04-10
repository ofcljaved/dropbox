import { Link } from "./LinkWrapper"
import { cn } from "../lib/utils"
import { SVGMotionProps } from "motion/react"

export function Color() {
  return (
    <div
      style={{
        height: "calc(50% + var(--dropbox-btn-size) / 2 - var(--nav-tile-gap))",
        left: "20%",
        bottom: "var(--nav-tile-gap)",
        width: "calc(30% - var(--dropbox-btn-size) / 2 - var(--nav-tile-gap))",
        transformOrigin: "100% 0%",
      }}
    >
      <Link
        className="gap-8 bg-[#ff8c19] text-[#6d2e09] fill-[#6d2e09]"
        title="Color"
      >
        {/*<div id="tileiconography" className="absolute inset-0 z-[9999] flex" />*/}
        <div className="flex flex-1 flex-col justify-end relative items-stretch" >
          <div className="absolute flex bottom-0 right-0 w-full max-w-full max-h-[min(100%,20vh)] justify-end items-stretch aspect-square">
            <div className="h-full aspect-square relative">
              <ColorSvg className={cn(
                "inset-[0%_auto_auto_0%] bg-[#be4b0a] fill-inherit",
                "group-hover:translate-x-[calc(100%_+_1px)] group-hover:translate-y-[1px]"
              )} />
              <ColorSvg className={cn(
                "inset-[auto_0%_0%_auto] bg-[#6d2e09] fill-(--second-fill)",
                "group-hover:translate-x-[calc(-100%_+_1px)] group-hover:translate-y-[-1px]"
              )} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

interface ColorSvgProps extends SVGMotionProps<SVGSVGElement> { }

function ColorSvg({ className }: ColorSvgProps) {
  return (
    <div
      style={{
        transition: "background-color 0.35s cubic-bezier(.4,0,.2,1), border 0.35s cubic-bezier(.4,0,.2,1), translate 0.35s cubic-bezier(.4,0,.2,1)"
      }}
      className={cn(
        "w-1/2 h-1/2 absolute border-2 border-transparent",
        "group-hover:bg-transparent group-hover:border-white",
        className
      )}>
      <svg
        style={{
          transition: "stroke 0.35s cubic-bezier(.4,0,.2,1)"
        }}
        className={cn(
          "stroke-3 stroke-transparent w-full h-full absolute",
          "group-hover:stroke-white"
        )}
        viewBox="0 0 150 150"
      >
        <path d="M75 25C42.7594 25 25 42.7563 25 75C25 107.244 42.7594 125 75 125C107.241 125 125 107.244 125 75C125 42.7563 107.241 25 75 25Z"></path>
      </svg>
    </div>
  )
}
