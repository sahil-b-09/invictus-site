"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
    Bot,
    Cpu,
    Globe,
    MessageSquare,
    Phone,
    Megaphone,
    Briefcase,
    ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import ServiceExpansion from "./ServiceExpansion";

const services = [
    {
        id: "consulting",
        icon: <Briefcase className="w-8 h-8 text-slate-500 stroke-[1.5]" />,
        title: "AI Consulting & Strategy",
        description: "Find where AI actually moves the needle in your business.",
        color: "text-slate-500",
        howItWorks: {
            title: "From Chaos to Clarity",
            steps: ["Map your current operations end-to-end", "Identify the highest-impact automation opportunities", "Score each opportunity by effort vs. payoff", "Deliver an actionable implementation roadmap"]
        },
        useCase: {
            title: "The Overwhelmed Operations Team",
            problem: "Your team knows AI could help, but every vendor pitches a different tool. No clarity on what to build first or where the real ROI lives.",
            solution: "A structured audit that surfaces the 3-5 highest-impact areas for AI, ranked by business value, with a step-by-step deployment plan.",
            result: "A Prioritized AI Roadmap You Can Act On Immediately"
        }
    },
    {
        id: "web-dev",
        icon: <Globe className="w-8 h-8 text-bond-navy stroke-[1.5]" />,
        title: "Web Design & Development",
        description: "Websites that make visitors take action, not just scroll.",
        color: "text-blue-600",
        howItWorks: {
            title: "Built to Convert",
            steps: ["Understand your audience and goals", "Design a conversion-focused layout", "Build fast, mobile-first pages", "Optimize for search and speed"]
        },
        useCase: {
            title: "The Website That Doesn't Work Hard Enough",
            problem: "Your site looks decent but visitors leave without taking action. No clear path from landing to inquiry. You're paying for traffic that goes nowhere.",
            solution: "A redesigned site with a single obsession: getting the right visitor to take the right action. Clear messaging, fast load times, frictionless path to contact.",
            result: "A Site That Generates Leads While You Sleep"
        }
    },
    {
        id: "agents",
        icon: <Bot className="w-8 h-8 text-bond-purple stroke-[1.5]" />,
        title: "AI Conversational Agents",
        description: "Intelligent chatbots that handle inquiries around the clock.",
        color: "text-bond-purple",
        howItWorks: {
            title: "Your Always-On Team Member",
            steps: ["Learn your business, FAQs, and brand voice", "Build a chatbot trained on real data", "Deploy across website and messaging", "Improve continuously from real conversations"]
        },
        useCase: {
            title: "Leads Asking Questions at 2 AM",
            problem: "Potential customers reach out after hours, on weekends, during holidays. By the time your team responds the next morning, they've already moved on.",
            solution: "An AI chatbot that answers accurately, qualifies leads, and books appointments directly into your calendar — even at 2 AM on a Sunday.",
            result: "Every Inquiry Gets an Instant, Intelligent Response"
        }
    },
    {
        id: "voice",
        icon: <Phone className="w-8 h-8 text-bond-orange stroke-[1.5]" />,
        title: "Voice AI Solutions",
        description: "AI that answers your phone like your best receptionist.",
        color: "text-bond-orange",
        howItWorks: {
            title: "Never Miss a Call Again",
            steps: ["Define your call handling rules", "Configure a natural-sounding AI voice", "Connect to your calendar and routing", "Go live with real-time monitoring"]
        },
        useCase: {
            title: "The Phone Rings, Nobody Picks Up",
            problem: "Receptionist is on another call, it's after hours, or the office is busy. Every missed call is a potential client who will call your competitor next.",
            solution: "An AI voice agent that picks up every call, sounds natural, understands what the caller needs, qualifies them, and books or routes them.",
            result: "Every Call Answered, Every Lead Captured"
        }
    },
    {
        id: "whatsapp",
        icon: <MessageSquare className="w-8 h-8 text-green-500 stroke-[1.5]" />,
        title: "WhatsApp Business Automation",
        description: "Reach customers where they actually read messages.",
        color: "text-green-500",
        howItWorks: {
            title: "Your Business on WhatsApp",
            steps: ["Set up your official business channel", "Design message templates and automated flows", "Launch broadcast campaigns", "Enable a shared team inbox"]
        },
        useCase: {
            title: "Emails Going Unread, Leads Going Cold",
            problem: "Email campaigns get ignored. Open rates are low, response rates are worse. Meanwhile, your customers check WhatsApp dozens of times a day.",
            solution: "Move outreach to WhatsApp with broadcast campaigns, automated follow-ups, and a team inbox so your entire staff can respond from one number.",
            result: "Messages That Actually Get Opened and Answered"
        }
    },
    {
        id: "automation",
        icon: <Cpu className="w-8 h-8 text-bond-cyan stroke-[1.5]" />,
        title: "AI Automation Workflows",
        description: "Eliminate repetitive work across your entire operation.",
        color: "text-bond-cyan",
        howItWorks: {
            title: "Let the Systems Do the Work",
            steps: ["Identify manual tasks draining your time", "Design automated workflows", "Test every edge case", "Activate with real-time monitoring"]
        },
        useCase: {
            title: "Your Team Spends Hours on Tasks That Should Take Seconds",
            problem: "Data copied between spreadsheets manually. Emails sent one by one. Reports assembled by hand. Your team is busy but not productive.",
            solution: "Automated workflows that handle data movement, notifications, report generation, and routine decisions without anyone lifting a finger.",
            result: "Hours of Manual Work Replaced by Systems That Run Themselves"
        }
    },
    {
        id: "marketing",
        icon: <Megaphone className="w-8 h-8 text-bond-pink stroke-[1.5]" />,
        title: "Digital Marketing",
        description: "Get found. Get chosen. Get more customers.",
        color: "text-pink-500",
        howItWorks: {
            title: "Visibility That Drives Revenue",
            steps: ["Understand your market and ideal customer", "Build strategy across ads, search, and social", "Launch and track campaigns", "Optimize spend toward results"]
        },
        useCase: {
            title: "Spending on Marketing, Unsure What's Working",
            problem: "Running ads and posting on social media, but leads are inconsistent. Can't tell which channel drives results and which burns money.",
            solution: "A structured marketing operation with clear targeting, tracked campaigns, and ongoing optimization so every dollar works harder.",
            result: "Consistent Lead Flow From Channels You Can Measure"
        }
    }
];

