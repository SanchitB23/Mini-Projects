'use client';

import { useEffect, useState } from 'react';

export function TrafficLight() {
  const [isRed, setIsRed] = useState(true);
  const [isYellow, setIsYellow] = useState(false);
  const [isGreen, setIsGreen] = useState(false);

  useEffect(() => {
    let t1: NodeJS.Timeout, t2: NodeJS.Timeout, t3: NodeJS.Timeout;
    if (isRed)
      t1 = setTimeout(() => {
        setIsRed(false);
        setIsYellow(true);
        setIsGreen(false);
      }, 4000);
    if (isYellow)
      t2 = setTimeout(() => {
        setIsRed(false);
        setIsYellow(false);
        setIsGreen(true);
      }, 500);
    if (isGreen)
      t3 = setTimeout(() => {
        setIsRed(true);
        setIsYellow(false);
        setIsGreen(false);
      }, 3000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [isRed, isGreen, isYellow]);

  return (
    <section
      className={'flex flex-col gap-6 flex-1 mt-36 border p-4 rounded border-8'}
    >
      <div
        className={`${isRed ? 'bg-red-500' : 'bg-blue-500'} h-24 w-24 rounded-full`}
      />
      <div
        className={`${isYellow ? 'bg-yellow-500' : 'bg-blue-500'} h-24 w-24 rounded-full`}
      />
      <div
        className={`${isGreen ? 'bg-green-500' : 'bg-blue-500'} h-24 w-24 rounded-full`}
      />
    </section>
  );
}
