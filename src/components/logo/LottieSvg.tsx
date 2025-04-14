import { HTMLAttributes, useEffect, useRef } from "react"
import lottie, { AnimationItem } from "lottie-web"
import { cn } from "../../lib/utils";

interface LottieSvgProps extends HTMLAttributes<HTMLDivElement> {
  fill?: '#055463' | '#1a1918';
  type: 'initial' | 'hover';
  isHovered: boolean;
}

export function LottieSvg({ className, type, isHovered, fill = '#1a1918', ...props }: LottieSvgProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<AnimationItem>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    animationRef.current = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: "/lottie.json",
      rendererSettings: {
        preserveAspectRatio: "xMidYMid meet"
      }
    });

    if (type === 'initial') {
      animationRef.current.setDirection(-1);

      animationRef.current.addEventListener("DOMLoaded", () => {
        if (animationRef.current) {
          const initialFrame = 92;
          animationRef.current.goToAndStop(initialFrame, true);
        }
      });
    }

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

  useEffect(() => {
    if (!animationRef.current) return;
    if (type === 'initial') {
      if (isHovered) {
        animationRef.current.setSpeed(15);
        animationRef.current.play();
      }
      else {
        animationRef.current.goToAndStop(92, true);
      }
    }
    else {
      if (isHovered) {
        animationRef.current.setSpeed(2);
        animationRef.current.goToAndPlay(10, true);
      }
      else {
        animationRef.current.goToAndStop(0, true);
      }
    }
  }, [isHovered]);

  return (
    <div
      ref={containerRef}
      className={cn("absolute aspect-square h-full ml-auto right-0 translate-[30%]", type === 'hover' && "opacity-0", className)}
      {...props}
    />
  )
}
