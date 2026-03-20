'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import InteractiveGrid from '@/components/ui/InteractiveGrid'

const sectors = [
    {
        id: 'gov',
        title: 'Government & Public Sector',
        description:
            'Unify data across ministries and agencies, automate reporting, monitor programs in real time and support evidence-based policy decisions.',
        image: 'https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?w=800&q=80',
    },
    {
        id: 'transport',
        title: 'Transportation & Infrastructure',
        description:
            'Track infrastructure assets, manage maintenance schedules and get full visibility over national transportation networks.',
        image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
    },
    {
        id: 'energy',
        title: 'Energy & Utilities',
        description:
            'Monitor energy generation and distribution in real time, detect faults early and optimize resource allocation across the grid.',
        image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80',
    },
    {
        id: 'defense',
        title: 'Security & Defense',
        description:
            'Integrate intelligence feeds, coordinate field operations and maintain a unified operational picture across all security assets.',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
    },
    {
        id: 'health',
        title: 'Healthcare & Public Health',
        description:
            'Aggregate patient data, track disease outbreaks, manage facility capacity and support public health response at scale.',
        image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&q=80',
    },
    {
        id: 'finance',
        title: 'Finance & Revenue Operations',
        description:
            'Automate revenue tracking, detect anomalies, monitor compliance and give finance teams a real-time view of organizational performance.',
        image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    },
]

export default function Sectors() {
    const [activeIndex, setActiveIndex] = useState(0)
    const activeSector = sectors[activeIndex]

    return (
        <section className="relative bg-[#f4f4f4] py-32 px-6 overflow-hidden">
            <InteractiveGrid theme="light" />
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24"
            >
                {/* ── Left Column (approx 40%) ── */}
                <div className="lg:col-span-5 flex flex-col justify-between min-h-[600px]">
                    {/* Top: Section Label */}
                    <div
                        className="flex items-center gap-3 text-[#aaaaaa] text-[15px] font-medium tracking-wide"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                        <span className="text-[10px] leading-none">■</span>
                        <span>Sectors</span>
                    </div>

                    {/* Middle: Image */}
                    <div className="flex-1 flex items-center justify-center py-12">
                        <div className="relative w-[220px] h-[320px] rounded-sm overflow-hidden bg-[#e6e6e6]">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={activeSector.id}
                                    src={activeSector.image}
                                    alt={activeSector.title}
                                    initial={{ opacity: 0, filter: 'blur(4px)', scale: 1.05 }}
                                    animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
                                    exit={{ opacity: 0, filter: 'blur(4px)' }}
                                    transition={{ duration: 0.5, ease: 'easeOut' }}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </AnimatePresence>
                            {/* Decorative framing element (optional subtle border inside) */}
                            <div className="absolute inset-0 border border-black/5 rounded-sm pointer-events-none" />
                        </div>
                    </div>

                    {/* Bottom: Description string */}
                    <div className="h-[80px]">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={activeSector.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="text-[14px] text-[#888888] leading-relaxed max-w-sm"
                                style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                                {activeSector.description}
                            </motion.p>
                        </AnimatePresence>
                    </div>
                </div>

                {/* ── Right Column (approx 60%) ── */}
                <div className="lg:col-span-7 flex flex-col">
                    {/* Top alignment matching the left column label */}
                    <p
                        className="text-[#aaaaaa] text-[15px] pt-1 mb-20"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                        Built for complex operations across critical sectors.
                    </p>

                    {/* Sector List */}
                    <ul className="flex flex-col gap-6 md:gap-8">
                        {sectors.map((sector, index) => {
                            const isActive = index === activeIndex
                            return (
                                <li key={sector.id}>
                                    <button
                                        onClick={() => setActiveIndex(index)}
                                        className={cn(
                                            'block text-left w-full transition-all duration-500 ease-out',
                                            isActive
                                                ? 'text-[#2b2b2b] text-[32px] md:text-[44px] font-medium tracking-tight'
                                                : 'text-[#aaaaaa] text-[24px] md:text-[32px] font-normal hover:text-[#888888]'
                                        )}
                                        style={{ fontFamily: 'Inter, sans-serif' }}
                                    >
                                        {sector.title}
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </motion.div>
        </section>
    )
}
