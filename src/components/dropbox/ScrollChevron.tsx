import { motion, SVGMotionProps } from "motion/react";
import { useEffect, useState } from "react";

export default function ScrollChevron() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const signal = new AbortController();
    window.addEventListener("scroll", () => {
      setHasScrolled(true);
    }, { signal: signal.signal });
    return () => signal.abort();
  }, []);

  return (
    <motion.div
      className="absolute inset-0"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { delay: 0.5, duration: 1 } }
      }}
      animate={hasScrolled ? "hidden" : "visible"}
      transition={{
        duration: 0.6,
        ease: [0.5, 0, 0.2, 1],
      }}
    >
      <Chevron
        className="bottom-[42px]"
        transition={{
          duration: 1.5,
          ease: [0.2, 0, 0.3, 1],
          repeat: Infinity,
          repeatDelay: 0.5,
          delay: 2
        }}
      />
      <Chevron
        className="bottom-[30px]"
        transition={{
          duration: 1.5,
          ease: [0.4, 0, 0.3, 1],
          repeat: Infinity,
          repeatDelay: 0.5,
          delay: 2
        }}
      />
    </motion.div>
  )
}

interface ChevronProps extends SVGMotionProps<SVGSVGElement> { }

const Chevron = ({ className, transition, ...props }: ChevronProps) => {
  return (
    <motion.svg
      initial={{ fillOpacity: 0 }}
      animate={{
        fillOpacity: 1,
        opacity: [1, 0.6, 1],
        transform: ["translatey(0px)", "translatey(18px)", "translatey(0px)"]
      }}
      transition={{
        default: transition,
        fillOpacity: { duration: 1.5, ease: [0.4, 0, 0.2, 1], delay: 1.5 },
      }}
      className={`w-[52px] right-[14px] absolute ${className}`} width="26" height="14" viewBox="0 0 26 14" fill="currentColor"
      {...props}
    >
      <path d="M23.2161 0.352539L13 10.1757L2.78391 0.352539L1.00781 2.19967L13 13.7306L24.9922 2.19967L23.2161 0.352539Z"></path>
    </motion.svg>
  )
}
