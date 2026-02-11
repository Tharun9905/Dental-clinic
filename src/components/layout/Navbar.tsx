"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { Container } from "../common/Container";
import { Button } from "../common/Button";
import { cn } from "@/utils/cn";
import { clinicInfo } from "@/data/clinic";

const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
            )}
        >
            <Container>
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-2xl font-bold font-serif text-primary-700">Shloka</span>
                        <span className="text-sm font-medium text-gray-600 hidden sm:block">| {clinicInfo.tagline}</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary-600",
                                    pathname === item.href ? "text-primary-600" : "text-gray-600"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <a href={`tel:${clinicInfo.contact.phone.replace(/\s+/g, '')}`} className="hidden lg:flex items-center gap-2 text-primary-600 font-medium">
                            <Phone size={18} />
                            <span>{clinicInfo.contact.phone}</span>
                        </a>
                        <Link href="/appointments">
                            <Button size="sm" className="hidden sm:inline-flex gap-2">
                                <Calendar size={18} />
                                Book Now
                            </Button>
                        </Link>

                        <button
                            className="md:hidden p-2 text-gray-600 hover:text-primary-600"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </nav>
            </Container>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 p-4 animate-fade-in-up">
                    <div className="flex flex-col gap-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "text-lg font-medium p-2 rounded-lg hover:bg-gray-50",
                                    pathname === item.href ? "text-primary-600 bg-primary-50" : "text-gray-700"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <hr />
                        <Link href="/appointments" className="w-full">
                            <Button className="w-full justify-center">Book Appointment</Button>
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
