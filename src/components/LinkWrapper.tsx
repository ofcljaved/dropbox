import { motion, HTMLMotionProps } from "motion/react";
import { cn } from "../lib/utils";

interface LinkProps extends HTMLMotionProps<"a"> {
  title: string;
  children?: React.ReactNode;
}

export function Link({ title, children, className, ...props }: LinkProps) {
  const variant = {
    initial: {
      backgroundColor: "#283750",
      color: "#b4c8e1",
      fill: "#b4c8e1",
      "--opacity": 1,
    },
    hover: {
      backgroundColor: "#1a1918",
      color: "#ffffff",
      fill: "#1a1918",
      "--opacity": 0,
    },
  }
  return (
    <motion.a
      initial={"initial"}
      variants={variant}
      whileHover={"hover"}
      className={cn(
        "group rounded-none flex-col justify-between items-stretch w-full h-full p-[23px] no-underline flex overflow-hidden *:pointer-events-auto",
        className
      )}
      {...props}
    >
      <div
        style={{
          fontSize: "min(2.75vw - 6px, 1.375vw + 15px)",
        }}
        className="relative top-0 left-0 font-medium"
      >
        {title}
      </div>
      {children}
    </motion.a>
  )
}
