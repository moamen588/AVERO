"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { useCartStore } from "@/store/cart";

const fabricDetails: Record<string, string[]> = {
  hoodies: ["Heavyweight French Terry or Fleece", "Reinforced ribbed cuffs & hem", " kangaroo pocket / split pockets", "Brushed interior for softness"],
  tees: ["Combed or Pima Cotton", "Reinforced collar (no stretch)", "Double-stitched hems", "Pre-shrunk construction"],
  pants: ["Ripstop Nylon or French Terry", "Elastic / adjustable waistband", "Tapered or relaxed fit", "Multiple utility pockets"],
  outerwear: ["Water-resistant shell", "Satin or mesh lining", "Heavy-duty YKK zippers", "Adjustable cuffs & hem"],
};

export default function ProductModal() {
  const { modalProduct, closeModal, addItem, showToast } = useCartStore();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [added, setAdded] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  if (!modalProduct) return null;

  const product = modalProduct;
  const gallery = product.gallery;
  const details = fabricDetails[product.category] ?? [];

  const handleAdd = () => {
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
      closeModal();
    }, 1200);
  };

  const nextImage = () => setGalleryIndex((i) => (i + 1) % gallery.length);
  const prevImage = () => setGalleryIndex((i) => (i - 1 + gallery.length) % gallery.length);

  return (
    <AnimatePresence>
      {modalProduct && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-8"
          onClick={closeModal}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-avero-charcoal border border-avero-border/50"
          >
            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-avero-black/60 text-avero-silver hover:text-avero-white transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Gallery */}
              <div className="relative aspect-[3/4] md:aspect-auto md:h-full bg-avero-black">
                <Image
                  src={gallery[galleryIndex]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-1.5">
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

                {/* Gallery Nav */}
                {gallery.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-avero-black/60 text-avero-silver hover:text-avero-white transition-colors"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-avero-black/60 text-avero-silver hover:text-avero-white transition-colors"
                    >
                      <ChevronRight size={18} />
                    </button>
                    {/* Dots */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                      {gallery.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setGalleryIndex(i)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            i === galleryIndex
                              ? "bg-avero-white w-5"
                              : "bg-avero-silver/40"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Details */}
              <div className="p-6 md:p-8 flex flex-col">
                {/* Category */}
                <span className="text-avero-silver/50 text-[10px] tracking-[0.3em] uppercase mb-2">
                  {product.category}
                </span>

                {/* Name */}
                <h2 className="text-avero-white text-xl md:text-2xl font-light tracking-wide mb-2">
                  {product.name}
                </h2>

                {/* Price */}
                <p className="text-avero-white text-lg font-light tracking-wider mb-4">
                  {product.price.toLocaleString("en-US")} ج.م
                </p>

                {/* Description */}
                <p className="text-avero-silver/70 text-sm leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Divider */}
                <div className="h-px bg-avero-border/50 mb-6" />

                {/* Size Selector */}
                <div className="mb-6">
                  <p className="text-avero-silver text-[10px] tracking-[0.2em] uppercase mb-3">
                    Select Size
                  </p>
                  <div className="flex gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`flex-1 py-3 text-[11px] font-medium tracking-[0.15em] uppercase border transition-all duration-200 ${
                          selectedSize === size
                            ? "bg-avero-white text-avero-black border-avero-white"
                            : "bg-transparent text-avero-silver border-avero-border hover:border-avero-silver"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Fabric Details */}
                <div className="mb-8">
                  <p className="text-avero-silver text-[10px] tracking-[0.2em] uppercase mb-3">
                    Fabric & Construction
                  </p>
                  <p className="text-avero-white text-xs font-medium mb-3">
                    {product.fabric}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-avero-accent mt-1.5 shrink-0" />
                        <span className="text-avero-silver/60 text-xs">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Add to Bag */}
                <button
                  onClick={handleAdd}
                  disabled={!selectedSize}
                  className={`w-full flex items-center justify-center gap-2 py-4 text-[11px] font-semibold tracking-[0.25em] uppercase transition-all duration-300 mt-auto ${
                    added
                      ? "bg-green-600 text-white"
                      : selectedSize
                        ? "bg-avero-white text-avero-black hover:bg-avero-accent"
                        : "bg-avero-border/50 text-avero-silver/50 cursor-not-allowed"
                  }`}
                >
                  {added ? (
                    <>
                      <Check size={16} />
                      Added to Bag
                    </>
                  ) : (
                    <>
                      <Plus size={16} />
                      Add to Bag
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
