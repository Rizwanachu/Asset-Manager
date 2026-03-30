import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const feedImages = [
  { src: "images/classic-burger.png", label: "Classic Smash" },
  { src: "images/spicy-burger.png", label: "Spicy 2X" },
  { src: "images/loaded-fries.png", label: "Loaded Fries" },
  { src: "images/classic-burger.png", label: "Smash Stack" },
  { src: "images/spicy-burger.png", label: "Fire Burger" },
  { src: "images/loaded-fries.png", label: "Cheese Fries" },
];

export function InstagramFeed() {
  return (
    <section className="py-16 sm:py-24 bg-background relative">
      <div className="absolute inset-0 pointer-events-none section-pink-glow opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#E94E77]/25 mb-4">
            <Instagram className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">@panthersbite</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display text-foreground mb-3">Follow Our Vibe</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Tag us in your messy shots. You might just get featured.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 mb-10 sm:mb-12">
          {feedImages.map((item, idx) => (
            <motion.a
              key={idx}
              href="https://www.instagram.com/panthersbite/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-square overflow-hidden group block bg-secondary rounded-2xl"
            >
              <img
                src={`${import.meta.env.BASE_URL}${item.src}`}
                alt={item.label}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                <Instagram className="w-6 h-6 text-white" />
                <span className="text-white text-xs sm:text-sm font-bold tracking-widest uppercase">View on Instagram</span>
              </div>
              {/* Subtle pink border on hover */}
              <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 ring-[#E94E77]/50 transition-all duration-300 pointer-events-none" />
            </motion.a>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={() => window.open('https://www.instagram.com/panthersbite/', '_blank')}
            size="lg"
          >
            <Instagram className="w-4 h-4 mr-2" />
            Follow @panthersbite
          </Button>
        </div>

      </div>
    </section>
  );
}
