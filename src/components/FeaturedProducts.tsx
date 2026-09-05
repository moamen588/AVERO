"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "./ProductCard";
import { products, categories, type FilterCategory } from "@/lib/products";

export default function FeaturedProducts() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("all");

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="w-full bg-avero-black py-20 lg:py-28">
      <div className="mx-auto px-8 lg:px-20">
        {/* Header */}
        <div className="flex flex-col gap-6 mb-14">
          <div className="text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] tracking-[0.4em] uppercase text-avero-silver/50 block mb-3"
            >
              Curated Selection
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-avero-white text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight"
            >
              Featured Drops
            </motion.h2>
          </div>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-1 bg-avero-charcoal border border-avero-border/50 p-1 mx-auto"
          >
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`relative px-4 py-2.5 text-[10px] tracking-[0.2em] uppercase font-medium transition-colors duration-200 ${
                  activeCategory === cat.value
                    ? "text-avero-black"
                    : "text-avero-silver hover:text-avero-white"
                }`}
              >
                {activeCategory === cat.value && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-avero-white"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="/shop"
            className="inline-flex items-center gap-2 text-avero-silver text-[11px] tracking-[0.3em] uppercase hover:text-avero-white transition-colors duration-300 border-b border-avero-border hover:border-avero-silver pb-1"
          >
            View All Products
          </a>
        </motion.div>
      </div>
    </section>
  );
}
