"use client";

import { HeroHeader } from "@/components/hero8-header";
import ContactForm from "@/components/sections/contact-form";
import ContactVisual from "@/components/sections/contact-visual";
import ContactFAQ from "@/components/sections/contact-faq";
import FooterSection from "@/components/footer";

export default function ContactPage() {
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
                            {/* Left Column - Form */}
                            <div className="order-2 lg:order-1">
                                <div className="mb-12">
                                    <h1 className="text-4xl font-bold mb-4 tracking-tight">Lets build your <span className="text-primary italic">AR Menu</span></h1>
                                    <p className="text-lg text-muted-foreground">Fill out the form below and we&apos;ll be in touch within 2 hours.</p>
                                </div>
                                <ContactForm />
                            </div>

                            {/* Right Column - Visual & Benefits */}
                            <div className="order-1 lg:order-2 lg:sticky lg:top-32">
                                <ContactVisual />
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
