"use client";

import { useState, useEffect } from 'react';
import { TypewriterEffect } from '@/components/TypewriterEffect';

interface CyclingTypewriterProps {
  examples: string[];
  typingSpeed?: number; // ms per character
  readingTime?: number; // ms to read after typing completes
  className?: string;
}

export function CyclingTypewriter({ 
  examples, 
  typingSpeed = 50,
  readingTime = 3000,
  className = "" 
}: CyclingTypewriterProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (examples.length <= 1) return;

    const currentText = examples[currentIndex];
    const typingDuration = currentText.length * typingSpeed;
    const totalDuration = typingDuration + readingTime;

    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % examples.length);
      setKey(prev => prev + 1); // Force remount of TypewriterEffect
    }, totalDuration);

    return () => clearTimeout(timer);
  }, [currentIndex, examples, typingSpeed, readingTime]);

  return (
    <div className={className}>
      <TypewriterEffect 
        key={key}
        text={examples[currentIndex]}
      />
    </div>
  );
}