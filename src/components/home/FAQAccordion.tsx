"use client";

import { useState } from "react";
import { faq } from "@/data/faq";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/utils/cn";

export function FAQAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="max-w-3xl mx-auto space-y-4">
            {faq.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                    <div
                        key={index}
                        className={cn(
                            "border rounded-xl bg-white transition-all duration-300 overflow-hidden",
                            isOpen ? "border-primary-200 shadow-md" : "border-gray-200"
                        )}
                    >
                        <button
                            onClick={() => setOpenIndex(isOpen ? null : index)}
                            className="w-full flex items-center justify-between p-6 text-left"
                        >
                            <h3 className={cn("font-bold text-lg", isOpen ? "text-primary-700" : "text-gray-900")}>{item.question}</h3>
                            {isOpen ? <ChevronUp className="text-primary-600" /> : <ChevronDown className="text-gray-400" />}
                        </button>
                        <div
                            className={cn(
                                "px-6 transition-all duration-300 ease-in-out",
                                isOpen ? "max-h-48 opacity-100 pb-6" : "max-h-0 opacity-0 pb-0"
                            )}
                        >
                            <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
