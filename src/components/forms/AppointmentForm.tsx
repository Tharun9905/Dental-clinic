"use client";

import { useState } from "react";
import { Button } from "../common/Button";
import { CalendarCheck, Loader2 } from "lucide-react";
import { services } from "@/data/services";

export function AppointmentForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        setTimeout(() => {
            setStatus("success");
        }, 1500);
    };

    if (status === "success") {
        return (
            <div className="bg-white rounded-3xl p-8 md:p-12 text-center shadow-xl border-t-4 border-primary-500 animate-fade-in-up">
                <div className="w-20 h-20 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CalendarCheck size={40} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Request Received!</h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    We have received your appointment request. Our team will contact you shortly to confirm the time slot.
                </p>
                <Button onClick={() => setStatus("idle")}>Book Another Request</Button>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold font-serif text-gray-900 mb-2">Book an Appointment</h3>
            <p className="text-gray-600 mb-8">Fill out the form below and we will get back to you.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700">Patient Name</label>
                        <input type="text" id="name" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none bg-gray-50" placeholder="Full Name" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                        <input type="tel" id="phone" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none bg-gray-50" placeholder="+91" />
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="service" className="text-sm font-medium text-gray-700">Treatment Needed</label>
                        <select id="service" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none bg-gray-50">
                            <option value="">General Consultation</option>
                            {services.map(s => (
                                <option key={s.id} value={s.id}>{s.title}</option>
                            ))}
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="date" className="text-sm font-medium text-gray-700">Preferred Date</label>
                        <input type="date" id="date" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none bg-gray-50" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="notes" className="text-sm font-medium text-gray-700">Additional Notes</label>
                    <textarea id="notes" rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none bg-gray-50 resize-none" placeholder="Any specific concerns?"></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={status === "submitting"}>
                    {status === "submitting" ? (
                        <span className="flex items-center gap-2">
                            <Loader2 className="animate-spin" /> Processing...
                        </span>
                    ) : "Submit Request"}
                </Button>
            </form>
        </div>
    );
}
