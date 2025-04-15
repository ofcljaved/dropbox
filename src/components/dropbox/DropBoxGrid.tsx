import { useScroll, motion, useMotionValueEvent, useMotionValue, useTransform } from "motion/react"
import { useState } from "react";
import { useLoading } from "../../context/loadingContext.tsx";

const initialWidth = "calc(min(800px, -64px + min(100vw, 100vh)))";
const middleWidth = "calc(-2px + min(502px, -64px + min(100vw, 100vh)))";
const endWidth = "calc(-2px + min(92px, -64px + min(100vw, 100vh)))";

export function DropBoxGrid() {
  const { scrollY, scrollYProgress } = useScroll();
  const [scrollDirection, setScrollDirection] = useState<string>("up");
  const [pastHalf, setPastHalf] = useState(false);
  const manualScroll = useMotionValue(0);
  const { loading } = useLoading();



  useMotionValueEvent(scrollY, "change", (curr) => {
    const diff = curr - scrollY.getPrevious()!;
    if (diff > 0) setScrollDirection("down");
    if (diff < 0 && curr <= 100) setScrollDirection("up");
  });


  useMotionValueEvent(scrollYProgress, "change", (curr) => {
    if (loading) return;
    manualScroll.set(curr);
    setPastHalf(curr >= 0.35);
  });

  const width = useTransform(manualScroll, [0.35, 1], [middleWidth, endWidth]);

  const variants = {
    initial: {
      width: initialWidth,
      height: initialWidth,
      '--dropbox-color': "#0061fe",
      '--dropbox-bg': "#ffffff",
    },
    middle: {
      width: middleWidth,
      height: middleWidth,
      '--dropbox-color': "#ffffff",
      '--dropbox-bg': "#0061fe",
    }
  };


  return (
    <div
      className="flex justify-center items-center pointer-events-none fixed z-[101] size-(--dropbox-btn-size) left-(--dropbox-left) bottom-(--dropbox-bottom) transform-(--dropbox-transform)"
    >
      <motion.div
        initial={variants.initial}
        variants={{
          up: variants.initial,
          down: variants.middle
        }}
        animate={pastHalf ? "down" : scrollDirection}
        style={{
          width: pastHalf ? width : undefined,
          height: pastHalf ? width : undefined,
        }}
        transition={{ duration: 0.6, ease: [0.5, 0, 0.2, 1] }}
        className="relative text-(--dropbox-color) flex-none bg-(--dropbox-bg) bg-[#0000] overflow-visible *:bg-[#5f9dff]"
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
      </motion.div>
    </div>
  )
}
