import { SVGMotionProps } from "motion/react"
import { cn } from "../../lib/utils";
import { ColorWrapper } from "./ColorWrapper";

export function Color({ index }: { index: number }) {
  return (
    <ColorWrapper index={index}>
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
    </ColorWrapper>
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
