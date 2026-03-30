import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { triggerOrderModal } from "@/hooks/use-order-modal";

const combos = [
  {
    id: "panther-classic",
    name: "Panther Classic",
    description: "Classic Smash Burger + Loaded Fries + Soft Drink. The full experience.",
    price: "₹449",
    tag: "Best seller"
  },
  {
    id: "spicy-duo",
    name: "Spicy Duo",
    description: "Spicy 2X Burger + Chilli Cheese Fries + Drink. For those who like it hot.",
    price: "₹499",
    tag: "Crowd favourite"
  },
  {
    id: "chicken-feast",
    name: "Chicken Feast",
    description: "Crispy Chicken Special + Beast Fries + Drink. Crispy all the way through.",
    price: "₹429",
    tag: "Fan pick"
  },
  {
    id: "late-night",
    name: "Late Night Combo",
    description: "Any burger + Double Loaded Fries. Built for midnight hunger. No apologies.",
    price: "₹399",
    tag: "Open till 12 AM"
  }
];

export function BestCombos() {
  return (
    <section id="combos" className="py-16 sm:py-24 bg-secondary/20 border-y border-[#E94E77]/10 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none section-pink-glow opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">More food, better value</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display text-foreground mb-4">Best Combos</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#E94E77] to-[#FF8FB1] mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-xl mx-auto">Messy. Loaded. Worth it.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {combos.map((combo, index) => (
            <motion.div
              key={combo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="glass-panel p-6 rounded-3xl group hover:border-[#E94E77]/50 hover:-translate-y-2 transition-all duration-300 box-glow flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-primary/80 bg-[#E94E77]/10 border border-[#E94E77]/20 px-2.5 py-1 rounded-full">
                  {combo.tag}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-display text-foreground mb-2 uppercase">{combo.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">{combo.description}</p>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                <span className="text-2xl sm:text-3xl font-display text-primary">{combo.price}</span>
                <Button size="sm" onClick={triggerOrderModal}>
                  Order Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
