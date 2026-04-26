"use client"

import * as React from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { ScrollReveal } from "@/components/scroll-reveal"

const showcaseItems = [
  {
    id: "showcase-1",
    imageUrl: "https://i.postimg.cc/5yDXTbBf/01-5.jpg",
    alt: "Showcase image 1",
    hint: "food app"
  },
  {
    id: "showcase-2",
    imageUrl: "https://i.postimg.cc/L4WgnBrj/03-7.png",
    alt: "Showcase image 2",
    hint: "healthy meal"
  },
  {
    id: "showcase-3",
    imageUrl: "https://i.postimg.cc/3rq0dCPG/1118853dc5ec0c7eedbbbec7a2e6e264.jpg",
    alt: "Showcase image 3",
    hint: "recipe plan"
  },
  {
    id: "showcase-4",
    imageUrl: "https://i.postimg.cc/xjZNcyWH/323d0e4336dcb9bbe1833c62a820.png",
    alt: "Showcase image 4",
    hint: "mobile fitness"
  },
  {
    id: "showcase-5",
    imageUrl: "https://i.postimg.cc/d3ghpw21/4-pratos-fitness-para-incluir-no-dia-a-dia-bh-mulher-1.jpg",
    alt: "Showcase image 5",
    hint: "easy cooking"
  },
]

const showcaseItems2 = [
    {
      id: "showcase-6",
      imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop",
      alt: "Salada fit colorida",
      hint: "healthy salad"
    },
    {
      id: "showcase-7",
      imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop",
      alt: "Prato fit equilibrado",
      hint: "balanced meal"
    },
    {
      id: "showcase-8",
      imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
      alt: "Bowl de vegetais e grãos",
      hint: "veggie bowl"
    },
    {
      id: "showcase-9",
      imageUrl: "https://images.unsplash.com/photo-1494390248081-4e521a5940db?q=80&w=800&auto=format&fit=crop",
      alt: "Café da manhã fit",
      hint: "fit breakfast"
    },
    {
      id: "showcase-10",
      imageUrl: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=800&auto=format&fit=crop",
      alt: "Salmão com aspargos",
      hint: "salmon dish"
    },
     {
      id: "showcase-11",
      imageUrl: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop",
      alt: "Smoothie bowl",
      hint: "smoothie bowl"
    },
    {
        id: "showcase-12",
        imageUrl: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?q=80&w=800&auto=format&fit=crop",
        alt: "Abacate toast fit",
        hint: "avocado toast"
    },
    {
        id: "showcase-13",
        imageUrl: "https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=800&auto=format&fit=crop",
        alt: "Frutas frescas",
        hint: "fresh fruits"
    },
    {
        id: "showcase-14",
        imageUrl: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=800&auto=format&fit=crop",
        alt: "Omelete fit",
        hint: "fit omelette"
    }
  ]

export function Showcase() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  )
    const plugin2 = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: false })
  )

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-background">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <h2 className="text-4xl font-black tracking-tighter sm:text-6xl font-headline italic">
              + 500 Receitas Fit
            </h2>
            <p className="max-w-[700px] text-xl text-muted-foreground md:text-2xl font-medium tracking-tight">
              Sim. Você pode comer isso.
            </p>
          </div>
        </ScrollReveal>
        <div className="flex flex-col gap-4">
            <ScrollReveal delay={200}>
            <Carousel
                plugins={[plugin.current]}
                className="w-full max-w-full mx-auto"
                opts={{
                align: "start",
                loop: true,
                }}
            >
                <CarouselContent>
                {showcaseItems.map((item) => (
                    <CarouselItem key={item.id} className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                    <div className="p-1 h-full">
                        <Card className="overflow-hidden shadow-2xl border-2 border-border group h-full">
                        <div className="relative aspect-[4/3] w-full">
                            <Image
                            src={item.imageUrl}
                            alt={item.alt}
                            fill
                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            data-ai-hint={item.hint}
                            />
                        </div>
                        </Card>
                    </div>
                    </CarouselItem>
                ))}
                </CarouselContent>
            </Carousel>
            </ScrollReveal>
            <ScrollReveal delay={400}>
            <Carousel
                plugins={[plugin2.current]}
                className="w-full max-w-full mx-auto"
                opts={{
                align: "start",
                loop: true,
                }}
            >
                <CarouselContent>
                {showcaseItems2.map((item) => (
                    <CarouselItem key={item.id} className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                    <div className="p-1 h-full">
                        <Card className="overflow-hidden shadow-2xl border-2 border-border group h-full">
                        <div className="relative aspect-[4/3] w-full">
                            <Image
                            src={item.imageUrl}
                            alt={item.alt}
                            fill
                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            data-ai-hint={item.hint}
                            />
                        </div>
                        </Card>
                    </div>
                    </CarouselItem>
                ))}
                </CarouselContent>
            </Carousel>
            </ScrollReveal>
        </div>
        <ScrollReveal delay={300}>
          <div className="mt-16 text-center max-w-4xl mx-auto space-y-6">
            <div className="h-px w-24 bg-primary/30 mx-auto" />
            <p className="text-muted-foreground text-lg md:text-2xl leading-relaxed italic">
              "Um app de receitas fit que elimina o caos mental da dieta e devolve o controle — sem esforço, sem culpa e sem efeito sanfona."
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
