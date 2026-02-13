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
      imageUrl: "https://i.postimg.cc/br4ZWpxw/5-receitas-fitness-praticas-para-o-jantar.jpg",
      alt: "Showcase image 6",
      hint: "fit dessert"
    },
    {
      id: "showcase-7",
      imageUrl: "https://i.postimg.cc/MHgnNq7K/5f1075b74c3be8b3cf01d6a1700ecd0b.jpg",
      alt: "Showcase image 7",
      hint: "quick breakfast"
    },
    {
      id: "showcase-8",
      imageUrl: "https://i.postimg.cc/DfN48dtQ/a8fc28694dfba997b42e3fcb81431323.jpg",
      alt: "Showcase image 8",
      hint: "protein shake"
    },
    {
      id: "showcase-9",
      imageUrl: "https://i.postimg.cc/9Xkwrtvt/cf17eec37e66843a9770e49af26b2bd7.jpg",
      alt: "Showcase image 9",
      hint: "healthy lunch"
    },
    {
      id: "showcase-10",
      imageUrl: "https://i.postimg.cc/1RdVfcLH/efa521e945a4b5b93f0dabff69faa72a.jpg",
      alt: "Showcase image 10",
      hint: "meal prep"
    },
     {
      id: "showcase-11",
      imageUrl: "https://i.postimg.cc/3rq0dCP9/hamburguer-com-abobrinha-fitness-121358-800x450.webp",
      alt: "Showcase image 11",
      hint: "fit burger"
    },
    {
        id: "showcase-12",
        imageUrl: "https://i.postimg.cc/mZn1tN0m/hamburguer-de-frango-fit-com-aveia-730x480.jpg",
        alt: "Showcase image 12",
        hint: "chicken burger"
    },
    {
        id: "showcase-13",
        imageUrl: "https://i.postimg.cc/DfN48dtB/httpsrevistaanamaria-com-brmediauploadslegacy20200902manjar-com-calda-de-ameixa-fit-um-prato-saboro.jpg",
        alt: "Showcase image 13",
        hint: "fit pudding"
    },
    {
        id: "showcase-14",
        imageUrl: "https://i.postimg.cc/KcW3Rrd9/i-Stock-515862304.jpg",
        alt: "Showcase image 14",
        hint: "healthy food"
    }
  ]

export function Showcase() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
    const plugin2 = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: true, direction: 'right' })
  )

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-background">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              + 500 Receitas Fit
            </h2>
            <p className="max-w-[900px] text-xl text-muted-foreground md:text-2xl/relaxed lg:text-xl/relaxed xl:text-2xl/relaxed">
              Sim. Você pode comer isso.
            </p>
          </div>
        </ScrollReveal>
        <div className="flex flex-col gap-4">
            <ScrollReveal delay={200}>
            <Carousel
                plugins={[plugin.current]}
                className="w-full max-w-full mx-auto"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
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
                onMouseEnter={plugin2.current.stop}
                onMouseLeave={plugin2.current.reset}
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
          <p className="text-center text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-12 max-w-3xl mx-auto">
            Um app de receitas fit que elimina o caos mental da dieta e devolve o controle — sem esforço, sem culpa e sem regras.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
