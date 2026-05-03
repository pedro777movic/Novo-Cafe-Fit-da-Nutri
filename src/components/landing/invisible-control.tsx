import { ScrollReveal } from "@/components/scroll-reveal"
import { CheckCircle2 } from "lucide-react"

export function InvisibleControl() {
  const points = [
    "Nada para calcular",
    "Nada para decidir",
    "Nada para resistir"
  ]

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-card relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="container px-4 md:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Método Controle Invisível</h2>
                        <h3 className="text-3xl font-black tracking-tighter sm:text-6xl font-headline leading-[1.1] sm:leading-[0.9] text-gradient-green">
                            Isso não é mais um <br className="hidden sm:block" />
                            <span className="italic opacity-50">app de dieta.</span>
                        </h3>
                    </div>
                    
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        É o sistema que faz você emagrecer sem viver em guerra com a comida. Você segue o processo. O corpo responde.
                    </p>

                    <div className="grid gap-4">
                        {points.map((point, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 glass-card rounded-2xl border-white/5">
                                <CheckCircle2 className="w-6 h-6 text-primary" />
                                <span className="text-lg font-bold">{point}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
                <div className="relative group">
                    <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-[3rem] group-hover:bg-primary/30 transition-all duration-700" />
                    <div className="relative glass-card p-2 rounded-[2.5rem] border-white/10 overflow-hidden aspect-video flex items-center justify-center bg-black/60">
                        <div className="text-center p-8 space-y-4">
                             <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                 <div className="w-12 h-12 bg-primary rounded-full animate-pulse" />
                             </div>
                             <p className="text-primary font-black text-2xl font-headline italic tracking-tighter">CONTROLE TOTAL</p>
                             <p className="text-muted-foreground">Sistema em alta performance</p>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
