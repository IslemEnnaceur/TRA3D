import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import AnimatedSection from "@/components/animated-section";
import FooterSection from "@/components/footer";
import CallToAction from "@/components/call-to-action";
import { HeroHeader } from "@/components/hero8-header";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "QRCodes" });

    return {
        title: t.raw("title").replace(/<highlight>|<\/highlight>/g, ""),
        description: t("description"),
    };
}

export default async function QRCodesPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "QRCodes" });

    const qrCodes = [
        {
            id: "cake",
            src: "/ar/cake.webp",
            name: t("items.cake.name"),
            description: t("items.cake.description"),
        },
        {
            id: "f1",
            src: "/ar/ar-code-f1.webp",
            name: t("items.f1.name"),
            description: t("items.f1.description"),
        },
    ];

    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden relative min-h-screen">
                {/* Animated Background - Replicated from HeroSection */}
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    {/* Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>

                    {/* Animated Gradient Orbs */}
                    <div className="absolute top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

                    {/* Geometric Grid Pattern */}
                    <div className="absolute inset-0 opacity-[0.03]" style={{
                        backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                             linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}></div>

                    {/* Floating AR-themed shapes */}
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-primary/20 rotate-45 animate-spin-slow"></div>
                    <div className="absolute top-1/3 right-1/4 w-24 h-24 border-2 border-accent/20 rounded-full animate-ping-slow"></div>
                    <div className="absolute bottom-1/4 left-1/3 w-20 h-20 border-2 border-primary/15 rotate-12 animate-bounce-slow"></div>
                </div>

                <div className="max-w-6xl mx-auto px-6 pt-32 md:pt-48 pb-20">
                    <header className="mb-16 text-center lg:text-start max-w-4xl">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-8">
                            {t.rich("title", {
                                highlight: (chunks) => <span className="text-primary italic block md:inline">{chunks}</span>
                            })}
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                            {t("subtitle")}
                        </p>
                    </header>

                    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {qrCodes.map((card) => (
                            <AnimatedSection key={card.id}>
                                <div className="group relative bg-card/60 backdrop-blur-md border border-border/50 rounded-[2rem] p-8 hover:border-primary/50 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/5">
                                    {/* Subtle Glow on Hover */}
                                    <div className="absolute -inset-24 bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                    <div className="relative z-10 flex flex-col items-center">
                                        <div className="relative w-full aspect-square max-w-[280px] mb-8 p-6 bg-white rounded-2xl shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] group-hover:scale-[1.02] transition-transform duration-500">
                                            <Image
                                                src={card.src}
                                                alt={card.name}
                                                fill
                                                className="object-contain p-4"
                                            />
                                        </div>

                                        <div className="text-center lg:text-start w-full">
                                            <h3 className="text-3xl font-medium mb-4 group-hover:text-primary transition-colors">
                                                {card.name}
                                            </h3>
                                            <p className="text-lg text-muted-foreground leading-relaxed">
                                                {card.description}
                                            </p>
                                        </div>

                                        <div className="mt-8 pt-6 border-t border-border/20 w-full flex items-center justify-between">
                                            <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary/60">
                                                Scan to test
                                            </span>
                                            <div className="size-2 rounded-full bg-primary animate-pulse" />
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </section>

                    <div className="mt-32 pt-16 border-t border-border/10">
                        <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed italic">
                            &quot;{t("description")}&quot;
                        </p>
                    </div>
                </div>

                <CallToAction />
                <FooterSection />
            </main>
        </>
    );
}
