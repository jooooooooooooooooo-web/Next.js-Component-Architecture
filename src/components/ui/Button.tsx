'use client'
import { forwardRef } from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline'
}

const btnTypes = {
    primary: 'bg-[#102336] text-white',
    secondary: 'bg-[#A1A8B2] text-white',
    outline: 'bg-[#B3CBE4] border border-gray-500 text-gray-500',
}

const Button = forwardRef<HTMLButtonElement, Props>(
    ({ variant = 'primary', className, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={`
                ${btnTypes[variant]}
                py-2 px-8 leading-6
                rounded-full
                font-semibold tracking-wide
                cursor-pointer
                inline-flex items-center justify-center
                relative shadow
                transition hover:shadow-md
                outline-none
                ring-indigo-500/70 ring-offset-2
                focus-visible:ring-2 active:scale-[0.98]
                ${className ?? ''}
                `}
                {...props} />
            )
        }
    )

Button.displayName = 'Button'

export { Button }