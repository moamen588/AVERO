import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import BrandStory from "@/components/BrandStory";
import Lookbook from "@/components/Lookbook";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-avero-black">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <BrandStory />
      <Lookbook />
      <Footer />
    </main>
  );
}
