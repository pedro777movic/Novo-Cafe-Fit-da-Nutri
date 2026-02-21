"use client"

import { useEffect } from "react"
import { useToast } from "@/hooks/use-toast"
import { Users, Droplet, Brain, Utensils } from "lucide-react"

// Estratégia de Notificação: Desejo, Normalização, Prova Social Evolutiva, Expansão de Consciência
const notifications = [
  // 1) NOTIFICAÇÕES DE DESEJO (sensorial e imediato) - 40%
  { text: "Brownie fit liberado hoje. Sem culpa. Sem exagero.", icon: <Utensils className="h-5 w-5 text-primary" /> },
  { text: "Panqueca de banana pronta em 5 minutos.", icon: <Utensils className="h-5 w-5 text-primary" /> },
  { text: "Sobremesa doce, leve e permitida. Sim, isso existe.", icon: <Utensils className="h-5 w-5 text-primary" /> },
  { text: "Receita simples. Ingredientes comuns. Resultado leve.", icon: <Utensils className="h-5 w-5 text-primary" /> },
  { text: "Banana, cacau e aveia. Só isso.", icon: <Utensils className="h-5 w-5 text-primary" /> },
  { text: "Café da manhã organizado muda o dia inteiro.", icon: <Utensils className="h-5 w-5 text-primary" /> },
  { text: "Doce depois do almoço sem peso na consciência.", icon: <Utensils className="h-5 w-5 text-primary" /> },
  { text: "Bolo fit que parece sobremesa de domingo.", icon: <Utensils className="h-5 w-5 text-primary" /> },
  { text: "Sorvete natural liberado. Sem açúcar refinado.", icon: <Utensils className="h-5 w-5 text-primary" /> },
  { text: "Comer bem não precisa ser chato.", icon: <Utensils className="h-5 w-5 text-primary" /> },

  // 2) NOTIFICAÇÕES DE NORMALIZAÇÃO (alívio e identificação) - 20%
  { text: "A maioria começa usando só 2 ou 3 receitas.", icon: <Droplet className="h-5 w-5 text-primary" /> },
  { text: "Não é sobre fazer tudo. É sobre continuar.", icon: <Droplet className="h-5 w-5 text-primary" /> },
  { text: "Poucas escolhas. Menos esforço mental.", icon: <Droplet className="h-5 w-5 text-primary" /> },
  { text: "Quem organiza a comida, organiza a rotina.", icon: <Droplet className="h-5 w-5 text-primary" /> },
  { text: "Constância vence força de vontade.", icon: <Droplet className="h-5 w-5 text-primary" /> },
  { text: "Nada radical. Nada proibido.", icon: <Droplet className="h-5 w-5 text-primary" /> },
  { text: "Comer bem pode ser simples.", icon: <Droplet className="h-5 w-5 text-primary" /> },
  { text: "Sem plano complicado. Só seguir.", icon: <Droplet className="h-5 w-5 text-primary" /> },
  { text: "Quando a decisão já está pronta, a mente relaxa.", icon: <Brain className="h-5 w-5 text-primary" /> }, // Remapeado para Brain
  { text: "Menos culpa. Mais controle.", icon: <Droplet className="h-5 w-5 text-primary" /> },

  // 3) PROVA SOCIAL EVOLUTIVA (real e elegante) - 30%
  { text: "“Voltei a comer doce sem me sabotar.”", icon: <Users className="h-5 w-5 text-primary" /> },
  { text: "“Perdi peso sem sentir que estava de dieta.”", icon: <Users className="h-5 w-5 text-primary" /> },
  { text: "“Minha ansiedade com comida diminuiu muito.”", icon: <Users className="h-5 w-5 text-primary" /> },
  { text: "“Agora sei exatamente o que comer.”", icon: <Users className="h-5 w-5 text-primary" /> },
  { text: "“O app facilitou tudo.”", icon: <Users className="h-5 w-5 text-primary" /> },
  { text: "“Não parei na segunda semana.”", icon: <Users className="h-5 w-5 text-primary" /> },
  { text: "“Comida virou aliada.”", icon: <Users className="h-5 w-5 text-primary" /> },
  { text: "Simplesmente continuei.", icon: <Users className="h-5 w-5 text-primary" /> },

  // 4) EXPANSÃO DE CONSCIÊNCIA (alto valor percebido) - 10%
  { text: "Não é dieta. É ambiente.", icon: <Brain className="h-5 w-5 text-primary" /> },
  { text: "Quando a escolha está pronta, o corpo segue.", icon: <Brain className="h-5 w-5 text-primary" /> },
]


function getRandomInt(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function ActivityNotifications() {
  const { toast } = useToast()

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    const showRandomToast = () => {
      const randomNotification = notifications[Math.floor(Math.random() * notifications.length)]
      
      toast({
        description: (
          <div className="flex items-center gap-2">
            {randomNotification.icon}
            <span>{randomNotification.text}</span>
          </div>
        ),
        className: "bg-card border-primary/50 text-foreground",
      })

      // Schedule the next toast
      const nextInterval = getRandomInt(15000, 25000) // 15 to 25 seconds
      timer = setTimeout(showRandomToast, nextInterval)
    }

    // Start the first toast after an initial delay
    const initialDelay = getRandomInt(8000, 15000); // 8 to 15 seconds
    if (typeof window !== 'undefined') {
      timer = setTimeout(showRandomToast, initialDelay);
    }

    return () => {
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [toast])

  return null
}
