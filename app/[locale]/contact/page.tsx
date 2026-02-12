import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ContactClient from "@/components/contact-client";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "Contact" });

    return {
        title: t("title"),
        description: t("description"),
        alternates: {
            canonical: `https://tra-3d.vercel.app/${locale}/contact`,
            languages: {
                en: "https://tra-3d.vercel.app/en/contact",
                fr: "https://tra-3d.vercel.app/fr/contact",
                ar: "https://tra-3d.vercel.app/ar/contact",
                "x-default": "https://tra-3d.vercel.app/en/contact",
            },
        },
    };

}

export default function ContactPage() {
    return <ContactClient />;
}
