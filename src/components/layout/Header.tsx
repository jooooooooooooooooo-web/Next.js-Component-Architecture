'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
]

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 bg-[#102336] shadow-md">
            <div className="max-w-4xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">

                <Link href="#hero" className="flex items-center gap-2">
                <Image src="/Images/Logo2.png" alt="logo" width={32} height={32} />
                <span className="text-[#D6D6D6] font-bold text-xl">Jopfel Gafate</span>
                </Link>

                <nav className="hidden md:flex gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-[#D6D6D6] hover:text-white transition"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <button
                    className="text-[#D6D6D6] hover:text-white"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? '✕' : '☰'}
                </button>
            </div>

            {menuOpen && (
                <nav className="flex flex-col px-4 pb-4 gap-3">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-[#D6D6D6] hover:text-white transition"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            )}
        </header>
    )
}

export { Header }