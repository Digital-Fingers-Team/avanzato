"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import MagneticButton from "@/components/effects/MagneticButton";
import BrandLogo from "@/components/layout/BrandLogo";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "glass backdrop-blur-md border-b border-white/10" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="Avanzato home"
        >
          <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black/70 shadow-lg shadow-accent-purple/10 transition duration-300 group-hover:border-accent-purple/40 group-hover:shadow-accent-purple/20">
            <BrandLogo priority className="h-9 w-9" />
          </span>
          <span className="text-2xl font-bold tracking-tight">
            Avanzato<span className="text-accent-purple">.</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-soft"
            >
              {link.label}
            </Link>
          ))}
          <MagneticButton className="!px-6 !py-2 text-xs">
            Start project
          </MagneticButton>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-soft"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-white/10 glass md:hidden"
        >
          <div className="flex flex-col gap-4 px-6 py-8">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-muted hover:text-soft"
              >
                {link.label}
              </Link>
            ))}
            <MagneticButton className="w-fit text-xs">
              Start project
            </MagneticButton>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
