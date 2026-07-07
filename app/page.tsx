import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Reviews from "@/components/Reviews";
import AmazonOrder from "@/components/AmazonOrder";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Products />
      <Reviews />
      <AmazonOrder />
      <About />
      <Footer />
    </main>
  );
}
