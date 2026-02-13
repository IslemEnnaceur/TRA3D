"use client";

import { useState } from "react";
import { HeroHeader } from "@/components/hero8-header";
import { Check, Zap, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PricingPlan {
    name: string;
    description: string;
    monthlyPrice: number | string;
    yearlyPrice: number | string;
    metrics: string;
    features: string[];
    cta: string;
    highlighted?: boolean;
    icon: React.ReactNode;
}


import { useTranslations } from "next-intl";

export default function PricingClient() {
    const t = useTranslations("Pricing");
    const [isYearly, setIsYearly] = useState(false);

    const translatedPlans: PricingPlan[] = [
        {
            name: t("plans.starter.name"),
            description: t("plans.starter.description"),
            monthlyPrice: 99,
            yearlyPrice: 79,
            metrics: t("billing.monthly"),
            features: t.raw("plans.starter.features"),
            cta: t("labels.cta_free_trial"),
            icon: <Zap className="size-6 text-primary" />
        },
        {
            name: t("plans.pro.name"),
            description: t("plans.pro.description"),
            monthlyPrice: 249,
            yearlyPrice: 199,
            metrics: t("billing.monthly"),
            highlighted: true,
            features: t.raw("plans.pro.features"),
            cta: t("labels.cta_get_started"),
            icon: <Sparkles className="size-6 text-primary" />
        },
        {
            name: t("plans.enterprise.name"),
            description: t("plans.enterprise.description"),
            monthlyPrice: t("labels.custom"),
            yearlyPrice: t("labels.custom"),
            metrics: t("labels.tailored"),
            features: t.raw("plans.enterprise.features"),
            cta: t("labels.cta_contact"),
            icon: <Shield className="size-6 text-primary" />
        }
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">
            <HeroHeader />

            <main className="pb-24 overflow-x-hidden">
                {/* Value Proposition Section */}
                <section className="pt-20 pb-12 text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                            {t.rich("header.title", {
                                primary: (chunks) => <span className="text-primary">{chunks}</span>
                            })}
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            {t("header.subtitle")}
                        </p>
                    </motion.div>

                    {/* Pricing Toggle */}
                    <div className="mt-12 flex items-center justify-center gap-4">
                        <span className={cn("text-sm font-medium", !isYearly ? "text-foreground" : "text-muted-foreground")}>
                            {t("billing.monthly")}
                        </span>
                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className="relative w-14 h-7 bg-muted rounded-full p-1 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                            <motion.div
                                animate={{ x: isYearly ? 28 : 0 }}
                                className="w-5 h-5 bg-primary rounded-full shadow-sm"
                            />
                        </button>
                        <div className="flex items-center gap-2">
                            <span className={cn("text-sm font-medium", isYearly ? "text-foreground" : "text-muted-foreground")}>
                                {t("billing.yearly")}
                            </span>
                            <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider border border-primary/20">
                                {t("billing.discount")}
                            </span>
                        </div>
                    </div>
                </section>

                {/* Pricing Grid */}
                <section className="px-6 py-12">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-start">
                        {translatedPlans.map((plan, index) => (
                            <PricingCard key={plan.name} plan={plan} isYearly={isYearly} index={index} />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}

function PricingCard({ plan, isYearly, index }: { plan: PricingPlan; isYearly: boolean; index: number }) {
    const t = useTranslations("Pricing");
    const price = typeof plan.monthlyPrice === "number"
        ? (isYearly ? plan.yearlyPrice : plan.monthlyPrice)
        : plan.monthlyPrice;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className={cn(
                "relative p-8 rounded-[2.5rem] border bg-background/60 backdrop-blur-xl transition-all duration-300",
                plan.highlighted
                    ? "border-primary/50 shadow-[0_0_40px_-15px_rgba(var(--primary),0.3)] ring-1 ring-primary/20"
                    : "border-border/50 shadow-xl"
            )}
        >
            {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-[0.1em] shadow-lg">
                    {t("labels.most_popular")}
                </div>
            )}

            <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                    {plan.icon}
                    <h3 className="text-2xl font-bold tracking-tight">{plan.name}</h3>
                </div>
                <p className="text-muted-foreground text-sm min-h-[40px]">{plan.description}</p>
            </div>

            <div className="mb-8 p-6 rounded-3xl bg-muted/30">
                <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black tracking-tighter">
                        {typeof price === "number" ? `DT${price}` : price}
                    </span>
                    {typeof price === "number" && (
                        <span className="text-muted-foreground font-medium">
                            {isYearly ? t("labels.year") : t("labels.month")}
                        </span>
                    )}
                </div>
                <p className="text-xs text-muted-foreground mt-2 font-medium tracking-wide uppercase">
                    {plan.metrics}
                </p>
            </div>

            <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm font-medium leading-tight">
                        <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="size-3 text-primary stroke-[3]" />
                        </div>
                        {feature}
                    </li>
                ))}
            </ul>

            <Button
                asChild
                size="lg"
                variant={plan.highlighted ? "default" : "outline"}
                className={cn(
                    "w-full h-14 rounded-2xl font-bold transition-all active:scale-95",
                    plan.highlighted ? "shadow-lg shadow-primary/20" : ""
                )}
            >
                <Link href="/contact">{plan.cta}</Link>
            </Button>
        </motion.div>
    );
}
