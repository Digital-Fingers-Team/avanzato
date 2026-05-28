"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({
  children,
  className = "",
  type = "button",
  disabled = false,
}: {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    if (disabled || !ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.5, y: y * 0.5 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={disabled ? { x: 0, y: 0 } : { x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      type={type}
      disabled={disabled}
      className={`inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent-purple to-accent-blue px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-purple/25 transition-all hover:shadow-accent-purple/50 ${className}`}
    >
      {children}
    </motion.button>
  );
}
