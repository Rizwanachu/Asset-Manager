import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

export function Location() {
  return (
    <section id="location" className="py-24 bg-secondary/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-display text-foreground mb-4">Find Us</h2>
            <div className="w-16 h-1.5 bg-primary rounded-full mb-10" />
            
            <div className="space-y-8">
              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-full bg-background border border-white/10 flex items-center justify-center shrink-0 group-hover:border-primary transition-colors">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-display uppercase mb-2">Location</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Urban Flavour Food Street,<br/>
                    Cheriyakadavanthra,<br/>
                    Kochi, Kerala
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-full bg-background border border-white/10 flex items-center justify-center shrink-0 group-hover:border-primary transition-colors">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-display uppercase mb-2">Hours</h4>
                  <p className="text-muted-foreground">
                    Monday - Sunday<br/>
                    <span className="text-foreground font-bold">12:00 PM - 12:00 AM</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-full bg-background border border-white/10 flex items-center justify-center shrink-0 group-hover:border-primary transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-display uppercase mb-2">Hit Us Up</h4>
                  <a href="tel:+919947178091" className="text-xl text-muted-foreground hover:text-primary transition-colors">
                    +91 99471 78091
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-[400px] lg:h-[500px] rounded-3xl overflow-hidden border border-white/10 relative group"
          >
            {/* Overlay to prevent accidental map scrolling while page scrolling */}
            <div className="absolute inset-0 bg-transparent z-10" style={{ pointerEvents: 'none' }} />
            
            {/* Placeholder map using a dark theme Google Maps iframe embed */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.585721867168!2d76.2995!3d9.9685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTgnMDYuNiJOIDc2wrAxNyc1OC4yIkU!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(120%)' }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            />
            
            <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-md p-4 rounded-xl border border-white/10 z-20 flex justify-between items-center pointer-events-auto">
              <span className="font-bold text-sm uppercase tracking-wider">Get Directions</span>
              <a 
                href="https://maps.google.com/?q=Kochi,Kerala" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 bg-primary text-black rounded-lg flex items-center justify-center hover:scale-105 transition-transform"
              >
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
