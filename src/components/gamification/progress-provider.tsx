"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { ProgressBar } from "./progress-bar";
import { CongratsModal } from "./congrats-modal";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionsRef = useRef<Map<string, boolean>>(new Map());

  const handleModalOpen = useCallback(() => {
    const hasSeenModal = sessionStorage.getItem("congratsModalSeen");
    if (!hasSeenModal) {
      setIsModalOpen(true);
      sessionStorage.setItem("congratsModalSeen", "true");
      // TODO: Log congrats_shown analytics event
    }
  }, []);

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
        handleModalOpen();
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
        handleModalOpen();
        // TODO: log `congrats_shown` (source: 'cta') analytics event
    };
    finalCta?.addEventListener('click', ctaClickListener);

    return () => {
      elements.forEach(el => observer.unobserve(el!));
      finalCta?.removeEventListener('click', ctaClickListener);
    };
  }, [handleModalOpen]);
  
  const handleModalClose = () => {
      setIsModalOpen(false);
  };

  const handleCtaClickInModal = () => {
      // TODO: log congrats_cta_click analytics event
  };

  return (
    <>
      <ProgressBar progress={progress} />
      {children}
      <CongratsModal isOpen={isModalOpen} onClose={handleModalClose} onCtaClick={handleCtaClickInModal} />
    </>
  );
}
