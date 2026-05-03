"use client"

import * as React from "react"
import Link from "next/link"
import Autoplay from "embla-carousel-autoplay"
import { Button } from "@/components/ui/button"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { ScrollReveal } from "../scroll-reveal"

const testimonials = [
  {
    quote: "Eu passava a semana perfeita e destruía tudo no fim de semana. Hoje como doce sem culpa e já perdi 12kg em 4 meses. Finalmente parei de viver recomeçando toda segunda-feira.",
    author: "Juliana S.",
    result: "-12kg"
  },
  {
    quote: "Abri o armário e percebi que não sentia mais ansiedade. Eu simplesmente sabia o que comer. Isso mudou meu corpo e minha cabeça.",
    author: "Marcos P.",
    result: "-7kg"
  },
  {
    quote: "Achei que era só mais um app fit. Mas virou minha rotina. Hoje emagreço sem aquela sensação de punição.",
    author: "Beatriz C.",
    result: "-8kg"
  },
  {
    quote: "Minha autoestima voltou junto com meu corpo. As roupas começaram a servir de novo. E dessa vez, sem sofrimento.",
    author: "Carla M.",
    result: "-14kg"
  },
  {
    quote: "Parei de pensar em dieta. Comecei a viver. Isso resume tudo.",
    author: "Patricia A.",
    result: "-9kg"
  },
]

export function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: false })
  )

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-card">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
             <h2 className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Depoimentos</h2>
            <h2 className="text-4xl font-black tracking-tighter sm:text-6xl font-headline italic text-gradient-green">O controle já foi retomado.</h2>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-3 h-full">
                    <Card className="h-full glass-card border-white/5 relative overflow-hidden group">
                       <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 blur-2xl rounded-full translate-x-12 -translate-y-12" />
                      <CardContent className="flex flex-col items-start justify-center p-8 h-full gap-6">
                        <p className="text-xl font-medium leading-relaxed italic animate-in fade-in slide-in-from-bottom-4 duration-700">
                            "{testimonial.quote}"
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-background uppercase">
                                {testimonial.author[0]}
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-black font-headline text-primary">{testimonial.author}</span>
                                {testimonial.result && (
                                    <span className="text-xs font-bold text-green-500 bg-green-500/10 px-2 py-0.5 rounded-full w-fit">
                                        {testimonial.result}
                                    </span>
                                )}
                            </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="mt-20 flex flex-col items-center space-y-8 text-center max-w-2xl mx-auto">
            <div className="space-y-4">
              <p className="text-2xl font-bold text-foreground">
                Essas mulheres retomaram o controle.
              </p>
              <p className="text-xl text-muted-foreground italic">
                Agora é a sua vez.
              </p>
            </div>
            
            <div className="w-full max-w-sm">
                <Link href="https://pay.kiwify.com.br/yoHKy7Q" target="_blank" rel="noopener noreferrer" passHref className="w-full">
                    <Button 
                      size="lg" 
                      className="w-full text-xl py-8 font-black premium-glow shimmer shadow-2xl shadow-primary/20"
                    >
                      Quero meu acesso agora
                    </Button>
                </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
