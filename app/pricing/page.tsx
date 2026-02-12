import { HeroHeader } from "@/components/hero8-header";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PricingPage() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                <section className="py-16 md:py-32">
                    <div className="mx-auto max-w-6xl px-6">
                        <div className="text-center mb-16">
                            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl mb-4">
                                Simple, Transparent Pricing
                            </h1>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                Get your custom AR QR codes. No subscriptions, no hidden fees—just pay for what you need.
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
                            {/* Starter Plan */}
                            <div className="border rounded-2xl p-8 hover:shadow-lg transition-shadow">
                                <h3 className="text-2xl font-bold mb-2">Starter</h3>
                                <p className="text-muted-foreground mb-6">Perfect for small venues</p>
                                <div className="mb-6">
                                    <span className="text-4xl font-bold">$99</span>
                                    <span className="text-muted-foreground">/5 QR codes</span>
                                </div>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-start gap-2">
                                        <Check className="h-5 w-5 text-green-500 mt-0.5" />
                                        <span>5 custom AR QR codes</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="h-5 w-5 text-green-500 mt-0.5" />
                                        <span>3D model creation</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="h-5 w-5 text-green-500 mt-0.5" />
                                        <span>Email support</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="h-5 w-5 text-green-500 mt-0.5" />
                                        <span>Basic analytics</span>
                                    </li>
                                </ul>
                                <Button asChild className="w-full">
                                    <Link href="/contact">Get Started</Link>
                                </Button>
                            </div>

                            {/* Professional Plan */}
                            <div className="border-2 border-primary rounded-2xl p-8 hover:shadow-xl transition-shadow relative">
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                                    Most Popular
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Professional</h3>
                                <p className="text-muted-foreground mb-6">For growing businesses</p>
                                <div className="mb-6">
                                    <span className="text-4xl font-bold">$249</span>
                                    <span className="text-muted-foreground">/15 QR codes</span>
                                </div>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-start gap-2">
                                        <Check className="h-5 w-5 text-green-500 mt-0.5" />
                                        <span>15 custom AR QR codes</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="h-5 w-5 text-green-500 mt-0.5" />
                                        <span>Premium 3D models</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="h-5 w-5 text-green-500 mt-0.5" />
                                        <span>Priority support</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="h-5 w-5 text-green-500 mt-0.5" />
                                        <span>Advanced analytics</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="h-5 w-5 text-green-500 mt-0.5" />
                                        <span>Custom branding</span>
                                    </li>
                                </ul>
                                <Button asChild className="w-full">
                                    <Link href="/contact">Get Started</Link>
                                </Button>
                            </div>

                            {/* Enterprise Plan */}
                            <div className="border rounded-2xl p-8 hover:shadow-lg transition-shadow">
                                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                                <p className="text-muted-foreground mb-6">For large venues & chains</p>
                                <div className="mb-6">
                                    <span className="text-4xl font-bold">Custom</span>
                                </div>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-start gap-2">
                                        <Check className="h-5 w-5 text-green-500 mt-0.5" />
                                        <span>Unlimited QR codes</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="h-5 w-5 text-green-500 mt-0.5" />
                                        <span>Dedicated account manager</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="h-5 w-5 text-green-500 mt-0.5" />
                                        <span>24/7 support</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="h-5 w-5 text-green-500 mt-0.5" />
                                        <span>White-label solution</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="h-5 w-5 text-green-500 mt-0.5" />
                                        <span>API access</span>
                                    </li>
                                </ul>
                                <Button asChild variant="outline" className="w-full">
                                    <Link href="/contact">Contact Sales</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
