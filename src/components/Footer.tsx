
export function Footer() {
    return (
        <footer className="border-t border-white/20 text-white bg-black">
            <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <div className="mb-6">
                            <img
                                src="/letter.png"
                                alt="HIPNOS DEVELOPMENT"
                                className="max-w-[200px] h-auto object-contain"
                            />
                        </div>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            Desenvolvimento web moderno com foco em performance e resultados.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-card-foreground">Serviços</h3>
                        <ul className="text-gray-200/50 space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a href="#" className="transition-colors hover:text-foreground">
                                    Landing Pages
                                </a>
                            </li>
                            <li>
                                <a href="#" className="transition-colors hover:text-foreground">
                                    Desenvolvimento Web
                                </a>
                            </li>
                            <li>
                                <a href="#" className="transition-colors hover:text-foreground">
                                    Consultoria
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-card-foreground">Produtos</h3>
                        <ul className="text-gray-200/50 space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a href="#" className="transition-colors hover:text-foreground">
                                    JavaScript Cheatsheet
                                </a>
                            </li>
                            <li>
                                <a href="#" className="transition-colors hover:text-foreground">
                                    Recursos
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-card-foreground">Contato</h3>
                        <ul className="text-gray-200/50 space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a href="#" className="transition-colors hover:text-foreground">
                                    Email
                                </a>
                            </li>
                            <li>
                                <a href="#" className="transition-colors hover:text-foreground">
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a href="#" className="transition-colors hover:text-foreground">
                                    aedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-white/20 pt-8 text-center text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} Hipnos Development. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}
