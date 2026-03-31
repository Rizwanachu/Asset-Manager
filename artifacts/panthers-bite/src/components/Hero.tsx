import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { triggerOrderModal } from "@/hooks/use-order-modal";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background & gradient overlays */}
      <div className="absolute inset-0 z-0">
        {/* Mobile/tablet gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30 z-10 lg:hidden" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10 lg:hidden" />
        <div className="absolute inset-0 bg-background/60 sm:bg-transparent z-10 opacity-50 sm:opacity-100 lg:hidden" />
        {/* Desktop gradient — precise left-only fade, right side fully clean */}
        <div
          className="absolute inset-0 z-10 pointer-events-none hidden lg:block"
          style={{ background: "linear-gradient(to right, #0f0f0f 0%, #0f0f0f 20%, rgba(15,15,15,0.85) 38%, rgba(15,15,15,0.2) 52%, transparent 65%)" }}
        />
        {/* Desktop bottom fade */}
        <div
          className="absolute inset-0 z-10 pointer-events-none hidden lg:block"
          style={{ background: "linear-gradient(to top, rgba(15,15,15,0.7) 0%, transparent 35%)" }}
        />
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt="Panther's Bite"
          className="w-full h-full object-cover object-center sm:object-right opacity-10 sm:opacity-40 lg:opacity-100"
        />
      </div>
      {/* Pink radial glow */}
      <div className="absolute inset-0 z-0 pointer-events-none section-pink-glow" />
      {/* Warm amber glow — desktop only, right side */}
      <div
        className="absolute inset-0 z-0 pointer-events-none hidden lg:block"
        style={{ background: "radial-gradient(ellipse 60% 70% at 85% 50%, rgba(210, 140, 30, 0.35) 0%, rgba(180, 100, 20, 0.12) 50%, transparent 75%)" }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center py-12 sm:py-0 min-h-screen">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl text-center sm:text-left mx-auto sm:mx-0 pb-10 lg:pb-0"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#E94E77]/30 mb-4 sm:mb-6 backdrop-blur-sm mt-[15px]">
            <span className="text-primary font-bold tracking-widest text-xs sm:text-sm uppercase">Kochi's go-to fast food spot</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-display uppercase leading-[0.9] mb-3 sm:mb-4 text-glow">
            Unleash Your <span className="text-primary block mt-2">Hunger.</span>
          </h1>

          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-primary/70 mb-4 sm:mb-6">
            Warning: seriously addictive food
          </p>

          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 sm:mb-10 max-w-lg mx-auto sm:mx-0 font-medium leading-relaxed">Loaded fries, crazy combos, juicy burgers and late night cravings - all in one place.</p>

          <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
            <Button size="lg" onClick={triggerOrderModal}>
              Order Now
            </Button>
            <Button size="lg" variant="outline" onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })}>
              Visit Us
            </Button>
          </div>

          <div className="mt-8 sm:mt-12 flex flex-wrap items-center gap-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground justify-center sm:justify-start">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Open till 12 AM in Kochi
            </div>
            <div className="flex items-center gap-2 text-primary/70">
              <span className="font-display text-lg">4.9</span>
              <span className="text-primary text-base tracking-tight">★★★★★</span>
              <span className="text-xs text-muted-foreground normal-case font-normal">on Zomato & Swiggy</span>
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  );
}
