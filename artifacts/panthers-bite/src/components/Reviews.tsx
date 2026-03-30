import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    text: "The food was absolutely insane. Portions were solid and the flavors were on point. 10/10 would recommend!",
    author: "Rahul K.",
  },
  {
    id: 2,
    text: "Spicy 2X burger is a MUST try. The heat level is perfect, and it's absolutely loaded.",
    author: "Sneha M.",
  },
  {
    id: 3,
    text: "Best burgers in Kochi, hands down. Tried the loaded fries too - life changing.",
    author: "Arjun P.",
  },
  {
    id: 4,
    text: "Perfect late night spot, open till midnight! The vibe is great and food is even better.",
    author: "Priya S.",
  }
];

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section id="reviews" className="py-24 bg-secondary/50 border-y border-white/5 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        
        <Quote className="w-16 h-16 text-primary/20 mx-auto mb-8" />
        
        <h2 className="text-4xl md:text-5xl font-display text-foreground mb-12">What They Say</h2>

        <div className="relative h-[250px] md:h-[200px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
              className="absolute w-full px-12"
            >
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary text-2xl">★</span>
                ))}
              </div>
              <p className="text-xl md:text-2xl text-foreground font-medium italic mb-6 leading-relaxed">
                "{reviews[currentIndex].text}"
              </p>
              <p className="text-primary font-display tracking-widest uppercase">
                - {reviews[currentIndex].author}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button 
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:bg-white/5 hover:text-primary transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="flex gap-2">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-8 bg-primary' : 'bg-white/20'
                }`}
              />
            ))}
          </div>

          <button 
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:bg-white/5 hover:text-primary transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

      </div>
    </section>
  );
}
