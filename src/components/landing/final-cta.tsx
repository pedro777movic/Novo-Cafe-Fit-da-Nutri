import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Check, X, AlertCircle } from "lucide-react"
import Link from "next/link"
import { CountdownTimer } from "../countdown-timer"
import { trackInitiateCheckout } from "@/lib/tracking"

export function FinalCta() {
  const features = [
    "Acesso imediato ao app de receitas fit",
    "+500 receitas organizadas para emagrecimento real",
    "Cafés da manhã leves e rápidos",
    "Almoços práticos para rotina corrida",
    "Bolos e sobremesas sem culpa",
    "Receitas zero desculpas para airfryer",
    "Método Controle Invisível para acabar com a indecisão alimentar",
    "Planejamento alimentar que decide por você",
    "Acesso pelo celular, no seu tempo, do seu jeito",
    "Acesso imediato e vitalício",
  ]

  const negatives = [
    "Nada de cardápios impossíveis.",
    "Nada de contagem obsessiva.",
    "Nada de viver em culpa.",
  ]

  return (
    <section id="final-cta" className="w-full py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="container px-4 md:px-6 relative">
        <ScrollReveal>
          <div className="flex flex-col items-center space-y-12 text-center max-w-5xl mx-auto">
            
            <div className="space-y-6 max-w-3xl">
                <h2 className="text-4xl font-black tracking-tighter sm:text-6xl font-headline">
                    Você chegou até aqui.
                </h2>
                <div className="space-y-4 text-xl text-muted-foreground leading-relaxed">
                    <p>E no fundo, você já sabe: o problema nunca foi comida. Foi tentar emagrecer do jeito errado.</p>
                    <p className="font-bold text-foreground italic">Dietas restritivas geram culpa. Culpa gera compulsão. Compulsão gera frustração. E o ciclo nunca acaba.</p>
                    <p>O Café Fit quebra isso. Você não precisa de mais motivação. Você precisa de um sistema que funcione até nos dias ruins.</p>
                </div>
            </div>

            <div className="w-full glass-card px-4 py-10 sm:p-16 rounded-3xl md:rounded-[3rem] border-white/10 relative shadow-[0_0_100px_rgba(var(--primary),0.1)]">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-purple-500 to-primary" />
                
                <div className="grid lg:grid-cols-2 gap-12 text-left items-start">
                    <div className="space-y-8">
                        <div className="space-y-2">
                             <h3 className="text-2xl font-black font-headline tracking-tight">O que você recebe hoje:</h3>
                        </div>
                        <ul className="space-y-4">
                            {features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3 group">
                                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/30 transition-colors">
                                    <Check className="w-4 h-4 text-primary" />
                                </div>
                                <span className="text-muted-foreground font-medium">{feature}</span>
                            </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-8 lg:border-l lg:border-white/5 lg:pl-12">
                        <div className="space-y-6">
                             {negatives.map((neg, i) => (
                                <div key={i} className="flex items-center gap-3 text-muted-foreground/60 line-through decoration-destructive/50">
                                    <X className="w-5 h-5 text-destructive/50" />
                                    <span>{neg}</span>
                                </div>
                             ))}
                        </div>

                        <div className="bg-primary/5 border border-primary/20 px-4 py-8 sm:p-8 rounded-3xl space-y-6 relative shimmer">
                             <div className="space-y-1">
                                <p className="text-primary font-bold uppercase tracking-[0.2em] text-xs">Valor Temporário</p>
                                <h4 className="text-3xl font-black font-headline">Oferta de Lançamento</h4>
                             </div>
                             
                             <div className="space-y-4">
                                <Link href="https://pay.kiwify.com.br/yoHKy7Q" target="_blank" rel="noopener noreferrer" passHref className="w-full">
                                    <Button 
                                      size="lg" 
                                      className="w-full h-auto text-lg md:text-xl py-6 md:py-8 font-black premium-glow shimmer whitespace-normal text-center leading-tight"
                                      onClick={trackInitiateCheckout}
                                    >
                                        Quero emagrecer sem culpa agora
                                    </Button>
                                </Link>
                                <div className="flex flex-col items-center gap-2">
                                     <CountdownTimer />
                                     <p className="text-xs text-muted-foreground/60 italic flex items-center gap-1">
                                        <AlertCircle className="w-3 h-3" />
                                        Após esse lote, o preço sobe automaticamente.
                                     </p>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-8">
                 <p className="text-muted-foreground/40 text-sm">© 2026 Café Fit da Nutri. All rights reserved.</p>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
