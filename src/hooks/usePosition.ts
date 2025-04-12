import { useMotionTemplate, useMotionValue, useMotionValueEvent, useScroll, useTransform } from "motion/react"
import { useLoading } from "../context/loadingContext";
import { useEffect } from "react";

export function usePosition() {
  const { scrollYProgress } = useScroll();
  const manualScroll = useMotionValue(0);
  const windowWidth = useMotionValue(window.innerWidth);
  const { loading } = useLoading();

  useMotionValueEvent(scrollYProgress, "change", (curr) => {
    if (loading) return;
    manualScroll.set(curr);
  });

  useEffect(() => {
    function handleResize() {
      const dropboxBtnSize = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue("--dropbox-btn-size")
      ) || 90;
      windowWidth.set(window.innerWidth - dropboxBtnSize);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scaleValue = useTransform(manualScroll, [0, 1], [2, 1]);

  const translateXValue = useTransform(
    [manualScroll, windowWidth],
    ([scroll, width]: number[]) => -width * (1 - scroll)
  );
  const translateYValue = useTransform(translateXValue, (x) => x / 2);

  const transform = useMotionTemplate`translateX(${translateXValue}px) translateY(${translateYValue}px) scale(${scaleValue})`;

  return loading ? undefined : transform;
}
