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

const plans: PricingPlan[] = [
    {
        name: "Starter",
        description: "Perfect for single restaurants or small cafés.",
        monthlyPrice: 99,
        yearlyPrice: 79,
        metrics: "per month",
        features: [
            "5 Custom AR QR Codes",
            "Core 3D Dish Modeling",
            "Basic Scan Analytics",
            "Email Support (24h)",
            "Standard QR Templates"
        ],
        cta: "Start Free Trial",
        icon: <Zap className="size-6 text-primary" />
    },
    {
        name: "Pro",
        description: "Best for growing venues and group restaurants.",
        monthlyPrice: 249,
        yearlyPrice: 199,
        metrics: "per month",
        highlighted: true,
        features: [
            "Unlimited AR QR Codes",
            "Up to 25 Premium Dish Models",
            "Heatmaps & Real-time Analytics",
            "Priority WhatsApp Support",
            "Custom Branding & White-label",
            "Interactive Menu Upsells"
        ],
        cta: "Get Started Now",
        icon: <Sparkles className="size-6 text-primary" />
    },
    {
        name: "Enterprise",
        description: "Customized solutions for massive hotel chains.",
        monthlyPrice: "Custom",
        yearlyPrice: "Custom",
        metrics: "tailored billing",
        features: [
            "Unlimited QR & 3D Models",
            "Dedicated Account Manager",
            "Multi-location Dashboard",
            "API Integration",
            "Custom Feature Development",
            "On-site Setup & Training"
        ],
        cta: "Contact Sales",
        icon: <Shield className="size-6 text-primary" />
    }
];

export default function PricingPage() {
    const [isYearly, setIsYearly] = useState(false);

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
                            Scalable AR Solutions for <span className="text-primary italic">Every Venue</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Transform your menu from static paper to immersive 3D experiences.
                            Choose the plan that fits your growth and start converting more diners today.
                        </p>
                    </motion.div>

                    {/* Pricing Toggle */}
                    <div className="mt-12 flex items-center justify-center gap-4">
                        <span className={cn("text-sm font-medium", !isYearly ? "text-foreground" : "text-muted-foreground")}>Monthly</span>
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
                            <span className={cn("text-sm font-medium", isYearly ? "text-foreground" : "text-muted-foreground")}>Yearly</span>
                            <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider border border-primary/20">
                                Save 20%
                            </span>
                        </div>
                    </div>
                </section>

                {/* Pricing Grid */}
                <section className="px-6 py-12">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-start">
                        {plans.map((plan, index) => (
                            <PricingCard key={plan.name} plan={plan} isYearly={isYearly} index={index} />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}

function PricingCard({ plan, isYearly, index }: { plan: PricingPlan; isYearly: boolean; index: number }) {
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
                    Most Popular
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
                        {typeof price === "number" ? `$${price}` : price}
                    </span>
                    {typeof price === "number" && (
                        <span className="text-muted-foreground font-medium">/mo</span>
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
