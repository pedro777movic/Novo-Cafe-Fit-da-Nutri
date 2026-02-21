import { Button } from "@/components/ui/button"
import { Coffee } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b border-border">
      <Link href="#" className="flex items-center justify-center" prefetch={false}>
        <Coffee className="h-6 w-6 text-primary" />
        <span className="sr-only">Café Fit da Nutri</span>
      </Link>
      <span className="ml-2 md:ml-4 text-lg md:text-xl font-bold font-headline">Café Fit da Nutri</span>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link href="https://pay.cakto.com.br/3fmx6e8_558568" target="_blank" rel="noopener noreferrer" passHref>
          <Button>Quero o controle</Button>
        </Link>
      </nav>
    </header>
  )
}
