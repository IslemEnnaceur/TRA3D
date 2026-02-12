"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function InteractiveDemo() {
    const t = useTranslations("InteractiveDemo");

    const instructions = [
        { icon: "📱", title: t("instructions.0.title"), description: t("instructions.0.description") },
        { icon: "📷", title: t("instructions.1.title"), description: t("instructions.1.description") },
        { icon: "�", title: t("instructions.2.title"), description: t("instructions.2.description") },
    ];

    return (
        <section id="demo" className="py-24 bg-gradient-to-b from-background to-muted/20">
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold lg:text-5xl">{t("title")}</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        {t("subtitle")}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* QR Code */}
                    <div className="flex flex-col items-center">
                        <div className="bg-white p-4 rounded-2xl shadow-2xl">
                            <div className="relative w-64 h-64 overflow-hidden rounded-xl">
                                <Image
                                    src="/ar/cake.webp"
                                    alt={t("qr_label")}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <p className="mt-6 text-center text-sm text-muted-foreground max-w-xs">
                            {t("cta_text")}
                        </p>
                    </div>

                    {/* Demo Video/Image */}
                    <div className="relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-auto rounded-3xl"
                            >
                                <source src="/phone/AR-Code-demo.mp4" type="video/mp4" />
                            </video>
                        </div>

                        {/* Floating stats */}
                        <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl">
                            <p className="text-3xl font-bold">{t("stats.value")}</p>
                            <p className="text-sm">{t("stats.label")}</p>
                        </div>
                    </div>
                </div>

                {/* Instructions */}
                <div className="mt-16 grid md:grid-cols-3 gap-6 text-center">
                    {instructions.map((item, index) => (
                        <div key={index} className="p-6 bg-muted/50 rounded-xl">
                            <div className="text-4xl mb-3">{item.icon}</div>
                            <h3 className="font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

