"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/cart";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalItems, totalPrice } =
    useCartStore();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeCart}
            className="fixed inset-0 z-[60] bg-avero-black/60 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-md bg-avero-black border-l border-avero-border/50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-avero-border/50">
              <div className="flex items-center gap-3">
                <ShoppingBag size={18} strokeWidth={1.5} className="text-avero-silver" />
                <h2 className="text-avero-white text-sm font-semibold tracking-[0.15em] uppercase">
                  Your Cart
                </h2>
                <span className="text-avero-silver text-xs">
                  ({totalItems()} {totalItems() === 1 ? "item" : "items"})
                </span>
              </div>
              <button
                onClick={closeCart}
                className="text-avero-silver hover:text-avero-white transition-colors"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            {/* Cart Items */}
            {items.length === 0 ? (
              /* Empty State */
              <div className="flex-1 flex flex-col items-center justify-center px-6">
                <ShoppingBag
                  size={48}
                  strokeWidth={1}
                  className="text-avero-border mb-6"
                />
                <p className="text-avero-silver text-sm tracking-wide mb-2">
                  Your cart is empty
                </p>
                <p className="text-avero-silver/50 text-xs mb-8 text-center">
                  Add some items to get started
                </p>
                <button
                  onClick={closeCart}
                  className="bg-avero-white text-avero-black px-8 py-3 text-[10px] font-semibold tracking-[0.2em] uppercase hover:bg-avero-accent transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <>
                {/* Items List */}
                <div className="flex-1 overflow-y-auto px-6 py-4">
                  <div className="flex flex-col gap-4">
                    <AnimatePresence initial={false}>
                      {items.map((item) => (
                        <motion.div
                          key={`${item.id}-${item.size}`}
                          layout
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, x: 60 }}
                          transition={{ duration: 0.25 }}
                          className="flex gap-4 bg-avero-charcoal border border-avero-border/30 p-3"
                        >
                          {/* Image */}
                          <div className="relative w-20 h-24 bg-avero-black overflow-hidden flex-shrink-0">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>

                          {/* Details */}
                          <div className="flex-1 flex flex-col justify-between min-w-0">
                            <div>
                              <h3 className="text-avero-white text-sm font-medium truncate">
                                {item.name}
                              </h3>
                              <p className="text-avero-silver text-[11px] mt-0.5">
                                Size: {item.size}
                              </p>
                            </div>

                            <div className="flex items-center justify-between mt-2">
                              {/* Quantity Controls */}
                              <div className="flex items-center gap-0 border border-avero-border/50">
                                <button
                                  onClick={() =>
                                    updateQuantity(item.id, item.size, item.quantity - 1)
                                  }
                                  className="w-7 h-7 flex items-center justify-center text-avero-silver hover:text-avero-white hover:bg-avero-border/30 transition-colors"
                                >
                                  <Minus size={12} />
                                </button>
                                <span className="w-8 h-7 flex items-center justify-center text-avero-white text-xs border-x border-avero-border/50">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() =>
                                    updateQuantity(item.id, item.size, item.quantity + 1)
                                  }
                                  className="w-7 h-7 flex items-center justify-center text-avero-silver hover:text-avero-white hover:bg-avero-border/30 transition-colors"
                                >
                                  <Plus size={12} />
                                </button>
                              </div>

                              {/* Price + Remove */}
                              <div className="flex items-center gap-3">
                                <span className="text-avero-white text-sm font-light">
                                  {(item.price * item.quantity).toLocaleString("en-US")} ج.م
                                </span>
                                <button
                                  onClick={() => removeItem(item.id, item.size)}
                                  className="text-avero-silver/40 hover:text-red-500 transition-colors"
                                >
                                  <Trash2 size={14} />
                                </button>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Sticky Footer — Order Summary */}
                <div className="border-t border-avero-border/50 px-6 py-5 bg-avero-black">
                  <div className="flex flex-col gap-2 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-avero-silver text-xs tracking-wider uppercase">
                        Subtotal
                      </span>
                      <span className="text-avero-white text-sm font-light">
                        {totalPrice().toLocaleString("en-US")} ج.م
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-avero-silver text-xs tracking-wider uppercase">
                        Shipping
                      </span>
                      <span className="text-avero-silver/50 text-[11px]">
                        Calculated at checkout
                      </span>
                    </div>
                  </div>

                  <button className="w-full bg-avero-white text-avero-black py-4 text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-avero-accent transition-all duration-300 hover:shadow-[0_0_20px_rgba(228,228,231,0.1)]">
                    Proceed to Checkout
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
