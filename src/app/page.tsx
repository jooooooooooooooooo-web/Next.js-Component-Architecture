'use client'

import { Hero } from '@/src/components/sections/Hero'
import { About } from '@/src/components/sections/About'
import { Projects } from '@/src/components/sections/Projects'
import { Contact } from '../components/sections/Contact'

export default function Home() {
  return (
    <main>
      <div>
        <Hero />
      </div>
      <div className='bg-[#D6D6D6]'>
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}

/*
export default function Home() {
  return (
    <main className="w-full max-w-4xl mx-auto flex flex-col items-center gap-4 mt-20 px-4 sm:px-8">
      <div className="flex gap-4">
        <Button variant = "primary">Main</Button>
        <Button variant = "secondary">Secondary</Button>
        <Button variant = "outline">Outline</Button>
      </div>

      <div className="flex flex-col gap-6 w-full max-w-2xl">
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
          demo: '/videos/Turtles.mp4'
        }} />
      </div>
    </main>
  )
}
*/  