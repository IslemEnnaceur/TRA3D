import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import FAQClient from "@/components/faq-client";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "FAQ" });

    return {
        title: t("title"),
        description: t("description"),
        alternates: {
            canonical: `https://tra-3d.vercel.app/${locale}/faq`,
            languages: {
                en: "https://tra-3d.vercel.app/en/faq",
                fr: "https://tra-3d.vercel.app/fr/faq",
                ar: "https://tra-3d.vercel.app/ar/faq",
                "x-default": "https://tra-3d.vercel.app/en/faq",
            },
        },
    };

}

export default async function FAQPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "FAQ" });

    // Flatten all questions for schema
    const allQuestions = [
        ...t.raw("categories.general.questions"),
        ...t.raw("categories.technical.questions"),
        ...t.raw("categories.billing.questions")
    ];

    interface FAQItem {
        q: string;
        a: string;
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": (allQuestions as FAQItem[]).map((q) => ({
            "@type": "Question",
            "name": q.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": q.a
            }
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <FAQClient />
        </>
    );
}
