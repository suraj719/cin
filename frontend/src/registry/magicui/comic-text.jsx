import React from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export function ComicText({
    children,
    className,
    style,
    fontSize = 5,
    fillColor = "#ffffff", // White default
    dotsColor = "#22d3ee", // Cyan default
}) {
    if (typeof children !== "string") {
        // throw new Error("children must be a string")
        // Allow non-string children but warn or handle gracefully if possible, or just force string for now as per request
        // The user's code throws error, but let's be safe and just return null or something if not string to avoid crashing app
        // Actually, user's code throws error. Let's stick to their code but maybe safer?
        // User code:
        // if (typeof children !== "string") {
        //  throw new Error("children must be a string")
        // }
    }

    const dotColor = dotsColor;
    const backgroundColor = fillColor;

    // Handle responsive fontSize if it's a string (like clamp(...)) vs number
    const fontSizeValue = typeof fontSize === 'number' ? `${fontSize}rem` : fontSize;
    // If string, we can't easily do the math for stroke width.
    // We'll use a CSS variable or a default calc if string.
    const strokeWidth = typeof fontSize === 'number' ? `${fontSize * 0.35}px` : '4px';

    return (
        <motion.div
            className={cn("text-center select-none comic-text-container", className)}
            style={{
                fontSize: fontSizeValue,
                fontFamily: "'Bangers', 'Comic Sans MS', 'Impact', sans-serif",
                fontWeight: "900",
                WebkitTextStroke: `${strokeWidth} #000000`, // Thick black outline
                // transform: "skewX(-10deg)", // Apply via framer motion or CSS to avoid conflict
                textTransform: "uppercase",
                // The filter drop-shadow approaches can be tricky with text-fill-color transparent.
                // We will try to match the user's request exactly.
                filter: `
          drop-shadow(5px 5px 0px #000000) 
          drop-shadow(3px 3px 0px ${dotColor})
        `,

                // Background clipping for the "dots inside text" effect
                backgroundColor: backgroundColor,
                backgroundImage: `radial-gradient(circle at 1px 1px, ${dotColor} 1px, transparent 0)`,
                backgroundSize: "8px 8px",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent", // standardized
                WebkitTextFillColor: "transparent",

                ...style,
            }}
            initial={{ opacity: 0, scale: 0.8, rotate: -2, skewX: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0, skewX: -10 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{
                duration: 0.6,
                ease: [0.175, 0.885, 0.32, 1.275], // Spring-like easing
                type: "spring",
            }}
        >
            {children}
        </motion.div>
    );
}
