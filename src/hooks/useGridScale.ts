import { useMotionValue, useMotionValueEvent, useScroll, useTransform } from "motion/react"
import { useLoading } from "../context/loadingContext";

export function useGridScale() {
  const { scrollYProgress } = useScroll();
  const manualScroll = useMotionValue(0);
  const { loading } = useLoading();

  useMotionValueEvent(scrollYProgress, "change", (curr) => {
    if (loading) return;
    manualScroll.set(curr);
  });

  const scaleValue = useTransform(manualScroll, [0, 1], [0.5, 1]);

  return loading ? 0.5 : scaleValue

}
