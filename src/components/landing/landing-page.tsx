"use client";

import { Hero } from '@/components/landing/hero';
import { ProblemSection } from '@/components/landing/problem-section';
import { Categories } from '@/components/landing/categories';
import { Experience } from '@/components/landing/experience';
import { InvisibleControl } from '@/components/landing/invisible-control';
import { Showcase } from '@/components/landing/showcase';
import { Testimonials } from '@/components/landing/testimonials';
import { FinalCta } from '@/components/landing/final-cta';
import { ProgressProvider } from '@/components/gamification/progress-provider';

export function LandingPage() {
    return (
        <ProgressProvider>
            <main className="flex-1">
                <div id="progress-section-1">
                    <Hero />
                    <ProblemSection />
                </div>
                <div id="progress-section-2">
                    <Experience />
                    <Categories />
                </div>
                <div id="progress-section-3">
                    <InvisibleControl />
                    <Showcase />
                </div>
                <div id="progress-section-4">
                    <Testimonials />
                    <FinalCta />
                </div>
            </main>
        </ProgressProvider>
    );
}
