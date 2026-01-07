import svgPaths from "./svg-12m1yh6ye9";
import imgImage25 from "figma:asset/44d532cf3af396f6add0f682383f8c8d7c64f5bd.png";

export default function Location() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative size-full" data-name="Location">
      <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Location">
        <div className="relative shrink-0 size-[16px]" data-name="chunk/calendar">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <g id="chunk/calendar">
              <path clipRule="evenodd" d={svgPaths.p3cf63d80} fill="var(--fill-0, #9B00FA)" fillRule="evenodd" id="Icon" />
            </g>
          </svg>
        </div>
        <p className="font-['Geist_Mono:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#9b00fa] text-[14px] text-nowrap tracking-[-0.14px]">AVAILABLE FOR WORK</p>
      </div>
      <div className="h-[87.94px] relative shrink-0 w-[175px]" data-name="image 25">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage25} />
      </div>
      <p className="font-['Geist_Mono:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[#649174] text-[14px] text-center text-nowrap tracking-[-0.14px]">
        <span>{`UTC +0 GMT || `}</span>
        <span className="font-['Geist_Mono:Medium',sans-serif]">16:10:45 PM GMT</span>
      </p>
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[454px]" data-name="Copyrights">
        <div className="flex flex-col font-['Geist_Mono:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b3b3b3] text-[14px] text-center text-nowrap tracking-[-0.14px]">
          <p className="leading-[0.9]">Made by Namiji || © 2025 Hakeem Adjei.</p>
        </div>
      </div>
    </div>
  );
}