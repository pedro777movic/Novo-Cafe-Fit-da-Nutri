import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import Link from "next/link"
import { trackInitiateCheckout } from "@/lib/tracking"

export function Hero() {
  return (
    <section className="w-full pt-24 pb-16 md:pt-36 md:pb-24 lg:pt-48 lg:pb-32 overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[10%] w-[40%] h-[40%] bg-primary/15 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] right-[10%] w-[30%] h-[30%] bg-accent/10 blur-[100px] rounded-full" />
      </div>

      <div className="container px-4 md:px-6 relative">
        <ScrollReveal>
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="max-w-4xl space-y-6">
              <h2 className="text-primary font-bold tracking-[0.2em] uppercase text-sm md:text-base">
                Café Fit da Nutri
              </h2>
              <h1 className="text-4xl font-black tracking-tighter sm:text-7xl md:text-8xl font-headline text-foreground leading-[1.1] sm:leading-[0.9]">
                Emagreça comendo <br className="hidden sm:block" />
                <span className="text-gradient-green italic"> receitas fit</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground text-lg sm:text-xl md:text-2xl mt-4 leading-relaxed">
                Emagreça comendo receitas fit que você realmente vai fazer — sem viver em guerra com a comida.
              </p>

              <div className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-3xl glass-card border-white/5 max-w-3xl mt-8">
                <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 border-2 border-primary/20 shadow-xl shadow-primary/10">
                  <img 
                    src="/assets/nutri-ana.jpg" 
                    alt="Nutricionista Ana Cantanhede" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left space-y-2">
                  <p className="text-sm text-primary font-bold tracking-wider uppercase">Desenvolvido por especialista</p>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    <span className="text-foreground font-bold">Ana Cantanhede</span>, especialista em comportamento alimentar e emagrecimento sustentável. Com mais de 10 anos de experiência clínica, Ana criou o Café Fit após perceber que suas pacientes não precisavam de mais dietas — precisavam de um sistema que funcionasse na vida real.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 w-full max-w-sm">
              <Link href="https://pay.kiwify.com.br/yoHKy7Q" target="_blank" rel="noopener noreferrer" passHref className="w-full">
                <Button 
                  size="lg" 
                  className="w-full text-xl py-8 font-black premium-glow shimmer shadow-2xl shadow-primary/20"
                  onClick={trackInitiateCheckout}
                >
                  Quero meu acesso imediato
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground/60 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Vagas de lançamento disponíveis hoje
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
