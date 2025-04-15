import { motion, HTMLMotionProps } from "motion/react";
import { cn } from "../lib/utils";
import { useAnimationEnd } from "../hooks/useAnimationEnd";

interface LinkProps extends HTMLMotionProps<"a"> {
  title: string;
  children?: React.ReactNode;
}

export function Link({ title, children, className, ...props }: LinkProps) {
  const animationEnd = useAnimationEnd();

  const variant = {
    initial: {
      "--opacity": 1,
      "--second-fill": "#be4b0a",
      "--accent-pink": "#cd2f7b",
    },
    hover: {
      backgroundColor: "#1a1918",
      color: "#ffffff",
      fill: "#1a1918",
      "--second-fill": "#1a1918",
      "--accent-pink": "#1a1918",
      "--opacity": 0,
    },
  }

  return (
    <motion.a
      initial={"initial"}
      variants={variant}
      whileHover={"hover"}
      className={cn(
        "group rounded-none flex-col justify-between items-stretch w-full h-full p-[23px] no-underline flex overflow-hidden pointer-events-none *:pointer-events-none",
        className,
        animationEnd && "pointer-events-auto *:pointer-events-auto",
      )}
      {...props}
    >
      <div
        style={{
          fontSize: "min(2.75vw - 6px, 1.375vw + 15px)",
        }}
        className="relative top-0 left-0 font-medium leading-[0.8em] font-semibold"
      >
        {title}
      </div>
      {children}
    </motion.a>
  )
}
