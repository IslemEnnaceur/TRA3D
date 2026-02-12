"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function FAQSection() {
    const t = useTranslations("FAQSection");

    const topFAQs = [
        { id: "faq-1", question: t("questions.0.q"), answer: t("questions.0.a") },
        { id: "faq-2", question: t("questions.1.q"), answer: t("questions.1.a") },
        { id: "faq-3", question: t("questions.2.q"), answer: t("questions.2.a") },
        { id: "faq-4", question: t("questions.3.q"), answer: t("questions.3.a") },
        { id: "faq-5", question: t("questions.4.q"), answer: t("questions.4.a") },
    ];

    return (
        <section className="py-24 bg-muted/20">
            <div className="max-w-3xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold lg:text-5xl">{t("title")}</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        {t("subtitle")}
                    </p>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                    {topFAQs.map(faq => (
                        <AccordionItem key={faq.id} value={faq.id} className="bg-background px-6 rounded-lg border">
                            <AccordionTrigger className="text-start hover:no-underline">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                <div className="text-center mt-8">
                    <Link href="/faq" className="text-primary hover:underline font-semibold">
                        {t("cta_full")}
                    </Link>
                </div>
            </div>
        </section>
    );
}

