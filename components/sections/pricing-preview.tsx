"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function PricingPreview() {
    const t = useTranslations("PricingPreview");

    const plans = [
        {
            key: "starter",
            price: t("plans.starter.price"),
            features: [
                t("plans.starter.features.0"),
                t("plans.starter.features.1"),
                t("plans.starter.features.2"),
                t("plans.starter.features.3"),
            ],
            popular: false,
        },
        {
            key: "pro",
            price: t("plans.pro.price"),
            features: [
                t("plans.pro.features.0"),
                t("plans.pro.features.1"),
                t("plans.pro.features.2"),
                t("plans.pro.features.3"),
                t("plans.pro.features.4"),
            ],
            popular: true,
        },
        {
            key: "enterprise",
            price: t("plans.enterprise.price"),
            features: [
                t("plans.enterprise.features.0"),
                t("plans.enterprise.features.1"),
                t("plans.enterprise.features.2"),
                t("plans.enterprise.features.3"),
                t("plans.enterprise.features.4"),
            ],
            popular: false,
        },
    ];

    return (
        <section id="pricing" className="py-24 bg-muted/30">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold lg:text-5xl">{t("title")}</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        {t("subtitle")}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan) => (
                        <div
                            key={plan.key}
                            className={`relative flex flex-col p-8 rounded-3xl border bg-background transition-all hover:shadow-2xl ${plan.popular ? "ring-2 ring-primary scale-105 z-10" : ""
                                }`}
                        >
                            {plan.popular && (
                                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    {t("labels.most_popular")}
                                </span>
                            )}

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold">{t(`plans.${plan.key}.name`)}</h3>
                                <p className="text-muted-foreground text-sm mt-2">{t(`plans.${plan.key}.description`)}</p>
                                <div className="mt-4 flex items-baseline gap-1">
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                    {plan.key !== "enterprise" && <span className="text-muted-foreground">/{t("billing")}</span>}
                                </div>
                            </div>

                            <ul className="flex-1 space-y-4 mb-8">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3 text-sm">
                                        <Check className="size-5 text-primary shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                asChild
                                size="lg"
                                variant={plan.popular ? "default" : "outline"}
                                className="w-full"
                            >
                                <Link href="/contact">{t(`plans.${plan.key}.cta`)}</Link>
                            </Button>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link href="/pricing" className="text-primary hover:underline font-semibold">
                        {t("cta_full")}
                    </Link>
                </div>
            </div>
        </section>
    );
}

