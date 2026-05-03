
import Image from "next/image"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { ScrollReveal } from "@/components/scroll-reveal"

const categories = [
  {
    id: "fit-breakfast",
    title: "Panquecas de banana fit com aveia",
    kcal: "~330 kcal",
  },
  {
    id: "zero-desserts",
    title: "Doces fit variados",
    kcal: "~180 kcal",
  },
  {
    id: "guilt-free-cakes",
    title: "Pudim Fit de Morango",
    kcal: "~250 kcal",
  },
  {
    id: "protein-airfryer",
    title: "Hambúrguer caseiro light",
    kcal: "~370 kcal",
  },
]

export function Categories() {
  const images = PlaceHolderImages;

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 blur-[100px] rounded-full" />
        
      <div className="container px-4 md:px-6 relative">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <h2 className="text-4xl font-black tracking-tighter sm:text-6xl font-headline italic text-gradient-green">
                Comer bem pode ser assim:
            </h2>
            <p className="max-w-[800px] text-muted-foreground text-lg md:text-xl leading-relaxed">
                Do café da manhã ao jantar, você só escolhe, prepara e come. Receitas simples, ingredientes reais e prazer sem culpa.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const image = images.find(img => img.id === category.id);
            return (
              <ScrollReveal key={category.id} delay={index * 100}>
                <Card className="glass-card overflow-hidden h-full flex flex-col border-white/5 hover:border-primary/50 transition-all duration-500 group shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:shadow-primary/10">
                  <div className="relative h-56 w-full">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                     <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                  </div>
                  <CardHeader className="p-6 flex-1 space-y-2">
                    <CardTitle className="text-2xl font-black font-headline group-hover:text-primary transition-colors leading-tight">
                      {category.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest bg-primary/10 w-fit px-3 py-1 rounded-full border border-primary/20">
                        {category.kcal}
                    </div>
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
