import ThemeSwitcher from "./theme/ThemeSwitcher";

const NavBar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 h-25 z-50 bg-transparent">
            <div className="max-w-7xl mx-auto px-6 flex h-25 items-center justify-between">
                {/* Logo / Name */}
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-brand-gradient flex items-center justify-center">
                        <span className="text-white font-bold text-xl leading-none">S</span>
                    </div>
                    <p className="font-semibold text-2xl tracking-tight text-text-primary">Shams</p>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <ul className="flex items-center gap-8 text-sm font-medium">
                        <li>
                            <a href="#home" className="hover:text-brand transition-colors">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-brand transition-colors">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#services" className="hover:text-brand transition-colors">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="hover:text-brand transition-colors">
                                Projects
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-4">
                    <ThemeSwitcher />

                    <button
                        className="px-6 py-2.5 rounded-2xl bg-brand-gradient text-text-inverse font-medium 
                                   hover:brightness-110 active:scale-95 transition-all duration-200 shadow-lg shadow-brand/30"
                    >
                        Hire Me
                    </button>

                    {/* Mobile Menu Button (you can expand later) */}
                    <button className="md:hidden p-2">
                        <span className="sr-only">Menu</span>
                        {/* Add hamburger icon here if you want */}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
