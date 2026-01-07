import svgPaths from "./svg-qq2274bgng";
import clsx from "clsx";
import imgImage from "figma:asset/d90db3421f608fcb4bec11359c6924ef6aaed2f9.png";
import imgContainer from "figma:asset/31cb9b9317f376caec24c8106ea351bbd1c1bf96.png";
import { useState } from "react";
import Container from "./Container";

function ComponentLolIcon({ children, href }: React.PropsWithChildren<{ href?: string }>) {
  const content = (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );

  if (href) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex p-2 rounded-lg transition-colors duration-200 hover:bg-white cursor-pointer"
      >
        {content}
      </a>
    );
  }

  return content;
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}
type Group1Props = {
  additionalClassNames?: string;
};

function Group1({ children, additionalClassNames = "" }: React.PropsWithChildren<Group1Props>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.269118 3.43169">
        <g id="Group">{children}</g>
      </svg>
    </div>
  );
}
type GroupProps = {
  additionalClassNames?: string;
};

function Group({ children, additionalClassNames = "" }: React.PropsWithChildren<GroupProps>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.134559 1.7159">
        <g id="Group">{children}</g>
      </svg>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Gabarito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b3b3b3] text-[16px] text-nowrap">
        <p className="leading-[20px]">{children}</p>
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Gabarito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#181717] text-[16px] text-nowrap">
        <p className="leading-[20px]">{children}</p>
      </div>
    </div>
  );
}
type ContainerText1Props = {
  text: string;
};

function ContainerText1({ text }: ContainerText1Props) {
  return <Wrapper>{text}</Wrapper>;
}
type ContainerTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ContainerText({ text, additionalClassNames = "" }: ContainerTextProps) {
  return (
    <div className={clsx("content-stretch flex flex-col items-start relative shrink-0", additionalClassNames)}>
      <div className="flex flex-col font-['Gabarito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b3b3b3] text-[16px] text-nowrap">
        <p className="leading-[20px]">{text}</p>
      </div>
    </div>
  );
}

type MainProps = {
  onLogoClick?: () => void;
};

