"use client"

import { motion } from "framer-motion"
import { Shield, Sparkles, Zap, Users } from "lucide-react"

export default function ContactVisual() {
    const benefits = [
        { icon: <Zap className="size-5 text-primary" />, text: "30% average order lift" },
        { icon: <Users className="size-5 text-primary" />, text: "Used by 500+ global venues" },
        { icon: <Shield className="size-5 text-primary" />, text: "GDPR & Privacy Compliant" },
        { icon: <Sparkles className="size-5 text-primary" />, text: "No app download required" },
    ]

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative h-full flex flex-col justify-center gap-12"
        >
            {/* Visual Background Element */}
            <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl animate-pulse" />

            <div className="relative space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary uppercase tracking-wider">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    Next Demo: Tomorrow 10:00 AM
                </div>

                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                    See your menu come to life with <span className="text-primary">TRA 3D</span>
                </h2>

                <p className="text-xl text-muted-foreground leading-relaxed">
                    Book a 15-minute tailored demo where we’ll show you exactly how AR will look at your venue and project your potential ROI.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {benefits.map((b, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + i * 0.1 }}
                            className="flex items-center gap-3 p-4 rounded-2xl bg-background/40 border border-primary/10"
                        >
                            {b.icon}
                            <span className="font-semibold text-sm">{b.text}</span>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Response Indicator */}
            <div className="flex items-center gap-4 p-4 rounded-3xl bg-muted/30 border">
                <div className="relative size-12 flex-shrink-0">
                    <div className="absolute inset-0 bg-green-500 rounded-full blur-sm opacity-20 animate-pulse" />
                    <div className="relative h-full w-full rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden">
                        <div className="size-full bg-primary/20 flex items-center justify-center font-bold text-primary">DS</div>
                    </div>
                </div>
                <div>
                    <p className="text-sm font-bold">Fast-Track Support</p>
                    <p className="text-xs text-muted-foreground">Average response time: <span className="text-primary font-bold">1h 45m</span></p>
                </div>
            </div>

            <div className="px-4">
                {/* <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">Trusted by industry leaders</p>
                <div className="flex flex-wrap gap-8 opacity-40 grayscale hover:grayscale-0 transition-colors duration-500">
                    <div className="text-xl font-black italic">MARRIOTT</div>
                    <div className="text-xl font-black italic">HILTON</div>
                    <div className="text-xl font-black italic">TACO BELL</div>
                </div> */}
            </div>

        </motion.div>
    )
}
