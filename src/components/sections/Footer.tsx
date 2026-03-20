'use client'

import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="w-full bg-[#ffffff] border-t border-[#eeeeee] font-sans">
            <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col gap-12 lg:gap-16">
                
                {/* ── Row 1: Columns ── */}
                <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8">
                    
                    {/* Column 1: Brand */}
                    <div className="lg:w-[15%]">
                        <Link href="/" className="font-display text-sm tracking-[0.2em] uppercase text-[#2b2b2b]">
                            Cortex
                        </Link>
                    </div>

                    {/* Navigation Columns */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-4 lg:w-[60%]">
                        
                        {/* Column 2: Platform */}
                        <div className="flex flex-col">
                            <h4 className="text-[14px] font-medium text-[#2b2b2b] mb-4">Platform</h4>
                            <ul className="flex flex-col space-y-2.5">
                                {["Overview", "How Cortex Works", "Analytics & Intelligence", "AI Layer", "Workflow Automation", "Application Builder"].map(link => (
                                    <li key={link}>
                                        <Link href="#" className="text-[14px] text-[#888888] hover:text-[#2b2b2b] transition-colors duration-200">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3: Solutions */}
                        <div className="flex flex-col">
                            <h4 className="text-[14px] font-medium text-[#2b2b2b] mb-4">Solutions</h4>
                            <ul className="flex flex-col space-y-2.5">
                                {["Government & Public Sector", "Transportation & Infrastructure", "Energy & Utilities", "Security & Defense", "Healthcare", "Finance & Revenue Operations"].map(link => (
                                    <li key={link}>
                                        <Link href="#" className="text-[14px] text-[#888888] hover:text-[#2b2b2b] transition-colors duration-200">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 4: Resources */}
                        <div className="flex flex-col">
                            <h4 className="text-[14px] font-medium text-[#2b2b2b] mb-4">Resources</h4>
                            <ul className="flex flex-col space-y-2.5">
                                {["Insights & Blogs", "Case Studies", "Documentation"].map(link => (
                                    <li key={link}>
                                        <Link href="#" className="text-[14px] text-[#888888] hover:text-[#2b2b2b] transition-colors duration-200">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 5: Company */}
                        <div className="flex flex-col">
                            <h4 className="text-[14px] font-medium text-[#2b2b2b] mb-4">Company</h4>
                            <ul className="flex flex-col space-y-2.5">
                                {["About Cortex", "Careers", "Partners", "Contacts"].map(link => (
                                    <li key={link}>
                                        <Link href="#" className="text-[14px] text-[#888888] hover:text-[#2b2b2b] transition-colors duration-200">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Column 6: Social + Newsletter */}
                    <div className="flex flex-col lg:w-[25%] lg:items-end w-full">
                        
                        {/* Social Icons */}
                        <div className="flex items-center gap-4 mb-4 lg:pr-1">
                            {/* LinkedIn */}
                            <a href="#" className="text-[#2b2b2b] hover:text-black transition-colors" aria-label="LinkedIn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                            </a>
                            
                            {/* GitHub */}
                            <a href="#" className="text-[#2b2b2b] hover:text-black transition-colors" aria-label="GitHub">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                            
                            {/* Discord */}
                            <a href="#" className="text-[#2b2b2b] hover:text-black transition-colors" aria-label="Discord">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1569 2.419 0 1.3332-.946 2.4189-2.1569 2.4189z"/>
                                </svg>
                            </a>
                        </div>

                        {/* Newsletter Form */}
                        <form className="w-full flex flex-col items-start lg:items-end gap-3 mb-1" onSubmit={e => e.preventDefault()}>
                            <div className="flex items-stretch w-full max-w-[340px]">
                                <input 
                                    type="email" 
                                    placeholder="Stay in the connected" 
                                    className="flex-1 min-w-0 bg-[#ffffff] border border-[#cccccc] border-r-0 px-3 py-2 text-[14px] text-[#2b2b2b] placeholder:text-[#888888] focus:outline-none focus:border-[#2b2b2b] rounded-none transition-colors"
                                    required
                                />
                                <button 
                                    type="submit" 
                                    className="bg-transparent border border-[#2b2b2b] text-[#2b2b2b] hover:bg-[#2b2b2b] hover:text-white transition-colors px-4 py-2 text-[13px] whitespace-nowrap rounded-none flex items-center gap-1 group"
                                >
                                    Sign up <span className="text-[14px] leading-none mb-[2px] inline-block font-light">&gt;</span>
                                </button>
                            </div>
                            
                            {/* Terms */}
                            <div className="flex items-center gap-2 text-[11px] text-[#888888] w-full max-w-[340px] justify-start lg:justify-end">
                                <Link href="#" className="hover:text-[#2b2b2b] transition-colors underline decoration-transparent hover:decoration-[#2b2b2b]">Terms and services</Link>
                                <span className="mb-[2px]">•</span>
                                <Link href="#" className="hover:text-[#2b2b2b] transition-colors underline decoration-transparent hover:decoration-[#2b2b2b]">Privacy & Policies</Link>
                            </div>
                        </form>
                    </div>

                </div>

                {/* ── Row 2: Divider ── */}
                <div className="w-full h-px bg-[#eeeeee]"></div>

                {/* ── Row 3: Bottom Bar ── */}
                <div className="flex items-center justify-center">
                    <p className="text-[13px] text-[#888888]">
                        © 2026 Cortex. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    )
}
