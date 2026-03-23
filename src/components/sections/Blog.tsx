'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const blogPosts = [
    {
        id: '01',
        title: "Why dashboards alone cannot solve operational complexity",
        description: "Explore governance, explainability and control frameworks required for responsible AI deployment.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
    },
    {
        id: '02',
        title: "What is an Operational Ontology and Why It Matters",
        description: "Explore how modern organizations are transforming operations through connected data, automation and AI-driven intelligence.",
        image: "/images/Frame 2.png"
    },
    {
        id: '03',
        title: "From Data to Decisions: Building Real-Time Intelligence Systems",
        description: "Explore governance, explainability and control frameworks required for responsible AI deployment.",
        image: "/images/Frame 3.png"
    },
    {
        id: '04',
        title: "Designing AI Systems That Enterprises Can Trust",
        description: "A look at how enterprise-grade AI platforms are built for reliability, auditability and long-term trust.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80"
    }
]

// Replaces the native text arrow to avoid ugly OS-specific blue emoji renderings
const ArrowUpRight = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
    </svg>
)

export default function Blog() {
    const [visibleStartIndex, setVisibleStartIndex] = useState(0)
    // Keep track of which post is currently featured (expanded). 
    // Default to the 3rd item in the array to match the initial design showcase.
    const [featuredId, setFeaturedId] = useState(blogPosts[2].id)

    const handleNext = () => {
        setVisibleStartIndex((prev) => Math.min(prev + 1, Math.max(0, blogPosts.length - 3)))
    }

    const handlePrev = () => {
        setVisibleStartIndex((prev) => Math.max(prev - 1, 0))
    }

    // The visible slice of 3 cards
    const visiblePosts = blogPosts.slice(visibleStartIndex, visibleStartIndex + 3)

    // Ensure the featuredId makes sense within the visible posts.
    // If it falls out of view, default to the right-most visible item.
    const isFeaturedVisible = visiblePosts.some(p => p.id === featuredId)
    const activeFeaturedId = isFeaturedVisible ? featuredId : visiblePosts[2]?.id || visiblePosts[0]?.id

    return (
        <section className="bg-[#ffffff] py-24 md:py-32 w-full font-sans">
            <div className="max-w-6xl mx-auto px-6 flex flex-col gap-12 md:gap-20">
                
                {/* ── Row 1: Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col gap-10"
                >
                    <div className="flex items-center gap-3 text-[#aaaaaa] text-[13px] font-medium tracking-wide">
                        <span className="text-[10px] leading-none">■</span>
                        <span>Blogs</span>
                    </div>
                    
                    <h2 
                        className="text-[28px] md:text-[32px] font-normal text-[#2b2b2b] leading-[1.25] max-w-[560px]"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                        Perspectives on data, operations, and intelligent decision-making
                    </h2>
                </motion.div>

                {/* ── Row 2: Main Content (2 columns) ── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
                    
                    {/* Left Column: Image Cards (approx 65% -> col-span-8) */}
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8 h-fit">
                        <AnimatePresence mode="popLayout">
                            {visiblePosts.map((post) => {
                                const isFeatured = post.id === activeFeaturedId
                                
                                return (
                                    <motion.div
                                        key={post.id}
                                        layout // Animates width changes natively
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                        onClick={() => setFeaturedId(post.id)}
                                        className={cn(
                                            "flex flex-col group cursor-pointer hover:-translate-y-[2px] transition-transform duration-300",
                                            isFeatured ? 'md:col-span-2' : 'md:col-span-1'
                                        )}
                                    >
                                        {/* Image Area */}
                                        <motion.div 
                                            layout
                                            className={cn(
                                                "relative w-full overflow-hidden mb-6 bg-[#f4f4f4] group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-shadow duration-300",
                                                "h-[260px] md:h-[300px]", 
                                                isFeatured ? "rounded-sm" : "rounded-none"
                                            )}
                                        >
                                            <Image 
                                                src={post.image} 
                                                alt={post.title} 
                                                fill
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                            />
                                            
                                            {/* Featured Content Overlay */}
                                            <AnimatePresence>
                                                {isFeatured && (
                                                    <motion.div 
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        exit={{ opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end p-6 md:p-8"
                                                    >
                                                        <h3 
                                                            className="text-white text-[18px] md:text-[20px] font-medium leading-[1.3] max-w-[90%]"
                                                            style={{ fontFamily: 'Inter, sans-serif' }}
                                                        >
                                                            {post.title}
                                                        </h3>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>

                                        {/* Description Area */}
                                        <motion.div layout className="flex flex-col flex-1">
                                            <p 
                                                className="text-[13px] md:text-[14px] text-[#888888] leading-relaxed line-clamp-3 pr-2"
                                                style={{ fontFamily: 'Inter, sans-serif' }}
                                            >
                                                {post.description}
                                            </p>
                                            
                                            <AnimatePresence>
                                                {isFeatured && (
                                                    <motion.div 
                                                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                                        animate={{ opacity: 1, height: 'auto', marginTop: 20 }}
                                                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                                        className="flex items-center justify-between overflow-hidden"
                                                    >
                                                        <span className="text-[13px] font-medium flex items-center gap-1.5 text-[#2b2b2b] group-hover:text-[#aaaaaa] transition-colors">
                                                            Read more <ArrowUpRight />
                                                        </span>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    </motion.div>
                                )
                            })}
                        </AnimatePresence>
                    </div>

                    {/* Right Column: List (approx 35% -> col-span-4) */}
                    <div className="lg:col-span-4 flex flex-col">
                        {/* Top Link: Show all */}
                        <div className="flex justify-start md:justify-end mb-8 md:mb-12">
                            <a href="#all-blogs" className="text-[13px] text-[#2b2b2b] hover:text-[#aaaaaa] transition-colors flex items-center gap-1.5 font-medium">
                                Show all <ArrowUpRight />
                            </a>
                        </div>
                        
                        {/* List Items (Permanent Navigation) */}
                        <div className="flex flex-col w-full border-t border-[#e5e5e5]">
                            {blogPosts.map((post) => {
                                const isActive = post.id === activeFeaturedId
                                return (
                                    <button
                                        key={post.id}
                                        onClick={() => {
                                            setFeaturedId(post.id)
                                            // Auto-scroll the visible slice if the clicked item is out of view
                                            const postIndex = blogPosts.findIndex(p => p.id === post.id)
                                            if (postIndex < visibleStartIndex) {
                                                setVisibleStartIndex(postIndex)
                                            } else if (postIndex >= visibleStartIndex + 3) {
                                                setVisibleStartIndex(Math.min(postIndex - 2, blogPosts.length - 3))
                                            }
                                        }}
                                        className="group flex flex-col w-full text-left focus:outline-none"
                                    >
                                        <div className="flex items-start gap-6 py-6 border-b border-[#e5e5e5] hover:bg-[#fafafa] transition-colors px-2 w-full">
                                            <span className={cn(
                                                "text-[13px] font-medium mt-0.5 transition-colors",
                                                isActive ? "text-[#888888]" : "text-[#aaaaaa]"
                                            )}>
                                                {post.id}
                                            </span>
                                            <h4 
                                                className={cn(
                                                    "text-[14px] md:text-[15px] leading-relaxed transition-colors duration-300 pr-4",
                                                    isActive ? "font-medium text-[#2b2b2b]" : "font-normal text-[#aaaaaa] group-hover:text-[#2b2b2b]"
                                                )}
                                                style={{ fontFamily: 'Inter, sans-serif' }}
                                            >
                                                {post.title}
                                            </h4>
                                        </div>
                                    </button>
                                )
                            })}
                        </div>

                        {/* Pagination Arrows */}
                        <div className="flex items-center gap-3 mt-12 md:ml-auto">
                            <button 
                                onClick={handlePrev}
                                disabled={visibleStartIndex === 0}
                                className="w-[42px] h-[42px] border border-[#e5e5e5] rounded-sm flex items-center justify-center text-[#2b2b2b] transition-colors hover:bg-[#f4f4f4] disabled:opacity-30 disabled:hover:bg-transparent"
                                aria-label="Previous pages"
                            >
                                ←
                            </button>
                            <button 
                                onClick={handleNext}
                                disabled={visibleStartIndex >= blogPosts.length - 3}
                                className="w-[42px] h-[42px] border border-[#e5e5e5] rounded-sm flex items-center justify-center text-[#2b2b2b] transition-colors hover:bg-[#f4f4f4] disabled:opacity-30 disabled:hover:bg-transparent"
                                aria-label="Next pages"
                            >
                                →
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
