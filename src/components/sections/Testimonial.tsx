'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import InteractiveGrid from '@/components/ui/InteractiveGrid'

const testimonials = [
    {
        org: "Ministry of Health",
        quote: "Cortex gave our ministry a single view of every program, facility and resource across the country. We went from fragmented reports to real-time operational awareness in weeks.",
        logo: ""
    },
    {
        org: "National Revenue Authority",
        quote: "The level of visibility Cortex provides over our revenue streams and compliance operations has fundamentally changed how our leadership team makes decisions.",
        logo: ""
    },
    {
        org: "Federal Road Safety Corps",
        quote: "We can now monitor incidents, coordinate response teams and track infrastructure status from one platform. It has made our operations significantly more effective.",
        logo: ""
    }
]

export default function Testimonial() {
    const [activeIndex, setActiveIndex] = useState(0)

    const handlePrev = () => {
        setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    }

    const handleNext = () => {
        setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }

    const activeT = testimonials[activeIndex]

    return (
        <section className="relative bg-[#f4f4f4] py-24 md:py-32 w-full font-sans overflow-hidden">
            <InteractiveGrid theme="light" />
            <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-12 items-center">
                
                {/* ── Left Column (approx 35%) ── */}
                <div className="md:col-span-5 lg:col-span-4 flex flex-col items-start gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col gap-10"
                    >
                        {/* Section Label */}
                        <div className="flex items-center gap-3 text-[#aaaaaa] text-[13px] font-medium tracking-wide">
                            <span className="text-[10px] leading-none">■</span>
                            <span>Testimonial</span>
                        </div>
                        
                        {/* Heading */}
                        <h2 
                            className="text-[28px] md:text-[32px] font-normal leading-tight text-[#2b2b2b] max-w-[280px]"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                            Built for organizations that cannot afford failure
                        </h2>
                    </motion.div>
                </div>

                {/* ── Right Column (approx 65%) ── */}
                <div className="md:col-span-7 lg:col-span-8 flex justify-center lg:justify-end w-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-[#ffffff] rounded-xl w-full max-w-[650px] min-h-[500px] flex flex-col items-center justify-between p-12 shadow-[0_2px_15px_rgba(0,0,0,0.03)] overflow-hidden"
                    >
                        {/* Upward Arrow */}
                        <button 
                            onClick={handlePrev}
                            className="text-[#aaaaaa] hover:text-[#2b2b2b] text-[18px] transition-colors pb-4 px-4 font-light z-20"
                            aria-label="Previous testimonial"
                        >
                            ↑
                        </button>

                        {/* Animated Content Wrapper */}
                        <div className="flex-1 w-full flex flex-col items-center justify-center relative my-12 h-[300px]">
                            {/* We use width/height sizing to constrain the absolute positioning smoothly */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="flex flex-col items-center text-center absolute inset-0 justify-center"
                                >
                                    {/* Logo / Triangle Placeholder */}
                                    <div className="mb-10 flex items-center justify-center">
                                        {activeT.logo ? (
                                            <Image 
                                                src={activeT.logo} 
                                                alt={`${activeT.org} logo`} 
                                                width={120}
                                                height={32}
                                                className="h-[32px] object-contain" 
                                            />
                                        ) : (
                                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2b2b2b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                                <polygon points="12 3 22 20 2 20" />
                                            </svg>
                                        )}
                                    </div>

                                    {/* Org Name */}
                                    <h3 
                                        className="text-[24px] font-normal text-[#2b2b2b] leading-[1.3] mb-6 max-w-[200px] mx-auto"
                                        style={{ fontFamily: 'Inter, sans-serif' }}
                                    >
                                        {activeT.org}
                                    </h3>

                                    {/* Quote */}
                                    <p 
                                        className="text-[13px] md:text-[14px] leading-relaxed text-[#aaaaaa] max-w-[320px] mx-auto"
                                        style={{ fontFamily: 'Inter, sans-serif' }}
                                    >
                                        {activeT.quote}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Downward Arrow */}
                        <button 
                            onClick={handleNext}
                            className="text-[#aaaaaa] hover:text-[#2b2b2b] text-[18px] transition-colors pt-4 px-4 font-light z-20"
                            aria-label="Next testimonial"
                        >
                            ↓
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
