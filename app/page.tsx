"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhoWeAre from "@/components/WhoWeAre";
import ServiceGrid from "@/components/ServiceGrid";
import ProcessTimeline from "@/components/ProcessTimeline";
import UseCases from "@/components/UseCases";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/Button";
import { ArrowRight, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen font-sans selection:bg-bond-lime selection:text-bond-navy overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        {/* Abstract Blobs */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-bond-purple/10 rounded-full blur-[80px] -z-10 mix-blend-multiply" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-bond-cyan/10 rounded-full blur-[80px] -z-10 mix-blend-multiply" />
        <div className="absolute top-40 left-1/3 w-[300px] h-[300px] bg-bond-lime/20 rounded-full blur-[80px] -z-10 mix-blend-multiply" />

        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              whileHover={{ rotate: -2, scale: 1.05 }}
              className="inline-block bg-bond-lime text-bond-navy px-4 py-1.5 rounded-lg text-sm font-bold mb-8 shadow-sticker transform -rotate-2"
            >
              Enterprise-Grade AI. Startup Speed.
            </motion.div>

            <h1 className="text-6xl lg:text-7xl font-bold text-bond-navy leading-[1.05] mb-8 tracking-tight">
              We Engineer <br />
              <span className="relative inline-block">
                <span className="relative z-10">Intelligent</span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-bond-cyan/30 -rotate-1 rounded-sm -z-0"></span>
              </span> <br />
              Business Systems.
            </h1>

            <p className="text-xl text-bond-gray mb-10 leading-relaxed max-w-lg font-medium">
              The sweet spot between a high-end <strong>Tech Consultancy</strong> and an <strong>AI Lab</strong>. We architect AI systems while you scale revenue.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a href="https://api.leadconnectorhq.com/widget/booking/ueskMJ9Ug4gjlImoO5RB" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="shadow-xl shadow-bond-navy/20 flex items-center gap-3 group">
                  Book a Strategy Call
                  <div className="bg-bond-lime text-bond-navy rounded-full p-1 group-hover:rotate-45 transition-transform">
                    <ArrowRight size={18} strokeWidth={3} />
                  </div>
                </Button>
              </a>
              <a href="#services">
                <Button variant="secondary" size="lg">
                  View Solutions
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Value Prop Graphic (Bento Style) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative h-[500px] hidden lg:block"
          >
            {/* Abstract Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-bond-lime/10 via-white to-bond-cyan/10 rounded-full blur-[80px] -z-10"></div>

            <div className="relative w-full h-full">
              {/* Float Card 1: ROI */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 left-10 bg-white p-5 rounded-2xl shadow-sticker-lime border border-slate-100 w-48 z-20"
              >
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-bond-navy" />
                  <span className="font-bold text-sm text-bond-navy">Efficiency</span>
                </div>
                <div className="text-3xl font-black text-bond-navy">+300%</div>
                <div className="text-xs text-bond-gray font-bold">ROI Guaranteed</div>
              </motion.div>

              {/* Float Card 2: 24/7 (Purple) */}
              <motion.div
                animate={{ y: [15, -15, 15] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-0 right-10 bg-white p-5 rounded-2xl shadow-sticker-purple border border-slate-100 w-56 z-10"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-sm text-bond-navy">Active Agents</span>
                  <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-1 rounded-full">Live</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-bond-purple flex items-center justify-center text-white text-xs">AI</div>
                  <div className="bg-slate-100 p-2 rounded-lg text-xs w-full">
                    Handling 42 chats...
                  </div>
                </div>
              </motion.div>

              {/* Float Card 3: Code (Cyan) */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-bond-navy p-6 rounded-2xl shadow-2xl border border-bond-navy/50 z-30 w-80"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-[10px] font-mono text-slate-400">automation.ts</div>
                </div>
                <div className="font-mono text-xs text-slate-300 space-y-1">
                  <div className="flex">
                    <span className="text-bond-purple mr-2">const</span>
                    <span className="text-bond-lime">business</span>
                    <span className="text-white mx-2">=</span>
                    <span className="text-white">{"{"}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-bond-cyan">status:</span> <span className="text-yellow-300">"Autopilot"</span>,
                  </div>
                  <div className="text-white">{"}"}</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <WhoWeAre />

      {/* Services Section */}
      <ServiceGrid />

      {/* Use Cases Section */}
      <UseCases />

      {/* How We Work */}
      <ProcessTimeline />

      {/* Client Stories / Testimonials */}
      <Testimonials />

      {/* Footer */}
      <Footer />
    </main>
  );
}
