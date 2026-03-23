'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import InteractiveGrid from '@/components/ui/InteractiveGrid'

const sectors = [
    "Government & Public Sector",
    "Transportation & Infrastructure",
    "Energy & Utilities",
    "Security & Defense",
    "Healthcare & Public Health",
    "Finance & Revenue Operations"
]

const countries = [
    "Nigeria", "Ghana", "Kenya", "South Africa", "Ethiopia", "Rwanda", "Egypt", "Senegal", "Other"
]

// Custom Chevron matching the screenshot closely
const CustomChevron = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9" />
    </svg>
)

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        organization: '',
        sector: '',
        country: ''
    })

    const [errors, setErrors] = useState<Record<string, boolean>>({})
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleChange = (field: string, value: string) => {
        // Clear success state if they start typing again
        if (isSubmitted) setIsSubmitted(false)
        
        setFormData(prev => ({ ...prev, [field]: value }))
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: false }))
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        
        const newErrors: Record<string, boolean> = {}
        let hasError = false

        Object.keys(formData).forEach(key => {
            if (!formData[key as keyof typeof formData].trim()) {
                newErrors[key] = true
                hasError = true
            }
        })

        if (hasError) {
            setErrors(newErrors)
            return
        }

        // Fake successful submission
        setIsSubmitted(true)
    }

    const baseInputClasses = (field: string) => cn(
        "w-full bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 pb-3 text-[14px] transition-colors rounded-none",
        errors[field] 
            ? "border-[#cc0000] focus:border-[#cc0000]" 
            : "border-[#cccccc] focus:border-[#2b2b2b]"
    )

    const labelClasses = "block text-[13px] text-[#2b2b2b] mb-4" // Increased mb slightly for spacious look
    const asterisk = <span className="text-[#cc0000] ml-1 font-serif text-[15px]">*</span>

    return (
        <section id="contact" className="relative bg-[#f4f4f4] py-24 md:py-32 w-full font-sans overflow-hidden">
            <InteractiveGrid theme="light" />
            <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-12">
                
                {/* ── Left Column (approx 35%) ── */}
                <div className="md:col-span-5 lg:col-span-4 flex flex-col items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h2 
                            className="text-[28px] md:text-[32px] font-normal leading-[1.25] text-[#2b2b2b] max-w-[280px]"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                            Start building smarter operations with Cortex
                        </h2>
                    </motion.div>
                </div>

                {/* ── Right Column: Form (approx 65%) ── */}
                <div className="md:col-span-7 lg:col-span-8 flex flex-col w-full max-w-[600px] lg:ml-auto">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-10 w-full" noValidate>
                        
                        {/* First Name */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
                            className="w-full relative"
                        >
                            <label htmlFor="firstName" className={labelClasses}>
                                First name:{asterisk}
                            </label>
                            <input 
                                id="firstName"
                                type="text"
                                value={formData.firstName}
                                onChange={(e) => handleChange('firstName', e.target.value)}
                                className={cn(baseInputClasses('firstName'), "text-[#2b2b2b]")}
                            />
                        </motion.div>

                        {/* Last Name */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: 0.16, ease: "easeOut" }}
                            className="w-full relative"
                        >
                            <label htmlFor="lastName" className={labelClasses}>
                                Last name:{asterisk}
                            </label>
                            <input 
                                id="lastName"
                                type="text"
                                value={formData.lastName}
                                onChange={(e) => handleChange('lastName', e.target.value)}
                                className={cn(baseInputClasses('lastName'), "text-[#2b2b2b]")}
                            />
                        </motion.div>

                        {/* Email */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: 0.24, ease: "easeOut" }}
                            className="w-full relative"
                        >
                            <label htmlFor="email" className={labelClasses}>
                                Email:{asterisk}
                            </label>
                            <input 
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleChange('email', e.target.value)}
                                className={cn(baseInputClasses('email'), "text-[#2b2b2b]")}
                            />
                        </motion.div>

                        {/* Organization */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: 0.32, ease: "easeOut" }}
                            className="w-full relative"
                        >
                            <label htmlFor="organization" className={labelClasses}>
                                Organization/Institution:{asterisk}
                            </label>
                            <input 
                                id="organization"
                                type="text"
                                value={formData.organization}
                                onChange={(e) => handleChange('organization', e.target.value)}
                                className={cn(baseInputClasses('organization'), "text-[#2b2b2b]")}
                            />
                        </motion.div>

                        {/* Sector */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: 0.40, ease: "easeOut" }}
                            className="w-full relative"
                        >
                            <label htmlFor="sector" className={labelClasses}>
                                Sector:{asterisk}
                            </label>
                            <div className="relative">
                                <select 
                                    id="sector"
                                    value={formData.sector}
                                    onChange={(e) => handleChange('sector', e.target.value)}
                                    className={cn(
                                        baseInputClasses('sector'), 
                                        "pr-10 cursor-pointer",
                                        formData.sector === "" ? "text-[#aaaaaa]" : "text-[#2b2b2b]"
                                    )}
                                >
                                    <option value="" disabled className="text-[#aaaaaa]">Select</option>
                                    {sectors.map(s => <option key={s} value={s} className="text-[#2b2b2b]">{s}</option>)}
                                </select>
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[#2b2b2b] pb-3">
                                    <CustomChevron />
                                </div>
                            </div>
                        </motion.div>

                        {/* Country */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: 0.48, ease: "easeOut" }}
                            className="w-full relative"
                        >
                            <label htmlFor="country" className={labelClasses}>
                                Country:{asterisk}
                            </label>
                            <div className="relative">
                                <select 
                                    id="country"
                                    value={formData.country}
                                    onChange={(e) => handleChange('country', e.target.value)}
                                    className={cn(
                                        baseInputClasses('country'), 
                                        "pr-10 cursor-pointer",
                                        formData.country === "" ? "text-[#aaaaaa]" : "text-[#2b2b2b]"
                                    )}
                                >
                                    <option value="" disabled className="text-[#aaaaaa]">Select</option>
                                    {countries.map(c => <option key={c} value={c} className="text-[#2b2b2b]">{c}</option>)}
                                </select>
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[#2b2b2b] pb-3">
                                    <CustomChevron />
                                </div>
                            </div>
                        </motion.div>

                        {/* Submit Button & Success Message */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: 0.56, ease: "easeOut" }}
                            className="mt-2 flex flex-col items-start gap-5 min-h-[80px]"
                        >
                            {!isSubmitted ? (
                                <button 
                                    type="submit"
                                    className="border border-[#2b2b2b] text-[#2b2b2b] bg-transparent hover:bg-[#2b2b2b] hover:text-white transition-colors duration-300 uppercase tracking-[0.08em] text-[13px] font-medium py-3 px-8 rounded-none mt-4"
                                >
                                    Submit
                                </button>
                            ) : (
                                <motion.p
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-[13px] text-[#aaaaaa] mt-6"
                                >
                                    Thank you. We will be in touch shortly.
                                </motion.p>
                            )}
                        </motion.div>

                    </form>
                </div>
            </div>
        </section>
    )
}
