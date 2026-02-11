import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { ContactForm } from "@/components/forms/ContactForm";
import { clinicInfo } from "@/data/clinic";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="pt-20">
                <Section className="bg-primary-50">
                    <Container className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-6">Contact Us</h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            We are here to help. Reach out to us via phone, email, or visit our clinic.
                        </p>
                    </Container>
                </Section>

                <Section>
                    <Container>
                        <div className="grid lg:grid-cols-2 gap-12">
                            <div className="space-y-8">
                                <h2 className="text-2xl font-bold font-serif text-gray-900">Get in Touch</h2>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 shrink-0">
                                            <MapPin />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg">Our Location</h3>
                                            <p className="text-gray-600">{clinicInfo.location.address}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 shrink-0">
                                            <Phone />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg">Phone</h3>
                                            <p className="text-gray-600">{clinicInfo.contact.phone}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 shrink-0">
                                            <Mail />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg">Email</h3>
                                            <p className="text-gray-600">{clinicInfo.contact.email}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                                    <iframe
                                        src={clinicInfo.location.mapEmbedUrl}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                                <h2 className="text-2xl font-bold font-serif text-gray-900 mb-6">Send a Message</h2>
                                <ContactForm />
                            </div>
                        </div>
                    </Container>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
