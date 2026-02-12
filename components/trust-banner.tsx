"use client";

import { useTranslations } from "next-intl";

export default function TrustBanner() {
    const t = useTranslations("Banner");

    return (
        <div className="sticky top-0 z-40 bg-primary/10 border-b border-primary/20 py-3 text-center backdrop-blur-sm">
            <p className="text-sm px-4">
                {t.rich("venues", { bold: (chunks) => <span className="font-semibold">{chunks}</span> })} •{" "}
                {t.rich("lift", { bold: (chunks) => <span className="font-semibold">{chunks}</span> })} •{" "}
                {t.rich("no_app", { bold: (chunks) => <span className="font-semibold">{chunks}</span> })}
            </p>
        </div>
    );
}

