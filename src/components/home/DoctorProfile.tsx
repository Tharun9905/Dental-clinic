import { clinicInfo } from "@/data/clinic";
import { Container } from "../common/Container";
import { Section } from "../common/Section";
import { Award, GraduationCap } from "lucide-react";
import Image from "next/image";
import ImageData from "@/app/images/Sloka1.jpg";

export function DoctorProfile() {
    return (
        <Section background="gray">
            <Container>
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                    <div className="w-full md:w-1/2 lg:w-2/5">
                        {/* 1. Ensure the parent is 'relative' and has 'overflow-hidden' */}
                        <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-gray-200">
                            
                            {/* 2. Use 'fill' and 'object-cover' to make image occupy the whole space */}
                            <Image 
                                src={ImageData} 
                                alt={clinicInfo.doctor.name}
                                fill
                                className="object-cover"
                                priority
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 text-white">
                                <h3 className="text-2xl font-bold font-serif">{clinicInfo.doctor.name}</h3>
                                <p className="text-gray-200">{clinicInfo.doctor.specialty}</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 lg:w-3/5">
                        <h2 className="text-3xl font-bold font-serif text-gray-900 mb-6">Meet Your Doctor</h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            {clinicInfo.doctor.description}
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                                <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 shrink-0">
                                    <GraduationCap size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Education & Qualification</h4>
                                    <p className="text-gray-600">{clinicInfo.doctor.qualification} - Top University</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                                <div className="w-12 h-12 rounded-full bg-secondary-50 flex items-center justify-center text-secondary-600 shrink-0">
                                    <Award size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Experience</h4>
                                    <p className="text-gray-600">{clinicInfo.doctor.experience} in Advanced Dentistry</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}