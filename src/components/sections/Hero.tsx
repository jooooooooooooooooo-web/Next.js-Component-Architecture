'use client'
import Link from 'next/link'
import { Button } from '@/src/components/ui/Button'

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#102336] to-[#C0C0C0] px-4">
            <div className="flex flex-col items-center text-center gap-6 max-w-2xl">
                
                <h1 className="text-5xl font-bold text-white">
                    My name is <span className="text-[#5D88BB]">Jopfel Gafate</span>
                </h1>

                <h2 className="text-2xl text-[#D6D6D6] font-medium">
                    DevOps Specialist
                </h2>

                <p className="text-[#9CA3AF] text-lg">
                    Blending the mental and the physical
                </p>

                <div className="flex gap-4 mt-4">
                    <Link href="#projects">
                        <Button variant="primary">My Projects</Button>
                    </Link>
                    <Link href="#contact">
                        <Button variant="secondary">Send a Message</Button>
                    </Link>
                </div>

            </div>
        </section>
    )
}

export { Hero }