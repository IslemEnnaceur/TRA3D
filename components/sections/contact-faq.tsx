import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import { useTranslations } from "next-intl";

export default function ContactFAQ() {
    const t = useTranslations("Contact.faq");
    const faqs = t.raw("questions");

    return (
        <div className="max-w-3xl mx-auto py-24">
            <h2 className="text-3xl font-bold text-center mb-12">{t("title")}</h2>
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq: { q: string; a: string }, index: number) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b border-primary/10">
                        <AccordionTrigger className="text-left py-6 hover:text-primary transition-colors">
                            {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-6">
                            {faq.a}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}
