import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import MenuPreview from "@/components/MenuPreview";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Events />
        <MenuPreview />
        <Gallery />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
