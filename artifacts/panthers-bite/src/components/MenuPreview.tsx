import { motion } from "framer-motion";
import { Flame, Utensils, Drumstick, Layers, Gift } from "lucide-react";

const categories = [
  {
    id: "burgers",
    title: "Signature Burgers",
    description: "Double-smashed, cheese-pulled, sauce-dripping burgers built for real hunger.",
    icon: <Flame className="w-9 h-9 text-primary" />,
    microcopy: "The one that started it all"
  },
  {
    id: "fries",
    title: "Loaded Fries",
    description: "Crinkle cuts buried under molten cheese, meats, and sauces. Not diet food.",
    icon: <Utensils className="w-9 h-9 text-primary" />,
    microcopy: "You will not share these"
  },
  {
    id: "chicken",
    title: "Chicken Specials",
    description: "Crispy, juicy, fiery — chicken done the Panther's way.",
    icon: <Drumstick className="w-9 h-9 text-primary" />,
    microcopy: "Crispy. Saucy. Built for real hunger"
  },
  {
    id: "wraps",
    title: "Wraps & Snacks",
    description: "Stuffed wraps, bites, and snacks that hit hard every single time.",
    icon: <Layers className="w-9 h-9 text-primary" />,
    microcopy: "Crispy. Messy. Perfect."
  },
  {
    id: "combos",
    title: "Combos & Meals",
    description: "More food, better value. Full meals built for maximum cravings.",
    icon: <Gift className="w-9 h-9 text-primary" />,
    microcopy: "Messy. Loaded. Worth it."
  }
];

export function MenuPreview() {
  return (
    <section id="menu" className="py-16 sm:py-24 bg-background relative">
      <div className="absolute inset-0 pointer-events-none section-pink-glow opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Bite into madness</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display text-foreground mb-4">Our Menu</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#E94E77] to-[#FF8FB1] mx-auto rounded-full" />
        </motion.div>

        {/* First row: 3 cards */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] glass-panel p-6 sm:p-8 rounded-3xl group hover:border-[#E94E77]/50 transition-all duration-300 hover:-translate-y-2 box-glow cursor-pointer"
              onClick={() => document.getElementById('signature')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-[#E94E77]/10 transition-colors">
                {category.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-display mb-2">{category.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm mb-3">
                {category.description}
              </p>
              <p className="text-xs text-primary/70 font-semibold mb-4 italic">{category.microcopy}</p>
              <div className="flex items-center text-primary font-bold uppercase tracking-wider text-sm group-hover:translate-x-2 transition-transform">
                Explore <span className="ml-2">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
