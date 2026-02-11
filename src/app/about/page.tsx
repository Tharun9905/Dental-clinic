import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { DoctorProfile } from "@/components/home/DoctorProfile";
import { CTA } from "@/components/home/CTA";

// 1. IMPORT YOUR IMAGES FROM THE FOLDER SHOWN IN YOUR SCREENSHOT
import InteriorImg from "@/app/images/interior.png";
import EquipmentImg from "@/app/images/equipment.png";
import ReceptionImg from "@/app/images/reception.png";

export default function About() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="pt-20">
                {/* Header Section */}
                <Section className="bg-primary-50">
                    <Container className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-6">About Shloka Dental</h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Welcome to Shloka Dental & Implant Care, where advanced technology meets 
                            compassionate patient care in Kalyandurg.
                        </p>
                    </Container>
                </Section>

                {/* Our Story & Image Grid */}
                <Section>
                    <Container>
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold font-serif text-gray-900 mb-6">Our Story</h2>
                                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                                    Founded with a vision to provide world-class dental care in Kalyandurg, Shloka Dental has been at the forefront of dental innovation and patient care. We believe that everyone deserves a healthy, confident smile.
                                </p>
                                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                                    Our clinic is equipped with modern state-of-the-art technology to ensure precise diagnosis and effective treatments. Whether it is a routine checkup or a complex implant surgery, we adhere to the highest standards of hygiene and safety.
                                </p>

                                <div className="grid grid-cols-2 gap-6 mt-12">
                                    <div className="bg-primary-50 p-6 rounded-2xl text-center border border-primary-100 shadow-sm">
                                        <div className="text-3xl font-bold text-primary-600 mb-1">10+</div>
                                        <div className="text-gray-600 text-sm font-bold uppercase tracking-wider">Years Experience</div>
                                    </div>
                                    <div className="bg-secondary-50 p-6 rounded-2xl text-center border border-secondary-100 shadow-sm">
                                        <div className="text-3xl font-bold text-secondary-600 mb-1">5000+</div>
                                        <div className="text-gray-600 text-sm font-bold uppercase tracking-wider">Happy Patients</div>
                                    </div>
                                </div>
                            </div>

                            {/* Image Collage Section - Using your actual photos */}
                            <div className="grid gap-4">
                                {/* Large Top Image: Clinic Interior */}
                                <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl bg-gray-100 border border-gray-100">
                                    <Image 
                                        src={InteriorImg}
                                        alt="Shloka Dental Clinic Interior"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    {/* Bottom Left: Equipment */}
                                    <div className="relative aspect-square w-full rounded-3xl overflow-hidden shadow-lg bg-gray-100 border border-gray-100">
                                        <Image 
                                            src={EquipmentImg}
                                            alt="Dental Treatment Equipment"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    {/* Bottom Right: Reception */}
                                    <div className="relative aspect-square w-full rounded-3xl overflow-hidden shadow-lg bg-gray-100 border border-gray-100">
                                        <Image 
                                            src={ReceptionImg}
                                            alt="Shloka Dental Reception Desk"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </Section>

                {/* Doctor Profile Section */}
                <DoctorProfile />

                {/* Facilities Section */}
                <Section background="mint">
                    <Container>
                        <h2 className="text-3xl font-bold font-serif text-gray-900 mb-12 text-center">Our Facilities</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-3xl shadow-sm text-center border border-gray-50">
                                <h3 className="text-xl font-bold mb-4">Advanced Equipment</h3>
                                <p className="text-gray-600">Modern dental chairs and digital diagnostic tools for pain-free treatment.</p>
                            </div>
                            <div className="bg-white p-8 rounded-3xl shadow-sm text-center border border-gray-50">
                                <h3 className="text-xl font-bold mb-4">100% Sterilization</h3>
                                <p className="text-gray-600">We follow strict international protocols for hygiene and infection control.</p>
                            </div>
                            <div className="bg-white p-8 rounded-3xl shadow-sm text-center border border-gray-50">
                                <h3 className="text-xl font-bold mb-4">Patient Comfort</h3>
                                <p className="text-gray-600">A spacious, welcoming environment designed to make your visit stress-free.</p>
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