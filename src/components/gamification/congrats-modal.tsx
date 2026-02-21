"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Particles } from "./particles";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface CongratsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCtaClick: () => void;
}

export function CongratsModal({ isOpen, onClose, onCtaClick }: CongratsModalProps) {
  const [showParticles, setShowParticles] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      const timer = setTimeout(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!prefersReducedMotion && !isMobile) {
          setShowParticles(true);
        }
      }, 240); // After modal fade-in
      const modalTimer = setTimeout(onClose, 8000); // Auto-close modal after 8s
      return () => {
        clearTimeout(timer);
        clearTimeout(modalTimer);
      };
    } else {
      const closingTimer = setTimeout(() => {
          setIsRendered(false);
          setShowParticles(false);
      }, 300); // duration of fade-out animation
      return () => clearTimeout(closingTimer);
    }
  }, [isOpen, onClose, isMobile]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isRendered) {
    return null;
  }

  const handleCtaClick = () => {
    onCtaClick();
    onClose();
  }

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-black/80 transition-opacity duration-300",
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="congrats-title"
    >
      <div
        className={cn(
          "relative bg-card rounded-lg shadow-2xl p-6 md:p-8 m-4 max-w-lg w-full text-center transition-all duration-200 ease-out",
          "transform",
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
          aria-label="Fechar"
        >
          <X className="h-5 w-5" />
        </button>

        <Particles show={showParticles} />

        <div className="relative z-10">
          <h2 id="congrats-title" className="text-2xl md:text-3xl font-bold font-display text-foreground">
            Parabéns — você chegou até aqui.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Você leu, entendeu e está pronta para transformar sua rotina com receitas que realmente funcionam. Liberar seu acesso é o último passo.
          </p>
          <div className="mt-8 flex flex-col items-center">
            <Link href="https://pay.cakto.com.br/3fmx6e8_558568" target="_blank" rel="noopener noreferrer" passHref>
                <Button
                    size="lg"
                    className="text-lg px-8 py-6 font-bold"
                    onClick={handleCtaClick}
                >
                    Liberar meu acesso
                </Button>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Acesso imediato • Sem regras • Sem complicação
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
