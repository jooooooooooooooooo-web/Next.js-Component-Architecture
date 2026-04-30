'use client'
import { Button } from '@/src/components/ui/Button'
import { useState } from 'react'

interface MyProjects {
    title: string,
    description: string,
    image: string,
    technology: Badges[],
    gitLink: string,
    demo: string
}

interface Badges {
    name: string,
    icon: React.ReactNode
}

interface Props {
    project: MyProjects
}

const Card = ({ project }: Props) => {
    const [showDemo, setShowDemo] = useState(false)
    const { title, description, image, technology, gitLink, demo } = project

    return (
        <>
            <div className="rounded-xl shadow-md overflow-hidden bg-[#102336] flex flex-col">
                <img src={image} alt={title} className="w-full h-65 object-cover" />

                <div className="p-5 flex flex-col gap-3 flex-1">
                    <h3 className="text-xl text-[#D6D6D6] font-semibold">{title}</h3>
                    <p className="text-[#FFFFFF] text-sm">{description}</p>

                    <div className="flex flex-wrap gap-2">
                        {technology.map((tech) => (
                            <span key={tech.name} title={tech.name} className="bg-indigo-100 text-indigo-700 p-1.5 rounded-full">
                                {tech.icon}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-3 mt-auto pt-3">
                        <Button variant="secondary" onClick={() => window.open(gitLink, '_blank')}>
                            GitHub Repo
                        </Button>
                        <Button variant="outline" onClick={() => setShowDemo(true)}>
                            Demo
                        </Button>
                    </div>
                </div>
            </div>

            {showDemo && (
                <div
                    className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
                    onClick={() => setShowDemo(false)}
                >
                    <div
                        className="bg-[#102336] rounded-xl p-4 w-full max-w-2xl mx-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center mb-3">
                            <h3 className="font-semibold text-[#D6D6D6] text-lg">{title} — Demo</h3>
                            <button onClick={() => setShowDemo(false)} className="text-[#D6D6D6] hover:text-white">
                                ✕
                            </button>
                        </div>
                        <video
                            src={demo}
                            controls
                            autoPlay
                            className="w-full rounded-lg"
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export { Card }
export type { MyProjects, Badges }