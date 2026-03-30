import { MessageCircle, ShoppingBag } from "lucide-react";
import { triggerOrderModal } from "@/hooks/use-order-modal";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      
      {/* Order Now Button */}
      <button
        onClick={triggerOrderModal}
        className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-[0_0_20px_rgba(157,73,117,0.4)] hover:scale-110 transition-transform duration-300 group relative"
      >
        <ShoppingBag className="w-6 h-6" />
        <span className="absolute right-full mr-4 bg-background border border-white/10 text-foreground text-sm font-bold uppercase tracking-wider px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Order Now
        </span>
      </button>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 group relative"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-full mr-4 bg-background border border-white/10 text-foreground text-sm font-bold uppercase tracking-wider px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          WhatsApp Us
        </span>
      </a>

    </div>
  );
}
