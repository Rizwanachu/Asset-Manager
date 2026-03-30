import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    text: "The food was absolutely insane. Portions were solid and the flavors were on point. 10/10 would recommend!",
    author: "Rahul K.",
    rating: 5
  },
  {
    id: 2,
    text: "Spicy 2X burger is a MUST try. The heat level is perfect, and it's absolutely loaded.",
    author: "Sneha M.",
    rating: 5
  },
  {
    id: 3,
    text: "Best burgers in Kochi, hands down. Tried the loaded fries too - life changing.",
    author: "Arjun P.",
    rating: 5
  },
  {
    id: 4,
    text: "Perfect late night spot, open till midnight! The vibe is great and food is even better.",
    author: "Priya S.",
    rating: 5
  }
];

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

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
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-secondary/50 border-y border-[#E94E77]/10 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">

        <Quote className="w-12 h-12 sm:w-16 sm:h-16 text-primary/20 mx-auto mb-4" />

        {/* "Loved by Kochi" label */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E94E77]/10 border border-[#E94E77]/25 mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Loved by Kochi</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-foreground mb-10 sm:mb-12">What They Say</h2>

        {/* Overall rating */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="text-3xl font-display text-foreground">4.9</span>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-primary text-xl">★</span>
            ))}
          </div>
          <span className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">on Zomato & Swiggy</span>
        </div>

        <div className="relative min-h-[220px] sm:min-h-[200px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
              className="absolute w-full px-4 sm:px-12"
            >
              <p className="text-lg sm:text-xl md:text-2xl text-foreground font-medium italic mb-5 sm:mb-6 leading-relaxed">
                "{reviews[currentIndex].text}"
              </p>
              <p className="text-primary font-display tracking-widest uppercase">
                — {reviews[currentIndex].author}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={handlePrev}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:bg-[#E94E77]/10 hover:text-primary hover:border-[#E94E77]/30 transition-all"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div className="flex gap-2">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-white/20'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:bg-[#E94E77]/10 hover:text-primary hover:border-[#E94E77]/30 transition-all"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

      </div>
    </section>
  );
}
