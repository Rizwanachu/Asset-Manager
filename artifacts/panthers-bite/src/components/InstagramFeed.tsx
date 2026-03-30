import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const feedImages = [
  { src: "/images/classic-burger.png", label: "Classic Smash" },
  { src: "/images/spicy-burger.png", label: "Spicy 2X" },
  { src: "/images/loaded-fries.png", label: "Loaded Fries" },
  { src: "/images/classic-burger.png", label: "Smash Stack" },
  { src: "/images/spicy-burger.png", label: "Fire Burger" },
  { src: "/images/loaded-fries.png", label: "Cheese Fries" },
];

export function InstagramFeed() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display text-foreground mb-4">Follow Our Vibe</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Tag us in your messy burger shots to get featured.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mb-12">
          {feedImages.map((item, idx) => (
            <motion.a
              key={idx}
              href="https://www.instagram.com/panthersbite/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative aspect-square overflow-hidden group block bg-secondary rounded-xl"
            >
              <img 
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold tracking-widest uppercase">View Post</span>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={() => window.open('https://www.instagram.com/panthersbite/', '_blank')}
            variant="outline" 
            size="lg"
          >
            Follow @panthersbite
          </Button>
        </div>

      </div>
    </section>
  );
}
