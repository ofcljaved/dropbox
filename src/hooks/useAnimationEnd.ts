import { useMotionValue, useMotionValueEvent, useScroll, useTransform } from "motion/react"
import { useLoading } from "../context/loadingContext";
import { useState } from "react";

export function useAnimationEnd() {
  const [isEnd, setIsEnd] = useState(false);
  const { scrollYProgress } = useScroll();
  const manualScroll = useMotionValue(0);
  const { loading } = useLoading();

  useMotionValueEvent(scrollYProgress, "change", (curr) => {
    if (loading) return;
    manualScroll.set(curr);
    if (curr === 1) {
      setIsEnd(true);
    }
  });

  const scaleValue = useTransform(manualScroll, [0, 1], [2, 1]);

  useMotionValueEvent(scaleValue, 'change', (curr) => {
    setIsEnd(curr === 1);
  });

  return isEnd
}
