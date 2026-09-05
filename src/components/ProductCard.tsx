"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Check } from "lucide-react";
import { useCartStore } from "@/store/cart";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [added, setAdded] = useState(false);
  const [showSizes, setShowSizes] = useState(false);
  const addItem = useCartStore((state) => state.addItem);
  const openModal = useCartStore((state) => state.openModal);
  const showToast = useCartStore((state) => state.showToast);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedSize) return;
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      image: product.image,
    });
    setAdded(true);
    showToast(`${product.name} (${selectedSize}) added to bag`, product.image);
    setTimeout(() => {
      setAdded(false);
      setSelectedSize(null);
      setShowSizes(false);
    }, 1500);
  };

  return (
    <div
      className="group relative bg-avero-charcoal border border-avero-border/50 overflow-hidden hover:border-avero-border transition-colors duration-300"
      onMouseEnter={() => setShowSizes(true)}
      onMouseLeave={() => {
        if (!added) {
          setShowSizes(false);
          setSelectedSize(null);
        }
      }}
    >
      {/* Image — clickable to open modal */}
      <div
        className="relative aspect-[3/4] overflow-hidden bg-avero-black cursor-pointer"
        onClick={() => openModal(product)}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.isNew && (
            <span className="bg-avero-white text-avero-black text-[9px] font-semibold tracking-[0.2em] uppercase px-2.5 py-1">
              New
            </span>
          )}
          {product.isBestSeller && (
            <span className="bg-avero-accent text-avero-black text-[9px] font-semibold tracking-[0.2em] uppercase px-2.5 py-1">
              Best Seller
            </span>
          )}
        </div>

        {/* Quick Add Overlay */}
        <AnimatePresence>
          {showSizes && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-avero-black via-avero-black/95 to-transparent p-4 pt-12"
            >
              {/* Size Selector */}
              <div className="flex items-center gap-2 mb-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedSize(size);
                    }}
                    className={`flex-1 py-2 text-[10px] font-medium tracking-[0.15em] uppercase border transition-all duration-200 ${
                      selectedSize === size
                        ? "bg-avero-white text-avero-black border-avero-white"
                        : "bg-transparent text-avero-silver border-avero-border hover:border-avero-silver"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>

              {/* Add Button */}
              <button
                onClick={handleQuickAdd}
                disabled={!selectedSize}
                className={`w-full flex items-center justify-center gap-2 py-3 text-[10px] font-semibold tracking-[0.2em] uppercase transition-all duration-300 ${
                  added
                    ? "bg-green-600 text-white"
                    : selectedSize
                      ? "bg-avero-white text-avero-black hover:bg-avero-accent"
                      : "bg-avero-border/50 text-avero-silver/50 cursor-not-allowed"
                }`}
              >
                {added ? (
                  <>
                    <Check size={14} />
                    Added
                  </>
                ) : (
                  <>
                    <Plus size={14} />
                    Quick Add
                  </>
                )}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Product Info — clickable to open modal */}
      <div
        className="p-4 cursor-pointer"
        onClick={() => openModal(product)}
      >
        <h3 className="text-avero-white text-sm font-medium tracking-wide mb-1">
          {product.name}
        </h3>
        <p className="text-avero-silver text-[11px] tracking-wide mb-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-avero-white text-sm font-light tracking-wider">
            {product.price.toLocaleString("en-US")} ج.م
          </span>
          <span className="text-avero-silver/50 text-[10px] tracking-[0.2em] uppercase">
            {product.category}
          </span>
        </div>
      </div>
    </div>
  );
}
