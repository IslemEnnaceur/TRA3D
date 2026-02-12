import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

export default function PricingPreview() {
    const plans = [
        {
            name: "Starter",
            price: "$99",
            description: "Perfect for small cafes",
            features: [
                "5 Custom AR QR Codes",
                "5 3D Food Models",
                "30 Days Free Updates",
                "Standard Support",
            ],
            cta: "Get Started",
        },
        {
            name: "Professional",
            price: "$249",
            description: "Ideal for restaurants",
            features: [
                "15 Custom AR QR Codes",
                "15 3D Food Models",
                "60 Days Free Updates",
                "Priority Support",
                "Custom Branding",
            ],
            cta: "Most Popular",
            popular: true,
        },
        {
            name: "Enterprise",
            price: "Custom",
            description: "For large venues & chains",
            features: [
                "Unlimited AR QR Codes",
                "Unlimited 3D Food Models",
                "Lifetime Updates",
                "Dedicated Account Manager",
                "Multi-location Support",
            ],
            cta: "Contact Us",
        },
    ];

    return (
        <section id="pricing" className="py-24 bg-muted/30">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold lg:text-5xl">Simple, Transparent Pricing</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        One-time payment. No monthly subscriptions.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`relative flex flex-col p-8 rounded-3xl border bg-background transition-all hover:shadow-2xl ${plan.popular ? "ring-2 ring-primary scale-105 z-10" : ""
                                }`}
                        >
                            {plan.popular && (
                                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    Most Popular
                                </span>
                            )}

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold">{plan.name}</h3>
                                <p className="text-muted-foreground text-sm mt-2">{plan.description}</p>
                                <div className="mt-4 flex items-baseline gap-1">
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                    {plan.price !== "Custom" && <span className="text-muted-foreground">/once</span>}
                                </div>
                            </div>

                            <ul className="flex-1 space-y-4 mb-8">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3 text-sm">
                                        <Check className="size-5 text-primary shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                asChild
                                size="lg"
                                variant={plan.popular ? "default" : "outline"}
                                className="w-full"
                            >
                                <Link href="/contact">{plan.cta}</Link>
                            </Button>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link href="/pricing" className="text-primary hover:underline font-semibold">
                        View full pricing details →
                    </Link>
                </div>
            </div>
        </section>
    );
}
