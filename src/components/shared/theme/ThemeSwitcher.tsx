"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export default function ThemeSwitcher() {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === "dark";

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // ✅ Defer state update to next tick to avoid synchronous setState warning
        const id = requestAnimationFrame(() => setMounted(true));
        return () => cancelAnimationFrame(id);
    }, []);

    if (!mounted) return null; // Prevent hydration mismatch

    return (
        <button
            onClick={toggleTheme}
            className="relative w-14 h-7 flex items-center rounded-full 
                       bg-muted
                       transition-colors duration-300 hover:scale-105"
        >
            <motion.div
                layout
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="absolute w-6 h-6 bg-background rounded-full shadow-md left-1 flex items-center justify-center"
                animate={{ x: isDark ? 28 : 0 }}
            >
                {isDark ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-4 h-4 text-muted-foreground"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-4 h-4 text-brand"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2" />
                        <path d="M12 20v2" />
                        <path d="M4.93 4.93l1.41 1.41" />
                        <path d="M17.66 17.66l1.41 1.41" />
                        <path d="M2 12h2" />
                        <path d="M20 12h2" />
                        <path d="M6.34 17.66l-1.41 1.41" />
                        <path d="M19.07 4.93l-1.41 1.41" />
                    </svg>
                )}
            </motion.div>
        </button>
    );
}
