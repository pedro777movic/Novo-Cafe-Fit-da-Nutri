"use client";

import { Hero } from '@/components/landing/hero';
import { Impact } from '@/components/landing/impact';
import { Categories } from '@/components/landing/categories';
import { Experience } from '@/components/landing/experience';
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
                    <Impact />
                </div>
                <div id="progress-section-2">
                    <Categories />
                    <Experience />
                </div>
                <div id="progress-section-3">
                    <Showcase />
                    <Testimonials />
                </div>
                <div id="progress-section-4">
                    <FinalCta />
                </div>
            </main>
        </ProgressProvider>
    );
}
