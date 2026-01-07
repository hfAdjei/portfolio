import { useState, useEffect } from 'react';
import svgPaths from "../imports/svg-s2o2ho9d26";
import svgPathsLocation from "../imports/svg-12m1yh6ye9";
import bgTexture from "figma:asset/af8e00a46c360f5373f143966b83df68bf3b31cc.png";
import imgImage25 from "figma:asset/44d532cf3af396f6add0f682383f8c8d7c64f5bd.png";
import Roll from "../imports/Roll";

interface HeroProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  onNavigateToAbout: () => void;
}

export function Hero({ isDarkMode, setIsDarkMode, onNavigateToAbout }: HeroProps) {
  const [copied, setCopied] = useState(false);
  const [showModeText, setShowModeText] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [currentTime, setCurrentTime] = useState('');

  // Update time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getUTCHours();
      const minutes = now.getUTCMinutes().toString().padStart(2, '0');
      const seconds = now.getUTCSeconds().toString().padStart(2, '0');
      const period = hours >= 12 ? 'PM' : 'AM';
      const displayHours = hours % 12 || 12;
      
      setCurrentTime(`${displayHours}:${minutes}:${seconds} ${period} GMT`);
    };

    updateTime(); // Initial call
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  // Japanese chime sound for email copy
  const playChimeSound = () => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const now = audioContext.currentTime;

    // Create multiple oscillators for a rich bell-like sound
    const frequencies = [800, 1200, 1600, 2000];
    
    frequencies.forEach((freq, index) => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(freq, now);
      
      // Envelope for bell-like decay
      gainNode.gain.setValueAtTime(0.15 / (index + 1), now);
      gainNode.gain.exponentialRampToValueAtTime(0.01, now + 1.5);
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.start(now);
      oscillator.stop(now + 1.5);
    });
  };

  // Wood peck sound for dark mode toggle
  const playWoodPeckSound = () => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const now = audioContext.currentTime;

    // Create a short, sharp percussive sound
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();
    
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(150, now);
    oscillator.frequency.exponentialRampToValueAtTime(50, now + 0.05);
    
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, now);
    
    // Sharp attack and quick decay for peck sound
    gainNode.gain.setValueAtTime(0.3, now);
    gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
    
    oscillator.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.start(now);
    oscillator.stop(now + 0.08);
  };

  const handleCopyEmail = async () => {
    const email = 'nxmiji@gmail.com';
    
    try {
      // Try modern clipboard API first
      await navigator.clipboard.writeText(email);
      playChimeSound();
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback method for when clipboard API is blocked
      const textArea = document.createElement('textarea');
      textArea.value = email;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      try {
        document.execCommand('copy');
        playChimeSound();
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (error) {
        console.error('Failed to copy email:', error);
        // If all else fails, just open email client
        window.location.href = `mailto:${email}`;
      }
      
      textArea.remove();
    }
  };

  const handleToggleDarkMode = (e: React.MouseEvent) => {
    playWoodPeckSound();
    setIsDarkMode(!isDarkMode);
    setShowModeText(true);
    setIsAnimating(true);
    setCursorPosition({ x: e.clientX, y: e.clientY });
    
    setTimeout(() => setShowModeText(false), 2000);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section 
      className={`min-h-screen px-5 md:px-28 lg:px-32 py-5 md:py-12 relative before:absolute before:left-5 md:before:left-20 before:top-0 before:bottom-0 before:w-[1px] after:absolute after:right-5 md:after:right-20 after:top-0 after:bottom-0 after:w-[1px] transition-colors duration-500 ${
        isDarkMode 
          ? 'bg-[#181717] before:bg-[#404040] after:bg-[#404040]' 
          : 'before:bg-[#E2E2E2] after:bg-[#E2E2E2]'
      }`} 
      style={!isDarkMode ? { backgroundImage: `url(${bgTexture})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
    >
      {/* Dark Mode Toggle on Left Border */}
      <button 
        onClick={handleToggleDarkMode}
        className="absolute right-5 md:right-auto md:left-20 top-12 translate-x-1/2 md:-translate-x-1/2 z-10 group"
        aria-label="Toggle dark mode"
      >
        <div className="w-[14px] h-[14px] transition-transform hover:scale-110">
          <Roll isAnimating={isAnimating} isDarkMode={isDarkMode} />
        </div>
      </button>

      {/* Vanishing Mode Text - Follows Cursor */}
      <div 
        className={`fixed z-50 pointer-events-none transition-opacity duration-500 ${
          showModeText ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: `${cursorPosition.x + 15}px`,
          top: `${cursorPosition.y + 15}px`,
        }}
      >
        <p className={`font-['Geist_Mono',sans-serif] text-[11px] whitespace-nowrap px-2 py-1 rounded ${
          isDarkMode ? 'text-[#E2E2E2] bg-[#2A2A2A]/80' : 'text-[#606060] bg-white/80'
        }`}>
          {isDarkMode ? 'Dark mode' : 'Light mode'}
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto px-2 md:px-0">
        {/* Top Container */}
        <div className="flex items-center justify-between mb-[40px]">
          {/* Left: Name and Profile */}
          <div className="flex gap-[26px] items-center">
            <div className="flex flex-col gap-[7px]">
              <p className={`font-['Geist_Mono',sans-serif] font-medium leading-[1.2] text-[14px] tracking-[-0.14px] transition-colors ${
                isDarkMode ? 'text-[#B0B0B0]' : 'text-[#606060]'
              }`}>
                HELLO , MEET
              </p>
              <h1 className={`font-['Gabarito',sans-serif] font-extrabold leading-[0.9] text-[52px] md:text-[64px] lg:text-[72px] tracking-[-0.52px] uppercase transition-colors ${
                isDarkMode ? 'text-[#F3F3F3]' : 'text-[#181717]'
              }`}>
                HAKEEM ADJEI
              </h1>
            </div>
            {/* Profile Photo */}
          </div>

          {/* Right: Titles */}
          <div className={`hidden md:flex flex-col gap-[6px] font-['Geist_Mono',sans-serif] font-normal leading-[1.2] text-[13px] tracking-[-0.13px] uppercase transition-colors ${
            isDarkMode ? 'text-[#F3F3F3]' : 'text-[#181717]'
          }`}>
            <p>DIGITAL PRODUCT DESIGNER</p>
            <p>SOFTWARE DESIGNER</p>
          </div>
        </div>

        {/* Main Container - Centered Content */}
        <div className="flex flex-col gap-[40px] pb-[8px]">
          <div className="flex flex-col gap-[24px] items-center justify-center w-full max-w-[926px] mx-auto">
            {/* Bio Paragraphs */}
            <div className={`font-['Gabarito',sans-serif] font-normal leading-[1.45] text-[16px] tracking-[0.16px] w-full max-w-[542px] transition-colors ${
              isDarkMode ? 'text-[#B0B0B0]' : 'text-[#808080]'
            }`}>
              <p>
                I am a lead product designer from{' '}
                <span className={isDarkMode ? 'text-[#F3F3F3]' : 'text-[#181717]'}>Ghana</span> with over half a decade
                experience building products that impact over 17.2 Million customers.
              </p>
            </div>

            <div className={`font-['Gabarito',sans-serif] font-normal leading-[1.45] text-[16px] tracking-[0.16px] w-full max-w-[542px] transition-colors ${
              isDarkMode ? 'text-[#B0B0B0]' : 'text-[#808080]'
            }`}>
              <p>I chase curiosity and build delight into every solution I design</p>
            </div>

            <div className={`font-['Gabarito',sans-serif] font-normal leading-[1.45] text-[16px] tracking-[0.16px] w-full max-w-[542px] transition-colors ${
              isDarkMode ? 'text-[#B0B0B0]' : 'text-[#808080]'
            }`}>
              <p className="mb-0">
                Obsessed about <span className={isDarkMode ? 'text-[#F3F3F3]' : 'text-[#181717]'}>products</span> and{' '}
                <span className={isDarkMode ? 'text-[#F3F3F3]' : 'text-[#181717]'}>design</span>.
              </p>
              <p>
                I enjoy designing softwares for everyday people.
                <br />I am comfortable working as an IC or leading teams / projects.
              </p>
            </div>

            <div className={`font-['Gabarito',sans-serif] font-normal leading-[1.45] text-[16px] tracking-[0.16px] w-full max-w-[542px] transition-colors ${
              isDarkMode ? 'text-[#B0B0B0]' : ''
            }`}>
              <p>
                <span className={isDarkMode ? 'text-[#F3F3F3]' : 'text-[#181717]'}>Currently designing payment experiences at </span>
                <span className="font-['Gabarito',sans-serif] font-medium text-[#649174]">
                  MOJO PAYMENTS LIMITED
                </span>
              </p>
            </div>

            {/* Buttons Container */}
            <div className="flex gap-[12px] items-center w-full max-w-[542px]">
              {/* Copy Email Button */}
              <button
                onClick={handleCopyEmail}
                className={`flex gap-[7px] items-center justify-center p-[14px] rounded-[18px] shadow-[0px_0.2px_0px_1px_rgba(96,96,96,0.15)] hover:shadow-[0px_0.2px_0px_1px_rgba(96,96,96,0.25)] transition-all relative overflow-hidden group ${
                  isDarkMode ? 'bg-[#2A2A2A]' : 'bg-white'
                }`}
              >
                <div className="relative shrink-0 size-[16px]">
                  <svg className="block size-full" fill="none" viewBox="0 0 16 16">
                    <g>
                      <path d={svgPaths.p2a364400} fill="#649174" />
                      <path clipRule="evenodd" d={svgPaths.p1d74b280} fill="#649174" fillRule="evenodd" />
                    </g>
                  </svg>
                </div>
                <p className="font-['Gabarito',sans-serif] font-medium leading-[0.9] text-[#649174] text-[18px] tracking-[-0.18px]">
                  {copied ? 'Email copied!' : 'Copy email'}
                </p>
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_2px_2px_0px_rgba(96,96,96,0.25)]" />
              </button>

              {/* More About Me Button */}
              <button
                onClick={onNavigateToAbout}
                className="bg-[#649174] flex gap-[7px] items-center justify-center p-[14px] rounded-[18px] shadow-[0px_0.2px_0px_1px_rgba(96,96,96,0.15)] hover:bg-[#5a8769] transition-all relative overflow-hidden"
              >
                <p className="font-['Gabarito',sans-serif] font-medium leading-[0.9] text-[#f3f3f3] text-[18px] tracking-[-0.18px]">
                  More about me
                </p>
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_2px_2px_0px_rgba(96,96,96,0.25)]" />
              </button>
            </div>

            {/* Location Widget */}
            <div className="flex flex-col gap-[12px] items-center mt-[40px]">
              <div className="flex gap-[6px] items-center">
                <div className="relative shrink-0 size-[16px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <g id="chunk/calendar">
                      <path clipRule="evenodd" d={svgPathsLocation.p3cf63d80} fill={isDarkMode ? "#C77DFF" : "#9B00FA"} fillRule="evenodd" />
                    </g>
                  </svg>
                </div>
                <p className={`font-['Geist_Mono',sans-serif] font-medium leading-[1.2] text-[14px] text-nowrap tracking-[-0.14px] transition-colors ${
                  isDarkMode ? 'text-[#C77DFF]' : 'text-[#9b00fa]'
                }`}>
                  AVAILABLE FOR WORK
                </p>
              </div>
              <div className="h-[87.94px] relative shrink-0 w-[175px]">
                <img alt="GMT Timezone Map" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage25} />
              </div>
              <p className={`font-['Geist_Mono',sans-serif] font-bold leading-none text-[14px] text-center text-nowrap tracking-[-0.14px] transition-colors ${
                isDarkMode ? 'text-[#7FB88E]' : 'text-[#649174]'
              }`}>
                <span>UTC +0 GMT || </span>
                <span className="font-['Geist_Mono',sans-serif] font-medium">{currentTime}</span>
              </p>
              <div className="flex flex-col items-center justify-center">
                <p className={`font-['Geist_Mono',sans-serif] font-medium leading-[0.9] text-[14px] text-center text-nowrap tracking-[-0.14px] transition-colors ${
                  isDarkMode ? 'text-[#808080]' : 'text-[#b3b3b3]'
                }`}>
                  Made by Namiji || © 2025 Hakeem Adjei.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Titles */}
        <div className={`md:hidden flex flex-col gap-[6px] items-center font-['Geist_Mono',sans-serif] font-medium leading-[1.2] text-[13px] tracking-[-0.13px] uppercase mt-12 transition-colors ${
          isDarkMode ? 'text-[#F3F3F3]' : 'text-[#181717]'
        }`}>
          <p>DIGITAL PRODUCT DESIGNER</p>
          <p>SOFTWARE DESIGNER</p>
        </div>
      </div>
    </section>
  );
}