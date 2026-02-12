import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function FAQSection() {
    const topFAQs = [
        {
            id: "faq-1",
            question: "Do customers need to download an app?",
            answer: "No! AR Code works directly in the phone's camera app. Customers simply scan the QR code and the AR experience launches instantly in their browser. No downloads, no friction."
        },
        {
            id: "faq-2",
            question: "How long does setup take?",
            answer: "From start to finish, it takes 5-7 days. You send us photos of your dishes, we create the 3D models, and deliver your custom QR codes ready to print."
        },
        {
            id: "faq-3",
            question: "What if I update my menu?",
            answer: "Just contact us! We'll update the 3D models for you. The first 30 days of updates are free, and after that we offer affordable update packages."
        },
        {
            id: "faq-4",
            question: "Does it work on all phones?",
            answer: "Yes! AR Code works on iOS 11+, Android 7+, and all modern smartphones. We support 99% of devices your customers use."
        },
        {
            id: "faq-5",
            question: "How much does it cost?",
            answer: "Pricing starts at $99 for 5 QR codes. We offer packages for different venue sizes. Check our pricing page for full details. No subscriptions—just a one-time payment."
        }
    ];

    return (
        <section className="py-24 bg-muted/20">
            <div className="max-w-3xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold lg:text-5xl">Frequently Asked Questions</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Everything you need to know about AR Code
                    </p>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                    {topFAQs.map(faq => (
                        <AccordionItem key={faq.id} value={faq.id} className="bg-background px-6 rounded-lg border">
                            <AccordionTrigger className="text-left hover:no-underline">
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
                        View All FAQs →
                    </Link>
                </div>
            </div>
        </section>
    );
}
