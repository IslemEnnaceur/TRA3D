import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-24 bg-gradient-to-r from-primary/20 via-primary/10 to-accent/20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-bold lg:text-5xl">
            Ready to Boost Your Sales by 30%?
          </h2>
          <p className="mt-4 text-xl">
            Join 500+ venues already using AR Code
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="px-8">
              <Link href="/contact">
                <span>Request a Quote</span>
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline">
              <Link href="/pricing">
                <span>See Pricing</span>
              </Link>
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            ✓ 5-day turnaround  ✓ Updates included for 30 days  ✓ Custom 3D models
          </p>
        </div>
      </div>
    </section>
  );
}
