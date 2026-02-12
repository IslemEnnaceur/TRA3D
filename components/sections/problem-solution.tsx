"use client";

import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";

export default function ProblemSolution() {
    const t = useTranslations("ProblemSolution");

    // Get items from JSON arrays
    const problemItems = [
        t("problem.items.0"),
        t("problem.items.1"),
        t("problem.items.2")
    ];

    const solutionItems = [
        t("solution.items.0"),
        t("solution.items.1"),
        t("solution.items.2")
    ];

    return (
        <section className="py-24 bg-muted/30">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Problem */}
                    <div className="space-y-6">
                        <Badge variant="destructive" className="text-sm">
                            {t("problem.badge")}
                        </Badge>
                        <h2 className="text-3xl font-bold lg:text-4xl">
                            {t("problem.title")}
                        </h2>
                        <ul className="space-y-4 text-lg">
                            {problemItems.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="text-2xl">❌</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Solution */}
                    <div className="space-y-6">
                        <Badge className="text-sm">
                            {t("solution.badge")}
                        </Badge>
                        <h2 className="text-3xl font-bold lg:text-4xl">
                            {t("solution.title")}
                        </h2>
                        <ul className="space-y-4 text-lg">
                            {solutionItems.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="text-2xl">✅</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

