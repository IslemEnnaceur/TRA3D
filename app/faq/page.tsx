import { HeroHeader } from "@/components/hero8-header";

export default function FAQPage() {
    const faqs = [
        {
            question: "What is AR Code?",
            answer: "AR Code is an augmented reality menu solution that allows your customers to scan QR codes and see 3D models of your menu items right on their table using their smartphone camera. No app download required."
        },
        {
            question: "How does it work?",
            answer: "We create custom QR codes for your menu items. When customers scan the code with their phone camera, they'll see a realistic 3D model of the dish in augmented reality. It's that simple!"
        },
        {
            question: "Do customers need to download an app?",
            answer: "No! AR Code works directly through the phone's camera app. Customers simply scan the QR code and the AR experience launches automatically in their browser."
        },
        {
            question: "How do I get started?",
            answer: "Contact us through our contact form. We'll discuss your needs, create custom 3D models of your menu items, and generate unique QR codes for each dish. You can then add these codes to your physical or digital menus."
        },
        {
            question: "Can I update my 3D models later?",
            answer: "Yes! Contact us anytime to update your 3D models. We can modify existing models or create new ones as your menu changes."
        },
        {
            question: "What types of venues is this suitable for?",
            answer: "AR Code is perfect for restaurants, cafés, bars, food trucks, hotels, and any venue that serves food or beverages. It's especially popular with upscale dining establishments and venues looking to create a memorable customer experience."
        },
        {
            question: "How long does it take to set up?",
            answer: "Once we receive your menu items and photos, we typically deliver your custom QR codes within 5-7 business days. Rush orders are available for an additional fee."
        },
        {
            question: "Is there a subscription fee?",
            answer: "No subscriptions! You pay once for your QR codes and 3D models. They're yours to use forever. We only charge if you want to add new items or update existing ones."
        },
        {
            question: "Can I track how many people use the AR codes?",
            answer: "Yes! All plans include basic analytics showing scan counts and engagement metrics. Professional and Enterprise plans include advanced analytics."
        },
        {
            question: "What if I have more questions?",
            answer: "Feel free to contact us anytime! We're here to help you create an amazing AR menu experience for your customers."
        }
    ];

    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                <section className="py-16 md:py-32">
                    <div className="mx-auto max-w-4xl px-6">
                        <div className="text-center mb-16">
                            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl mb-4">
                                Frequently Asked Questions
                            </h1>
                            <p className="text-muted-foreground text-lg">
                                Everything you need to know about AR Code
                            </p>
                        </div>

                        <div className="space-y-6">
                            {faqs.map((faq, index) => (
                                <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                                    <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 text-center p-8 bg-muted rounded-2xl">
                            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
                            <p className="text-muted-foreground mb-6">
                                Can&apos;t find the answer you&apos;re looking for? Please contact our friendly team.
                            </p>
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
