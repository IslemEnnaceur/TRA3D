"use client";

import { useState } from "react";
import { HeroHeader } from "@/components/hero8-header";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { Search, MessageCircle, HelpCircle, Layers, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function FAQClient() {
    const t = useTranslations("FAQ");
    const [searchTerm, setSearchTerm] = useState("");

    const faqCategories = [
        {
            id: "general",
            title: t("categories.general.title"),
            icon: <HelpCircle className="size-5" />,
            questions: t.raw("categories.general.questions").map((q: { q: string; a: string }) => ({
                question: q.q,
                answer: q.a
            }))
        },
        {
            id: "technical",
            title: t("categories.technical.title"),
            icon: <Layers className="size-5" />,
            questions: t.raw("categories.technical.questions").map((q: { q: string; a: string }) => ({
                question: q.q,
                answer: q.a
            }))
        },
        {
            id: "billing",
            title: t("categories.billing.title"),
            icon: <ShieldCheck className="size-5" />,
            questions: t.raw("categories.billing.questions").map((q: { q: string; a: string }) => ({
                question: q.q,
                answer: q.a
            }))
        }
    ];

    const filteredCategories = faqCategories.map(category => ({
        ...category,
        questions: category.questions.filter((q: { question: string; answer: string }) =>
            q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            q.answer.toLowerCase().includes(searchTerm.toLowerCase())
        )
    })).filter(category => category.questions.length > 0);

    return (
        <div className="min-h-screen bg-background text-foreground">
            <HeroHeader />

            <main className="max-w-4xl mx-auto px-6 py-24">
                <header className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                            {t.rich("header.title", {
                                highlight: (chunks) => <span className="text-primary italic">{chunks}</span>
                            })}
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            {t("header.subtitle")}
                        </p>
                    </motion.div>

                    {/* Search Bar */}
                    <div className="mt-10 relative max-w-md mx-auto">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder={t("search_placeholder")}
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
                                    {category.questions.map((faq: { question: string; answer: string }, index: number) => (
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
                            <p className="text-xl font-bold text-muted-foreground">{t("no_results")}</p>
                            <p className="text-sm text-muted-foreground mt-2">{t("try_searching")}</p>
                        </div>
                    )}
                </div>

                {/* Direct CTA */}
                <footer className="mt-24 p-10 rounded-[3rem] bg-primary text-primary-foreground text-center relative overflow-hidden">
                    {/* Background blob */}
                    <div className="absolute top-0 right-0 size-64 bg-white/10 rounded-full blur-[80px] -mr-32 -mt-32" />

                    <div className="relative z-10">
                        <MessageCircle className="size-12 mx-auto mb-6 opacity-80" />
                        <h2 className="text-3xl font-bold mb-4">{t("cta.title")}</h2>
                        <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
                            {t("cta.subtitle")}
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                href="/contact"
                                className="h-14 px-8 rounded-2xl bg-white text-primary font-bold inline-flex items-center justify-center hover:bg-white/90 transition-all scale-100 active:scale-95 shadow-xl"
                            >
                                {t("cta.book_demo")}
                            </Link>
                            <a
                                href="https://wa.me/yournumber"
                                className="h-14 px-8 rounded-2xl bg-white/20 text-white font-bold backdrop-blur-sm inline-flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all scale-100 active:scale-95"
                            >
                                {t("cta.whatsapp")}
                            </a>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
}
