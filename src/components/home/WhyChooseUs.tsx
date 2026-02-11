import { Container } from "../common/Container";
import { Section } from "../common/Section";
import { ShieldCheck, Heart, Clock, BadgeCheck } from "lucide-react";

const features = [
    {
        icon: ShieldCheck,
        title: "Advanced Technology",
        desc: "We use the latest dental equipment for precise and painless treatments.",
    },
    {
        icon: Heart,
        title: "Patient-First Approach",
        desc: "Your comfort is our top priority. We ensure a relaxed and friendly environment.",
    },
    {
        icon: BadgeCheck,
        title: "Experienced Specialists",
        desc: "Treatments performed by highly qualified and experienced dental surgeons.",
    },
    {
        icon: Clock,
        title: "Timely Appointments",
        desc: "We value your time. Zero waiting time with scheduled appointments.",
    },
];

export function WhyChooseUs() {
    return (
        <Section background="blue">
            <Container>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text & Features */}
                    <div>
                        <h2 className="text-3xl font-bold font-serif text-gray-900 sm:text-4xl mb-6">
                            Why Choose Shloka Dental?
                        </h2>
                        <p className="text-gray-600 text-lg mb-8">
                            We combine expertise, technology, and compassion to deliver the best dental care in Kalyandurg.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="shrink-0">
                                        <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600">
                                            <feature.icon size={24} />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            {feature.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="relative">
                        <div className="aspect-video rounded-3xl overflow-hidden shadow-xl">
                            <img
                                src="https://img.freepik.com/premium-photo/modern-dental-clinic-interior-with-dentist-s-chair_225446-20907.jpg"
                                alt="Modern Dental Clinic Interior"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Decorative blob */}
                        <div className="absolute -z-10 top-1/2 left-1/2 
                            -translate-x-1/2 -translate-y-1/2 
                            w-full h-full bg-primary-200 
                            rounded-full blur-3xl opacity-50 scale-110" />
                    </div>
                </div>
            </Container>
        </Section>
    );
}
