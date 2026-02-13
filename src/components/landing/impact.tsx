import { Dumbbell, Zap, ShieldCheck } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const features = [
  {
    icon: <Dumbbell className="w-12 h-12 text-primary" />,
    title: "Comer sem culpa.",
    description: "Aquele alívio silencioso depois de comer — sem precisar compensar depois, sem peso na consciência. Você come o que gosta e sente, pela primeira vez em muito tempo, que está tudo bem.",
  },
  {
    icon: <Zap className="w-12 h-12 text-primary" />,
    title: "Retomar o controle.",
    description: "Não é sobre força de vontade. É acordar sabendo exatamente o que comer, sem discutir consigo mesma, sem cansar a mente. A rotina flui. A decisão já está tomada.",
  },
  {
    icon: <ShieldCheck className="w-12 h-12 text-primary" />,
    title: "Confiar em si de novo.",
    description: "Quando o processo é simples, a constância deixa de ser um esforço. Você para de se sabotar porque não precisa mais lutar contra si. É só seguir — e ver funcionando.",
  },
]

export function Impact() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-card">
      <div className="container grid items-start gap-12 px-4 md:px-6 lg:grid-cols-3 lg:gap-20">
        {features.map((feature, index) => (
          <ScrollReveal key={index} delay={index * 100}>
            <div className="flex flex-col items-center text-center space-y-4">
              {feature.icon}
              <div className="space-y-2">
                <h3 className="text-2xl font-bold font-headline">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