export default function Main({ onLogoClick }: MainProps = {}) {
  const [activeTab, setActiveTab] = useState<'work' | 'orgs'>('work');
  const [emailCopied, setEmailCopied] = useState(false);
  const [urlCopied, setUrlCopied] = useState(false);

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

  const handleCopyEmail = async () => {
    const email = 'nxmiji@gmail.com';
    
    try {
      // Try modern clipboard API first
      await navigator.clipboard.writeText(email);
      playChimeSound();
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
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
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
      } catch (error) {
        console.error('Failed to copy email:', error);
        // If all else fails, just open email client
        window.location.href = `mailto:${email}`;
      }
      
      textArea.remove();
    }
  };

  const handleCopyURL = async () => {
    const url = window.location.href;
    
    try {
      await navigator.clipboard.writeText(url);
      playChimeSound();
      setUrlCopied(true);
      setTimeout(() => setUrlCopied(false), 2000);
    } catch (err) {
      // Fallback method
      const textArea = document.createElement('textarea');
      textArea.value = url;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      try {
        document.execCommand('copy');
        playChimeSound();
        setUrlCopied(true);
        setTimeout(() => setUrlCopied(false), 2000);
      } catch (error) {
        console.error('Failed to copy URL:', error);
      }
      
      textArea.remove();
    }
  };

  return (
    <div className="content-stretch flex flex-col gap-[60px] md:gap-[200px] items-start px-[20px] md:px-[66px] py-[20px] md:py-[80px] relative size-full" data-name="Main">
      <div aria-hidden="true" className="absolute border-[#e2e2e2] border-[0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="absolute bottom-[-0.23px] h-[227px] left-[-17px] w-[264px]" data-name="Blur">
        <div className="absolute inset-[-39.65%_-34.09%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 444 407">
            <g filter="url(#filter0_f_15_1254)" id="Blur" opacity="0.1">
              <ellipse cx="222" cy="203.5" fill="url(#paint0_linear_15_1254)" rx="132" ry="113.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="407" id="filter0_f_15_1254" width="444" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_15_1254" stdDeviation="45" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_15_1254" x1="37" x2="439" y1="203" y2="179">
                <stop stopColor="#649174" />
                <stop offset="1" stopColor="#0BEA5C" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="content-stretch flex flex-col md:flex-row items-start justify-between px-0 md:px-20 relative shrink-0 w-full gap-8 md:gap-0" data-name="Container">
        <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px relative shrink-0 w-full md:w-auto" data-name="Left">
          <div className="content-stretch flex flex-col gap-[30px] md:gap-[40px] items-start relative shrink-0 w-full" data-name="Text">
            <div className="h-[63px] relative shrink-0 w-[56px] cursor-pointer" data-name="Image" onClick={onLogoClick}>
              <div className="absolute flex h-[71.767px] items-center justify-center left-[-5.04px] top-[-4.38px] w-[66.089px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
                <div className="flex-none rotate-[10deg] transition-transform duration-300 hover:rotate-0">
                  <div className="h-[63px] pointer-events-auto relative rounded-[26px] w-[56px]" data-name="image">
                    <div aria-hidden="true" className="absolute inset-0 rounded-[26px]">
                      <div className="absolute bg-[#f6f6f6] inset-0 rounded-[26px]" />
                      <img alt="" className="absolute max-w-none object-50%-50% object-contain rounded-[26px] size-full" src={imgImage} />
                    </div>
                    <div aria-hidden="true" className="absolute border-[3px] border-solid border-white inset-0 rounded-[26px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full" data-name="container">
              <div className="content-stretch flex flex-col gap-[40px] items-start pl-0 pr-[160px] py-0 relative w-full">
                <div className="content-stretch flex flex-col gap-[26px] h-[466px] items-start relative shrink-0 w-[637px]" data-name="Container">
                  <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Container">
                    <div 
                      className={clsx(
                        "content-stretch flex flex-col items-start px-[12px] py-[7px] relative rounded-[7px] shrink-0 cursor-pointer",
                        activeTab === 'work' && "bg-[#e2e2e2]"
                      )} 
                      data-name="Container"
                      onClick={() => setActiveTab('work')}
                    >
                      <div className={clsx(
                        "flex flex-col font-['Geist_Mono:Light',sans-serif] justify-center leading-[1.2] not-italic relative shrink-0 text-[14px] w-full",
                        activeTab === 'work' ? "text-[#181717]" : "text-[#606060]"
                      )}>
                        <p className="mb-0">Work</p>
                        <p>Experience</p>
                      </div>
                    </div>
                    <div 
                      className={clsx(
                        "content-stretch flex flex-col items-start px-[12px] py-[7px] relative rounded-[7px] shrink-0 cursor-pointer",
                        activeTab === 'orgs' && "bg-[#e2e2e2]"
                      )} 
                      data-name="Container"
                      onClick={() => setActiveTab('orgs')}
                    >
                      <div className={clsx(
                        "flex flex-col font-['Geist_Mono:Light',sans-serif] justify-center leading-[1.2] not-italic relative shrink-0 text-[14px] w-full",
                        activeTab === 'orgs' ? "text-[#181717]" : "text-[#606060]"
                      )}>
                        <p className="mb-0">{`Orgs & `}</p>
                        <p>Involvement</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-full" data-name="Container">
                    <div className="flex flex-col justify-center size-full">
                      {activeTab === 'work' ? (
                        <div className="relative shrink-0 w-full" data-name="Container">
                          <div className="flex flex-col justify-center size-full">
                            <div className="content-stretch flex flex-col gap-[14px] items-start justify-center px-[12px] py-0 relative w-full">
                              <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
                                <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
                                  <div className="flex flex-col font-['Gabarito:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#181717] text-[16px] text-nowrap">
                                    <p className="leading-[20px]">Mojo Payments Limited</p>
                                  </div>
                                  <div className="content-stretch flex items-end max-w-[178.02000427246094px] relative shrink-0 w-full" data-name="Link">
                                    <ContainerText text="mojo-pay.com" />
                                  </div>
                                </div>
                                <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
                                  <ContainerText1 text="Lead Product Designer" />
                                  <ContainerText text="2022 -- Present" additionalClassNames="w-full" />
                                </div>
                              </div>
                              <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
                                <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
                                  <div className="flex flex-col font-['Gabarito:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#181717] text-[16px] text-nowrap">
                                    <p className="leading-[20px]">Freelance</p>
                                  </div>
                                  <div className="content-stretch flex items-end max-w-[178.02000427246094px] relative shrink-0 w-full" data-name="Link">
                                    <ContainerText text="namiji" />
                                  </div>
                                </div>
                                <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="Container">
                                  <ContainerText1 text="Design and Strategy" />
                                  <Wrapper1>{`2020 --  Present`}</Wrapper1>
                                </div>
                              </div>
                              <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
                                <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
                                  <div className="flex flex-col font-['Gabarito:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#181717] text-[16px] text-nowrap">
                                    <p className="leading-[20px]">Pecepta</p>
                                  </div>
                                  <div className="content-stretch flex items-end max-w-[178.02000427246094px] relative shrink-0 w-full" data-name="Link">
                                    <ContainerText text="pecepta.com" />
                                  </div>
                                </div>
                                <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="Container">
                                  <Wrapper>{`Strategist & Consultant`}</Wrapper>
                                  <Wrapper1>{`2024 ->  2025`}</Wrapper1>
                                </div>
                              </div>
                              <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
                                <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
                                  <div className="flex flex-col font-['Gabarito:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#181717] text-[16px] text-nowrap">
                                    <p className="leading-[20px]">Ghana Tech Lab</p>
                                  </div>
                                  <div className="content-stretch flex items-end max-w-[178.02000427246094px] relative shrink-0 w-full" data-name="Link">
                                    <ContainerText text="Sunsetted" />
                                  </div>
                                </div>
                                <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="Container">
                                  <Wrapper>{`UX/UI Designer & Educator`}</Wrapper>
                                  <Wrapper1>{`2021 -> 2022`}</Wrapper1>
                                </div>
                              </div>
                              <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
                                <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
                                  <div className="flex flex-col font-['Gabarito:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#181717] text-[16px] text-nowrap">
                                    <p className="leading-[20px]">Complete Farmer</p>
                                  </div>
                                  <div className="content-stretch flex items-end max-w-[178.02000427246094px] relative shrink-0 w-full" data-name="Link">
                                    <ContainerText text="completefarmer.com" />
                                  </div>
                                </div>
                                <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="Container">
                                  <ContainerText1 text="UX/UI Designer" />
                                  <Wrapper1>{`2021 -> 2021`}</Wrapper1>
                                </div>
                              </div>
                              <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
                                <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
                                  <div className="flex flex-col font-['Gabarito:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#181717] text-[16px] text-nowrap">
                                    <p className="leading-[20px]">Amalitech</p>
                                  </div>
                                  <div className="content-stretch flex items-end max-w-[178.02000427246094px] relative shrink-0 w-full" data-name="Link">
                                    <ContainerText text="amalitech.com" />
                                  </div>
                                </div>
                                <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="Container">
                                  <ContainerText1 text="Software Engineer Trainee" />
                                  <Wrapper1>{`2020 -> 2020`}</Wrapper1>
                                </div>
                              </div>
                              <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
                                <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
                                  <div className="flex flex-col font-['Gabarito:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#181717] text-[16px] text-nowrap">
                                    <p className="leading-[20px]">British Council</p>
                                  </div>
                                  <div className="content-stretch flex items-end max-w-[178.02000427246094px] relative shrink-0 w-full" data-name="Link">
                                    <ContainerText text="britishcouncil.org.gh" />
                                  </div>
                                </div>
                                <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="Container">
                                  <ContainerText1 text="Marketing/Project Assistant" />
                                  <Wrapper1>{`2016 -> 2020`}</Wrapper1>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="px-[12px]">
                          <div className="content-stretch flex flex-col gap-[14px] items-start justify-center relative w-full">
                            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                              <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
                                <div className="flex flex-col font-['Gabarito:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#181717] text-[16px] text-nowrap">
                                  <p className="leading-[20px]">Figma</p>
                                </div>
                                <div className="content-stretch flex items-end max-w-[178.02000427246094px] relative shrink-0 w-full" data-name="Link">
                                  <ContainerText text="friends.figma.com" />
                                </div>
                              </div>
                              <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
                                <Wrapper>Community Leader</Wrapper>
                                <Wrapper1>{`2022 -> Present`}</Wrapper1>
                              </div>
                            </div>
                            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                              <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
                                <div className="flex flex-col font-['Gabarito:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181717] text-[16px] text-nowrap">
                                  <p className="leading-[20px]">Digital Dash//AFD Techtalk</p>
                                </div>
                                <div className="content-stretch flex items-end max-w-[178.02000427246094px] relative shrink-0 w-full" data-name="Link">
                                  <ContainerText text="Tech Podcast" />
                                </div>
                              </div>
                              <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                                <div className="basis-0 content-stretch flex flex-col gap-[4px] grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Container">
                                  <Wrapper>Editor and Contributor</Wrapper>
                                  <Wrapper1>{`2019 -> 2022`}</Wrapper1>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                              <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
                                <div className="flex flex-col font-['Gabarito:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181717] text-[16px] text-nowrap">
                                  <p className="leading-[20px]">VSO</p>
                                </div>
                                <div className="content-stretch flex items-end max-w-[178.02000427246094px] relative shrink-0 w-full" data-name="Link">
                                  <ContainerText text="vsointernational.org" />
                                </div>
                              </div>
                              <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                                <div className="basis-0 content-stretch flex flex-col gap-[4px] grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Container">
                                  <Wrapper>Volunteer</Wrapper>
                                  <Wrapper1>{`2017 -> 2017`}</Wrapper1>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                              <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
                                <div className="flex flex-col font-['Gabarito:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#181717] text-[16px] text-nowrap">
                                  <p className="leading-[20px]">Lead for Ghana</p>
                                </div>
                                <div className="content-stretch flex items-end max-w-[178.02000427246094px] relative shrink-0 w-full" data-name="Link">
                                  <ContainerText text="leadforghana.org" />
                                </div>
                              </div>
                              <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
                                <Wrapper>Campus Ambassador</Wrapper>
                                <Wrapper1>{`2016 -> 2017`}</Wrapper1>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-end justify-center relative shrink-0" data-name="RIGHT">
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container Left">
            <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
              <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0" data-name="Top">
                <p className="font-['Geist_Mono:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#181717] text-[13px] text-nowrap tracking-[-0.13px] uppercase">DIGITAL PRODUCT DESIGNER</p>
                <p className="font-['Geist_Mono:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#181717] text-[13px] text-nowrap tracking-[-0.13px] uppercase">Software DESIGNER</p>
                <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Location">
                  <Wrapper2>
                    <g id="chunk/map-pin">
                      <g id="Icon">
                        <path clipRule="evenodd" d={svgPaths.p29abfd00} fill="var(--fill-0, #B3B3B3)" fillRule="evenodd" />
                        <path clipRule="evenodd" d={svgPaths.p3d735100} fill="var(--fill-0, #B3B3B3)" fillRule="evenodd" />
                      </g>
                    </g>
                  </Wrapper2>
                  <p className="font-['Geist_Mono:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#181717] text-[13px] text-nowrap tracking-[-0.13px]">BASED IN ACCRA, GHANA.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0 px-0 md:px-20 py-[10px] relative shrink-0 w-full" data-name="Footer">
        <div className="relative rounded-[44px] shrink-0 w-full md:w-auto" data-name="Container">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[44px]">
            <div className="absolute bg-[#f1f4f4] inset-0 rounded-[44px]" />
            <img alt="" className="absolute max-w-none mix-blend-soft-light object-50%-50% object-cover opacity-20 rounded-[44px] size-full" src={imgContainer} />
          </div>
          <div className="content-stretch flex gap-[26px] items-center justify-center overflow-clip pl-[12px] pr-[24px] py-[4px] relative rounded-[inherit]">
            <div className="bg-[#f3f3f3] content-stretch flex flex-col items-start overflow-clip p-[4px] relative rounded-[28px] shrink-0" data-name="Avatr container">
              <div className="overflow-clip relative shrink-0 size-[31.304px]" data-name="Afroo (1) 2">
                <div className="absolute contents inset-[0_0.01%_0_-0.01%]" data-name="Layer 2">
                  <div className="absolute contents inset-[0_0.01%_0_-0.01%]" data-name="facial">
                    <div className="absolute contents inset-[0_0.01%_0_-0.01%]" data-name="Group">
                      <div className="absolute inset-[74.45%_0.01%_0_53.08%]" data-name="Vector">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6866 7.99716">
                          <path d={svgPaths.pca96380} fill="var(--fill-0, #B5B5B5)" id="Vector" opacity="0.27" />
                        </svg>
                      </div>
                      <div className="absolute inset-[70.58%_35.38%_19.53%_32.53%]" data-name="Vector">
                        <div className="absolute inset-[-0.53%_-0.33%_-0.52%_-0.37%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.1136 3.12799">
                            <path d={svgPaths.p32cf4d00} fill="var(--fill-0, #B5B5B5)" id="Vector" stroke="var(--stroke-0, #231F20)" strokeMiterlimit="10" strokeWidth="0.0321413" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute inset-[71.91%_1.14%_1.16%_-0.01%]" data-name="line">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.9485 8.42845">
                          <g id="line">
                            <path d={svgPaths.p1765bff0} fill="var(--fill-0, #231F20)" id="Vector" />
                            <path d={svgPaths.p31edd970} fill="var(--fill-0, #231F20)" id="Vector_2" />
                            <path d={svgPaths.p31386300} fill="var(--fill-0, #231F20)" id="Vector_3" />
                            <path d={svgPaths.p34158ef0} fill="var(--fill-0, #231F20)" id="Vector_4" />
                            <path d={svgPaths.p39668400} fill="var(--fill-0, #231F20)" id="Vector_5" />
                            <path d={svgPaths.pad86280} fill="var(--fill-0, #231F20)" id="Vector_6" />
                          </g>
                        </svg>
                      </div>
                      <div className="absolute inset-[57.96%_41.35%_23.1%_38.99%]" data-name="Vector">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.1541 5.92991">
                          <path d={svgPaths.p2952f4f0} fill="var(--fill-0, #B5B5B5)" id="Vector" />
                        </svg>
                      </div>
                      <div className="absolute inset-[60.25%_40.64%_27.85%_39.87%]" data-name="Vector">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.1001 3.7279">
                          <path d={svgPaths.p2598e100} fill="var(--fill-0, #231F20)" id="Vector" />
                        </svg>
                      </div>
                      <div className="absolute inset-[65.95%_36.15%_20.12%_39.86%]" data-name="Vector">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.50987 4.35781">
                          <path d={svgPaths.p3dbcc280} fill="var(--fill-0, #231F20)" id="Vector" opacity="0.16" />
                        </svg>
                      </div>
                      <div className="absolute contents inset-[63.07%_40.59%_25.97%_39.44%]" data-name="Group">
                        <Group1 additionalClassNames="inset-[63.07%_59.7%_25.97%_39.44%]">
                          <path d={svgPaths.p19698b80} fill="var(--fill-0, #B5B5B5)" id="Vector" />
                          <path d={svgPaths.p24e8c200} fill="var(--fill-0, #231F20)" id="Vector_2" />
                        </Group1>
                        <Group1 additionalClassNames="inset-[63.07%_40.59%_25.97%_58.55%]">
                          <path d={svgPaths.p3a657400} fill="var(--fill-0, #B5B5B5)" id="Vector" />
                          <path d={svgPaths.p26a973f0} fill="var(--fill-0, #231F20)" id="Vector_2" />
                        </Group1>
                      </div>
                      <div className="absolute contents inset-[25.82%_21.81%_50.14%_19.8%]" data-name="Group">
                        <div className="absolute inset-[25.83%_69.18%_50.14%_19.8%]" data-name="Group">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.44891 7.52385">
                            <g id="Group">
                              <path d={svgPaths.p1721ba80} fill="var(--fill-0, #B5B5B5)" id="Vector" />
                              <path d={svgPaths.p2b613470} fill="var(--fill-0, #231F20)" id="Vector_2" />
                            </g>
                          </svg>
                        </div>
                        <div className="absolute inset-[32.89%_72.27%_58.93%_24.64%]" data-name="Group">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.964587 2.55987">
                            <g id="Group">
                              <path d={svgPaths.pb896400} fill="var(--fill-0, #B5B5B5)" id="Vector" />
                              <path d={svgPaths.p26bbe200} fill="var(--fill-0, #231F20)" id="Vector_2" />
                            </g>
                          </svg>
                        </div>
                        <div className="absolute inset-[25.82%_21.81%_50.14%_67.16%]" data-name="Group">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.45086 7.52449">
                            <g id="Group">
                              <path d={svgPaths.pf00dd00} fill="var(--fill-0, #B5B5B5)" id="Vector" />
                              <path d={svgPaths.p9b36680} fill="var(--fill-0, #231F20)" id="Vector_2" />
                            </g>
                          </svg>
                        </div>
                        <div className="absolute inset-[32.89%_26.65%_58.93%_70.27%]" data-name="Group">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.964653 2.56033">
                            <g id="Group">
                              <path d={svgPaths.p23823010} fill="var(--fill-0, #B5B5B5)" id="Vector" />
                              <path d={svgPaths.p1b1fae80} fill="var(--fill-0, #231F20)" id="Vector_2" />
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div className="absolute inset-[17.62%_29.86%_30.48%_52.71%]" data-name="Vector">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.4579 16.2466">
                          <path d={svgPaths.p2c868600} fill="var(--fill-0, #231F20)" id="Vector" opacity="0.12" />
                        </svg>
                      </div>
                      <div className="absolute inset-[10.17%_29.86%_31.67%_28%]" data-name="Vector">
                        <div className="absolute inset-[-0.44%_-0.61%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3545 18.3682">
                            <path d={svgPaths.p2385f000} fill="var(--fill-0, #B5B5B5)" id="Vector" stroke="var(--stroke-0, #231F20)" strokeMiterlimit="10" strokeWidth="0.160707" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute inset-[18.48%_67.12%_79.46%_32.66%]" data-name="Vector">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0678612 0.644209">
                          <path d={svgPaths.p26fcfa80} fill="var(--fill-0, #231F20)" id="Vector" />
                        </svg>
                      </div>
                      <div className="absolute inset-[10.16%_30.11%_68.42%_28.74%]" data-name="Vector">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8833 6.70441">
                          <path d={svgPaths.p386aa300} fill="var(--fill-0, #231F20)" id="Vector" />
                        </svg>
                      </div>
                      <div className="absolute inset-[6.14%_28.02%_78.56%_27.52%]" data-name="Vector">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9175 4.78917">
                          <path d={svgPaths.p11cc4280} fill="var(--fill-0, #231F20)" id="Vector" />
                        </svg>
                      </div>
                      <div className="absolute inset-[5.68%_47.84%_90.99%_43.82%]" data-name="Vector">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.60996 1.04118">
                          <path d={svgPaths.p354b6a40} fill="var(--fill-0, #231F20)" id="Vector" />
                        </svg>
                      </div>
                      <div className="absolute inset-[7.31%_57.34%_87.42%_35.15%]" data-name="Vector">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.35121 1.64765">
                          <path d={svgPaths.p2d477c00} fill="var(--fill-0, #231F20)" id="Vector" />
                        </svg>
                      </div>
                      <div className="absolute inset-[1.33%_26.79%_77.78%_24.5%]" data-name="Vector">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2476 6.54124">
                          <path d={svgPaths.p1f3ab880} fill="var(--fill-0, #231F20)" id="Vector" />
                        </svg>
                      </div>
                      <div className="absolute inset-[1.07%_25.93%_77.5%_51.72%]" data-name="Vector">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.99664 6.71022">
                          <path d={svgPaths.p3057ca80} fill="var(--fill-0, #231F20)" id="Vector" />
                        </svg>
                      </div>
                      <div className="absolute inset-[0.46%_48.83%_78.06%_23.95%]" data-name="Vector">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.52224 6.72326">
                          <path d={svgPaths.p2b4fdd80} fill="var(--fill-0, #231F20)" id="Vector" />
                        </svg>
                      </div>
                      <div className="absolute inset-[1.39%_55.61%_95.32%_40.17%]" data-name="Vector">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.31883 1.02982">
                          <path d={svgPaths.p29560000} fill="var(--fill-0, #231F20)" id="Vector" />
                        </svg>
                      </div>
                      <div className="absolute inset-[0_45.13%_94.05%_48.05%]" data-name="Vector">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.13454 1.86346">
                          <path d={svgPaths.p2e41c2a0} fill="var(--fill-0, #231F20)" id="Vector" />
                        </svg>
                      </div>
                      <div className="absolute inset-[5.91%_29.4%_89.6%_66.42%]" data-name="Vector">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.30836 1.40655">
                          <path d={svgPaths.p2ce65580} fill="var(--fill-0, #231F20)" id="Vector" />
                        </svg>
                      </div>
                      <div className="absolute inset-[8.66%_26.79%_87.8%_69.23%]" data-name="Vector">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.24697 1.10798">
                          <path d={svgPaths.p37be1900} fill="var(--fill-0, #231F20)" id="Vector" />
                        </svg>
                      </div>
                      <div className="absolute inset-[28.24%_57.79%_66.54%_35.06%]" data-name="Vector">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.23812 1.63372">
                          <path d={svgPaths.p34001780} fill="var(--fill-0, #231F20)" id="Vector" />
                        </svg>
                      </div>
                      <div className="absolute inset-[34.48%_59.05%_59.8%_37.82%]" data-name="Vector">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.980226 1.78875">
                          <path d={svgPaths.p30662600} fill="var(--fill-0, #231F20)" id="Vector" />
                        </svg>
                      </div>
                      <div className="absolute inset-[27.95%_39.08%_66.83%_53.78%]" data-name="Vector">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.23812 1.63373">
                          <path d={svgPaths.p1e070f00} fill="var(--fill-0, #231F20)" id="Vector" />
                        </svg>
                      </div>
                      <div className="absolute inset-[34.19%_41.83%_60.1%_55.04%]" data-name="Vector">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.980225 1.78876">
                          <path d={svgPaths.p33171900} fill="var(--fill-0, #231F20)" id="Vector" />
                        </svg>
                      </div>
                      <div className="absolute inset-[44.08%_51.83%_49.38%_44.79%]" data-name="Vector">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.05669 2.04686">
                          <path d={svgPaths.p2256bc00} fill="var(--fill-0, #231F20)" id="Vector" />
                        </svg>
                      </div>
                      <div className="absolute inset-[56.95%_49.04%_41.03%_44.9%]" data-name="Vector">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.89511 0.630734">
                          <path d={svgPaths.p3f5e1400} fill="var(--fill-0, #231F20)" id="Vector" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[26px] items-center relative shrink-0" data-name="Socials">
              <ComponentLolIcon href="https://www.threads.com/@ha_k_eem">
                <g id="Component.lol Icon">
                  <path d={svgPaths.p7de9f00} fill="var(--fill-0, #606060)" id="Vector" />
                </g>
              </ComponentLolIcon>
              <ComponentLolIcon href="https://www.linkedin.com/in/hfadjei/">
                <g id="Component.lol Icon (1)">
                  <path d={svgPaths.p9574180} fill="var(--fill-0, #606060)" id="Vector" />
                </g>
              </ComponentLolIcon>
              <ComponentLolIcon href="https://x.com/nxmiji">
                <g clipPath="url(#clip0_15_1175)" id="Component LOL Icon">
                  <path d={svgPaths.p3e426900} fill="var(--fill-0, #606060)" id="Vector" />
                </g>
                <defs>
                  <clipPath id="clip0_15_1175">
                    <rect fill="white" height="20" width="20" />
                  </clipPath>
                </defs>
              </ComponentLolIcon>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#e2e2e2] border-[0.446px] border-solid inset-0 pointer-events-none rounded-[44px]" />
        </div>
        <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Right">
          <button 
            onClick={handleCopyEmail}
            className="bg-white content-stretch flex gap-[7px] items-start justify-center overflow-clip p-[14px] relative rounded-[18px] shadow-[0px_0.2px_0px_1px_rgba(96,96,96,0.15)] shrink-0 cursor-pointer border-none" 
            data-name="Action"
          >
            <Wrapper2>
              <g id="chunk/copy">
                <g id="Icon">
                  <path d={svgPaths.p2a364400} fill="var(--fill-0, #649174)" />
                  <path clipRule="evenodd" d={svgPaths.p1d74b280} fill="var(--fill-0, #649174)" fillRule="evenodd" />
                </g>
              </g>
            </Wrapper2>
            <p className="font-['Gabarito:Medium',sans-serif] font-medium leading-[0.9] relative shrink-0 text-[#649174] text-[18px] text-nowrap tracking-[-0.18px]">
              {emailCopied ? 'Email copied!' : 'Copy email'}
            </p>
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_2px_2px_0px_rgba(96,96,96,0.25)]" />
          </button>
          <button 
            onClick={handleCopyURL}
            className="bg-white content-stretch flex gap-[7px] items-start justify-center overflow-clip p-[14px] relative rounded-[18px] shadow-[0px_0.2px_0px_1px_rgba(96,96,96,0.15)] shrink-0 cursor-pointer border-none" 
            data-name="Action"
          >
            <p className="font-['Gabarito:SemiBold',sans-serif] font-semibold leading-[0.9] relative shrink-0 text-[#649174] text-[18px] text-nowrap tracking-[-0.18px]">
              {urlCopied ? 'Copied!' : 'Share this URL'}
            </p>
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_2px_2px_0px_rgba(96,96,96,0.25)]" />
          </button>
        </div>
      </div>
    </div>
  );
}