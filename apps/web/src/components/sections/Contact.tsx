"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import GlassCard from "@/components/effects/GlassCard";
import MagneticButton from "@/components/effects/MagneticButton";
import {
  AlertCircle,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Loader2,
  Mail,
  MessageCircle,
  Send,
  Sparkles,
} from "lucide-react";

const contactMethods = [
  {
    label: "Direct mail",
    value: "baraasaad007@gmail.com",
    href: "mailto:baraasaad007@gmail.com",
    icon: Mail,
    tone: "text-accent-purple",
  },
  {
    label: "WhatsApp",
    value: "+20 103 601 6057",
    href: "https://wa.me/201036016057",
    icon: MessageCircle,
    tone: "text-accent-blue",
  },
];

const formFields = [
  {
    id: "name",
    label: "Name",
    type: "text",
    placeholder: "Your name",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "you@company.com",
  },
] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000/api";
      const res = await fetch(`${apiUrl}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden border-t border-white/10 px-6 py-24 md:py-32">
      <div className="absolute left-1/2 top-0 h-px w-[min(900px,80vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-accent-purple/60 to-transparent" />
      <div className="absolute -right-32 top-16 h-80 w-80 rounded-full bg-accent-blue/10 blur-3xl" />
      <div className="absolute -left-32 bottom-8 h-80 w-80 rounded-full bg-accent-purple/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="flex flex-col justify-between"
        >
          <div>
            <motion.p
              variants={itemVariants}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 font-mono text-xs uppercase tracking-[0.24em] text-accent-blue backdrop-blur"
            >
              <Sparkles className="h-3.5 w-3.5 text-accent-purple" />
              Project Signal
            </motion.p>

            <motion.h2
              variants={itemVariants}
              className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-soft md:text-6xl"
            >
              Let&apos;s build a digital experience with{" "}
              <span className="bg-gradient-to-r from-accent-purple to-accent-blue bg-clip-text text-transparent">
                premium edge.
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-xl text-base leading-8 text-muted md:text-lg"
            >
              Share the idea, scope, or rough challenge. We will map the fastest path from concept to a polished launch-ready product.
            </motion.p>
          </div>

          <motion.div variants={itemVariants} className="mt-10 space-y-5">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                className="group flex items-center justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur transition duration-300 hover:border-accent-purple/30 hover:bg-white/[0.06]"
              >
                <span className="flex min-w-0 items-center gap-4">
                  <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-bg-secondary/80 ${method.tone}`}>
                    <method.icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-xs uppercase tracking-[0.18em] text-muted">
                      {method.label}
                    </span>
                    <span className="mt-1 block truncate text-sm font-medium text-soft transition group-hover:text-white sm:text-base">
                      {method.value}
                    </span>
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-purple" />
              </a>
            ))}

            <div className="flex items-center gap-3 rounded-2xl border border-accent-purple/15 bg-accent-purple/[0.06] px-4 py-3 text-sm text-muted">
              <Clock3 className="h-4 w-4 text-accent-purple" />
              <span>Typical reply window: within 24 hours.</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 36 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-120px" }}
        >
          <GlassCard className="relative overflow-hidden p-6 sm:p-8 md:p-10">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-blue/70 to-transparent" />
            <div className="mb-8 flex flex-col gap-3 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent-purple">
                  Start the brief
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-soft">Tell us what you need</h3>
              </div>
              <p className="max-w-xs text-sm leading-6 text-muted">
                Strategic, technical, or still fuzzy all are welcome.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                {formFields.map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className="mb-2 block font-mono text-xs uppercase tracking-[0.18em] text-muted"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      required
                      value={form[field.id]}
                      onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-bg-secondary/70 px-4 py-3.5 text-sm text-soft outline-none transition duration-300 placeholder:text-muted/60 focus:border-accent-purple/60 focus:bg-bg-secondary focus:shadow-[0_0_0_4px_rgba(139,92,246,0.08)]"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-mono text-xs uppercase tracking-[0.18em] text-muted"
                >
                  Project details
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="min-h-40 w-full resize-none rounded-xl border border-white/10 bg-bg-secondary/70 px-4 py-3.5 text-sm text-soft outline-none transition duration-300 placeholder:text-muted/60 focus:border-accent-purple/60 focus:bg-bg-secondary focus:shadow-[0_0_0_4px_rgba(139,92,246,0.08)]"
                  placeholder="What are you building, improving, or launching?"
                />
              </div>

              <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
                <MagneticButton
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full !rounded-xl px-6 py-4 sm:w-auto"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </MagneticButton>

                <div className="min-h-6 text-sm">
                  {status === "success" && (
                    <p className="flex items-center gap-2 text-emerald-400">
                      <CheckCircle2 className="h-4 w-4" />
                      Message received. We will reply soon.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="flex items-center gap-2 text-rose-400">
                      <AlertCircle className="h-4 w-4" />
                      Could not send. Please use email or WhatsApp.
                    </p>
                  )}
                </div>
              </div>
            </form>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
