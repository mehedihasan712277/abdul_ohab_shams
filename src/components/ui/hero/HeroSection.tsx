import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-grid-bg">
            {/* Optional subtle overlay for better text readability */}
            <div className="absolute inset-0 bg-linear-to-b from-bg-main/95 via-bg-main/70 to-bg-main/95 pointer-events-none" />

            <div className="relative z-10 flex flex-col justify-center items-center text-center gap-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-bg-soft border border-border text-sm text-text-secondary">
                    Open to freelance opportunities
                </div>

                {/* Main Heading */}
                <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-none text-text-primary">
                    Md Abdul Ohab <span className="bg-brand-gradient bg-clip-text text-transparent">Shams</span>
                </h1>

                {/* Subtitle */}
                <div className="flex flex-col gap-3 justify-center items-center">
                    <p className="text-2xl md:text-3xl text-text-secondary font-medium">
                        Textile Engineer &amp; Fiverr Level 2 Audio Content Creator
                    </p>
                    <p className="text-lg md:text-xl text-text-muted max-w-lg">
                        I create high-quality audiobooks, professional voiceovers, and digital solutions that help stories and brands stand out.
                    </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 pt-6">
                    <button className="px-8 py-4 rounded-2xl bg-brand-gradient text-text-inverse font-semibold text-lg hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-brand/30">
                        Explore My Work
                    </button>
                    <button className="px-8 py-4 rounded-2xl border-2 border-border hover:border-brand text-text-primary font-medium transition-all">
                        Let&apos;s Connect
                    </button>
                </div>

                {/* Social Icons */}
                <div className="flex gap-7 pt-8 text-3xl text-text-muted">
                    <a
                        href="https://facebook.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-brand hover:scale-110 transition-all duration-200"
                        aria-label="Facebook"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="https://wa.me/yourphonenumber"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-brand hover:scale-110 transition-all duration-200"
                        aria-label="WhatsApp"
                    >
                        <IoLogoWhatsapp />
                    </a>
                    <a
                        href="https://linkedin.com/in/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-brand hover:scale-110 transition-all duration-200"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedinIn />
                    </a>
                    <a
                        href="https://instagram.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-brand hover:scale-110 transition-all duration-200"
                        aria-label="Instagram"
                    >
                        <BiLogoInstagramAlt />
                    </a>
                    <a
                        href="mailto:your.email@example.com"
                        className="hover:text-brand hover:scale-110 transition-all duration-200"
                        aria-label="Email"
                    >
                        <MdEmail />
                    </a>
                </div>
            </div>

            {/* Decorative subtle brand accent (optional floating glow) */}
            <div className="absolute top-1/3 right-10 w-96 h-96 bg-brand-gradient rounded-full blur-3xl opacity-10 pointer-events-none" />
        </section>
    );
};

export default HeroSection;
