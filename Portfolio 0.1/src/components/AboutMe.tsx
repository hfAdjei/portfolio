import bgTexture from "figma:asset/af8e00a46c360f5373f143966b83df68bf3b31cc.png";
import Main from "../imports/Main";

interface AboutMeProps {
  isDarkMode: boolean;
  onBack: () => void;
}

export function AboutMe({ isDarkMode, onBack }: AboutMeProps) {
  return (
    <section 
      className={`min-h-screen relative transition-colors duration-500 ${
        isDarkMode 
          ? 'bg-[#181717]' 
          : ''
      }`} 
      style={!isDarkMode ? { backgroundImage: `url(${bgTexture})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
    >
      {/* Border Lines */}
      <div className={`absolute left-20 top-0 bottom-0 w-[1px] transition-colors duration-500 ${
        isDarkMode ? 'bg-[#404040]' : 'bg-[#E2E2E2]'
      }`} />
      <div className={`absolute right-20 top-0 bottom-0 w-[1px] transition-colors duration-500 ${
        isDarkMode ? 'bg-[#404040]' : 'bg-[#E2E2E2]'
      }`} />

      {/* Main Content */}
      <div className="relative">
        <Main isDarkMode={isDarkMode} onLogoClick={onBack} />
      </div>
    </section>
  );
}