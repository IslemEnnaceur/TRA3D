"use client";

import { HeroHeader } from "@/components/hero8-header";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { Search, MessageCircle, HelpCircle, Layers, ShieldCheck } from "lucide-react";
import { useState } from "react";

const faqCategories = [
    {
        id: "general",
        title: "General Questions",
        icon: <HelpCircle className="size-5" />,
        questions: [
            {
                question: "Do customers need to download an app?",
                answer: "Absolutely not. One of TRA 3D's core strengths is its frictionless experience. Customers simply scan a QR code with their native smartphone camera, and the AR experience launches instantly in their mobile browser (Safari, Chrome, etc.)."
            },
            {
                question: "What is TRA 3D and how does it help my business?",
                answer: "TRA 3D is an AR Commerce platform designed to bridge the gap between digital menus and physical reality. We turn your 2D photos into high-fidelity 3D models that customers can project onto their tables, leading to a 25-40% increase in order value and higher engagement."
            },
            {
                question: "How do I get my QR codes?",
                answer: "Once you choose a plan, you upload your menu photos to our portal. Our team (or AI, depending on your tier) creates the 3D models. We then provide you with high-resolution QR codes that you can print on table tents, menus, or posters."
            }
        ]
    },
    {
        id: "technical",
        title: "Technical & Integration",
        icon: <Layers className="size-5" />,
        questions: [
            {
                question: "Which devices are compatible with TRA 3D?",
                answer: "TRA 3D supports AR Quick Look on iOS (iPhone/iPad) and Scene Viewer on Android. This covers over 95% of modern smartphones released in the last 4-5 years."
            },
            {
                question: "Can I integrate this with my existing POS system?",
                answer: "Our Enterprise plan offers robust API access and webhooks, allowing you to sync AR views with inventory and order placement. For smaller plans, the codes are independent and work alongside any existing setup."
            },
            {
                question: "What format of photos do I need to provide?",
                answer: "Standard high-resolution mobile photos of your dishes/products from 3-4 different angles are sufficient. For the best results, we recommend photos taken in natural lighting without busy backgrounds."
            }
        ]
    },
    {
        id: "billing",
        title: "Billing & Support",
        icon: <ShieldCheck className="size-5" />,
        questions: [
            {
                question: "Is there a long-term contract?",
                answer: "Standard plans are available on month-to-month terms. Yearly subscriptions offer a 20% discount but are paid upfront. You can upgrade or downgrade at any time."
            },
            {
                question: "What kind of support is provided?",
                answer: "Starter plans include standard email support. Professional and Enterprise plans benefit from priority WhatsApp support and a dedicated account manager to ensure your AR menu is a success."
            }
        ]
    }
];

export default function FAQPage() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredCategories = faqCategories.map(category => ({
        ...category,
        questions: category.questions.filter(q =>
            q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            q.answer.toLowerCase().includes(searchTerm.toLowerCase())
        )
    })).filter(category => category.questions.length > 0);

    // JSON-LD Schema for SEO
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqCategories.flatMap(cat =>
            cat.questions.map(q => ({
                "@type": "Question",
                "name": q.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": q.answer
                }
            }))
        )
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <HeroHeader />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <main className="max-w-4xl mx-auto px-6 py-24">
                <header className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                            Common <span className="text-primary italic">Questions</span>
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Find answers to technical requirements, pricing, and how TRA 3D can skyrocket your conversion rates.
                        </p>
                    </motion.div>

                    {/* Search Bar */}
                    <div className="mt-10 relative max-w-md mx-auto">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search for an objection..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full h-12 pl-11 pr-4 rounded-2xl border border-primary/10 bg-muted/30 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all font-medium"
                        />
                    </div>
                </header>

                <div className="space-y-16">
                    {filteredCategories.length > 0 ? (
                        filteredCategories.map((category, catIndex) => (
                            <motion.section
                                key={category.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: catIndex * 0.1 }}
                            >
                                <div className="flex items-center gap-3 mb-6 px-4">
                                    <div className="p-2 rounded-xl bg-primary/10 text-primary">
                                        {category.icon}
                                    </div>
                                    <h2 className="text-2xl font-bold">{category.title}</h2>
                                </div>

                                <Accordion type="single" collapsible className="w-full space-y-4">
                                    {category.questions.map((faq, index) => (
                                        <AccordionItem
                                            key={index}
                                            value={`${category.id}-${index}`}
                                            className="border rounded-2xl px-6 bg-background/40 backdrop-blur-sm border-primary/5 hover:border-primary/20 transition-colors shadow-sm"
                                        >
                                            <AccordionTrigger className="text-left py-6 font-bold text-lg hover:no-underline hover:text-primary transition-colors">
                                                {faq.question}
                                            </AccordionTrigger>
                                            <AccordionContent className="pb-6 text-muted-foreground leading-relaxed text-[17px]">
                                                {faq.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </motion.section>
                        ))
                    ) : (
                        <div className="text-center py-20 bg-muted/20 rounded-3xl border border-dashed border-primary/20">
                            <p className="text-xl font-bold text-muted-foreground">No matches found for your search.</p>
                            <p className="text-sm text-muted-foreground mt-2">Try searching for &quot;app&quot; or &quot;POS&quot;.</p>
                        </div>
                    )}
                </div>

                {/* Direct CTA */}
                <footer className="mt-24 p-10 rounded-[3rem] bg-primary text-primary-foreground text-center relative overflow-hidden">
                    {/* Background blob */}
                    <div className="absolute top-0 right-0 size-64 bg-white/10 rounded-full blur-[80px] -mr-32 -mt-32" />

                    <div className="relative z-10">
                        <MessageCircle className="size-12 mx-auto mb-6 opacity-80" />
                        <h2 className="text-3xl font-bold mb-4">Still have reservations?</h2>
                        <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
                            Speak directly with our AR specialists. We&apos;ll help you understand if TRA 3D is right for your venue.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a
                                href="/contact"
                                className="h-14 px-8 rounded-2xl bg-white text-primary font-bold inline-flex items-center justify-center hover:bg-white/90 transition-all scale-100 active:scale-95 shadow-xl"
                            >
                                Book a 15m Demo
                            </a>
                            <a
                                href="https://wa.me/yournumber"
                                className="h-14 px-8 rounded-2xl bg-white/20 text-white font-bold backdrop-blur-sm inline-flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all scale-100 active:scale-95"
                            >
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
}
