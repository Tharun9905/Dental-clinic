import { cn } from "@/utils/cn";
import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    hoverEffect?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, hoverEffect = true, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "bg-white rounded-2xl shadow-sm border border-gray-100 p-6 transition-all duration-300",
                    hoverEffect && "hover:shadow-xl hover:-translate-y-1 hover:border-primary-100",
                    className
                )}
                {...props}
            />
        );
    }
);

Card.displayName = "Card";
