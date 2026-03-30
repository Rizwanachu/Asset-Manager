import { MessageCircle, ShoppingBag } from "lucide-react";
import { triggerOrderModal } from "@/hooks/use-order-modal";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-3 sm:gap-4">

      {/* Order Now Button — with pulse ring */}
      <div className="relative">
        <span className="absolute inset-0 rounded-full bg-[#E94E77] animate-ping opacity-30 pointer-events-none" />
        <button
          onClick={triggerOrderModal}
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full btn-gradient text-white flex items-center justify-center shadow-[0_0_25px_rgba(233,78,119,0.5)] hover:shadow-[0_0_40px_rgba(233,78,119,0.7)] hover:scale-110 active:scale-95 transition-all duration-300 group"
        >
          <ShoppingBag className="w-6 h-6 sm:w-7 sm:h-7" />
          <span className="absolute right-full mr-3 sm:mr-4 bg-background border border-white/10 text-foreground text-xs sm:text-sm font-bold uppercase tracking-wider px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            Order Now
          </span>
        </button>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919947178091"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform duration-300 group relative"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
        <span className="absolute right-full mr-3 sm:mr-4 bg-background border border-white/10 text-foreground text-xs sm:text-sm font-bold uppercase tracking-wider px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          WhatsApp Us
        </span>
      </a>

    </div>
  );
}
