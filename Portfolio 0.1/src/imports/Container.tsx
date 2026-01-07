import clsx from "clsx";
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("content-stretch flex flex-col items-start relative shrink-0", additionalClassNames)}>
      <div className="flex flex-col font-['Gabarito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b3b3b3] text-[16px] text-nowrap">
        <p className="leading-[20px]">{children}</p>
      </div>
    </div>
  );
}
type ContainerText1Props = {
  text: string;
};

function ContainerText1({ text }: ContainerText1Props) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Gabarito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#181717] text-[16px] text-nowrap">
        <p className="leading-[20px]">{text}</p>
      </div>
    </div>
  );
}
type ContainerTextProps = {
  text: string;
};

function ContainerText({ text }: ContainerTextProps) {
  return <Wrapper>{text}</Wrapper>;
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[26px] items-start relative size-full" data-name="Container">
      <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Container">
        <div className="content-stretch flex flex-col items-start px-[12px] py-[7px] relative shrink-0" data-name="Container">
          <div className="flex flex-col font-['Geist_Mono:Light',sans-serif] justify-center leading-[1.2] not-italic relative shrink-0 text-[#606060] text-[14px] w-full">
            <p className="mb-0">Work</p>
            <p>Experience</p>
          </div>
        </div>
        <div className="bg-[#e2e2e2] content-stretch flex flex-col items-start px-[12px] py-[7px] relative rounded-[7px] shrink-0" data-name="Container">
          <div className="flex flex-col font-['Geist_Mono:Light',sans-serif] justify-center leading-[1.2] not-italic relative shrink-0 text-[#181717] text-[14px] w-full">
            <p className="mb-0">{`Orgs & `}</p>
            <p>Involvement</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[14px] items-start justify-center relative shrink-0 w-full" data-name="Container">
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
            <ContainerText1 text="Community Leader" />
            <Wrapper additionalClassNames="w-full">{`2022 -> Present`}</Wrapper>
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
              <ContainerText1 text="Editor and Contributor" />
              <Wrapper additionalClassNames="w-full">{`2019 -> 2022`}</Wrapper>
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
              <ContainerText1 text="Volunteer" />
              <Wrapper additionalClassNames="w-full">{`2017 -> 2017`}</Wrapper>
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
            <ContainerText1 text="Campus Ambassador" />
            <Wrapper additionalClassNames="w-full">{`2016 -> 2017`}</Wrapper>
          </div>
        </div>
      </div>
    </div>
  );
}