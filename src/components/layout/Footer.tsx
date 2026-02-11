import Link from "next/link";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Container } from "../common/Container";
import { clinicInfo } from "@/data/clinic";

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="text-2xl font-bold font-serif text-white mb-6 block">
                            Shloka Dental
                        </Link>
                        <p className="text-gray-400 mb-6">
                            Advanced dental care with a gentle touch. We are dedicated to providing the best dental solutions for you and your family.
                        </p>
                        <div className="flex gap-4">
                            <a href={clinicInfo.social.facebook} className="p-2 bg-gray-800 rounded-full hover:bg-primary-600 transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href={clinicInfo.social.instagram} className="p-2 bg-gray-800 rounded-full hover:bg-primary-600 transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href={clinicInfo.social.twitter} className="p-2 bg-gray-800 rounded-full hover:bg-primary-600 transition-colors">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Treatments</Link></li>
                            <li><Link href="/testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</Link></li>
                            <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQs</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Our Services</h3>
                        <ul className="space-y-3">
                            <li><Link href="/services/dental-implants" className="text-gray-400 hover:text-white transition-colors">Dental Implants</Link></li>
                            <li><Link href="/services/root-canal-treatment" className="text-gray-400 hover:text-white transition-colors">Root Canal</Link></li>
                            <li><Link href="/services/cosmetic-dentistry" className="text-gray-400 hover:text-white transition-colors">Cosmetic Dentistry</Link></li>
                            <li><Link href="/services/braces-aligners" className="text-gray-400 hover:text-white transition-colors">Braces & Aligners</Link></li>
                            <li><Link href="/services/pediatric-dentistry" className="text-gray-400 hover:text-white transition-colors">Pediatric Dentistry</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Contact Info</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="shrink-0 text-primary-400" size={20} />
                                <span>{clinicInfo.location.address}</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="shrink-0 text-primary-400" size={20} />
                                <a href={`tel:${clinicInfo.contact.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                                    {clinicInfo.contact.phone}
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="shrink-0 text-primary-400" size={20} />
                                <a href={`mailto:${clinicInfo.contact.email}`} className="hover:text-white transition-colors">
                                    {clinicInfo.contact.email}
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400">
                                <Clock className="shrink-0 text-primary-400" size={20} />
                                <div>
                                    <p>Mon-Sat: 10AM - 8PM</p>
                                    <p>Sun: 10AM - 1PM</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Shloka Dental & Implant Care. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    );
}
