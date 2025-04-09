import { Strategy } from "./Strategy";

export function NavContent() {
  return (
    <div className="absolute inset-0 z-[2] *:absolute *:p-0 *:origin-[100%_100%] *:pointer-events-auto">
      <Strategy />
    </div>
  )
}
