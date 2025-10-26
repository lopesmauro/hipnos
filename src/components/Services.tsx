import { Badge } from "./Badge"

const services = [
  {
    title: "Landing Pages",
    description:
      "Páginas de alta conversão otimizadas para performance e SEO. Design moderno e responsivo que converte visitantes em clientes.",
    bg: "/backgrounds/red.png",
    iconImg: "/icons/home.png",
    details: ["SEO Friendly", "Responsivo", "Alta Conversão"],
  },
  {
    title: "Performance",
    description:
      "Código otimizado e práticas modernas garantem carregamento rápido e experiência fluida em todos os dispositivos.",
    bg: "/backgrounds/blue.png",
    iconImg: "/icons/performance.png",
    details: ["Carregamento Rápido", "Práticas Modernas", "Compatível Mobile"],
  },
  {
    title: "Design Minimalista",
    description:
      "Interfaces limpas e focadas que destacam seu conteúdo. Menos é mais quando se trata de conversão.",
    bg: "/backgrounds/yellow.png",
    iconImg: "/icons/paint.png",
    details: ["Limpo e Intuitivo", "Foco no Usuário", "Estético"],
  },
]

export function Services() {
  return (
    <section id="services" className="sm:py-28 text-white bg-black">
      <div className="container mx-auto">
        <Badge title="Serviços" />

        <div className="mb-16">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            O que fazemos
          </h2>
          <p className="max-w-2xl text-pretty text-lg text-muted-foreground">
            Serviços especializados em desenvolvimento web com foco em resultados
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg border border-white/10 bg-cover bg-center p-8 transition-transform hover:scale-[1.03] hover:shadow-2xl min-h-[200px]"
              style={{ backgroundImage: `url(${service.bg})` }}
            >
              <div className="relative z-10 flex flex-col h-full justify-between">
                {/* Imagem do ícone + título + descrição */}
                <div>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/30">
                    <img
                      src={service.iconImg}
                      alt={service.title + " icon"}
                      className="h-40 w-40 object-contain"
                    />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-white drop-shadow-md">
                    {service.title}
                  </h3>
                  <p className="mb-4 text-white drop-shadow-md leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Área de detalhes/tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {service.details.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-block rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white drop-shadow-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
