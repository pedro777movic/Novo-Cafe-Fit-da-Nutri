import { Button } from "@/components/ui/button"
import { Coffee } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="px-6 md:px-12 h-20 flex items-center bg-background/40 backdrop-blur-md sticky top-0 z-50 border-b border-white/5">
      <Link href="#" className="flex items-center justify-center p-2 rounded-full hover:bg-white/5 transition-colors" prefetch={false}>
        <Coffee className="h-7 w-7 text-primary" />
        <span className="sr-only">Café Fit da Nutri</span>
      </Link>
      <span className="ml-3 text-xl md:text-2xl font-black font-headline tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
        Café Fit
      </span>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link href="https://pay.kiwify.com.br/yoHKy7Q" target="_blank" rel="noopener noreferrer" passHref>
          <Button className="hidden sm:inline-flex premium-glow shimmer py-6 text-base font-bold px-8">
            Quero Retomar o Controle
          </Button>
          <Button size="sm" className="sm:hidden premium-glow shimmer font-bold">
            Começar
          </Button>
        </Link>
      </nav>
    </header>
  )
}
