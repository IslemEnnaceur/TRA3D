"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function CallToAction() {
  const t = useTranslations("CTA");

  return (
    <section className="py-24 bg-gradient-to-r from-primary/20 via-primary/10 to-accent/20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-bold lg:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-xl">
            {t("subtitle")}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="px-8">
              <Link href="/contact">
                <span>{t("buttons.quote")}</span>
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline">
              <Link href="/pricing">
                <span>{t("buttons.pricing")}</span>
              </Link>
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            {t("trust")}
          </p>
        </div>
      </div>
    </section>
  );
}

