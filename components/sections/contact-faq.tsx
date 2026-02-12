import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function ContactFAQ() {
    const faqs = [
        {
            question: "What happens after I request a demo?",
            answer: "A TRA 3D specialist will review your venue details and email you within 2 hours to pick a time. During the call, we'll show you a live AR prototype using items from your category and project your potential ROI."
        },
        {
            question: "Do I need to send professional photographs?",
            answer: "Standard smartphone photos work perfectly. We leverage AI-assisted photogrammetry to turn your photos into high-fidelity 3D models."
        },
        {
            question: "How long is the typical setup process?",
            answer: "Enterprise clients typically go live in 5-7 business days. This includes model creation, QR generation, and quality assurance."
        },
        {
            question: "Is there a monthly subscription fee?",
            answer: "No, we believe in transparent, one-time pricing for the assets. You own the 3D models and the forever-active QR codes."
        }
    ];

    return (
        <div className="max-w-3xl mx-auto py-24">
            <h2 className="text-3xl font-bold text-center mb-12">Common Questions</h2>
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b border-primary/10">
                        <AccordionTrigger className="text-left py-6 hover:text-primary transition-colors">
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-6">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}
