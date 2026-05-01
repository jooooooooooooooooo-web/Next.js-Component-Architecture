'use client'
import { Card } from '@/src/components/ui/Card'
import { AiOutlineThunderbolt } from 'react-icons/ai'
import { BsCardChecklist, BsCpu } from 'react-icons/bs'
import { MdLoop, MdOutlineSmartButton } from 'react-icons/md'
import {SiReact, SiTypescript, SiTailwindcss, SiPython} from 'react-icons/si'
import { LuBrain } from 'react-icons/lu'
import { Fade } from '../ui/Fade'

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-4">
            <Fade delay={150}>
            <h2 className="text-4xl font-bold text-[#102336] text-center mb-4">My Projects</h2>
            </Fade>

            <Fade delay={200}>
            <div className="w-full max-w-2xl mx-auto flex flex-col gap-8 mt-8">
                <Card project={{
                    title: 'Turtle Racer',
                    description: 'This is a simple racing game I made early in College, simulating racing against a primitive ai represented by turtles.',
                    image: '/Images/Turtles.png',
                    technology: [
                        { name: 'Python', icon: <SiPython /> },
                        { name: 'Recursion', icon: <MdLoop /> },
                        { name: 'Race', icon: <AiOutlineThunderbolt /> },
                    ],
                    gitLink: 'https://github.com/jooooooooooooooooo-web/At-the-races',
                    demo: '/Videos/Turtles-web.mp4'
                }} />
            </div>
            </Fade>

            <Fade delay={250}>
            <div className="w-full max-w-2xl mx-auto flex flex-col gap-8 mt-8">
                <Card project={{
                    title: 'Palace',
                    description: 'This is a card game my friend taught me in high school, in a text game representation, with complex rulings and win conditions.',
                    image: '/Images/Palace.png',
                    technology: [
                        { name: 'Python', icon: <SiPython /> },
                        { name: 'Strategy', icon: <LuBrain /> },
                        { name: 'Card Game', icon: <BsCardChecklist /> },
                    ],
                    gitLink: 'https://github.com/jooooooooooooooooo-web/Card-Games',
                    demo: '/Videos/Palace2-web.mp4'
                }} />
            </div>
            </Fade>

            <Fade delay={300}>
            <div className="w-full max-w-2xl mx-auto flex flex-col gap-8 mt-8">
                <Card project={{
                    title: 'My First Portfolio Website',
                    description: 'This is the first version I made of this website about a year ago, I like to keep it here to show how much I have evolved with front end displays. It similarly uses vercel and is coded in Next.js',
                    image: '/Images/OGResume.png',
                    technology: [
                        { name: 'Python', icon: <SiPython /> },
                        { name: 'Strategy', icon: <LuBrain /> },
                        { name: 'Card Game', icon: <BsCardChecklist /> },
                    ],
                    gitLink: 'https://github.com/jooooooooooooooooo-web/gafate_nextjs_portfolio',
                    demo: '/Videos/OGResume-web.mp4'
                }} />
            </div>
            </Fade>

            <Fade delay={350}>
            <div className="w-full max-w-2xl mx-auto flex flex-col gap-8 mt-8">
                <Card project={{
                    title: 'PC Building',
                    description: 'Its not necessarily code related, but it is a big part of my professional identity. I have built about 3 PCs since I first learned in 2015, and I have made more than a few upgrades to each of them. I can finish a build in as little as 1 hour now',
                    image: '/Images/build.jpg',
                    technology: [
                        { name: 'Python', icon: <SiPython /> },
                        { name: 'Strategy', icon: <LuBrain /> },
                        { name: 'Card Game', icon: <BsCardChecklist /> },
                    ],
                    gitLink: 'https://github.com/jooooooooooooooooo-web',
                    demo: ''//none available
                }} />
            </div>
            </Fade>
        </section>
    )
}

export { Projects }