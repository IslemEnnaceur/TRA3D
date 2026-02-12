export default function InteractiveDemo() {
    return (
        <section id="demo" className="py-24 bg-gradient-to-b from-background to-muted/20">
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold lg:text-5xl">Try It Yourself</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Scan this QR code with your phone camera to see AR in action
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* QR Code */}
                    <div className="flex flex-col items-center">
                        <div className="bg-white p-8 rounded-2xl shadow-2xl">
                            <div className="w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                                {/* Placeholder for actual QR code */}
                                <div className="text-center">
                                    <svg className="w-48 h-48 mx-auto" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M3 11h8V3H3v8zm2-6h4v4H5V5zM3 21h8v-8H3v8zm2-6h4v4H5v-4zM13 3v8h8V3h-8zm6 6h-4V5h4v4zM13 13h2v2h-2v-2zm2 2h2v2h-2v-2zm-2 2h2v2h-2v-2zm4-2h2v2h-2v-2zm0-2h2v2h-2v-2zm2 2h2v4h-2v-4zm0-4h2v2h-2V11zm-4 8h2v2h-2v-2zm2 0h2v2h-2v-2zm2 0h2v2h-2v-2z" />
                                    </svg>
                                    <p className="mt-4 text-sm text-muted-foreground">Demo QR Code</p>
                                </div>
                            </div>
                        </div>
                        <p className="mt-6 text-center text-sm text-muted-foreground max-w-xs">
                            👆 Point your camera at the QR code to see a burger in AR
                        </p>
                    </div>

                    {/* Demo Video/Image */}
                    <div className="relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-auto rounded-3xl"
                            >
                                <source src="/phone/AR-Code-demo.mp4" type="video/mp4" />
                            </video>
                        </div>

                        {/* Floating stats */}
                        <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl">
                            <p className="text-3xl font-bold">30%</p>
                            <p className="text-sm">Order Increase</p>
                        </div>
                    </div>
                </div>

                {/* Instructions */}
                <div className="mt-16 grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 bg-muted/50 rounded-xl">
                        <div className="text-4xl mb-3">📱</div>
                        <h3 className="font-semibold mb-2">1. Open Camera</h3>
                        <p className="text-sm text-muted-foreground">No app download needed</p>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl">
                        <div className="text-4xl mb-3">📷</div>
                        <h3 className="font-semibold mb-2">2. Scan QR Code</h3>
                        <p className="text-sm text-muted-foreground">Point at the code above</p>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl">
                        <div className="text-4xl mb-3">🍔</div>
                        <h3 className="font-semibold mb-2">3. See AR Magic</h3>
                        <p className="text-sm text-muted-foreground">Dish appears in 3D</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
