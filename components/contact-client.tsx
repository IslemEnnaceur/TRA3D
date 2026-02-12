"use client";

import { HeroHeader } from "@/components/hero8-header";
import ContactForm from "@/components/sections/contact-form";
import ContactVisual from "@/components/sections/contact-visual";
import ContactFAQ from "@/components/sections/contact-faq";
import FooterSection from "@/components/footer";
import { Mail, MessageCircle, ArrowRight } from "lucide-react";

import { useTranslations } from "next-intl";

export default function ContactClient() {
    const t = useTranslations("Contact");
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <HeroHeader />

            <main className="flex-1 relative overflow-hidden">
                {/* Dynamic Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 size-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 size-[500px] bg-accent/10 rounded-full blur-[120px] animate-pulse delay-700" />
                </div>

                <section className="py-20 lg:py-32">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                            {/* Left Column - Form & Quick Contact */}
                            <div className="order-2 lg:order-1 space-y-12">
                                <div>
                                    <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight">
                                        {t.rich("header.title", {
                                            highlight: (chunks) => <span className="text-primary italic">{chunks}</span>
                                        })}
                                    </h1>
                                    <p className="text-lg text-muted-foreground">
                                        {t("header.subtitle")}
                                    </p>
                                </div>

                                <div className="p-8 bg-background/60 backdrop-blur-xl rounded-3xl border border-primary/10 shadow-2xl relative overflow-hidden">
                                    <h3 className="text-xl font-bold mb-6">{t("form.title")}</h3>
                                    <ContactForm />
                                </div>
                            </div>

                            {/* Right Column - Visual & Benefits */}
                            <div className="order-1 lg:order-2 lg:sticky lg:top-32">
                                <ContactVisual />

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <ContactMethodItem
                                        icon={<MessageCircle className="size-6" />}
                                        title={t("methods.whatsapp.title")}
                                        description={t("methods.whatsapp.description")}
                                        link="https://wa.me/yournumber"
                                        color="bg-green-500/10 text-green-600 border-green-500/20"
                                    />
                                    <ContactMethodItem
                                        icon={<Mail className="size-6" />}
                                        title={t("methods.email.title")}
                                        description={t("methods.email.description")}
                                        link="mailto:contact@tra3d.com"
                                        color="bg-primary/10 text-primary border-primary/20"
                                    />
                                </div>
                            </div>

                        </div>

                        {/* Specialized Contact FAQ */}
                        <ContactFAQ />


                    </div>
                </section>
            </main>

            <FooterSection />
        </div>
    );
}

function ContactMethodItem({ icon, title, description, link, color }: {
    icon: React.ReactNode;
    title: string;
    description: string;
    link: string;
    color: string;
}) {
    return (
        <a
            href={link}
            target={link.startsWith('http') ? "_blank" : undefined}
            rel={link.startsWith('http') ? "noopener noreferrer" : undefined}
            className={`group p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] ${color}`}
        >
            <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-background shadow-sm">
                    {icon}
                </div>
                <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
            <div>
                <h4 className="font-bold text-foreground">{title}</h4>
                <p className="text-sm opacity-80">{description}</p>
            </div>
        </a>
    );
}
