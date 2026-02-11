import { testimonials } from "@/data/testimonials";
import { Card } from "../common/Card";
import { Star, Quote } from "lucide-react";
import { Container } from "../common/Container";
import { Section } from "../common/Section";

export function TestimonialCards() {
    return (
        <Section background="mint">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold font-serif text-gray-900 sm:text-4xl mb-4">What Our Patients Say</h2>
                    <p className="text-gray-600 text-lg">Real stories from our happy smiles.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {testimonials.map((t) => (
                        <Card key={t.id} className="relative p-8">
                            <Quote className="absolute top-8 right-8 text-primary-100 w-12 h-12" />
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={16}
                                        className={i < t.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                                    />
                                ))}
                            </div>
                            <p className="text-gray-700 italic mb-6 relative z-10">"{t.text}"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                                    {/* Placeholder for patient image */}
                                    <div className="w-full h-full bg-gray-300 flex items-center justify-center text-xs text-gray-500">Img</div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                                    <p className="text-xs text-gray-500">Patient</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
