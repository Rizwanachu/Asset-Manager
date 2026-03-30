import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { triggerOrderModal } from "@/hooks/use-order-modal";

const floatingItems = [
  {
    src: "images/spicy-burger.png",
    alt: "Spicy Burger",
    className: "absolute top-[8%] right-[2%] w-[46%] max-w-[340px] z-20 drop-shadow-2xl"
  },
  {
    src: "images/loaded-fries.png",
    alt: "Loaded Fries",
    className: "absolute top-[45%] right-[14%] w-[34%] max-w-[240px] z-10 drop-shadow-2xl opacity-90"
  },
  {
    src: "images/classic-burger.png",
    alt: "Classic Burger",
    className: "absolute bottom-[5%] right-[0%] w-[38%] max-w-[280px] z-30 drop-shadow-2xl opacity-95"
  }
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background & gradient overlays */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
        <div className="absolute inset-0 bg-background/60 sm:bg-transparent z-10" />
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt="Panther's Bite"
          className="w-full h-full object-cover object-center sm:object-right opacity-20 sm:opacity-40"
        />
      </div>
      {/* Pink radial glow */}
      <div className="absolute inset-0 z-0 pointer-events-none section-pink-glow" />
      {/* Extra concentrated glow on the right for food imagery */}
      <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none z-0"
        style={{ background: "radial-gradient(ellipse at 80% 40%, rgba(233,78,119,0.18) 0%, transparent 65%)" }} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 sm:py-0 min-h-screen">

        {/* LEFT — Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl text-center sm:text-left mx-auto sm:mx-0 pb-10 lg:pb-0"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#E94E77]/30 mb-4 sm:mb-6 backdrop-blur-sm mt-[20px]">
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

        {/* RIGHT — Layered food imagery (desktop only) */}
        <div className="hidden lg:block relative h-screen pointer-events-none select-none">
          {floatingItems.map((item, i) => (
            <motion.img
              key={item.src}
              src={`${import.meta.env.BASE_URL}${item.src}`}
              alt={item.alt}
              loading="lazy"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: [0, -12, 0],
              }}
              transition={{
                opacity: { duration: 0.8, delay: 0.3 + i * 0.2 },
                y: {
                  duration: 3 + i * 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5
                }
              }}
              className={item.className}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
