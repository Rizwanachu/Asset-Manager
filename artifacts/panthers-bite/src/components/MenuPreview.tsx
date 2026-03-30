import { motion } from "framer-motion";
import { Flame, Utensils, Zap } from "lucide-react";

const categories = [
  {
    id: "burgers",
    title: "Smashed Burgers",
    description: "Double beef, crispy edges, melted cheese, and our signature panther sauce.",
    icon: <Flame className="w-10 h-10 text-primary" />,
  },
  {
    id: "wraps",
    title: "Bold Wraps",
    description: "Crispy chicken or tender paneer wrapped tight with intense flavors and crunch.",
    icon: <Zap className="w-10 h-10 text-primary" />,
  },
  {
    id: "fries",
    title: "Loaded Fries",
    description: "A mountain of fries drowned in cheese, meats, and unapologetic toppings.",
    icon: <Utensils className="w-10 h-10 text-primary" />,
  }
];

export function MenuPreview() {
  return (
    <section id="menu" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display text-foreground mb-4">Our Menu</h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-8 rounded-3xl group hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 box-glow cursor-pointer"
              onClick={() => document.getElementById('signature')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="w-20 h-20 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                {category.icon}
              </div>
              <h3 className="text-3xl font-display mb-3">{category.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {category.description}
              </p>
              <div className="mt-6 flex items-center text-primary font-bold uppercase tracking-wider text-sm group-hover:translate-x-2 transition-transform">
                Explore <span className="ml-2">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
