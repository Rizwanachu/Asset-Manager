import { Flame, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Flame className="w-8 h-8 text-primary" />
              <span className="font-display text-3xl tracking-widest text-foreground">
                PANTHER'S BITE
              </span>
            </div>
            <p className="text-muted-foreground max-w-sm leading-relaxed mb-8">
              Kochi's premier destination for bold, unapologetic American-style fast food. Smashed burgers, loaded fries, and intense flavors.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-black transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-black transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="h-12 px-4 rounded-full bg-secondary flex items-center justify-center text-sm font-bold uppercase tracking-wider text-foreground hover:bg-red-500 transition-colors">
                Zomato
              </a>
              <a href="#" className="h-12 px-4 rounded-full bg-secondary flex items-center justify-center text-sm font-bold uppercase tracking-wider text-foreground hover:bg-orange-500 transition-colors">
                Swiggy
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-xl uppercase mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#menu" className="text-muted-foreground hover:text-primary transition-colors">Menu</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">Our Story</a></li>
              <li><a href="#location" className="text-muted-foreground hover:text-primary transition-colors">Location</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl uppercase mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="text-muted-foreground">Urban Flavour Food Street,<br/>Cheriyakadavanthra</li>
              <li><a href="tel:+919999999999" className="text-muted-foreground hover:text-primary transition-colors">+91 99999 99999</a></li>
              <li className="text-muted-foreground mt-4">Daily: 12 PM - 12 AM</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
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
