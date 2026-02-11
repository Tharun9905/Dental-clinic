import { cn } from "@/utils/cn";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    background?: "white" | "gray" | "blue" | "mint";
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ className, background = "white", ...props }, ref) => {
        const backgrounds = {
            white: "bg-white",
            gray: "bg-gray-50",
            blue: "bg-primary-50",
            mint: "bg-secondary-50",
        };

        return (
            <section
                ref={ref}
                className={cn(
                    "py-16 md:py-24",
                    backgrounds[background],
                    className
                )}
                {...props}
            />
        );
    }
);

Section.displayName = "Section";
