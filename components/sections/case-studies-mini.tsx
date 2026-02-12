import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function MiniCaseStudies() {
    const caseStudies = [
        {
            venue: "The Arches Fine Dining",
            industry: "Fine Dining",
            summary: "Implemented AR menus to showcase their signature $150 'Lunar' dessert.",
            before: "12%",
            after: "48%",
            metricLabel: "Dessert Order Rate",
            image: "/ar/ar-code-woman.webp", // placeholder
        },
        {
            venue: "Neon Street Tacos",
            industry: "Fast Casual",
            summary: "Added AR codes to their outdoor seating area for quick visualization.",
            before: "$18.50",
            after: "$24.20",
            metricLabel: "Avg. Check Size",
            image: "/ar/ar-code-f1.webp", // placeholder
        },
        {
            venue: "Grand Horizon Resort",
            industry: "Hospitality",
            summary: "AR menus for 24/7 room service ordering across 500 rooms.",
            before: "140",
            after: "310",
            metricLabel: "Weekly Room Service Orders",
            image: "/ar/ar-code-horse-statue.webp", // placeholder
        }
    ];

    return (
        <section className="py-24 bg-muted/20">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold lg:text-5xl">Proven Results</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Real data from real partners using AR Code
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {caseStudies.map((cs, index) => (
                        <Card key={index} className="overflow-hidden border-none shadow-lg">
                            <div className="aspect-video relative">
                                <Image
                                    src={cs.image}
                                    alt={cs.venue}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold">
                                    {cs.industry}
                                </div>
                            </div>
                            <CardHeader className="pt-6">
                                <h3 className="text-xl font-bold">{cs.venue}</h3>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2 gap-4 text-center mb-6">
                                    <div className="bg-muted p-4 rounded-xl">
                                        <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Before</p>
                                        <p className="text-xl font-bold">{cs.before}</p>
                                    </div>
                                    <div className="bg-primary/10 p-4 rounded-xl border border-primary/20">
                                        <p className="text-xs text-primary uppercase font-bold tracking-wider">After</p>
                                        <p className="text-xl font-bold text-primary">{cs.after}</p>
                                    </div>
                                </div>
                                <p className="text-sm text-center font-medium text-primary mb-4 italic">
                                    {cs.metricLabel}
                                </p>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                                    {cs.summary}
                                </p>
                                <Button variant="outline" className="w-full" size="sm">
                                    View Full Case Study
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
