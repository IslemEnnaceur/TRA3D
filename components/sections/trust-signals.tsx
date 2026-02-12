"use client";

import { Shield, Lock, CheckCircle, Globe } from "lucide-react";
import { useTranslations } from "next-intl";

export default function TrustSignals() {
    const t = useTranslations("TrustSignals");

    const signals = [
        {
            icon: <Shield className="size-8 text-primary" />,
            title: t("gdpr.title"),
            description: t("gdpr.description")
        },
        {
            icon: <CheckCircle className="size-8 text-primary" />,
            title: t("uptime.title"),
            description: t("uptime.description")
        },
        {
            icon: <Lock className="size-8 text-primary" />,
            title: t("ssl.title"),
            description: t("ssl.description")
        },
        {
            icon: <Globe className="size-8 text-primary" />,
            title: t("global.title"),
            description: t("global.description")
        }
    ];

    return (
        <section className="py-12 border-y bg-muted/10">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {signals.map((signal, index) => (
                        <div key={index} className="flex flex-col items-center text-center space-y-3">
                            <div className="p-3 bg-background rounded-2xl shadow-sm border">
                                {signal.icon}
                            </div>
                            <h3 className="font-bold text-sm lg:text-base">{signal.title}</h3>
                            <p className="text-xs text-muted-foreground hidden sm:block">
                                {signal.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

