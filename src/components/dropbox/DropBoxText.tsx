import { motion, useMotionValueEvent, useScroll } from "motion/react"
import { useLoading } from "../../context/loadingContext";
import { useState } from "react";

export function DropBoxText({ scrollDirection }: { scrollDirection: string }) {
  const { scrollYProgress } = useScroll();
  const [hideText, setHideText] = useState(false);
  const { loading } = useLoading();

  useMotionValueEvent(scrollYProgress, "change", (curr) => {
    if (loading) return;
    setHideText(curr > 0.35);
  });

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <motion.div
      variants={textVariants}
      initial={textVariants.hidden}
      animate={hideText ? "hidden" : "visible"}
      transition={
        loading ?
          { duration: 1.5, ease: [0.5, 0, 0.05, 1], delay: 1.5 }
          : { duration: 0.2, ease: [0.2, 0.5, 0.5, 1] }
      }
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
        className="text-3xl absolute inset-[0%_0%_auto]"
      >
        From icons to illustration, logos to language, this collection is the foundation for how Dropbox looks, feels, and sounds like Dropbox.
      </motion.h3>
    </motion.div>
  )
}
