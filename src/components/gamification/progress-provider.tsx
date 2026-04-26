"use client";

import React, { useState, useEffect, useRef } from "react";
import { ProgressBar } from "./progress-bar";

interface ProgressProviderProps {
  children: React.ReactNode;
}

const SECTION_IDS = [
  "progress-section-1",
  "progress-section-2",
  "progress-section-3",
  "progress-section-4",
];

export function ProgressProvider({ children }: ProgressProviderProps) {
  const [progress, setProgress] = useState(0);
  const sectionsRef = useRef<Map<string, boolean>>(new Map());



  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        sectionsRef.current.set(entry.target.id, entry.isIntersecting);
      });

      let maxVisibleIndex = -1;
      SECTION_IDS.forEach((id, index) => {
        if (sectionsRef.current.get(id)) {
          maxVisibleIndex = Math.max(maxVisibleIndex, index);
        }
      });
      
      const newProgress = maxVisibleIndex === -1 ? 0 : ((maxVisibleIndex + 1) / SECTION_IDS.length) * 100;
      setProgress(newProgress);

      if (newProgress === 100) {
        // Progress reached 100%
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.6,
    });

    const elements = SECTION_IDS.map(id => document.getElementById(id)).filter(Boolean);
    elements.forEach(el => observer.observe(el!));

    const finalCta = document.querySelector('#final-cta a, #final-cta button');
    const ctaClickListener = () => {
        setProgress(100);
        // TODO: log source: 'cta' analytics event
    };
    finalCta?.addEventListener('click', ctaClickListener);

    return () => {
      elements.forEach(el => observer.unobserve(el!));
      finalCta?.removeEventListener('click', ctaClickListener);
    };
  }, []);
  


  return (
    <>
      <ProgressBar progress={progress} />
      {children}
    </>
  );
}
