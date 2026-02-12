"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function EmailCapture() {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!isDismissed) setIsVisible(true);
        }, 5000); // Show after 5 seconds

        return () => clearTimeout(timer);
    }, [isDismissed]);

    if (isDismissed) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-primary text-primary-foreground shadow-2xl"
                >
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-lg font-bold">Get a free AR demo for your venue</h3>
                            <p className="text-sm opacity-90">Send us your email and we&apos;ll show you how your menu looks in 3D.</p>
                        </div>

                        <div className="flex w-full md:w-auto gap-2">
                            <Input
                                type="email"
                                placeholder="your@email.com"
                                className="bg-primary-foreground text-primary placeholder:text-primary/50"
                            />
                            <Button variant="secondary" className="whitespace-nowrap">
                                Send Demo
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsDismissed(true)}
                                className="hover:bg-primary-foreground/10"
                            >
                                <X className="size-5" />
                            </Button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
