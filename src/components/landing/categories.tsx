
import Image from "next/image"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { ScrollReveal } from "@/components/scroll-reveal"

const categories = [
  {
    id: "fit-breakfast",
    title: "Começar o dia leve",
    kcal: "~330 kcal",
  },
  {
    id: "zero-desserts",
    title: "Doces sem culpa",
    kcal: "~180 kcal",
  },
  {
    id: "guilt-free-cakes",
    title: "Bolos liberados",
    kcal: "~250 kcal",
  },
  {
    id: "protein-airfryer",
    title: "Prático, rápido, fit",
    kcal: "~370 kcal",
  },
]

export function Categories() {
  const images = PlaceHolderImages;

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-background">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Comer bem pode ser assim:</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Do café da manhã ao jantar, você só escolhe, prepara e come. Receitas simples, ingredientes reais e prazer em cada refeição.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const image = images.find(img => img.id === category.id);
            return (
              <ScrollReveal key={category.id} delay={index * 100}>
                <Card className="overflow-hidden h-full flex flex-col border-2 border-border bg-card hover:border-primary transition-colors duration-300 group shadow-lg">
                  <div className="relative h-48 w-full">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                     <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors"></div>
                  </div>
                  <CardHeader className="p-4 flex-1">
                    <CardTitle className="text-2xl font-headline group-hover:text-primary transition-colors">
                      {category.title}
                      {category.kcal && <span className="ml-2 text-sm font-normal text-muted-foreground">({category.kcal})</span>}
                    </CardTitle>
                  </CardHeader>
                </Card>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
