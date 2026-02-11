import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar"; 
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { Card } from "@/components/common/Card";
import { services } from "@/data/services";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
    return (
        <div className="flex min-h-screen flex-col">
            {/* THIS MUST BE HERE */}
            <Navbar /> 

            {/* pt-20 ensures the content is pushed down so it's not hidden behind the navbar */}
            <main className="pt-20 flex-grow">
                {/* Hero Header */}
                <Section className="bg-primary-50">
                    <Container className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold font-serif text-gray-900 mb-6">Our Treatments</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            We offer a wide range of professional dental services to cater to all your oral health needs, 
                            using the latest technology and gentle care.
                        </p>
                    </Container>
                </Section>

                {/* Services Grid */}
                <Section>
                    <Container>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {services.map((service) => (
                                <Link 
                                    key={service.id} 
                                    href={`/services/${service.slug}`} 
                                    className="group block h-full"
                                >
                                    <Card className="h-full flex flex-col overflow-hidden p-0 border-gray-100 group-hover:shadow-2xl group-hover:border-primary-200 transition-all duration-500 rounded-3xl">
                                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-200">
                                            <Image 
                                                src={service.image} 
                                                alt={service.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="p-8 flex flex-col flex-grow">
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-600 mb-6 flex-grow leading-relaxed text-sm">
                                                {service.shortDescription}
                                            </p>
                                            <div className="flex items-center text-primary-600 font-bold tracking-wide uppercase text-xs group-hover:gap-3 transition-all">
                                                Discover More 
                                                <ArrowRight size={16} className="ml-2" />
                                            </div>
                                        </div>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </Container>
                </Section>
            </main>
            <Footer />
        </div>
    );
}