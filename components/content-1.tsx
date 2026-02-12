import Image from "next/image";

export default function ContentSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl space-y-12 px-6">
        {/* Platform Compatibility Header */}
        <h2 className="text-center text-2xl font-bold md:text-3xl lg:text-4xl">
          Android OS, iOS/iPadOS, Meta Horizon OS, Android XR & VisionOS
        </h2>

        {/* QR Code Flow Images - Direct Display */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          <div className="w-full sm:w-auto">
            <Image
              src="/ar/ar-code-f1.webp"
              alt="QR Code to AR F1 Car"
              width={400}
              height={200}
              className="rounded-lg shadow-lg"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
          <div className="w-full sm:w-auto">
            <Image
              src="/ar/ar-code-horse-statue.webp"
              alt="QR Code to AR Horse Statue"
              width={400}
              height={200}
              className="rounded-lg shadow-lg"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
          <div className="w-full sm:w-auto">
            <Image
              src="/ar/ar-code-trex.webp"
              alt="QR Code to AR T-Rex"
              width={400}
              height={200}
              className="rounded-lg shadow-lg"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
          <div className="w-full sm:w-auto">
            <Image
              src="/ar/ar-code-woman.webp"
              alt="QR Code to AR Woman"
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
            How to Scan an AR Code?
          </h3>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-lg font-semibold">
              An AR Code is designed to be universally rendered without any app on all mobile devices, including AR/VR headsets.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Immersive AR rendering is supported on iOS, Android OS, visionOS, and Meta Horizon OS. Even older Android devices will have access to immersive WebAR thanks to our low-power SLAM rendering technology. Additionally, AR Codes support advanced AR and AI features through our solutions such as AR Face Filters and AI Codes, enhancing AR experiences across a wide range of compatible smartphone devices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
