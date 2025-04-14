import { cn } from "../../lib/utils"
import { SVGMotionProps, motion } from "motion/react"
import { StrategyWrapper } from "./StrategyWrapper";

export function Strategy({ index }: { index: number }) {
  return (
    <StrategyWrapper index={index}>
      <div className="flex flex-1 flex-col justify-end relative" >
        <div className="aspect-square max-w-full max-h-full px-2 py-2.5 absolute left-0 right-0" >
          <div>
            <NodeSvg className="left-0 top-0" />
            <NodeSvg className="right-0 top-[calc(50%_-_10px)]" />
            <NodeSvg className="left-0 bottom-0" />
          </div>
          <StraightSvg />
          <Sketch1 />
          <Sketch2 />
        </div>
      </div>
    </StrategyWrapper>
  )
}

function StraightSvg() {
  return (
    <div className="absolute w-[calc(100%_-_20px)] h-[calc(100%_-_16px)]" >
      <div className="w-full h-[calc(200%_-_8px)] absolute top-[calc(4px_-_50%)]" >
        <motion.svg className="w-full h-full fill-none stroke-2 stroke-current" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path style={{ vectorEffect: "non-scaling-stroke" }} className="opacity-(--opacity)" d="M 0 25 Q 31.25 32.8125, 62.5 40.625 Q 93.75 48.4375, 100 50 C 70 57.5, 80 55, 50 62.5 C 20 70, 30 67.5, 0 75" />
        </motion.svg>
      </div>
    </div>
  )
}

interface NodeProps extends SVGMotionProps<SVGSVGElement> { }

function NodeSvg({ className }: NodeProps) {
  return (
    <motion.svg
      className={cn("absolute stroke-2 z-[2] fill-inherit stroke-current", className)} width="20" height="20" viewBox="-2 -2 20 20"
    >
      <path d="M0 8C0 5.19974 0 3.79961 0.544967 2.73005C1.02433 1.78924 1.78924 1.02433 2.73005 0.544967C3.79961 0 5.19974 0 8 0C10.8003 0 12.2004 0 13.27 0.544967C14.2108 1.02433 14.9757 1.78924 15.455 2.73005C16 3.79961 16 5.19974 16 8C16 10.8003 16 12.2004 15.455 13.27C14.9757 14.2108 14.2108 14.9757 13.27 15.455C12.2004 16 10.8003 16 8 16C5.19974 16 3.79961 16 2.73005 15.455C1.78924 14.9757 1.02433 14.2108 0.544967 13.27C0 12.2004 0 10.8003 0 8Z"></path>
    </motion.svg>
  )
}

function Sketch1() {
  return (
    <div className="absolute -top-[10%] left-[calc(27px_-_3%)] w-[calc(112%_-_50px)] h-[calc(62%_-_12px)]" >
      <svg
        style={{ strokeWidth: "clamp(1.5px, calc(4.5px - min(0.2vw, 0.2vh)), 5px)" }}
        className="fill-none w-full h-full stroke-white" width="230" height="134" fill="none" viewBox="0 0 230 134" preserveAspectRatio="none"
      >
        <path
          className={cn(
            "[stroke-dasharray:433] [stroke-dashoffset:433] group-hover:[stroke-dashoffset:0] opacity-0",
            "group-hover:transition-[stroke-dashoffset,opacity] group-hover:duration-[0.75s,0.4s] groud-hover:ease-[cubic-bezier(0.5,0,0.3,1)] group-hover:opacity-100",
            "transition-[stroke-dashoffset,opacity] duration-[0.2s,0.4s] ease-[cubic-bezier(0.2,0.1,0,1)]",
          )}
          d="M10 25.9355C18.5 21.266 20.8707 19.9053 29.968 16.173C42.5012 11.0312 56.0106 11.8857 69.3085 11.8857C86.1833 11.8857 104.199 14.8053 117.944 25.6051C126.871 32.619 132.508 39.5429 134.476 51.0204C136.056 60.2398 138.357 71.0643 134.819 80.1056C132.69 85.546 126.533 90.478 121.5 90.9355C115.296 91.4995 108.734 92.337 105 85.9355C100.933 78.9636 106.721 68.6751 112.5 64.9355C120.248 59.9219 128.67 55.4355 137.5 55.4355C152.272 55.4355 167.625 66.3328 179.5 75.8325C189.5 83.8325 194.985 91.3048 197.5 95.8325C200 100.333 201.66 101.419 204.5 111.833C205.182 114.333 207.5 122.833 207.712 124.248C207.712 124.408 203.344 121.813 201.66 120.425C199.399 118.562 197.5 117.826 195.5 116.833C193.472 115.826 190 112.833 188 112.333C187.156 112.122 202 120.833 208 123.833C209.5 121.833 210.5 119.833 212.5 116.833C213.677 115.067 217 110.833 220 107.833" strokeLinecap="round" strokeLinejoin="round"
        ></path>
      </svg>
    </div >
  )
}

function Sketch2() {
  return (
    <div className="absolute top-[43%] left-[calc(18px_-_9%)] w-[calc(111%_-_40px)] h-[calc(62%_-_30px)]" >
      <svg style={{ strokeWidth: "clamp(1.5px, calc(4.5px - min(0.2vw, 0.2vh)), 5px)" }} className="fill-none w-full h-full stroke-white" width="230" height="134" fill="none" viewBox="0 0 230 134" preserveAspectRatio="none">
        <path
          className={cn(
            "[stroke-dasharray:321] [stroke-dashoffset:321] group-hover:[stroke-dashoffset:0] opacity-0",
            "group-hover:transition-[stroke-dashoffset,opacity] group-hover:duration-[0.7s,0.4s] groud-hover:ease-[cubic-bezier(0.5,0,0.3,1)] group-hover:opacity-100 group-hover:delay-[0.3s]",
            "transition-[stroke-dashoffset,opacity] duration-[0.3s,0.4s] ease-[cubic-bezier(0.2,0.1,0,1)]",
          )}
          d="M219.36 17.1993C219.006 16.4914 214.909 15.59 213.801 15.5317C209.624 15.3118 205.295 14.1842 201.108 13.5861C189.734 11.9612 177.606 12.3757 166.18 13.1846C155.481 13.9421 144.868 14.4116 134.309 16.6743C121.742 19.3673 109.21 24.1555 97.3736 29.1818C90.7444 31.9969 83.7225 34.8108 77.6088 38.6318C73.0482 41.4822 69.1444 45.2812 65.0087 48.6995C43.6854 66.3239 27.3717 93.2898 25.3555 121.15C24.2391 118.308 21.4909 116.548 19.8259 114.033C18.5433 112.095 16.993 110.261 15.4726 108.507C14.57 107.465 13.9753 106.314 12.9878 105.326C12.2757 104.614 11.3185 103.936 11 102.98L25.6881 121.15C32 114.5 35 113 38.5 111C42 109 44.5 105.5 46 105" strokeLinecap="round" strokeLinejoin="round"
        ></path>
      </svg>
    </div>
  )
}
