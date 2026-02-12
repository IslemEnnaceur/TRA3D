import { Badge } from "@/components/ui/badge";

export default function ProblemSolution() {
    return (
        <section className="py-24 bg-muted/30">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Problem */}
                    <div className="space-y-6">
                        <Badge variant="destructive" className="text-sm">The Problem</Badge>
                        <h2 className="text-3xl font-bold lg:text-4xl">
                            Customers Order Less When They Can&apos;t See It
                        </h2>
                        <ul className="space-y-4 text-lg">
                            <li className="flex items-start gap-3">
                                <span className="text-2xl">❌</span>
                                <span>Tiny menu photos don&apos;t show portion size</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-2xl">❌</span>
                                <span>Descriptions don&apos;t match expectations</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-2xl">❌</span>
                                <span>Customers play it safe with familiar items</span>
                            </li>
                        </ul>
                    </div>

                    {/* Solution */}
                    <div className="space-y-6">
                        <Badge className="text-sm">The Solution</Badge>
                        <h2 className="text-3xl font-bold lg:text-4xl">
                            AR Menus Build Confidence & Increase Orders
                        </h2>
                        <ul className="space-y-4 text-lg">
                            <li className="flex items-start gap-3">
                                <span className="text-2xl">✅</span>
                                <span>Life-size 3D models on their table</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-2xl">✅</span>
                                <span>See exact portions before ordering</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-2xl">✅</span>
                                <span>Explore new dishes risk-free</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
