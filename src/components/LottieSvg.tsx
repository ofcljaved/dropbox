import { HTMLAttributes, useEffect, useRef } from "react"
import lottie, { AnimationItem } from "lottie-web"
import { cn } from "../lib/utils";

interface LottieSvgProps extends HTMLAttributes<HTMLDivElement> {
  fill?: 'currentColor' | 'transparent';
  animate?: boolean;
}

export function LottieSvg({ className, fill = 'currentColor', animate = false }: LottieSvgProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<AnimationItem>(null);
  useEffect(() => {
    if (!containerRef.current) return;

    animationRef.current = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: false,
      autoplay: animate,
      path: "/lottie.json",
      rendererSettings: {
        preserveAspectRatio: "xMidYMid meet"
      }
    });

    animationRef.current.setDirection(-1);

    animationRef.current.addEventListener("DOMLoaded", () => {
      if (animationRef.current) {
        const initialFrame = 92;
        animationRef.current.goToAndStop(initialFrame, true);
      }
    });

    const container = containerRef.current;
    const observer = new MutationObserver(() => {
      const paths = container?.querySelectorAll("svg path") as NodeListOf<SVGPathElement>;
      paths?.forEach((path) => {
        path.removeAttribute("fill");
        path.style.fill = fill
      });
    });

    observer.observe(containerRef.current, { childList: true, subtree: true });
    return () => {
      animationRef.current?.destroy();
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("absolute aspect-square h-full ml-auto right-0 translate-[30%] fill-inherit", className)}
    />
  )
}
