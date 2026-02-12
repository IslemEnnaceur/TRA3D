import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroHeader } from "@/components/hero8-header";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("Hero");
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden relative">
        {/* Animated Background */}
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

        <section className="relative">
          <div className="pb-8 pt-24 md:pt-32 lg:pb-0 lg:pt-64">
            <div className="relative mx-auto flex max-w-6xl flex-col lg:flex-row lg:items-center">
              <div className="mx-auto max-w-lg text-center lg:ms-0 lg:w-1/2 lg:text-start">
                <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">
                  {t.rich("title", {
                    highlight: (chunks) => <><br /><span className="text-primary italic">{chunks}</span></>
                  })}
                </h1>
                {/* <p className="mt-6 text-xl font-semibold text-primary">
                  {t("subtitle")}
                </p> */}
                <p className="mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
                  {t("description")}
                </p>

                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                  <Button asChild size="lg" className="px-5 text-base">
                    <Link href="/contact">
                      <span className="text-nowrap">{t("cta")}</span>
                    </Link>
                  </Button>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="px-5 text-base"
                  >
                    <Link href="#demo">
                      <span className="text-nowrap">{t("demo")}</span>
                    </Link>
                  </Button>
                </div>

                {/* Urgency element */}
                <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{t("trust")}</span>
                </div>
              </div>
              <div className="iphone-x relative z-0 order-first mx-auto scale-[0.7] sm:scale-[0.9] md:scale-105 lg:scale-110 mb-12 lg:mb-0 lg:absolute lg:inset-0 lg:-right-20 lg:-top-24 lg:order-last lg:ml-auto">
                <div className="side">
                  <div className="screen">
                    <video
                      src="/phone/AR-Code-demo.mp4"
                      autoPlay
                      loop
                      muted
                      poster="/phone/arcode-video.webp"
                    ></video>
                  </div>
                </div>
                <div className="line"></div>
                <div className="volume-button"></div>
                <div className="power-button"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
