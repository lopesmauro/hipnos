import { Badge } from "./Badge"

export function About() {
  return (
    <section id="about" className="sm:py-28 text-white bg-black relative overflow-hidden">
      {/* Fundo decorativo sutil */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_rgba(255,192,203,0.4),_transparent_70%)] pointer-events-none" />

      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-20 relative z-10">
        {/* Conteúdo à esquerda */}
        <div className="flex-1">
          <Badge title="Sobre nós" />

          <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Criatividade e inovação em cada projeto
          </h2>

          <p className="max-w-xl text-pretty text-lg text-muted-foreground mb-6">
            Somos uma equipe movida por <span className="text-pink-400 font-medium">criatividade</span>,
            <span className="text-pink-400 font-medium"> arte digital</span> e
            <span className="text-pink-400 font-medium"> tecnologia</span>. Unimos estilo, performance
            e autenticidade para transformar ideias em experiências que encantam.
          </p>

          <div className="space-y-5 text-white/80 leading-relaxed">
            <p>
              Do charme do <span className="text-pink-400 font-medium">pixel retrô</span> à fluidez do
              <span className="text-pink-400 font-medium"> 3D moderno</span>, cada detalhe é pensado para
              refletir nossa paixão por estética e propósito.
            </p>
            <p>
              Nosso mascote — o palhaço — simboliza o lado leve e criativo que inspira cada projeto:
              <span className="text-pink-400 font-medium"> autenticidade</span>,{" "}
              <span className="text-pink-400 font-medium">emoção</span> e{" "}
              <span className="text-pink-400 font-medium">identidade</span>.
            </p>
          </div>

          <button className="mt-10 bg-pink-500 hover:bg-pink-600 transition text-white font-semibold py-3 px-10 rounded-full shadow-lg shadow-pink-500/30">
            Saiba mais
          </button>
        </div>

        {/* Imagem à direita */}
        <div className="flex-1 flex justify-center relative">
          <div className="relative w-[420px] h-[420px] rounded-3xl overflow-hidden bg-gradient-to-br from-pink-500/20 via-purple-600/10 to-pink-400/20 border border-white/10 shadow-[0_0_40px_rgba(255,182,193,0.15)] backdrop-blur-sm flex items-center justify-center">
            {/* brilho suave atrás */}
            <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent opacity-60" />
            {/* imagem */}
            <img
              src="/clown.png"
              alt="Nosso mascote palhaço"
              className="relative z-10 w-[340px] h-auto object-contain drop-shadow-[0_0_35px_rgba(255,192,203,0.3)]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
