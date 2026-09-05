"use client";

import { motion } from "framer-motion";
import { Shield, Truck, Droplets } from "lucide-react";

const features = [
  {
    icon: Droplets,
    title: "500 GSM French Terry",
    description: "Premium heavyweight fabrics built to last",
  },
  {
    icon: Shield,
    title: "Ethically Crafted",
    description: "Responsibly sourced and manufactured",
  },
  {
    icon: Truck,
    title: "Express Worldwide",
    description: "Fast shipping to 120+ countries",
  },
];

export default function BrandStory() {
  return (
    <section className="w-full bg-avero-charcoal py-28 lg:py-36">
      <div className="px-8 lg:px-20">
        {/* Main Statement */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] tracking-[0.5em] uppercase text-avero-silver/50 block mb-6"
          >
            Our Philosophy
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-avero-white text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight leading-[1.2]"
          >
            Heavyweight Fabrics.
            <br />
            <span className="text-avero-accent">Minimal Cuts.</span>
            <br />
            Limited Drops.
          </motion.h2>
        </div>

        {/* Feature Badges */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-8 border border-avero-border/30 bg-avero-black/50"
              >
                <feature.icon
                  size={28}
                  strokeWidth={1.5}
                  className="text-avero-accent mb-4"
                />
                <h3 className="text-avero-white text-sm font-semibold tracking-[0.15em] uppercase mb-2">
                  {feature.title}
                </h3>
                <p className="text-avero-silver/70 text-xs leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
