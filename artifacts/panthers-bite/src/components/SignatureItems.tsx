import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { triggerOrderModal } from "@/hooks/use-order-modal";

const items = [
  {
    id: "spicy-2x",
    name: "Spicy 2X Burger",
    description: "Double smashed patties, melted pepper jack, fresh jalapeños, and our blazing hot panther sauce on a toasted brioche.",
    image: "images/spicy-burger.png",
    price: "₹349",
    tag: "Most ordered"
  },
  {
    id: "classic-smash",
    name: "Classic Panther Smash",
    description: "The OG. Double beef, double american cheese, house pickles, diced onions, and classic sauce. Pure perfection.",
    image: "images/classic-burger.png",
    price: "₹299",
    tag: "The original"
  },
  {
    id: "beast-fries",
    name: "Loaded Beast Fries",
    description: "A ridiculous portion of crinkle cuts absolutely buried in molten cheese sauce, seasoned ground beef, and scallions.",
    image: "images/loaded-fries.png",
    price: "₹249",
    tag: "No sharing allowed"
  }
];

export function SignatureItems() {
  return (
    <section id="signature" className="py-16 sm:py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 sm:mb-16 gap-4 sm:gap-6"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Fan favourites</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display text-foreground mb-4">Signature Hits</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#E94E77] to-[#FF8FB1] rounded-full" />
          </div>
          <Button onClick={triggerOrderModal} variant="outline" className="shrink-0">View Full Menu</Button>
        </motion.div>

        <div className="space-y-16 sm:space-y-20 md:space-y-28">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16 group`}
            >
              <div className="w-full md:w-1/2 relative">
                <div className="absolute inset-0 bg-[#E94E77]/20 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img
                  src={`${import.meta.env.BASE_URL}${item.image}`}
                  alt={item.name}
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto aspect-square object-cover rounded-2xl relative z-10 shadow-2xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="w-full md:w-1/2 text-center md:text-left">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary/80 bg-[#E94E77]/10 border border-[#E94E77]/20 px-3 py-1 rounded-full mb-3">
                  {item.tag}
                </span>
                <div className="text-primary font-display text-xl sm:text-2xl mb-2">{item.price}</div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-display text-foreground mb-4 uppercase">{item.name}</h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto md:mx-0">
                  {item.description}
                </p>
                <Button onClick={triggerOrderModal}>
                  Add to Order
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
