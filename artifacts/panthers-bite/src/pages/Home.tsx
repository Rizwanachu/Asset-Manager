import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MenuPreview } from "@/components/MenuPreview";
import { About } from "@/components/About";
import { SignatureItems } from "@/components/SignatureItems";
import { BestCombos } from "@/components/BestCombos";
import { Reviews } from "@/components/Reviews";
import { InstagramFeed } from "@/components/InstagramFeed";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { OrderModal } from "@/components/OrderModal";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />

      <main>
        <Hero />
        <MenuPreview />
        <About />
        <SignatureItems />
        <BestCombos />
        <Reviews />
        <InstagramFeed />
        <Location />
      </main>

      <Footer />

      <FloatingButtons />
      <OrderModal />
    </div>
  );
}
