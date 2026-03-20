'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const steps = [
    {
        id: '01',
        num: 'Step 1',
        title: 'Connect your data',
        description: 'Cortex integrates with databases, APIs, files, legacy systems and real-time feeds to continuously ingest data from across the organization.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    },
    {
        id: '02',
        num: '02',
        title: 'Structure reality with an ontology',
        description: 'Data is organized into a shared operational model that defines entities, relationships and permissions, creating a single source of truth.',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
    },
    {
        id: '03',
        num: '03',
        title: 'Transform and enrich',
        description: 'Cortex cleans, normalizes and transforms data using visual pipelines, SQL or Python, preparing it for analytics and automation.',
        image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80',
    },
    {
        id: '04',
        num: '04',
        title: 'Analyze, automate, and predict',
        description: 'Built-in analytics, workflows and AI continuously monitor operations, detect patterns, trigger actions and generate insights.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    },
    {
        id: '05',
        num: '05',
        title: 'Deliver intelligence through applications',
        description: 'Insights are delivered through dashboards, reports, alerts and custom applications tailored to each role and device.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    },
]

export default function HowItWorks() {
    const [activeIndex, setActiveIndex] = useState(0)
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    const handlePrev = () => {
        setActiveIndex((prev) => Math.max(0, prev - 1))
    }

    const handleNext = () => {
        setActiveIndex((prev) => Math.min(steps.length - 1, prev + 1))
    }

    // Scroll active step into view safely
    useEffect(() => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current
            const activeStepElement = container.children[activeIndex] as HTMLElement
            if (activeStepElement) {
                // Calculate scroll position
                const scrollLeft = activeStepElement.offsetLeft - container.offsetLeft
                container.scrollTo({
                    left: scrollLeft,
                    behavior: 'smooth'
                })
            }
        }
    }, [activeIndex])

    return (
        <section className="bg-[#ffffff] py-24 md:py-32 w-full font-sans overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-7xl mx-auto px-6 flex flex-col gap-16 md:gap-24"
                style={{ fontFamily: 'Inter, sans-serif' }}
            >
                {/* ── Top Row ── */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
                    {/* Left: Section label & prev/next buttons */}
                    <div className="md:col-span-3 flex flex-col justify-between h-full">
                        <div className="flex items-center gap-3 text-[#aaaaaa] text-[13px] font-medium tracking-wide">
                            <span className="text-[10px] leading-none">■</span>
                            <span>How It Works</span>
                        </div>
                        
                        {/* Prev/next buttons (Desktop) */}
                        <div className="hidden md:flex items-center gap-3 mt-auto pt-8">
                            <button
                                onClick={handlePrev}
                                disabled={activeIndex === 0}
                                className="w-[42px] h-[42px] border border-[#e5e5e5] rounded-sm flex items-center justify-center text-[#2b2b2b] disabled:opacity-30 transition-colors hover:bg-[#fcfcfc] active:bg-[#f4f4f4]"
                                aria-label="Previous step"
                            >
                                ←
                            </button>
                            <button
                                onClick={handleNext}
                                disabled={activeIndex === steps.length - 1}
                                className="w-[42px] h-[42px] border border-[#e5e5e5] rounded-sm flex items-center justify-center text-[#2b2b2b] disabled:opacity-30 transition-colors hover:bg-[#fcfcfc] active:bg-[#f4f4f4]"
                                aria-label="Next step"
                            >
                                →
                            </button>
                        </div>
                    </div>

                    {/* Center-left: Heading */}
                    <div className="md:col-span-9">
                        <h2 className="text-[28px] md:text-[32px] text-[#2b2b2b] font-normal leading-[1.2] max-w-[400px]">
                            From raw data to operational intelligence all in one connected flow.
                        </h2>
                        
                        {/* Prev/next buttons (Mobile) */}
                        <div className="flex md:hidden items-center gap-3 mt-8">
                            <button
                                onClick={handlePrev}
                                disabled={activeIndex === 0}
                                className="w-[42px] h-[42px] border border-[#e5e5e5] rounded-sm flex items-center justify-center text-[#2b2b2b] disabled:opacity-30 transition-colors active:bg-[#f4f4f4]"
                            >
                                ←
                            </button>
                            <button
                                onClick={handleNext}
                                disabled={activeIndex === steps.length - 1}
                                className="w-[42px] h-[42px] border border-[#e5e5e5] rounded-sm flex items-center justify-center text-[#2b2b2b] disabled:opacity-30 transition-colors active:bg-[#f4f4f4]"
                            >
                                →
                            </button>
                        </div>
                    </div>
                </div>

                {/* ── Bottom Row: Horizontal Step Timeline ── */}
                <div className="w-full relative">
                    <div 
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto snap-x snap-mandatory pb-8 -mx-6 px-6 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                    >
                        {steps.map((step, index) => {
                            const isActive = index === activeIndex
                            return (
                                <div 
                                    key={step.id}
                                    onClick={() => setActiveIndex(index)}
                                    className="relative flex-shrink-0 w-[85vw] md:w-[320px] lg:w-[360px] flex flex-col snap-start cursor-pointer transition-all duration-300 group"
                                >
                                    {/* Default top border for all steps. */}
                                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#e5e5e5] z-0" />

                                    {/* Hover Border Overlay */}
                                    <div className="absolute inset-0 pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {/* Top Black Border */}
                                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-black" />
                                        
                                        {/* Left Frame Line */}
                                        <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-black opacity-20" />
                                        {/* Right Frame Line */}
                                        <div className="absolute top-0 bottom-0 right-0 w-[1px] bg-black opacity-20" />
                                        {/* Bottom Frame Line */}
                                        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-black opacity-20" />
                                        
                                        {/* Corner dots */}
                                        <div className="absolute -bottom-[2px] -left-[2px] w-[5px] h-[5px] bg-black" />
                                        <div className="absolute -bottom-[2px] -right-[2px] w-[5px] h-[5px] bg-black" />
                                        <div className="absolute -top-[2px] -left-[2px] w-[5px] h-[5px] bg-black" />
                                        <div className="absolute -top-[2px] -right-[2px] w-[5px] h-[5px] bg-black" />
                                    </div>

                                    <div className="p-6 md:p-8 flex flex-col h-full min-h-[460px] z-20">
                                        {/* Step number */}
                                        <div className={cn(
                                            "text-[13px] font-medium tracking-wide mb-8 transition-colors duration-300",
                                            isActive ? "text-black" : "text-[#aaaaaa] group-hover:text-[#888888]"
                                        )}>
                                            {step.num}
                                        </div>

                                        {/* Image Visual Area */}
                                        <div className="flex-1 min-h-[160px] w-full mb-10 relative overflow-hidden bg-[#e6e6e6]">
                                            <img
                                                src={step.image}
                                                alt={step.title}
                                                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0"
                                            />
                                            {/* Inner frame styling */}
                                            <div className="absolute inset-0 border border-black/5 pointer-events-none" />
                                        </div>

                                        {/* Content */}
                                        <motion.div
                                            animate={{ y: isActive ? 0 : 4, opacity: isActive ? 1 : 0.4 }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <h3 className="text-[#2b2b2b] text-[17px] font-bold mb-3 pr-4 leading-snug">
                                                {step.title}
                                            </h3>
                                            <p className="text-[#888888] text-[14px] leading-relaxed pr-2">
                                                {step.description}
                                            </p>
                                        </motion.div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
