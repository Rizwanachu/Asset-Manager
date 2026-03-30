import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { triggerOrderModal } from "@/hooks/use-order-modal";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt="Massive Smashed Burger"
          className="w-full h-full object-cover object-right"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm mt-[20px]">
            <span className="text-primary font-bold tracking-widest text-sm uppercase">Kochi's Hardest Hitting Burgers</span>
          </div>
          
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-display uppercase leading-[0.9] mb-6 text-glow">
            Unleash Your <span className="text-primary block mt-2">Hunger.</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-lg font-medium leading-relaxed">
            Signature smashed burgers, dangerously loaded fries, and bold American flavors that refuse to apologize.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" onClick={triggerOrderModal}>
              Order Now
            </Button>
            <Button size="lg" variant="outline" onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })}>
              Visit Us
            </Button>
          </div>
          
          <div className="mt-12 flex items-center gap-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Open till 12 AM
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
