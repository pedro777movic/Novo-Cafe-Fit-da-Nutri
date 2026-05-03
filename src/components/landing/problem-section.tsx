import { ScrollReveal } from "@/components/scroll-reveal"

export function ProblemSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h2 className="text-3xl font-black tracking-tight sm:text-5xl font-headline leading-tight sm:leading-none text-gradient-green">
                O problema nunca foi falta <br className="hidden sm:block" />
                <span className="italic">de força de vontade.</span>
              </h2>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 text-left items-center pt-8">
              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed">
                  Foi tentar seguir dietas restritivas que fazem você perder o controle, descontar na comida e começar tudo de novo na segunda-feira.
                </p>
                <div className="h-1 w-20 bg-primary/30 rounded-full" />
              </div>
              
              <div className="glass-card p-6 md:p-8 rounded-2xl relative">
                 <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/20 rounded-full blur-xl" />
                 <p className="text-muted-foreground text-lg leading-relaxed italic">
                  "O Café Fit da Nutri é um sistema simples com +500 receitas fit que elimina o caos mental da alimentação e devolve o controle do seu corpo — sem sofrimento."
                 </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
