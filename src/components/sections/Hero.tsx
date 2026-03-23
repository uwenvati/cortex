'use client'

import { motion, Variants } from 'framer-motion'
import Image from 'next/image'

const features = [
    {
        title: 'Organizational Intelligence',
        description:
            'Cortex pulls together data from every department, system and workflow into one place, giving leadership a clear and accurate picture of how the entire organization is functioning at any point in time.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    },
    {
        title: 'Real-Time Situational Awareness',
        description:
            'Whether it is a security incident or an operational disruption, Cortex surfaces the signals that matter the moment they emerge so decision-makers are always working with current information.',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
    },
    {
        title: 'Workflow & Process Automation',
        description:
            'Cortex handles the routine. Define how your organization should respond to events, thresholds and triggers, and the platform executes it so your team can focus on work that actually requires human judgment.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    },
    {
        title: 'Auditable Decision Intelligence',
        description:
            'Every insight, recommendation and action taken through Cortex is logged with full context so there is always a clear record of what happened, why it happened and who made the call.',
        image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80',
    },
]

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: i * 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    }),
}

export default function Hero() {
    return (
        <section className="pt-32 pb-24 px-6">
            <div className="max-w-6xl mx-auto">
                {/* ── Part 1: Header row ── */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 md:gap-20">
                    {/* Headline */}
                    <motion.h1
                        custom={0}
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className="text-[36px] font-normal leading-[1.15] tracking-[-0.01em] text-[#2b2b2b] max-w-xs"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                        Turn complex data into clear&nbsp;decisions.
                    </motion.h1>

                    {/* Description + CTA */}
                    <motion.div
                        custom={1}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.6,
                                    delay: 0.15,
                                    ease: [0.25, 0.46, 0.45, 0.94],
                                },
                            },
                        }}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col gap-6 max-w-sm md:pt-1"
                    >
                        <p className="text-[15px] leading-relaxed text-[#888888]">
                            Cortex is the operational intelligence platform that
                            transforms raw data into actionable insight — giving
                            governments and enterprises the clarity to act faster.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center gap-2 text-[13px] font-medium px-6 py-[10px] rounded-md border border-[#2b2b2b] text-[#2b2b2b] hover:bg-[#2b2b2b] hover:text-white transition-all duration-300 w-fit"
                        >
                            Request Demo
                        </a>
                    </motion.div>
                </div>

                {/* ── Part 2: Feature cards grid ── */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features.map((feat, i) => (
                        <motion.div
                            key={feat.title}
                            custom={i + 2}
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            className="group relative h-[420px] bg-[#E6E6E6] p-8 md:p-10 flex flex-col justify-between overflow-hidden cursor-pointer"
                        >
                            {/* Hover Image Background */}
                            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                                <Image
                                    src={feat.image}
                                    alt={feat.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                                />
                                {/* Dark gradient overlay so white text is legible on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
                            </div>

                            {/* Card Content (z-10 to sit above image) */}
                            <div className="relative z-10 flex items-start justify-between">
                                {/* Top Left Arrow */}
                                <span className="text-[28px] font-light text-[#2b2b2b] group-hover:text-white transition-colors duration-500">
                                    ↗
                                </span>
                            </div>

                            <div className="relative z-10 mt-auto pt-8">
                                <h3 
                                    className="text-[18px] font-bold text-[#2b2b2b] group-hover:text-white transition-colors duration-500 mb-3"
                                    style={{ fontFamily: 'Inter, sans-serif' }}
                                >
                                    {feat.title}
                                </h3>
                                <p 
                                    className="text-[16px] font-normal leading-relaxed text-[#2b2b2b] group-hover:text-white/90 transition-colors duration-500 max-w-[90%]"
                                    style={{ fontFamily: 'Inter, sans-serif' }}
                                >
                                    {feat.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}