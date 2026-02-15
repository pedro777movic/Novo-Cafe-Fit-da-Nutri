import { CheckCircle } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const features = [
  {
    icon: <CheckCircle className="w-8 h-8 text-primary" />,
    description: "Nada para calcular",
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-primary" />,
    description: "Nada para decidir",
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-primary" />,
    description: "Nada para resistir",
  },
]

export function Experience() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-card">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Uma Experiência que Liberta</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Isso não é mais um app de dieta. É um atalho mental.
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-5xl items-center justify-center gap-8 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <div className="flex items-center justify-center gap-4">
                  {feature.icon}
                  <span className="text-lg font-medium">{feature.description}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={500}>
            <p className="text-xl text-muted-foreground mt-4">
              Você segue o processo. O corpo responde.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
