"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const fadeUp: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-avero-black">
      {/* Background Image */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="absolute inset-0"
      >
        <Image
          src="/hero-streetwear.jpg"
          alt="Streetwear model"
          fill
          className="object-cover object-center"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-avero-black/90 via-avero-black/50 to-avero-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-avero-black via-transparent to-avero-black/40" />
      </motion.div>

      {/* Content */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 h-full w-full flex flex-col justify-between px-8 lg:px-20 py-24"
      >
        {/* Top Row */}
        <div className="flex items-start justify-between">
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 border border-avero-border/60 bg-avero-black/60 backdrop-blur-md px-4 py-2 text-[10px] tracking-[0.35em] uppercase text-avero-silver">
              <span className="h-1.5 w-1.5 rounded-full bg-avero-white animate-pulse" />
              Just Dropped
            </span>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="hidden md:flex flex-col items-end gap-0.5"
          >
            <span className="text-[10px] tracking-[0.5em] uppercase text-avero-silver/50">
              Season
            </span>
            <span className="text-lg font-light tracking-widest text-avero-white/80">
              FW26
            </span>
          </motion.div>
        </div>

        {/* Center Content */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.h1
              variants={fadeUp}
              className="font-bold uppercase leading-[0.85] tracking-tight text-avero-white mb-6"
              style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)" }}
            >
              <span className="block">Urban</span>
              <span className="block text-avero-accent">Essentials</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-md text-sm md:text-base leading-relaxed text-avero-silver/80 font-light mb-8"
            >
              Premium everyday essentials and modern fits. Crafted from
              heavyweight fabrics for the streets and beyond.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
              <Link
                href="/shop"
                className="group inline-flex items-center gap-3 bg-avero-white text-avero-black px-8 py-3.5 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(228,228,231,0.15)] active:scale-[0.98]"
              >
                Explore Drop
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/shop/hoodies"
                className="inline-flex items-center gap-3 border border-avero-border/80 bg-avero-black/40 backdrop-blur-sm px-8 py-3.5 text-xs font-light tracking-[0.2em] uppercase text-avero-silver transition-all duration-300 hover:border-avero-silver/50 hover:text-avero-white"
              >
                Shop Hoodies
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom Scroll Indicator */}
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[9px] tracking-[0.5em] uppercase text-avero-silver/40">
              Scroll
            </span>
            <ArrowDown size={14} className="text-avero-silver/40" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
