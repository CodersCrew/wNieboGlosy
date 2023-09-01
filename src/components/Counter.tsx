'use client';

import React, { useEffect, useState } from 'react';

type CounterProps = {
  targetDate: string;
};

const Counter = ({ targetDate }: CounterProps) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const targetTime = new Date(targetDate).getTime();
    const timeLeft = targetTime - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  const updateTimer = () => {
    setTimeLeft(calculateTimeLeft());
    requestAnimationFrame(updateTimer);
  };

  useEffect(() => {
    requestAnimationFrame(updateTimer);
  });

  const addPadStart = (value: number) => {
    return value.toString().padStart(2, '0');
  };

  return (
    <div className="flex items-end gap-2 rounded-md bg-black/70 px-2 py-2 font-cinzel text-4xl font-normal lg:gap-4 lg:px-5 lg:text-6xl">
      <div className="text-center">
        <p className="mb-1 text-base">dni</p>
        <p suppressHydrationWarning>{addPadStart(timeLeft.days)}</p>
      </div>
      <p>:</p>
      <div className="text-center">
        <p className="mb-1 text-base">godzin</p>
        <p suppressHydrationWarning>{addPadStart(timeLeft.hours)}</p>
      </div>
      <p>:</p>
      <div className="text-center">
        <p className="mb-1 text-base">minut</p>
        <p suppressHydrationWarning>{addPadStart(timeLeft.minutes)}</p>
      </div>
      <p>:</p>
      <div className="text-center">
        <p className="mb-1 text-base">sekund</p>
        <p suppressHydrationWarning>{addPadStart(timeLeft.seconds)}</p>
      </div>
    </div>
  );
};

export default Counter;
