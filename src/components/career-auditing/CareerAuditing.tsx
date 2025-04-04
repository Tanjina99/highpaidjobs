"use client";

import { useState, useEffect } from "react";

export default function CareerAuditing() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 3,
    minutes: 31,
    seconds: 14,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours -= 1;
            } else {
              hours = 23;
              if (days > 0) {
                days -= 1;
              } else {
                // Timer complete
                clearInterval(timer);
                return prevTime;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => {
    return num < 10 ? `0${num}` : num.toString();
  };

  return (
    <div className="flex flex-col items-center justify-center w-full py-12 bg-forground text-white">
      <h1 className="text-xl md:text-4xl md:mb-5 font-bold text-black">
        Door Closes for FREE Career Auditing
      </h1>

      <div className="flex flex-wrap justify-center gap-4">
        <TimeBox value={formatNumber(timeLeft.days)} label="Days" />
        <TimeBox value={formatNumber(timeLeft.hours)} label="Hours" />
        <TimeBox value={formatNumber(timeLeft.minutes)} label="Minutes" />
        <TimeBox value={formatNumber(timeLeft.seconds)} label="Seconds" />
      </div>
    </div>
  );
}

function TimeBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center w-24 h-28 bg-[#DC2626] text-white rounded-md">
      <div className="text-5xl font-bold">{value}</div>
      <div className="text-sm mt-1">{label}</div>
    </div>
  );
}
