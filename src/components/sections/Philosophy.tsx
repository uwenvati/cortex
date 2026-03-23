'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import InteractiveGrid from '@/components/ui/InteractiveGrid'

const cards = [
    {
        title: 'Ontology-First Interface',
        description: 'Instead of disconnected tables and charts, Cortex presents information through entities and relationships that mirror real-world operations, making complexity understandable at a glance.',
        image: '/images/Asset 1.jpg'
    },
    {
        title: 'One Model, Everywhere',
        description: 'Dashboards, workflows, alerts, and AI all operate on the same underlying model, eliminating data duplication and inconsistent logic.',
        image: '/images/Asset 2.jpg'
    },
    {
        title: 'Role-Aware Experience',
        description: 'Executives, operators, analysts, and frontline staff each get a tailored interface based on role, clearance, and responsibility.',
        image: '/images/Asset 3.jpg'
    }
]

export default function Philosophy() {
    return (
        <section className="relative bg-[#f4f4f4] py-24 md:py-32 w-full font-sans overflow-hidden">
            <InteractiveGrid theme="light" />
            <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col gap-16 md:gap-24 items-center">
                
                {/* Heading Row */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[28px] md:text-[32px] text-[#2b2b2b] font-normal leading-[1.3] max-w-[500px]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                >
                    Cortex is built for how organizations actually operate combining data, logic and decision-making into a single, intuitive interface.
                </motion.h2>

                {/* Bottom Row: 3 Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {cards.map((card, i) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ 
                                duration: 0.6, 
                                delay: i * 0.1, 
                                ease: [0.16, 1, 0.3, 1] 
                            }}
                            className="bg-[#ffffff] p-8 md:p-10 flex flex-col hover:-translate-y-[2px] hover:shadow-md transition-all duration-300 group"
                        >
                            {/* Card Title */}
                            <h3 
                                className="text-[20px] font-normal text-[#2b2b2b] leading-tight"
                                style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                                {card.title}
                            </h3>

                            {/* Visual / Image Area */}
                            <div className="my-8">
                                <Image 
                                    src={card.image} 
                                    alt={card.title} 
                                    width={120}
                                    height={120}
                                    className="w-[120px] h-[120px] object-contain"
                                />
                            </div>

                            {/* Description */}
                            <p 
                                className="text-[13px] md:text-[14px] leading-relaxed text-[#aaaaaa] mt-auto pr-2"
                                style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                                {card.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
