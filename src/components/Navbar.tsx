"use client"

export function Navbar() {

    return (
        <nav className="py-3 fixed top-0 left-0 right-0 z-50 border-b border-border bg-black backdrop-blur-lg">
            <div className="container mx-auto">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-2">
                        <img src="/hipnos.png" alt="Logo Hipnos" className="mt-5 w-40 h-40 object-contain" />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <a href="#services" className="text-sm font-medium text-white hover:text-primary transition-colors">
                            SERVICES
                        </a>
                        <a href="#products" className="text-sm font-medium text-white hover:text-primary transition-colors">
                            PRODUCTS
                        </a>
                        <a href="#contact" className="text-sm font-medium text-white hover:text-primary transition-colors">
                            CONTACT
                        </a>
                        <button className=" text-white font-bold">
                            GET STARTED
                        </button>
                    </div>


                </div>

            </div>
        </nav>
    )
}
