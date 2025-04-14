import { useState } from "react";
import { DropBoxWrapper } from "./DropBoxWrapper.tsx";
import { motion } from "motion/react";

export function DropBoxGrid() {
  const [scrollDirection, setScrollDirection] = useState<string>("up");

  return (
    <DropBoxWrapper
      scrollDirection={scrollDirection}
      setScrollDirection={setScrollDirection}
      className="bg-[#0000] overflow-visible *:bg-[#5f9dff]"
    >
      <motion.div
        initial={{
          transform: "translate(0, -50%) scaleY(0)",
        }}
        animate={{
          transform: "translate(0, -50%)",
        }}
        transition={{
          duration: 3,
          ease: [0.5, 0, 0, 1],
        }}
        className="absolute pointer-events-none left-0 top-1/2 w-[1px] h-screen origin-[center_top]"
      />
      <motion.div
        initial={{
          transform: "translate(0, -50%) sclaeY(0)",
        }}
        animate={{
          transform: "translate(0, -50%)",
        }}
        transition={{
          duration: 3,
          ease: [0.5, 0, 0, 1],
        }}
        className="absolute pointer-events-none right-0 top-1/2 w-[1px] h-screen origin-[center_bottom]"
      />
      <motion.div
        initial={{
          transform: "translate(50%, 0%) scaleX(0)",
        }}
        animate={{
          transform: "translate(50%, 0%)",
        }}
        transition={{
          duration: 3,
          ease: [0.5, 0, 0, 1],
        }}
        className="absolute pointer-events-none top-0 right-1/2 w-screen h-[1px] origin-[right_center]"
      />
      <motion.div
        initial={{
          transform: "translate(50%, 0%) scaleX(0)",
        }}
        animate={{
          transform: "translate(50%, 0%)",
        }}
        transition={{
          duration: 3,
          ease: [0.5, 0, 0, 1],
        }}
        className="absolute pointer-events-none bottom-0 right-1/2 h-[1px] w-screen origin-[center_top]"
      />
    </DropBoxWrapper>
  )
}
