import Link from "next/link";
import { Container } from "../common/Container";
import { Button } from "../common/Button";
import { Calendar } from "lucide-react";

export function CTA() {
    return (
        <section className="relative py-20 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="https://img.freepik.com/premium-photo/modern-dental-clinic-interior-with-dentist-s-chair_225446-20907.jpg"
                    alt="Modern Dental Clinic Interior"
                    className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-primary-600/85" />
            </div>

            {/* Content */}
            <Container>
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                    <div className="text-white">
                        <h2 className="text-3xl font-bold font-serif mb-4">
                            Ready to Smile with Confidence?
                        </h2>
                        <p className="text-primary-100 text-lg max-w-xl">
                            Book your appointment today and take the first step towards a healthier, brighter smile.
                        </p>
                    </div>

                    <Link href="/appointments">
                        <Button
                            size="lg"
                            className="bg-white text-primary-600 hover:bg-gray-100 shadow-2xl px-8 py-4 text-lg flex items-center"
                        >
                            <Calendar className="mr-2" />
                            Book Appointment
                        </Button>
                    </Link>
                </div>
            </Container>
        </section>
    );
}