export default function ServiceGrid() {
    const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

    useEffect(() => {
        const handleOpenService = (e: Event) => {
            const serviceId = (e as CustomEvent).detail;
            const match = services.find(s => s.id === serviceId);
            if (match) {
                setTimeout(() => setSelectedService(match), 500);
            }
        };
        window.addEventListener('openService', handleOpenService);
        return () => window.removeEventListener('openService', handleOpenService);
    }, []);

    return (
        <section id="services" className="py-24 px-6 bg-slate-50/50 relative">
            <div className="container mx-auto">
                {/* Sticker Title */}
                <div className="flex justify-center mb-20 relative z-10">
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="bg-bond-lime px-12 py-6 rounded-lg shadow-sticker transform -rotate-2 relative cursor-default curl-lime"
                    >
                        <div className="w-3 h-3 bg-bond-navy/20 rounded-full absolute top-3 left-1/2 -ml-1.5"></div>
                        <h2 className="text-4xl md:text-5xl font-black uppercase text-bond-navy tracking-tight">
                            What We Offer
                        </h2>
                        <div className="absolute -bottom-6 right-0 font-medium text-slate-400 text-sm transform rotate-6">
                            click to learn more...
                        </div>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, idx) => {
                        const isConsulting = service.id === 'consulting';
                        // Map colors if not explicitly defined (or use a lookup)
                        const stickerColor =
                            service.id === 'consulting' ? 'bg-bond-lime' :
                                service.id === 'web-dev' ? 'bg-blue-400' :
                                    service.id === 'agents' ? 'bg-bond-purple' :
                                        service.id === 'voice' ? 'bg-bond-orange' :
                                            service.id === 'whatsapp' ? 'bg-green-400' :
                                                service.id === 'automation' ? 'bg-bond-cyan' :
                                                    'bg-bond-pink'; // marketing

                        const stickerTextColor =
                            ['web-dev', 'agents'].includes(service.id) ? 'text-white' : 'text-bond-navy';

                        return (
                            <motion.div
                                key={idx}
                                id={`service-${service.id}`}
                                layoutId={`service-card-${service.id}`}
                                onClick={() => setSelectedService(service)}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -5 }}
                                className={cn(
                                    "rounded-3xl shadow-sticker relative overflow-hidden group transition-all cursor-pointer h-full flex flex-col bg-white border-none shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.15)]",
                                    isConsulting ? "md:col-span-2" : "md:col-span-1"
                                )}
                            >
                                {/* Decorative Tape/Sticker Elements (Unified) */}
                                <div className="absolute -top-3 left-1/2 w-24 h-6 bg-white/30 backdrop-blur-sm transform -translate-x-1/2 rotate-1 shadow-sm border border-white/40 z-30"></div>

                                <div className="relative z-10 flex-1 flex flex-col items-start h-full">

                                    {/* Sticker Header (Unified) */}
                                    <div className="absolute top-6 -left-2 z-20 transform -rotate-2">
                                        <div className={cn(
                                            stickerColor,
                                            stickerTextColor,
                                            "inline-block px-4 py-2 shadow-sm transform skew-x-[-5deg]",
                                            isConsulting ? "px-6 py-3" : "px-4 py-2"
                                        )}>
                                            <h3 className={cn(
                                                "font-black uppercase tracking-tighter skew-x-[5deg]",
                                                isConsulting ? "text-2xl md:text-3xl" : "text-lg leading-tight"
                                            )}>
                                                {service.title}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Main Content Area */}
                                    <div className={cn(
                                        "px-6 relative z-10 flex flex-col flex-1 w-full",
                                        isConsulting ? "mt-28" : "mt-24" // Adjust margin for header space
                                    )}>

                                        {/* Description Note */}
                                        <div className={cn(
                                            "p-6 rounded-xl border transform mb-6 shadow-sm flex-1",
                                            isConsulting ? "bg-yellow-50/50 border-yellow-100/50 rotate-1" : "bg-slate-50 border-slate-100 -rotate-1 group-hover:rotate-0 transition-transform"
                                        )}>
                                            <p className={cn(
                                                "font-medium text-slate-700 leading-relaxed",
                                                isConsulting ? "text-xl md:text-2xl" : "text-lg"
                                            )}>
                                                "{service.description}"
                                            </p>

                                            {/* Micro-Label */}
                                            <div className="mt-4 flex items-center gap-2">
                                                <div className="w-8 h-1 bg-slate-200 rounded-full"></div>
                                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                                    {isConsulting ? "Strategy Note" : "Service Note"}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Footer / Action */}
                                        <div className="mt-auto flex justify-end pb-8">
                                            <a href="https://api.leadconnectorhq.com/widget/booking/ueskMJ9Ug4gjlImoO5RB" target="_blank" rel="noopener noreferrer" className="group/btn relative inline-block cursor-pointer">
                                                {isConsulting && (
                                                    <div className="absolute inset-0 bg-bond-navy rounded-full transform translate-y-1 translate-x-1 transition-transform group-hover/btn:translate-y-2 group-hover/btn:translate-x-2"></div>
                                                )}
                                                <div className={cn(
                                                    "relative border-2 border-bond-navy text-bond-navy rounded-full font-bold uppercase tracking-wide flex items-center gap-2 hover:-translate-y-1 hover:-translate-x-1 transition-transform bg-white",
                                                    isConsulting ? "px-6 py-2 text-sm" : "px-4 py-1.5 text-xs"
                                                )}>
                                                    View <ArrowRight className="w-4 h-4" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <ServiceExpansion
                isOpen={!!selectedService}
                onClose={() => setSelectedService(null)}
                service={selectedService}
                color={selectedService?.color || "text-bond-navy"}
            />
        </section>
    );
}
