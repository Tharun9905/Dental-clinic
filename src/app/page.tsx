import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { DoctorProfile } from "@/components/home/DoctorProfile";
import { TestimonialCards } from "@/components/home/TestimonialCards";
import { CTA } from "@/components/home/CTA";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { clinicInfo } from "@/data/clinic";

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main>
                <HeroSection />
                <ServicesPreview />
                <WhyChooseUs />
                <DoctorProfile />
                <TestimonialCards />

                {/* Map Section */}
                <Section background="gray">
                    <Container>
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold font-serif text-gray-900 mb-6">Visit Our Clinic</h2>
                                <p className="text-gray-600 mb-6">
                                    {clinicInfo.location.address}
                                </p>
                                <div className="space-y-2 text-gray-600">
                                    <p><strong>Phone:</strong> {clinicInfo.contact.phone}</p>
                                    <p><strong>Email:</strong> {clinicInfo.contact.email}</p>
                                </div>
                            </div>
                            <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
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
                    </Container>
                </Section>

                <CTA />
            </main>
            <Footer />
        </div>
    );
}
