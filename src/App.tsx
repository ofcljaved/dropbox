import { useScroll, motion, useMotionValueEvent, useMotionValue, animate, useTransform, cubicBezier } from "motion/react"
import { useEffect, useState } from "react";
import { useLoading } from "./context/loadingContext";
import DropBoxSvg from "./components/DropBoxSvg";
import ScrollChevron from "./components/ScrollChevron";
import { DropBoxText } from "./components/DropBoxText";

const initialWidth = "calc(-2px + min(800px, -64px + min(100vw, 100vh)))";
const middleWidth = "calc(-2px + min(502px, -64px + min(100vw, 100vh)))";
const endWidth = "calc(-2px + min(92px, -64px + min(100vw, 100vh)))";

function App() {
  const { scrollY, scrollYProgress } = useScroll();
  const [scrollDirection, setScrollDirection] = useState<string>("up");
  const [pastHalf, setPastHalf] = useState(false);
  const loadValue = useMotionValue(0);
  const manualScroll = useMotionValue(0);
  const { loading, setLoading } = useLoading();

  useEffect(() => {
    const controls = animate(loadValue, 1, { duration: 1.5, ease: [0.5, 0, 0.05, 1] });
    return () => controls.stop();
  }, []);

  useMotionValueEvent(loadValue, "animationComplete", () => {
    setLoading(false);
  });


  useMotionValueEvent(scrollY, "change", (curr) => {
    const diff = curr - scrollY.getPrevious()!;
    if (diff > 0) setScrollDirection("down");
    if (diff < 0 && curr <= 100) setScrollDirection("up");
  });


  useMotionValueEvent(scrollYProgress, "change", (curr) => {
    if (loading) return;
    manualScroll.set(curr);
    setPastHalf(curr >= 0.5);
  });

  const width = useTransform(manualScroll, [0.5, 0.85], [middleWidth, endWidth], { ease: cubicBezier(0.3, 0, 0.2, 1) });

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
    <div className={`h-screen ${loading ? "overflow-hidden" : ""}`}>
      <div className={`h-[300vh]`}>
        <div
          className="flex justify-center items-center pointer-events-none fixed size-(--dropbox-btn-size) left-(--dropbox-left) bottom-(--dropbox-bottom) transform-(--dropbox-transform)"
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
            className="relative border text-(--dropbox-color) flex-none bg-(--dropbox-bg)"
          >
            <div
              style={{ width: "min(500px, min(100vw, 100vh) - 64px)" }}
              className="pointer-events-none p-5.5 h-full max-w-[500px] flex justify-between items-start"
            >
              <DropBoxText scrollDirection={scrollDirection} />
              <ScrollChevron />
              <DropBoxSvg />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default App
