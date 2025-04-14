import { cn } from "../../lib/utils"
import { SVGMotionProps, motion, HTMLMotionProps } from "motion/react"
import { MotionWrapper } from "./MotionWrapper";

export function Motion({ index }: { index: number }) {
  return (
    <MotionWrapper index={index}>
      <div id="tilemotion" className="absolute inset-0 z-[9999] flex" />
      <div className="flex-1 flex-col relative px-3.5 py-2">
        <div>
          <Tangent
            className={cn(
              "bottom-[9px] left-[10px] w-[25%]",
              "group-hover:w-[50%]"
            )}
          />
          <Tangent
            className={cn(
              "top-[9px] right-[10px] w-[30%]",
              "group-hover:w-[50%]"
            )}
          />
          <NodeSvg className="left-0 bottom-0" />
          <NodeSvg className="left-[25%] bottom-0 group-hover:left-[50%]" />
          <NodeSvg className="top-0 right-[30%] group-hover:right-[50%]" />
          <NodeSvg className="top-0 right-0" />
        </div>
        <MotionSvg />
      </div>
    </MotionWrapper>
  )
}

function MotionSvg() {
  return (
    <div className="absolute w-[calc(100%_-_28px)] h-[calc(100%_-_16px)]" >
      <div className="w-full h-[calc(200%_-_7.5px)] absolute top-[calc(4px_-_50%)]" >
        <motion.svg className="w-full h-full fill-none stroke-2 stroke-current" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M 0,75 C 30,75 60,25 100,25" style={{ vectorEffect: "non-scaling-stroke" }}>
            <animate attributeName="d" dur="0.35s" fill="freeze" keyTimes="0; 1" keySplines=".4 0 .2 1" calcMode="spline" to="M 0,75 C 65,75 35,25 100,25" begin="tilemotion.mouseover"></animate>
            <animate attributeName="d" dur="0.35s" fill="freeze" keyTimes="0; 1" keySplines=".4 0 .2 1" calcMode="spline" to="M 0,75 C 30,75 60,25 100,25" begin="tilemotion.mouseout"></animate>
          </path>
        </motion.svg>
      </div>
    </div>
  )
}

interface TangentProps extends HTMLMotionProps<"div"> { }
function Tangent({ className }: TangentProps) {
  return (
    <div
      style={{
        transition: "background-color 0.35s cubic-bezier(.4,0,.2,1), width 0.35s cubic-bezier(.4,0,.2,1)"
      }}
      className={cn(
        "absolute h-[2px] bg-current z-[2]",
        className
      )} />
  )
}
interface NodeProps extends SVGMotionProps<SVGSVGElement> { }

function NodeSvg({ className }: NodeProps) {
  return (
    <motion.svg
      style={{
        transition: "left 0.35s cubic-bezier(.4,0,.2,1), right 0.35s cubic-bezier(.4,0,.2,1)"
      }}
      className={cn("absolute stroke-2 z-[2] fill-inherit stroke-current", className)} width="20" height="20" viewBox="-2 -2 20 20"
    >
      <path d="M0 8C0 5.19974 0 3.79961 0.544967 2.73005C1.02433 1.78924 1.78924 1.02433 2.73005 0.544967C3.79961 0 5.19974 0 8 0C10.8003 0 12.2004 0 13.27 0.544967C14.2108 1.02433 14.9757 1.78924 15.455 2.73005C16 3.79961 16 5.19974 16 8C16 10.8003 16 12.2004 15.455 13.27C14.9757 14.2108 14.2108 14.9757 13.27 15.455C12.2004 16 10.8003 16 8 16C5.19974 16 3.79961 16 2.73005 15.455C1.78924 14.9757 1.02433 14.2108 0.544967 13.27C0 12.2004 0 10.8003 0 8Z"></path>
    </motion.svg>
  )
}
