import { Instagram, ExternalLink } from "lucide-react";
import logoImg from "@assets/587607695_17853646149595354_2885004091992565856_n_(1)_1774904811848.png";

export function Footer() {
  return (
    <footer className="bg-background pt-16 sm:pt-20 pb-10 border-t border-[#E94E77]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Prominent order CTA */}
        <div className="mb-14 sm:mb-16 p-6 sm:p-8 rounded-3xl border border-[#E94E77]/20 bg-[#E94E77]/5 flex flex-col sm:flex-row items-center justify-between gap-6 box-glow">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-1">Craving something?</p>
            <h3 className="text-2xl sm:text-3xl font-display text-foreground">Order right now</h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href="https://www.zomato.com/kochi/panthers-bite-thevara"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white font-bold uppercase tracking-wider text-sm transition-all hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:-translate-y-0.5"
            >
              Order on Zomato
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="https://www.swiggy.com/city/kochi/panthers-bite-panampilly-nagar-rest1271430"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase tracking-wider text-sm transition-all hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:-translate-y-0.5"
            >
              Order on Swiggy
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-12 sm:mb-16">

          <div className="sm:col-span-2">
            <div className="flex items-center mb-6">
              <img src={logoImg} alt="Panther's Bite" className="h-20 sm:h-24 w-auto object-contain" />
            </div>
            <p className="text-muted-foreground max-w-sm leading-relaxed mb-8">
              Kochi's go-to spot for loaded fast food, burgers, fries, chicken, and combos. Open till midnight.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.instagram.com/panthersbite/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-black transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.zomato.com/kochi/panthers-bite-thevara" target="_blank" rel="noopener noreferrer" className="h-12 px-4 rounded-full bg-secondary flex items-center justify-center text-sm font-bold uppercase tracking-wider text-foreground hover:bg-red-500 transition-colors">
                Zomato
              </a>
              <a href="https://www.swiggy.com/city/kochi/panthers-bite-panampilly-nagar-rest1271430" target="_blank" rel="noopener noreferrer" className="h-12 px-4 rounded-full bg-secondary flex items-center justify-center text-sm font-bold uppercase tracking-wider text-foreground hover:bg-orange-500 transition-colors">
                Swiggy
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-xl uppercase mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#menu" className="text-muted-foreground hover:text-primary transition-colors">Menu</a></li>
              <li><a href="#combos" className="text-muted-foreground hover:text-primary transition-colors">Best Combos</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">Our Story</a></li>
              <li><a href="#location" className="text-muted-foreground hover:text-primary transition-colors">Location</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl uppercase mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="text-muted-foreground">Urban Flavour Food Street,<br/>Cheriyakadavanthra,<br/>Kochi, Kerala</li>
              <li><a href="tel:+919947178091" className="text-muted-foreground hover:text-primary transition-colors">+91 99471 78091</a></li>
              <li className="text-muted-foreground mt-2">Daily: 4 PM – 12 AM</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Panther's Bite. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
