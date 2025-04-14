import { useState } from "react";
import { LottieSvg } from "./LottieSvg";
import { LogoWrapper } from "./LogoWrapper";

export function Logo({ index }: { index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <LogoWrapper index={index} onChange={setIsHovered}>
      <div className="flex flex-1 flex-col justify-end relative items-stretch" >
        <div className="w-full max-w-full h-[min(100%,35vh)] absolute bottom-0 right-0]">
          <LottieSvg
            type="initial"
            key={1}
            isHovered={isHovered}
            fill="#055463"
          />
          <LottieSvg
            type="hover"
            key={2}
            isHovered={isHovered}
            className="stroke-white stroke-[5px] group-hover:opacity-100"
            style={{ transition: "opacity 0.35s ease" }}
          />
        </div>
      </div>
    </LogoWrapper>
  )
}
