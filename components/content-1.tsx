"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function ContentSection() {
  const t = useTranslations("Content");

  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl space-y-12 px-6">
        {/* Platform Compatibility Header */}
        <h2 className="text-center text-2xl font-bold md:text-3xl lg:text-4xl">
          {t("platforms")}
        </h2>

        {/* QR Code Flow Images - Direct Display */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          <div className="w-full sm:w-auto">
            <Image
              src="/ar/ar-code-f1.webp"
              alt={t("qr_alts.f1")}
              width={400}
              height={200}
              className="rounded-lg shadow-lg"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
          <div className="w-full sm:w-auto">
            <Image
              src="/ar/ar-code-horse-statue.webp"
              alt={t("qr_alts.horse")}
              width={400}
              height={200}
              className="rounded-lg shadow-lg"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
          <div className="w-full sm:w-auto">
            <Image
              src="/ar/ar-code-trex.webp"
              alt={t("qr_alts.trex")}
              width={400}
              height={200}
              className="rounded-lg shadow-lg"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
          <div className="w-full sm:w-auto">
            <Image
              src="/ar/ar-code-woman.webp"
              alt={t("qr_alts.woman")}
              width={400}
              height={200}
              className="rounded-lg shadow-lg"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
        </div>

        {/* How to Scan Section */}
        <div className="text-center space-y-6 pt-12">
          <h3 className="text-2xl font-bold">
            {t("how_to_scan.title")}
          </h3>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-lg font-semibold">
              {t("how_to_scan.lead")}
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              {t("how_to_scan.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

