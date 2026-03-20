'use client'

import { useState, useRef, useEffect } from 'react'

interface InteractiveGridProps {
    theme?: 'light' | 'dark'
}

export default function InteractiveGrid({ theme = 'light' }: InteractiveGridProps) {
    const divRef = useRef<HTMLDivElement>(null)
    const [isHovered, setIsHovered] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const parent = divRef.current?.parentElement
        if (!parent) return

        if (getComputedStyle(parent).position === 'static') {
            parent.style.position = 'relative'
        }
        
        const handleMouseMove = (e: MouseEvent) => {
            // Use requestAnimationFrame to optimize massive DOM repaints on cursor move
            requestAnimationFrame(() => {
                const rect = parent.getBoundingClientRect()
                setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
            })
        }
        
        const handleMouseEnter = () => setIsHovered(true)
        const handleMouseLeave = () => setIsHovered(false)

        parent.addEventListener('mousemove', handleMouseMove)
        parent.addEventListener('mouseenter', handleMouseEnter)
        parent.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            parent.removeEventListener('mousemove', handleMouseMove)
            parent.removeEventListener('mouseenter', handleMouseEnter)
            parent.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [])

    const isDark = theme === 'dark'
    
    // Layer 1: Permanent grid (Reduced size, kept opacity high for visibility)
    const baseDotColor = isDark ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.3)'
    
    // Layer 2: Interactive Lens (Restrained swell opacity and size)
    const hoverDotColor = isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.5)'

    return (
        <div 
            ref={divRef} 
            className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
        >
            {/* Layer 1: Permanent Base Grid */}
            <div 
                className="absolute inset-0 w-full h-full"
                style={{
                    backgroundImage: `radial-gradient(${baseDotColor} 1.5px, transparent 1.5px)`,
                    backgroundSize: '28px 28px',
                    backgroundPosition: 'center'
                }}
            />

            {/* Layer 2: Interactive Lens Grid - Restrained swell */}
            <div 
                className="absolute inset-0 w-full h-full transition-opacity duration-300 ease-out"
                style={{
                    backgroundImage: `radial-gradient(${hoverDotColor} 2.2px, transparent 2.2px)`,
                    backgroundSize: '28px 28px',
                    backgroundPosition: 'center',
                    opacity: isHovered ? 1 : 0,
                    // Much tighter 200px mask radius for a localized interaction field
                    WebkitMaskImage: `radial-gradient(200px circle at ${position.x}px ${position.y}px, black 5%, transparent 100%)`,
                    maskImage: `radial-gradient(200px circle at ${position.x}px ${position.y}px, black 5%, transparent 100%)`
                }}
            />
        </div>
    )
}
