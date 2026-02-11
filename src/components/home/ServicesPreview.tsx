import Link from "next/link";
import Image from "next/image";
import { Container } from "../common/Container";
import { Section } from "../common/Section";
import { Card } from "../common/Card";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";


export function ServicesPreview() {
    return (
        <Section>
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold font-serif text-gray-900 sm:text-4xl mb-4">Our Services</h2>
                    <p className="text-gray-600 text-lg">Comprehensive dental solutions tailored to your specific needs.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.slice(0, 6).map((service) => (
                        <Link key={service.id} href={`/services/${service.slug}`} className="group block h-full">
                            <Card className="h-full flex flex-col items-start overflow-hidden p-0 group-hover:border-primary-200 transition-all duration-300">
                                
                                {/* Image Header */}
                                <div className="relative w-full h-48 overflow-hidden bg-gray-100">
                                    <Image 
                                        src={service.image} 
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {/* Small floating initial as a design element */}
                                    <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-primary-600 font-bold shadow-sm">
                                        {service.title.charAt(0)}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                                        {service.shortDescription}
                                    </p>
                                    <div className="flex items-center text-primary-600 font-bold group-hover:gap-2 transition-all">
                                        Learn More <ArrowRight size={18} className="ml-1" />
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link href="/services" className="inline-flex items-center font-bold text-primary-600 hover:text-primary-800 transition-colors">
                        View All Treatments <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </Container>
        </Section>
    );
}