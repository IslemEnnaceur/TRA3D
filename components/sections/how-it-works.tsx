"use client";

import { useTranslations } from "next-intl";

export default function HowItWorks() {
    const t = useTranslations("HowItWorks");

    const steps = [
        {
            step: "1",
            title: t("steps.0.title"),
            description: t("steps.0.description"),
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            )
        },
        {
            step: "2",
            title: t("steps.1.title"),
            description: t("steps.1.description"),
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
            )
        },
        {
            step: "3",
            title: t("steps.2.title"),
            description: t("steps.2.description"),
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            )
        }
    ];

    return (
        <section id="how-it-works" className="py-24 bg-background">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold lg:text-5xl">{t("title")}</h2>
                    <p className="mt-4 text-lg text-muted-foreground">{t("subtitle")}</p>
                </div>

                {/* Desktop: Horizontal Timeline */}
                <div className="hidden md:flex items-start justify-between relative">
                    {/* Connecting line */}
                    <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" style={{ top: '4rem' }} />

                    {steps.map((item, index) => (
                        <div key={index} className="flex-1 relative">
                            <div className="flex flex-col items-center text-center">
                                {/* Step number circle */}
                                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4 relative z-10 border-4 border-background">
                                    {item.step}
                                </div>

                                {/* Icon */}
                                <div className="mb-4 text-primary">
                                    {item.icon}
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-muted-foreground">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile: Vertical Timeline */}
                <div className="md:hidden space-y-8">
                    {steps.map((item, index) => (
                        <div key={index} className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                                    {item.step}
                                </div>
                                {index < steps.length - 1 && (
                                    <div className="w-0.5 flex-1 bg-primary/20 mt-2" />
                                )}
                            </div>
                            <div className="flex-1 pb-8">
                                <div className="mb-3 text-primary">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-muted-foreground">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

