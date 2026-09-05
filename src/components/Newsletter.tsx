"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section className="w-full bg-avero-black py-20 lg:py-28">
      <div className="px-8 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto border border-avero-border/50 bg-avero-charcoal/50 p-8 md:p-12 text-center"
        >
          <Mail
            size={32}
            strokeWidth={1.2}
            className="text-avero-silver/50 mx-auto mb-6"
          />
          <h2 className="text-avero-white text-2xl md:text-3xl font-bold uppercase tracking-tight mb-3">
            Get Early Access
          </h2>
          <p className="text-avero-silver/70 text-sm mb-8 max-w-md mx-auto">
            Subscribe for member-only release notices and early drop access before
            anyone else.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-avero-black border border-avero-border/50 text-avero-white text-sm px-5 py-3.5 outline-none focus:border-avero-silver/50 transition-colors placeholder:text-avero-silver/40"
            />
            <button
              type="submit"
              disabled={subscribed}
              className={`flex items-center justify-center gap-2 px-8 py-3.5 text-[10px] font-semibold tracking-[0.2em] uppercase transition-all duration-300 ${
                subscribed
                  ? "bg-green-600 text-white"
                  : "bg-avero-white text-avero-black hover:bg-avero-accent"
              }`}
            >
              {subscribed ? (
                <>
                  <Check size={14} />
                  Subscribed
                </>
              ) : (
                "Subscribe"
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
