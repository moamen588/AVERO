"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stats = [
  { value: "500+", label: "GSM Fabric Weight" },
  { value: "100%", label: "Organic Materials" },
  { value: "Limited", label: "Every Drop" },
  { value: "Egypt", label: "Designed In" },
];

const values = [
  {
    title: "Heavyweight First",
    description: "Every AVERO piece starts with fabric. We source the densest, most premium materials — 500 GSM hoodies, 240 GSM tees, Japanese selvedge denim — because quality is felt before it's seen.",
  },
  {
    title: "Minimal by Design",
    description: "No unnecessary logos. No overdesign. AVERO strips streetwear to its purest form: clean silhouettes, muted tones, and construction that speaks for itself.",
  },
  {
    title: "Drop Culture",
    description: "We don't do seasons. We do drops. Each release is a curated capsule — limited in quantity, infinite in intent. When it's gone, it's gone.",
  },
  {
    title: "Built for Movement",
    description: "From oversized hoodies to tapered cargos, every cut is designed for how you actually live. Relaxed enough for comfort, structured enough for style.",
  },
];

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-avero-black">
      <Navbar />

      {/* Hero */}
      <section className="w-full pt-32 pb-20 px-8 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] tracking-[0.5em] uppercase text-avero-silver/50 block mb-6"
          >
            The Brand
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-avero-white text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-8"
          >
            Built from the streets.
            <br />
            <span className="text-avero-accent">Worn with intent.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-avero-silver/70 text-sm md:text-base leading-relaxed max-w-2xl mx-auto"
          >
            AVERO is a luxury streetwear label rooted in Cairo, designed for the global urban wardrobe. We believe in heavyweight fabrics, minimal design, and drops that matter.
          </motion.p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="w-full border-y border-avero-border/30 bg-avero-charcoal">
        <div className="px-8 lg:px-20 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-avero-white text-2xl md:text-3xl font-light tracking-wider mb-1">
                {stat.value}
              </p>
              <p className="text-avero-silver/50 text-[10px] tracking-[0.2em] uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="w-full py-20 lg:py-28 px-8 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] tracking-[0.5em] uppercase text-avero-silver/50 block mb-4 text-center"
          >
            Our Philosophy
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-avero-white text-3xl md:text-4xl font-light tracking-tight text-center mb-16"
          >
            What We Stand For
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-avero-charcoal border border-avero-border/50 p-8"
              >
                <h3 className="text-avero-white text-sm font-semibold tracking-[0.15em] uppercase mb-4">
                  {value.title}
                </h3>
                <p className="text-avero-silver/60 text-xs leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Block */}
      <section className="w-full py-20 lg:py-28 px-8 lg:px-20 bg-avero-charcoal">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-avero-white text-2xl md:text-3xl font-light tracking-tight leading-relaxed mb-8"
          >
            &ldquo;We don&apos;t follow trends.
            <br />
            We release what we want to wear.&rdquo;
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-avero-silver/50 text-[10px] tracking-[0.3em] uppercase mb-1">
              Founded
            </p>
            <p className="text-avero-silver text-xs">
              Cairo, Egypt — 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-20 lg:py-28 px-8 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-avero-white text-3xl md:text-4xl font-light tracking-tight mb-8"
          >
            Explore the Collection
          </motion.h2>
          <motion.a
            href="/"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-block bg-avero-white text-avero-black px-10 py-4 text-[11px] font-semibold tracking-[0.25em] uppercase hover:bg-avero-accent transition-colors"
          >
            Shop Now
          </motion.a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
