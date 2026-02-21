"use client";

import React, { useEffect, useState } from 'react';

const PARTICLE_COUNT = 30;

interface Particle {
  id: number;
  style: React.CSSProperties;
}

const createParticle = (id: number): Particle => {
  const angle = Math.random() * 360;
  const distance = Math.random() * 30 + 20; // 20vw to 50vw
  const duration = Math.random() * 0.4 + 0.8; // 0.8s to 1.2s
  const delay = Math.random() * 0.2;
  const size = Math.random() * 5 + 3; // 3px to 8px
  
  const color = Math.random() > 0.5 ? 'hsl(var(--celebration-accent))' : 'hsl(var(--progress-fill))'; 

  return {
    id,
    style: {
      '--angle': `${angle}deg`,
      '--distance': `${distance}vw`,
      '--duration': `${duration}s`,
      '--delay': `${delay}s`,
      '--size': `${size}px`,
      '--color': color,
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: 'var(--size)',
      height: 'var(--size)',
      backgroundColor: 'var(--color)',
      borderRadius: '50%',
      animation: 'explode var(--duration) cubic-bezier(0.2, 0.8, 0.2, 1) var(--delay) forwards',
      opacity: 0,
    } as React.CSSProperties,
  };
};

export const Particles = ({ show }: { show: boolean }) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (show) {
      const newParticles = Array.from({ length: PARTICLE_COUNT }).map((_, i) => createParticle(i));
      setParticles(newParticles);
      
      const timer = setTimeout(() => setParticles([]), 2000);
      return () => clearTimeout(timer);
    }
  }, [show]);

  if (!particles.length) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
       <style>{`
        @keyframes explode {
          0% {
            transform: translate(-50%, -50%) rotate(0) translateX(0);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) rotate(var(--angle)) translateX(var(--distance));
            opacity: 0;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .particle-animation {
            animation: none !important;
          }
        }
      `}</style>
      {particles.map(p => (
        <div key={p.id} style={p.style} className="particle-animation" />
      ))}
    </div>
  );
};
