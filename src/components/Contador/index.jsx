import React, { useState, useEffect } from 'react';

export const Contador = () => {
  const [timeElapsed, setTimeElapsed] = useState(calculateTimeElapsed());

  function calculateTimeElapsed() {
    const targetDate = new Date('March 31, 2016 18:00:00').getTime();
    const now = new Date().getTime();
    const difference = now - targetDate;

    if (difference < 0) {
      return {
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const seconds = Math.floor((difference / 1000) % 60);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const days = Math.floor((difference / (1000 * 60 * 60 * 24)) % 30);
    const months = Math.floor((difference / (1000 * 60 * 60 * 24 * 30)) % 12);
    const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));

    return {
      years,
      months,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed(calculateTimeElapsed());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-8 rounded-lg text-white">
      <h2 className="text-3xl text-primary font-bold mb-6 text-center">
        Countup Timer
      </h2>
      <div className="flex justify-center space-x-4">
        <TimeCircle label="Years" value={timeElapsed.years} />
        <TimeCircle label="Months" value={timeElapsed.months} />
        <TimeCircle label="Days" value={timeElapsed.days} />
        <TimeCircle label="Hours" value={timeElapsed.hours} />
        <TimeCircle label="Minutes" value={timeElapsed.minutes} />
        <TimeCircle label="Seconds" value={timeElapsed.seconds} />
      </div>
    </div>
  );
};

const TimeCircle = ({ label, value }) => (
  <div className="flex flex-col items-center justify-center w-24 h-24 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-full shadow-lg">
    <div className="text-2xl font-bold">{value}</div>
    <div className="text-sm">{label}</div>
  </div>
);
