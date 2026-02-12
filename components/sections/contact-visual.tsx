"use client"

import { motion } from "framer-motion"
import { Shield, Sparkles, Zap, Users } from "lucide-react"

import { useTranslations } from "next-intl"

export default function ContactVisual() {
    const t = useTranslations("Contact.visual")
    const benefits = t.raw("benefits").map((text: string, i: number) => {
        const icons = [
            <Zap key="zap" className="size-5 text-primary" />,
            <Users key="users" className="size-5 text-primary" />,
            <Shield key="shield" className="size-5 text-primary" />,
            <Sparkles key="sparkles" className="size-5 text-primary" />
        ]
        return { icon: icons[i], text }
    })

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
                    {t("badge")}
                </div>

                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                    {t.rich("title", {
                        primary: (chunks) => <span className="text-primary">{chunks}</span>
                    })}
                </h2>

                <p className="text-xl text-muted-foreground leading-relaxed">
                    {t("subtitle")}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {benefits.map((b: { icon: React.ReactNode; text: string }, i: number) => (
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
                    <p className="text-sm font-bold">{t("support.title")}</p>
                    <p className="text-xs text-muted-foreground">{t("support.subtitle")}</p>
                </div>
            </div>

            <div className="px-4">
                {/* Trusted symbols could go here */}
            </div>

        </motion.div>
    )
}
