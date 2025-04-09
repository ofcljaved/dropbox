import { NavContent } from "./NavContent";

export function Nav() {
  return (
    <div className="w-screen pointer-events-auto fixed inset-0 z-[100] overflow-hidden">
      <NavContent />
    </div>
  )
}
