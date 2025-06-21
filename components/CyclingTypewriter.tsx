"use client";

import { useState, useEffect } from 'react';
import { TypewriterEffect } from '@/components/TypewriterEffect';

interface CyclingTypewriterProps {
  examples: string[];
  pauseDuration?: number;
  className?: string;
}

export function CyclingTypewriter({ 
  examples, 
  pauseDuration = 3000,
  className = "" 
}: CyclingTypewriterProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (examples.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % examples.length);
      setKey(prev => prev + 1); // Force remount of TypewriterEffect
    }, pauseDuration);

    return () => clearInterval(timer);
  }, [examples.length, pauseDuration]);

  return (
    <div className={className}>
      <TypewriterEffect 
        key={key}
        text={examples[currentIndex]}
      />
    </div>
  );
}