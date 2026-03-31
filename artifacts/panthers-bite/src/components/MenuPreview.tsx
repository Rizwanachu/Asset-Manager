import { motion } from "framer-motion";
import { Flame, Utensils, Drumstick, Layers, Gift } from "lucide-react";

const categories = [
  {
    id: "burgers",
    title: "Signature Burgers",
    description: "Double-smashed, cheese-pulled, sauce-dripping. Burgers built for real hunger.",
    icon: <Flame className="w-7 h-7 text-primary" />,
    microcopy: "The one that started it all",
    badge: "Best Seller",
    image: "images/spicy-burger.png"
  },
  {
    id: "fries",
    title: "Loaded Fries",
    description: "Crinkle cuts buried under molten cheese, meats, and sauces. Not diet food.",
    icon: <Utensils className="w-7 h-7 text-primary" />,
    microcopy: "You will not share these",
    badge: "Must Try",
    image: "images/loaded-fries.png"
  },
  {
    id: "chicken",
    title: "Chicken Specials",
    description: "Crispy, juicy, fiery — chicken done the Panther's way.",
    icon: <Drumstick className="w-7 h-7 text-primary" />,
    microcopy: "Crispy. Saucy. Built for real hunger",
    badge: "Hot Pick",
    image: "images/chicken-wings.png"
  },
  {
    id: "wraps",
    title: "Wraps & Snacks",
    description: "Stuffed wraps, bites, and snacks that hit hard every time.",
    icon: <Layers className="w-7 h-7 text-primary" />,
    microcopy: "Crispy. Messy. Perfect.",
    badge: null,
    image: "images/wraps-snacks.png"
  },
  {
    id: "combos",
    title: "Combos & Meals",
    description: "More food, better value. Full meals built for maximum cravings.",
    icon: <Gift className="w-7 h-7 text-primary" />,
    microcopy: "Messy. Loaded. Worth it.",
    badge: "Best Value",
    image: "images/combo-meal.png"
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

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ scale: 1.03, y: -6 }}
              className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] glass-panel rounded-3xl group border border-white/5 hover:border-[#E94E77]/50 transition-colors duration-300 cursor-pointer hover:shadow-[0_0_40px_rgba(233,78,119,0.15)] overflow-hidden flex flex-col"
              onClick={() => document.getElementById('signature')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {/* Image */}
              <div className="relative h-44 shrink-0 overflow-hidden bg-secondary">
                <img
                  src={`${import.meta.env.BASE_URL}${category.image}`}
                  alt={category.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {category.badge && (
                  <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest text-white bg-[#E94E77] px-2.5 py-1 rounded-full shadow-[0_0_12px_rgba(233,78,119,0.5)]">
                    {category.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-[#E94E77]/10 transition-colors shrink-0">
                    {category.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-display">{category.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm mb-2">{category.description}</p>
                <p className="text-xs text-primary/70 font-semibold mb-4 italic">{category.microcopy}</p>

                <div className="flex items-center text-primary font-bold uppercase tracking-wider text-sm group-hover:translate-x-2 transition-transform mt-auto">
                  Explore <span className="ml-2">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
