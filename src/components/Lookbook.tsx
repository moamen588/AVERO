"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const lookbookItems = [
  {
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&fit=crop",
    title: "DROP 01",
    subtitle: "ESSENTIALS",
    span: "col-span-1 row-span-2",
  },
  {
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600&fit=crop",
    title: "DROP 02",
    subtitle: "GRAPHIC TEES",
    span: "col-span-1 row-span-1",
  },
  {
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=600&fit=crop",
    title: "DROP 03",
    subtitle: "OUTERWEAR",
    span: "col-span-1 row-span-1",
  },
  {
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=800&fit=crop",
    title: "DROP 04",
    subtitle: "BOTTOMS",
    span: "col-span-1 row-span-2",
  },
  {
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=600&fit=crop",
    title: "DROP 05",
    subtitle: "HOODIES",
    span: "col-span-1 row-span-1",
  },
  {
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600&fit=crop",
    title: "DROP 06",
    subtitle: "DENIM",
    span: "col-span-1 row-span-1",
  },
];

export default function Lookbook() {
  return (
    <section className="w-full bg-avero-black py-28 lg:py-36">
      <div className="px-8 lg:px-20">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] tracking-[0.5em] uppercase text-avero-silver/50 block mb-4"
          >
            Visual Identity
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-avero-white text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight"
          >
            Lookbook
          </motion.h2>
        </div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {lookbookItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className={`relative overflow-hidden group cursor-pointer ${item.span}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-avero-black/0 group-hover:bg-avero-black/60 transition-all duration-500 flex items-end p-6">
                <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-avero-silver text-[10px] tracking-[0.3em] uppercase block mb-1">
                    {item.title}
                  </span>
                  <span className="text-avero-white text-lg md:text-xl font-bold tracking-wider uppercase">
                    {item.subtitle}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
