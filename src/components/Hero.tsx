export function Hero() {
    return (
        <section className="pt-52 pb-20 bg-black relative overflow-hidden">
            {/* Imagem de fundo no lado direito */}
            <div className="absolute inset-0">
                <img
                    src="/backgrounds/newbanner.png"
                    alt="Imagem ilustrativa"
                    className="absolute right-0 top-0 h-full w-auto max-w-none object-cover"
                />
                {/* Degradê do preto à transparência sobre a imagem */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
            </div>

            <div className="container mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-block mb-6 px-4 py-2 bg-white text-black text-xs font-bold tracking-wider">
                            DEVELOPMENT STUDIO
                        </div>

                        <div className="mb-6">
                            <img
                                src="/letter.png"
                                alt="HIPNOS DEVELOPMENT"
                                className="w-full max-w-[600px] h-auto object-contain"
                            />
                        </div>

                        <p className="text-xl text-white/60 mb-8 leading-snug    max-w-lg">
                            Criamos experiências digitais que transformam ideias em realidade. Landing pages, produtos digitais e ferramentas para devs.
                        </p>

                        <a
                            href="#products"
                            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm font-bold tracking-wide hover:bg-white/90 transition-all group"
                        >
                            EXPLORAR PRODUTOS
                        </a>
                    </div>

                    {/* Lado direito continua vazio, pois a imagem agora é de fundo */}
                    <div className="hidden lg:block" />
                </div>
            </div>
        </section>
    );
}
