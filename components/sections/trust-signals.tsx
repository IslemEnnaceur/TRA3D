import { Shield, Lock, CheckCircle, Globe } from "lucide-react";

export default function TrustSignals() {
    const signals = [
        {
            icon: <Shield className="size-8 text-primary" />,
            title: "GDPR Compliant",
            description: "Your data and customer privacy are our top priority."
        },
        {
            icon: <CheckCircle className="size-8 text-primary" />,
            title: "99.9% Uptime",
            description: "Reliable infrastructure ensures your menus are always accessible."
        },
        {
            icon: <Lock className="size-8 text-primary" />,
            title: "SSL Encrypted",
            description: "All connections are secure and encrypted end-to-end."
        },
        {
            icon: <Globe className="size-8 text-primary" />,
            title: "Global Reach",
            description: "Trusted by over 500 venues across 20+ countries."
        }
    ];

    return (
        <section className="py-12 border-y bg-muted/10">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {signals.map((signal, index) => (
                        <div key={index} className="flex flex-col items-center text-center space-y-3">
                            <div className="p-3 bg-background rounded-2xl shadow-sm border">
                                {signal.icon}
                            </div>
                            <h3 className="font-bold text-sm lg:text-base">{signal.title}</h3>
                            <p className="text-xs text-muted-foreground hidden sm:block">
                                {signal.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
