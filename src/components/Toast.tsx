"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { useCartStore } from "@/store/cart";

export default function ToastContainer() {
  const { toasts } = useCartStore();

  return (
    <div className="fixed bottom-6 right-6 z-[80] flex flex-col gap-3 pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 bg-avero-charcoal border border-avero-border/50 px-4 py-3 shadow-2xl pointer-events-auto"
          >
            {toast.image && (
              <div className="relative w-10 h-10 shrink-0 overflow-hidden bg-avero-black">
                <Image
                  src={toast.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
            )}
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center shrink-0">
                <Check size={12} className="text-white" />
              </div>
              <p className="text-avero-white text-xs tracking-wide whitespace-nowrap">
                {toast.message}
              </p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
