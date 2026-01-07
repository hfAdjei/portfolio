export default function Roll({ isAnimating, isDarkMode }: { isAnimating?: boolean; isDarkMode?: boolean }) {
  return (
    <div className="relative size-full" data-name="Roll">
      <div className={`absolute inset-[-15%_-16.67%_-18.33%_-16.67%] ${isAnimating ? 'animate-bounce-scale' : ''}`}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Roll">
            <g filter="url(#filter0_di_12_37)" id="Switch\'">
              <circle cx="8" cy="7.8" fill={isDarkMode ? "#808080" : "#E2E2E2"} r="6" />
              <circle cx="8" cy="7.8" r="6.5" stroke={isDarkMode ? "#9A9A9A" : "#F3F3F3"} fill="none" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="16" id="filter0_di_12_37" width="16" x="0" y="-4.47035e-08">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="dilate" radius="1" result="effect1_dropShadow_12_37" />
              <feOffset dy="0.2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.376471 0 0 0 0 0.376471 0 0 0 0 0.376471 0 0 0 0.15 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_12_37" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_12_37" mode="normal" result="shape" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="0.5" />
              <feGaussianBlur stdDeviation="0.5" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.376471 0 0 0 0 0.376471 0 0 0 0 0.376471 0 0 0 0.05 0" />
              <feBlend in2="shape" mode="normal" result="effect2_innerShadow_12_37" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}