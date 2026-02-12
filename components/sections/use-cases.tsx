import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function UseCases() {
    const useCases = [
        {
            industry: "Fine Dining",
            stat: "40% Higher Cocktail Sales",
            description: "Allow guests to see premium spirit pairings and elaborate presentations in 3D.",
            image: "/ar/ar-code-woman.webp", // Placeholder
        },
        {
            industry: "Fast Casual",
            stat: "25% Increase in Check Size",
            description: "Visualizing portion sizes reduces ordering friction and increases confidence.",
            image: "/ar/ar-code-f1.webp", // Placeholder
        },
        {
            industry: "Food Trucks",
            stat: "3x More Social Shares",
            description: "AR becomes a marketing tool. Customers record and share their 3D menu experience.",
            image: "/ar/ar-code-trex.webp", // Placeholder
        },
        {
            industry: "Hotels & Resorts",
            stat: "50% More Room Service Orders",
            description: "Room service menus come alive, making high-margin items more alluring.",
            image: "/ar/ar-code-horse-statue.webp", // Placeholder
        }
    ];

    return (
        <section className="py-24 bg-background">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-4">Use Cases</Badge>
                    <h2 className="text-4xl font-bold lg:text-5xl">Built for Every Venue</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        See how AR Code transforms different dining experiences
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {useCases.map((uc, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-2xl border bg-muted/30 p-2 transition-all hover:shadow-xl hover:-translate-y-1">
                            <div className="aspect-[4/3] overflow-hidden rounded-xl relative">
                                {/* Use actual AR images from the project as placeholders for representative industry shots */}
                                <Image
                                    src={uc.image}
                                    alt={uc.industry}
                                    fill
                                    className="object-cover transition-transform group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, 25vw"
                                />
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                    <p className="text-sm font-bold text-primary-foreground">{uc.stat}</p>
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2">{uc.industry}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {uc.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
