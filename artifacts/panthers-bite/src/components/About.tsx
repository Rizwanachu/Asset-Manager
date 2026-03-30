import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-secondary/30 border-y border-[#E94E77]/10 relative overflow-hidden">
      {/* Decorative large text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-display text-white/[0.02] whitespace-nowrap pointer-events-none select-none z-0">
        NO APOLOGIES
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Our story</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display text-primary mb-6">The Story</h2>
            <p className="text-base sm:text-lg text-foreground/90 leading-relaxed mb-6">
              Panther's Bite serves bold American-style fast food with intense flavors. We believe every bite should hit hard.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-10">
              From our signature smashed burgers to our loaded fries, every item is crafted to deliver an unforgettable experience. Massive portions, bold seasoning, and a vibe that matches the energy of the streets.
            </p>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-[#E94E77]/15">
              <div>
                <div className="text-3xl sm:text-4xl font-display text-foreground mb-1">4.9<span className="text-primary text-xl sm:text-2xl">★</span></div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground font-bold">Top Rated</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-display text-foreground mb-1">50<span className="text-primary text-xl sm:text-2xl">+</span></div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground font-bold">Menu Items</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-display text-foreground mb-1">12<span className="text-primary text-xl sm:text-2xl">AM</span></div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground font-bold">Late Night</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative max-w-sm sm:max-w-md mx-auto w-full"
          >
            <div className="aspect-square rounded-full border border-[#E94E77]/20 flex items-center justify-center p-8 relative">
              <div className="absolute inset-0 bg-[#E94E77]/8 rounded-full blur-3xl" />
              <div className="w-full h-full rounded-full border-2 border-dashed border-[#E94E77]/30 animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-[15%] rounded-full bg-secondary flex items-center justify-center shadow-2xl shadow-[#E94E77]/10">
                <div className="text-center">
                  <div className="text-4xl sm:text-6xl font-display text-primary mb-2">100%</div>
                  <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-foreground">Smashed</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
