import { useMotionValueEvent, useMotionValue, animate } from "motion/react"
import { useEffect } from "react";
import { useLoading } from "./context/loadingContext";
import { DropBox } from "./components/dropbox/DropBox";
import { Nav } from "./components/Nav";

function App() {
  const loadValue = useMotionValue(0);
  const { loading, setLoading } = useLoading();

  useEffect(() => {
    const controls = animate(loadValue, 1, { duration: 1.5, ease: [0.5, 0, 0.05, 1] });
    return () => controls.stop();
  }, []);

  useMotionValueEvent(loadValue, "animationComplete", () => {
    setLoading(false);
  });

  return (
    <div className={`h-screen ${loading ? "overflow-hidden" : ""}`}>
      <div className={`h-[300vh]`}>
        <Nav />
        <DropBox />
      </div>
    </div>
  )
}

export default App
