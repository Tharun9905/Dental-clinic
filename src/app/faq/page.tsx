import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { FAQAccordion } from "@/components/home/FAQAccordion";
import { CTA } from "@/components/home/CTA";

export default function FAQ() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="pt-20">
                <Section className="bg-primary-50">
                    <Container className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-6">Frequently Asked Questions</h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Got questions? We have answers. If you don't see your question here, feel free to contact us.
                        </p>
                    </Container>
                </Section>

                <Section>
                    <Container>
                        <FAQAccordion />
                    </Container>
                </Section>

                <CTA />
            </main>
            <Footer />
        </div>
    );
}
