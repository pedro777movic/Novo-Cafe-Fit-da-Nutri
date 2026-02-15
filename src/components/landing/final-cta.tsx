import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Check } from "lucide-react"
import Link from "next/link"

export function FinalCta() {
  const features = [
    "Acesso imediato ao app de receitas fit",
    "Receitas organizadas por café da manhã, almoços leves, bolos sem culpa, sobremesas zero e airfryer proteica",
    "Mais de 500 receitas simples, possíveis e funcionais",
    "Planejamento alimentar que decide por você — sem esforço, sem culpa e sem regras",
    "Acesso pelo celular, no seu tempo, do seu jeito",
  ]

  return (
    <section id="final-cta" className="w-full py-12 md:py-16 lg:py-20 bg-background">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center space-y-8 text-center bg-card p-10 rounded-lg shadow-2xl">
            <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl font-headline">
                Você chegou até aqui.
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Isso não é sobre força de vontade — é sobre ter o ambiente certo para decidir melhor, todos os dias.
                </p>
            </div>
            
            <div className="flex flex-col items-center space-y-4">
              <Link href="https://pay.cakto.com.br/3fmx6e8_558568" target="_blank" rel="noopener noreferrer" passHref>
                <Button size="lg" variant="secondary" className="text-lg px-10 py-6 font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow">
                  Liberar meu acesso
                </Button>
              </Link>
               <p className="text-sm text-muted-foreground">Acesso liberado por tempo limitado</p>
            </div>

            <div className="border-t border-border/50 w-full max-w-2xl my-8"></div>

            <div className="text-left max-w-2xl w-full mx-auto space-y-6">
                <h3 className="text-xl font-bold text-center font-headline">O que você recebe ao liberar o acesso:</h3>
                <ul className="space-y-3">
                    {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                    </li>
                    ))}
                </ul>
                <p className="text-center text-sm text-muted-foreground/80 italic pt-4">
                    *Nada de cardápios impossíveis.
                    <br />
                    Nada de contagem obsessiva.
                    <br />
                    Só comida que faz sentido para a sua rotina.*
                </p>
            </div>


          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
