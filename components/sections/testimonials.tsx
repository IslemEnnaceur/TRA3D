import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
    const testimonials = [
        {
            name: "Maria Rodriguez",
            role: "Owner, La Bella Vita",
            quote: "Our dessert sales tripled in the first month. Customers love seeing the portions before ordering—it takes the guesswork out of the menu.",
            metric: "Sales Up 215%",
            avatar: "/ar/ar-code-woman.webp", // Using existing AR image as placeholder for customer photo
        },
        {
            name: "James Chen",
            role: "Manager, Urban Eats",
            quote: "The AR experience is so shareable. We've seen a massive spike in Instagram tags. It's essentially free marketing that also drives higher check sizes.",
            metric: "+3x Social Shares",
            avatar: "/ar/ar-code-trex.webp", // placeholder
        },
        {
            name: "Sarah Jenkins",
            role: "Director, Sky Bar",
            quote: "Fine dining is all about presentation. Being able to show a 3D preview of our signature cocktails has drastically increased our premium spirit sales.",
            metric: "+40% Cocktail Revenue",
            avatar: "/ar/ar-code-f1.webp", // placeholder
        }
    ];

    return (
        <section className="py-24 bg-background">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold lg:text-5xl">Trusted by Leading Venues</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Don&apos;t just take our word for it—listen to our clients
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <Card key={index} className="relative flex flex-col p-8 rounded-3xl border bg-muted/20 transition-all hover:shadow-xl hover:-translate-y-1">
                            <CardHeader className="p-0 mb-6 flex-row items-center gap-4 space-y-0">
                                <div className="relative size-14 overflow-hidden rounded-full border-2 border-primary">
                                    <Image
                                        src={t.avatar}
                                        alt={t.name}
                                        fill
                                        className="object-cover"
                                        sizes="56px"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold">{t.name}</h3>
                                    <p className="text-sm text-muted-foreground">{t.role}</p>
                                </div>
                            </CardHeader>

                            <CardContent className="p-0 flex-1 flex flex-col">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="size-4 fill-primary text-primary" />
                                    ))}
                                </div>

                                <p className="text-lg italic leading-relaxed mb-8">
                                    &quot;{t.quote}&quot;
                                </p>

                                <div className="mt-auto bg-primary/10 p-4 rounded-2xl border border-primary/20">
                                    <p className="text-2xl font-bold text-primary">{t.metric}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
