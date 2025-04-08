import { motion, SVGMotionProps } from "motion/react";

export default function ScrollChevron() {
  return (
    <motion.div
      className="absolute inset-0"
    >
      <Chevron
        className="bottom-[42px]"
        transition={{
          duration: 1.5,
          ease: [0.2, 0, 0.3, 1],
          repeat: Infinity,
          repeatDelay: 0.5
        }}
      />
      <Chevron
        className="bottom-[30px]"
        transition={{
          duration: 1.5,
          ease: [0.4, 0, 0.3, 1],
          repeat: Infinity,
          repeatDelay: 0.5
        }}
      />
    </motion.div>
  )
}

interface ChevronProps extends SVGMotionProps<SVGSVGElement> { }

const Chevron = ({ className, ...props }: ChevronProps) => {
  return (
    <motion.svg
      animate={{
        opacity: [1, 0.75, 1],
        transform: ["translatey(0px)", "translatey(18px)", "translatey(0px)"]
      }}
      className={`w-[52px] right-[14px] absolute ${className}`} width="26" height="14" viewBox="0 0 26 14" fill="currentColor"
      {...props}
    >
      <path d="M23.2161 0.352539L13 10.1757L2.78391 0.352539L1.00781 2.19967L13 13.7306L24.9922 2.19967L23.2161 0.352539Z"></path>
    </motion.svg>
  )
}
