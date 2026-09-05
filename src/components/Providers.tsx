"use client";

import CartDrawer from "@/components/CartDrawer";
import ProductModal from "@/components/ProductModal";
import ToastContainer from "@/components/Toast";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <CartDrawer />
      <ProductModal />
      <ToastContainer />
    </>
  );
}
