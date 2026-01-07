import { useState, useEffect } from 'react';

export function TimeZoneWidget() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-GB', {
      timeZone: 'GMT',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });
  };

  return (
    <div className="inline-block">
      {/* Dark Widget Card */}
      <div className="relative bg-[#2d2d2d] text-white rounded-2xl px-8 py-6 overflow-hidden max-w-[280px]">
        {/* Background decoration - map illustration */}
        <div className="absolute inset-0 opacity-10 flex items-center justify-center">
          <svg
            width="120"
            height="80"
            viewBox="0 0 120 80"
            fill="none"
            className="text-white"
          >
            {/* Simple map illustration */}
            <path
              d="M10 40 L30 20 L50 35 L70 25 L90 40 L110 30"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="30" cy="20" r="3" fill="currentColor" />
            <circle cx="70" cy="25" r="3" fill="currentColor" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="mb-3">
            <p className="text-[11px] font-medium tracking-wide">Time Zone</p>
          </div>
          <div className="mb-3">
            <p className="text-[22px] font-bold">GMT</p>
            <p className="text-[13px] text-gray-400">UTC +0</p>
          </div>
        </div>
      </div>

      {/* Time Display Below */}
      <div className="text-center mt-3">
        <p className="text-[12px] text-gray-600">
          UTC +0 GMT || {formatTime(time)} PM GMT
        </p>
      </div>
    </div>
  );
}
