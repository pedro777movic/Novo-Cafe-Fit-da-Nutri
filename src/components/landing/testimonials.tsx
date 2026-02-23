"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { ScrollReveal } from "../scroll-reveal"

const testimonials = [
  {
    quote: "Mudei minha relação com a comida. Simples assim.",
    author: "Juliana S.",
  },
  {
    quote: "Nunca pensei que seria tão fácil comer bem.",
    author: "Marcos P.",
  },
  {
    quote: "Isso não é um app. É liberdade.",
    author: "Beatriz C.",
  },
  {
    quote: "A culpa foi embora. Só ficou o prazer.",
    author: "Carla M.",
  },
  {
    quote: "Finalmente o controle está na minha mão. E é leve.",
    author: "Ricardo F.",
  },
  {
    quote: "É um atalho mental. Você só segue e o resultado vem.",
    author: "Patricia A.",
  },
  {
    quote: "Parei de pensar em dieta. Comecei a viver.",
    author: "Fernando L.",
  },
  {
    quote: "O corpo que eu queria, comendo o que eu gosto.",
    author: "Amanda R.",
  },
  {
    quote: "A constância virou rotina. Não uma luta.",
    author: "Lucas G.",
  },
  {
    quote: "Minha autoestima mudou junto com meu corpo.",
    author: "Roberto N.",
  },
  {
    quote: "Funciona. Ponto final.",
    author: "Vanessa D.",
  },
  {
    quote: "O fim da guerra com a balança.",
    author: "Thiago B.",
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
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">O controle já foi retomado.</h2>
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
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col justify-center bg-background/50 shadow-lg">
                      <CardContent className="flex flex-col items-center justify-center p-6 text-center gap-4">
                        <p className="text-lg font-medium">"{testimonial.quote}"</p>
                        <span className="text-sm font-bold text-primary">{testimonial.author}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </ScrollReveal>
      </div>
    </section>
  )
}
