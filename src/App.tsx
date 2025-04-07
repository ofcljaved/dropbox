import { useScroll, motion, useMotionValueEvent } from "motion/react"
import { useState } from "react";

function App() {
  const { scrollY } = useScroll()
  const [scrollDirection, setScrollDirection] = useState<string>("up");

  useMotionValueEvent(scrollY, "change", (curr) => {
    const diff = curr - scrollY.getPrevious()!;
    if (diff > 0) setScrollDirection("down");
    if (diff < 0 && curr <= 100) setScrollDirection("up");
  })

  const variants = {
    initial: {
      '--dropbox-size': "calc(-2px + min(800px, -64px + min(100vw, 100vh)))",
      '--dropbox-color': "#0061fe",
      '--dropbox-bg': "#ffffff",
    },
    middle: {
      '--dropbox-size': "calc(-2px + min(502px, -64px + min(100vw, 100vh)))",
      '--dropbox-color': "#ffffff",
      '--dropbox-bg': "#0061fe",
    }
  };

  return (
    <>
      <div
        className="flex justify-center items-center pointer-events-none fixed size-(--dropbox-btn-size) left-(--dropbox-left) bottom-(--dropbox-bottom) transform-(--dropbox-transform)"
      >
        <motion.div
          initial={variants.initial}
          variants={{
            up: variants.initial,
            down: variants.middle
          }}
          animate={scrollDirection}
          transition={{ duration: 0.6, ease: [0.5, 0, 0.2, 1] }}
          className="size-(--dropbox-size) text-(--dropbox-color) flex-none bg-(--dropbox-bg)"
        >
          <div>Dropbox</div>
        </motion.div>
      </div>
    </>
  )
}

export default App
