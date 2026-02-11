import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { TestimonialCards } from "@/components/home/TestimonialCards"; // Reusing the grid
import { CTA } from "@/components/home/CTA";

export default function Testimonials() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="pt-20">
                <Section className="bg-primary-50">
                    <Container className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-6">Patient Stories</h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            See what our patients have to say about their experience with Dr. Sadhana and Shloka Dental.
                        </p>
                    </Container>
                </Section>

                {/* We can reuse the TestimonialCards component or build a more extensive list if we had more data */}
                <TestimonialCards />

                <CTA />
            </main>
            <Footer />
        </div>
    );
}
