import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

// Using Unsplash placeholder images matching the dark food vibe
const feedImages = [
  "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&h=800&fit=crop", // Dark burger
  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=800&fit=crop", // Burger top down
  "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=800&h=800&fit=crop", // Fries
  "https://images.unsplash.com/photo-1594212691516-436f54c9351e?w=800&h=800&fit=crop", // Wrap/roll
  "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=800&h=800&fit=crop", // Burger side
  "https://images.unsplash.com/photo-1625938144755-652e08e359b7?w=800&h=800&fit=crop", // Detail shot
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
          {feedImages.map((src, idx) => (
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
                src={src} 
                alt="Instagram feed item" 
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
