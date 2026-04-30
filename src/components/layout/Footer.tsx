import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="bg-[#102336] mt-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                
                {/* Copyright */}
                <p className="text-[#D6D6D6] text-sm">
                    © {new Date().getFullYear()} YourName. All rights reserved.
                </p>

                {/* Social Links */}
                <div className="flex gap-4 text-[#D6D6D6] text-xl">
                    <a href="https://github.com/yourusername" target="_blank" className="hover:text-white transition">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" className="hover:text-white transition">
                        <FaLinkedin />
                    </a>
                    <a href="https://twitter.com/yourusername" target="_blank" className="hover:text-white transition">
                        <FaTwitter />
                    </a>
                </div>

                {/* Contact + Nav */}
                <div className="flex gap-4 text-[#D6D6D6] text-sm">
                    <a href="mailto:you@email.com" className="hover:text-white transition">
                        you@email.com
                    </a>
                    <Link href="/projects" className="hover:text-white transition">Projects</Link>
                    <Link href="/contact" className="hover:text-white transition">Contact</Link>
                </div>

            </div>
        </footer>
    )
}

export { Footer }