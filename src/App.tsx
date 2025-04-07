import { useScroll, motion, useMotionValueEvent, useMotionValue, animate, useTransform } from "motion/react"
import { useEffect, useState } from "react";
import { useLoading } from "./context/loadingContext";

function App() {
  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState<string>("up");
  const loadValue = useMotionValue(0);
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

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
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
            animate={scrollDirection}
            transition={{ duration: 0.6, ease: [0.5, 0, 0.2, 1] }}
            className="border size-(--dropbox-size) text-(--dropbox-color) flex-none bg-(--dropbox-bg)"
          >
            <div
              style={{ width: "min(500px, min(100vw, 100vh) - 64px)" }}
              className="pointer-events-none p-5.5 h-full max-w-[500px] flex justify-between items-start"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: [0.5, 0, 0.05, 1], delay: 1.5 }}
                className="relative flex-1 self-stretch"
              >
                <motion.h3
                  initial={textVariants.visible}
                  variants={{
                    up: textVariants.visible,
                    down: textVariants.hidden
                  }}
                  animate={scrollDirection}
                  transition={{ duration: 0.2, ease: [0.2, 0.5, 0.5, 1], delay: 0.1 }}
                  className="text-4xl absolute inset-[0%_0%_auto]"
                >
                  At Dropbox, our Brand Guidelines help us infuse everything we make with identity.
                </motion.h3>
                <motion.h3
                  initial={textVariants.hidden}
                  variants={{
                    up: textVariants.hidden,
                    down: textVariants.visible
                  }}
                  animate={scrollDirection}
                  transition={{ duration: 0.2, ease: [0.2, 0.5, 0.5, 1], delay: 0.1 }}
                  className="text-4xl absolute inset-[0%_0%_auto]"
                >
                  From icons to illustration, logos to language, this collection is the foundation for how Dropbox looks, feels, and sounds like Dropbox.
                </motion.h3>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default App
