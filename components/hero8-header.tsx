"use client";
import React from "react";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const t = useTranslations("Navigation");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { name: t("home"), href: `/${locale}` },
    { name: t("qr_codes"), href: `/${locale}/qr-codes` },
    { name: t("pricing"), href: `/${locale}/pricing` },
    { name: t("faq"), href: `/${locale}/faq` },
    { name: t("contact"), href: `/${locale}/contact` },
  ];

  const handleLanguageChange = (newLocale: string) => {
    // pathname looks like "/en/pricing" or "/fr"
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  };

  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="bg-background/50 fixed z-20 w-full border-b backdrop-blur-3xl"
      >
        <div className="mx-auto max-w-6xl px-6 transition-all duration-300">
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
              <Link
                href={`/${locale}`}
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Image
                  src="/logo.png"
                  className="hidden rounded-[15px] dark:block"
                  alt="logo"
                  width={50}
                  height={50}
                />
                <Image
                  src="/logo.png"
                  className="block rounded-[15px] dark:hidden"
                  alt="logo"
                  width={50}
                  height={50}
                />
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -me-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            {/* Middle Menu */}
            <div className="hidden lg:flex flex-1 justify-center">
              <ul className="flex gap-8 text-sm font-medium">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-150"
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-[#0b1c60] dark:hover:text-accent-foreground block duration-150"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center gap-3">
                {/* Language Selector */}
                <select
                  className="px-3 py-1.5 text-sm border rounded-md bg-background focus:ring-2 focus:ring-primary focus:outline-none transition-all cursor-pointer font-medium"
                  value={locale}
                  onChange={(e) => handleLanguageChange(e.target.value)}
                >
                  <option value="en">EN</option>
                  <option value="fr">FR</option>
                  <option value="ar">AR</option>
                </select>

                <ModeToggle />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
