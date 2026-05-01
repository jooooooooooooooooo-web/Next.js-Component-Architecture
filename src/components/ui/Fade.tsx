'use client'
import { useEffect, useRef, useState, ReactNode } from 'react'

interface FadeAway {
    children: ReactNode
    delay?: number
}

export const Fade = ({ children, delay = 0 }: FadeAway) => {
const ref = useRef<HTMLDivElement>(null)
    const [see, canSee] = useState(false)

    useEffect(() => {
        const scroll = ref.current
        if (!scroll) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    canSee(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.15 },
        )

        observer.observe(scroll)
        return () => observer.disconnect()
    }, [])

    return (
        <div
            ref={ref}
            className={`reveal ${see ? 'is-visible' : ''}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    )
}