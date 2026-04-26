import { CheckCircle2 } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const features = [
  {
    icon: <CheckCircle2 className="w-8 h-8 text-primary" />,
    description: "Nada para calcular",
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-primary" />,
    description: "Nada para decidir",
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-primary" />,
    description: "Nada para resistir",
  },
]

export function Experience() {
  const experiences = [
    {
      title: "Comer sem culpa.",
      description: "A melhor sensação não é emagrecer. É terminar uma refeição sem pensar: “eu estraguei tudo.” Sem culpa. Sem compensação. Sem promessas vazias.",
      color: "from-blue-500/20 to-indigo-500/10"
    },
    {
      title: "Retomar o controle.",
      description: "Não é sobre disciplina. É abrir a geladeira e já saber exatamente o que comer. Sem ansiedade. Sem indecisão. Sem compulsão no fim da noite.",
      color: "from-primary/20 to-purple-500/10"
    },
    {
      title: "Confiar em si de novo.",
      description: "Quando o processo é simples, a constância deixa de ser uma luta. Você para de se sabotar porque não precisa mais lutar contra si mesma todos os dias.",
      color: "from-purple-500/20 to-pink-500/10"
    }
  ]

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-card/20 relative">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {experiences.map((exp, i) => (
            <ScrollReveal key={i} delay={i * 200}>
              <div className={`glass-card p-8 md:p-10 rounded-[2.5rem] h-full flex flex-col space-y-6 group hover:translate-y-[-8px] transition-all duration-500`}>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${exp.color} flex items-center justify-center p-3 border border-white/10 group-hover:scale-110 transition-transform duration-500`}>
                  <div className="w-full h-full rounded-lg bg-background/40" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-black font-headline leading-tight">{exp.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
