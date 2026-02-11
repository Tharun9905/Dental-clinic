import Link from "next/link";
import { Container } from "../common/Container";
import { Button } from "../common/Button";
import { ArrowRight, Calendar } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-white via-primary-50 to-secondary-50">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-[url('/images/pattern.svg')] bg-cover" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-200 rounded-full blur-3xl opacity-30 -translate-x-1/2 translate-y-1/2" />
            <div className="absolute top-20 right-0 w-72 h-72 bg-primary-200 rounded-full blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2" />

            <Container className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="space-y-8 text-center lg:text-left">
                    <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                        <span className="inline-block px-4 py-2 bg-white text-primary-600 rounded-full text-sm font-semibold shadow-sm mb-4 border border-primary-100">
                            Your Smile, Our Priority
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-gray-900 leading-tight">
                            Advanced <span className="text-primary-600">Dental Care</span> <br />
                            for the Whole Family
                        </h1>
                    </div>

                    <p
                        className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 animate-fade-in-up"
                        style={{ animationDelay: "0.2s" }}
                    >
                        Experience painless dentistry with state-of-the-art technology.
                        From implants to cosmetic makeovers, we create smiles that last a lifetime.
                    </p>

                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up"
                        style={{ animationDelay: "0.3s" }}
                    >
                        <Link href="/appointments">
                            <Button size="lg" className="w-full sm:w-auto gap-2 shadow-primary-500/20 shadow-xl">
                                <Calendar className="w-5 h-5" />
                                Book Appointment
                            </Button>
                        </Link>
                        <Link href="/services">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2">
                                Explore Services
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                        </Link>
                    </div>

                    {/* Trust Indicators */}
                    <div
                        className="pt-8 flex flex-wrap justify-center lg:justify-start gap-8 opacity-0 animate-fade-in"
                        style={{ animationDelay: "0.6s" }}
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                                10+
                            </div>
                            <div>
                                <p className="font-bold text-gray-900">Years</p>
                                <p className="text-xs text-gray-500">Experience</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-mint-100 flex items-center justify-center text-green-600 font-bold">
                                5k+
                            </div>
                            <div>
                                <p className="font-bold text-gray-900">Happy</p>
                                <p className="text-xs text-gray-500">Patients</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hero Image */}
                <div
                    className="relative animate-fade-in-up lg:h-[600px] flex items-center justify-center"
                    style={{ animationDelay: "0.4s" }}
                >
                    <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
                        <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border-4 border-white animate-float">
                            <img
                                src="https://img.freepik.com/premium-photo/dentist-with-happy-patient_1022456-263604.jpg?w=2000"
                                alt="Modern Dental Clinic Interior"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Floating Review Card */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 animate-pulse-subtle max-w-[200px]">
                            <div className="flex items-center gap-2 mb-1">
                                <div className="text-yellow-400">★★★★★</div>
                                <span className="font-bold text-sm">5.0</span>
                            </div>
                            <p className="text-xs text-gray-600">
                                "Best dental experience ever!"
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
