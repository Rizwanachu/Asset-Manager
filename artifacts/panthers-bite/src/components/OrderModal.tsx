import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { OPEN_ORDER_MODAL_EVENT } from "@/hooks/use-order-modal";

export function OrderModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    };
    
    window.addEventListener(OPEN_ORDER_MODAL_EVENT, handleOpen);
    return () => window.removeEventListener(OPEN_ORDER_MODAL_EVENT, handleOpen);
  }, []);

  const close = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-card border-2 border-primary/50 rounded-3xl p-8 shadow-[0_0_50px_rgba(255,215,0,0.15)]"
          >
            <button 
              onClick={close}
              className="absolute top-4 right-4 w-10 h-10 bg-background rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-8">
              <h3 className="text-3xl font-display uppercase tracking-wider mb-2">Order Online</h3>
              <p className="text-muted-foreground">Choose your preferred delivery partner.</p>
            </div>

            <div className="space-y-4">
              <a 
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-6 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 rounded-2xl transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center font-display text-white text-xl">Z</div>
                  <span className="font-display text-2xl uppercase tracking-wider text-white group-hover:text-red-400 transition-colors">Zomato</span>
                </div>
                <ExternalLink className="w-6 h-6 text-red-500/50 group-hover:text-red-500 transition-colors" />
              </a>

              <a 
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-6 bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 rounded-2xl transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center font-display text-white text-xl">S</div>
                  <span className="font-display text-2xl uppercase tracking-wider text-white group-hover:text-orange-400 transition-colors">Swiggy</span>
                </div>
                <ExternalLink className="w-6 h-6 text-orange-500/50 group-hover:text-orange-500 transition-colors" />
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <p className="text-sm text-muted-foreground mb-4">Or pickup from store directly</p>
              <a href="tel:+919999999999" className="text-primary font-bold tracking-wider hover:underline">
                Call +91 99999 99999
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
