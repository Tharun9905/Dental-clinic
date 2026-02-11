import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { Button } from "@/components/common/Button";
import { services } from "@/data/services";
import { notFound } from "next/navigation";
import { CheckCircle2, Clock, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
    const service = services.find((s) => s.slug === params.slug);

    if (!service) {
        notFound();
    }

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="pt-20">
                <Section className="bg-primary-50">
                    <Container className="text-center">
                        <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-4 block">Treatment</span>
                        <h1 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-6">{service.title}</h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            {service.shortDescription}
                        </p>
                    </Container>
                </Section>

                <Section>
                    <Container>
                        <div className="grid lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-2 space-y-12">
                                
                                {/* Unique Service Image */}
                                <div className="relative aspect-video bg-gray-200 rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                                    <Image 
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">Overview</h2>
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        {service.fullDescription}
                                    </p>
                                </div>

                                {/* Unique Before & After Images */}
                                <div>
                                    <h2 className="text-2xl font-bold font-serif text-gray-900 mb-6">Before & After</h2>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden shadow-sm border border-gray-200">
                                            <Image 
                                                src={service.beforeImage} 
                                                alt={`${service.title} before`}
                                                fill
                                                className="object-cover"
                                            />
                                            <span className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-lg">Before</span>
                                        </div>
                                        <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden shadow-sm border border-gray-200">
                                            <Image 
                                                src={service.afterImage} 
                                                alt={`${service.title} after`}
                                                fill
                                                className="object-cover"
                                            />
                                            <span className="absolute top-4 left-4 z-10 bg-primary-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md">After</span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold font-serif text-gray-900 mb-6">Procedure Steps</h2>
                                    <div className="space-y-6">
                                        {service.procedure.map((step, idx) => (
                                            <div key={idx} className="flex gap-4">
                                                <div className="flex flex-col items-center">
                                                    <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                                                        {idx + 1}
                                                    </div>
                                                    {idx !== service.procedure.length - 1 && (
                                                        <div className="w-0.5 h-full bg-gray-200 my-2"></div>
                                                    )}
                                                </div>
                                                <div className="pb-6">
                                                    <h4 className="font-bold text-gray-900 text-lg">{step}</h4>
                                                    <p className="text-gray-600">Expert clinical care for best results.</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar Details */}
                            <div className="lg:col-span-1 space-y-8">
                                <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-50 sticky top-24">
                                    <h3 className="text-xl font-bold font-serif text-gray-900 mb-6">Key Details</h3>
                                    <div className="space-y-6 mb-8">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-primary-600"><Clock size={24} /></div>
                                            <div>
                                                <p className="text-sm text-gray-500 font-medium">Duration</p>
                                                <p className="font-bold text-gray-900">{service.duration}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-secondary-600"><Calendar size={24} /></div>
                                            <div>
                                                <p className="text-sm text-gray-500 font-medium">Recovery</p>
                                                <p className="font-bold text-gray-900">{service.recovery}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <Link href="/appointments" className="block w-full">
                                        <Button size="lg" className="w-full py-6 text-lg rounded-xl">Book Consultation</Button>
                                    </Link>
                                    <div className="mt-8 pt-8 border-t border-gray-100">
                                        <p className="text-sm text-gray-600 mb-2">Need Help?</p>
                                        <a href="tel:+917675874100" className="text-primary-600 font-bold text-xl">+91 76758 74100</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </Section>
            </main>
            <Footer />
        </div>
    );
}