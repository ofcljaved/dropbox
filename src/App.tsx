import { useMotionValueEvent, useScroll } from "motion/react"

function App() {
  const { scrollYProgress } = useScroll()

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest)
  })

  return (
    <>
      <div
        className="flex justify-center items-center pointer-events-none fixed size-(--dropbox-btn-size) left-(--dropbox-left) bottom-(--dropbox-bottom) transform-(--dropbox-transform)"
      >
        <div
          className="border border-black size-(--dropbox-size) text-(--dropbox-color) flex-none"
        >
          <div>Dropbox</div>
        </div>
      </div>
    </>
  )
}

export default App
