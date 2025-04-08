import { motion } from "motion/react";

export default function DropBoxSvg() {
  return (
    <div className="size-full absolute left-1/2 bottom-1/2 -translate-x-1/2 translate-y-1/2">
      <motion.svg
        viewBox="120 120 1462 1462"
        className="stroke-current fill-current [fill-opacity:0]"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: [0.5, 0, 0.05, 1] }}
          strokeDasharray={"0 1"}
          strokeWidth="4"
          d="M663.477 555.977L850.079 673.172L663.477 790.366L476.906 673.172L663.477 555.977ZM663.477 791.542L850.079 908.739L663.477 1025.93L476.906 908.739L663.477 791.542ZM851.951 908.739L1038.52 791.542L1225.09 908.739L1038.52 1025.93L851.951 908.739ZM1225.09 673.172L1038.52 790.366L851.951 673.172L1038.52 555.977L1225.09 673.172ZM1037.59 1065.78L851.015 1182.97L664.413 1065.78L851.015 948.585L1037.59 1065.78Z"
        />
      </motion.svg>
    </div>
  )
}
