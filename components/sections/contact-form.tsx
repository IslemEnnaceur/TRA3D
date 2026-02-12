"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Loader2, CheckCircle2, ChevronRight } from "lucide-react"

const contactFormSchema = z.z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid work email"),
    company: z.string().min(1, "Company/Venue name is required"),
    industry: z.string().min(1, "Please select your industry"),
    projectSize: z.string().min(1, "Please select number of menu items"),
    message: z.string().min(10, "Please tell us a bit more about your needs"),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
    })

    const onSubmit = async (data: ContactFormValues) => {
        setIsSubmitting(true)
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500))
        console.log("Contact form data:", data)
        setIsSubmitting(false)
        setIsSuccess(true)
    }

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center p-12 bg-background/60 backdrop-blur-xl rounded-3xl border border-primary/20 shadow-2xl"
            >
                <div className="flex justify-center mb-6">
                    <CheckCircle2 className="size-16 text-primary animate-pulse" />
                </div>
                <h2 className="text-3xl font-bold mb-4">You&apos;re on the list!</h2>
                <p className="text-muted-foreground mb-8 text-lg">
                    We&apos;ve received your request. One of our AR specialists will reach out within 2 hours to schedule your tailored demo.
                </p>
                <Button size="lg" className="w-full" asChild>
                    <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                        Ready now? Book via Calendly <ChevronRight className="ml-2 size-4" />
                    </a>
                </Button>
            </motion.div>
        )
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-background/60 backdrop-blur-xl p-8 rounded-3xl border border-primary/10 shadow-2xl"
        >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                            id="name"
                            placeholder="John Doe"
                            {...register("name")}
                            className={errors.name ? "border-destructive focus-visible:ring-destructive" : ""}
                        />
                        {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Work Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="john@restaurant.com"
                            {...register("email")}
                            className={errors.email ? "border-destructive focus-visible:ring-destructive" : ""}
                        />
                        {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="company">Company / Venue Name</Label>
                    <Input
                        id="company"
                        placeholder="La Bella Vita Bistro"
                        {...register("company")}
                        className={errors.company ? "border-destructive focus-visible:ring-destructive" : ""}
                    />
                    {errors.company && <p className="text-xs text-destructive">{errors.company.message}</p>}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="industry">Industry</Label>
                        <select
                            id="industry"
                            {...register("industry")}
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            <option value="">Select Industry</option>
                            <option value="fine-dining">Fine Dining</option>
                            <option value="fast-casual">Fast Casual</option>
                            <option value="hotel">Hotel / Resort</option>
                            <option value="food-truck">Food Truck</option>
                            <option value="partnership">Agency / Partnership</option>
                        </select>
                        {errors.industry && <p className="text-xs text-destructive">{errors.industry.message}</p>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="projectSize">Menu Items</Label>
                        <select
                            id="projectSize"
                            {...register("projectSize")}
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            <option value="">Number of items</option>
                            <option value="1-5">1 - 5 items</option>
                            <option value="6-15">6 - 15 items</option>
                            <option value="16-30">16 - 30 items</option>
                            <option value="30+">30+ items</option>
                        </select>
                        {errors.projectSize && <p className="text-xs text-destructive">{errors.projectSize.message}</p>}
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="message">Tell us about your needs</Label>
                    <Textarea
                        id="message"
                        placeholder="I want to showcase my signature steaks and wine pairings..."
                        className={`min-h-[120px] ${errors.message ? "border-destructive focus-visible:ring-destructive" : ""}`}
                        {...register("message")}
                    />
                    {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
                </div>

                <Button type="submit" disabled={isSubmitting} size="lg" className="w-full">
                    {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Preparing Your Demo...
                        </>
                    ) : (
                        "Request My Free AR Demo"
                    )}
                </Button>
            </form>
        </motion.div>
    )
}
