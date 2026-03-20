'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const navLinks = [
    { label: 'Product', href: '#product' },
    { label: 'Solution', href: '#solutions' },
    { label: 'Use cases', href: '#use-case' },
    { label: 'Company', href: '#company' },
    { label: 'Pricing', href: '#pricing' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white',
                scrolled && 'shadow-[0_1px_3px_rgba(0,0,0,0.04)]'
            )}
        >
            {/* Main nav bar */}
            <nav className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">

                {/* Logo */}
                <a
                    href="/"
                    className="font-display text-sm tracking-[0.2em] uppercase text-[#2b2b2b]"
                >
                    Cortex
                </a>

                {/* Desktop nav links — centered */}
                <ul className="hidden md:flex items-center gap-10 ml-auto mr-8">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                className="font-body text-[13px] text-[#999999] hover:text-[#2b2b2b] transition-colors duration-200"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Right side — Sign Up button */}
                <a
                    href="#contact"
                    className="hidden md:block text-[13px] font-medium px-5 py-[6px] bg-[#1a1a1a] text-white hover:bg-[#333333] transition-colors duration-200"
                >
                    Sign Up
                </a>

                {/* Mobile menu toggle */}
                <button
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={cn('block w-5 h-px bg-[#1a1a1a] transition-all duration-300', menuOpen && 'rotate-45 translate-y-[3.5px]')} />
                    <span className={cn('block w-5 h-px bg-[#1a1a1a] transition-all duration-300', menuOpen && 'opacity-0')} />
                    <span className={cn('block w-5 h-px bg-[#1a1a1a] transition-all duration-300', menuOpen && '-rotate-45 -translate-y-[3.5px]')} />
                </button>
            </nav>



            {/* Mobile dropdown */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden bg-white border-b border-black/5 px-6 pb-6 pt-2"
                    >
                        <ul className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        onClick={() => setMenuOpen(false)}
                                        className="font-body text-sm text-[#999999] hover:text-[#2b2b2b] transition-colors duration-200"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <a
                            href="#contact"
                            className="mt-6 block text-center text-sm font-medium px-4 py-2 bg-[#1a1a1a] text-white"
                        >
                            Sign Up
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}