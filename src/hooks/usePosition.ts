import { useMotionTemplate, useMotionValue, useMotionValueEvent, useScroll, useTransform } from "motion/react"
import { useLoading } from "../context/loadingContext";
import { useEffect } from "react";
import { getInitialOffsets } from "../lib/getOffset";

export function usePosition(index: number) {
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

  const initial = getInitialOffsets(index, windowWidth.get());

  const initialX = useMotionValue(initial.x);
  const initialY = useMotionValue(initial.y);

  useMotionValueEvent(windowWidth, 'change', (curr) => {
    const { x, y } = getInitialOffsets(index, curr);
    initialX.set(x);
    initialY.set(y);
  });

  const scaleValue = useTransform(manualScroll, [0, 1], [2, 1]);
  const translateXValue = useTransform(manualScroll, [0, 1], [initialX.get(), 0]);
  const translateYValue = useTransform(manualScroll, [0, 1], [initialY.get(), 0]);

  const transform = useMotionTemplate`scale(${scaleValue}) translate(${translateXValue}px, ${translateYValue}px)`;
  const intialTransform = useMotionTemplate`scale(2) translate(${initialX.get()}px, ${initialY.get()}px)`;


  return loading ? intialTransform : transform

}
