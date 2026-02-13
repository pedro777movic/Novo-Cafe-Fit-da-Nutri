import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import Link from "next/link"

export function Hero() {
  return (
    <section className="w-full py-20 md:py-28 lg:py-32">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center space-y-6 text-center">
            <div className="max-w-4xl">
              <h1 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline text-foreground">
                Comida não é sua inimiga.
                <br />
                A culpa é.
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl mt-4">
                Um sistema simples de receitas para quem está cansada de pensar, se culpar e sentir que nunca acerta na alimentação.
              </p>
            </div>
            <Link href="#final-cta" passHref>
              <Button size="lg" className="text-lg px-8 py-6 font-bold">
                Liberar meu acesso
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
