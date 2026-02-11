import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { AppointmentForm } from "@/components/forms/AppointmentForm";

export default function Appointments() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="pt-20">
                <Section className="bg-primary-50">
                    <Container className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-6">Book Appointment</h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Schedule your visit with Dr. Sadhana. We look forward to seeing you.
                        </p>
                    </Container>
                </Section>

                <Section>
                    <Container className="max-w-4xl">
                        <AppointmentForm />
                    </Container>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
