import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PricingClient from "@/components/pricing-client";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "Pricing" });

    return {
        title: t("title"),
        description: t("description"),
        alternates: {
            canonical: `https://tra-3d.vercel.app/${locale}/pricing`,
            languages: {
                en: "https://tra-3d.vercel.app/en/pricing",
                fr: "https://tra-3d.vercel.app/fr/pricing",
                ar: "https://tra-3d.vercel.app/ar/pricing",
                "x-default": "https://tra-3d.vercel.app/en/pricing",
            },
        },
    };

}

export default async function PricingPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "Pricing" });

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": t("schema.name"),
        "description": t("schema.description"),
        "brand": {
            "@type": "Brand",
            "name": "TRA 3D"
        },
        "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "USD",
            "lowPrice": "79",
            "highPrice": "249",
            "offerCount": "2",
            "offers": [
                {
                    "@type": "Offer",
                    "name": t("plans.starter.name"),
                    "price": "79",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock"
                },
                {
                    "@type": "Offer",
                    "name": t("plans.pro.name"),
                    "price": "199",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock"
                }
            ]
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
            <PricingClient />
        </>
    );
}
