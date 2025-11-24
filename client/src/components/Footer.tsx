import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="font-heading text-2xl font-bold text-white uppercase tracking-wider">
              Fat Cat's <span className="text-primary">Billiards</span>
            </h2>
            <p className="text-muted-foreground text-sm mt-2">© {new Date().getFullYear()} Fat Cat's Billiards. All rights reserved.</p>
          </div>

          {/* Links */}
          <div className="flex gap-8">
            <a href="#gallery" className="text-muted-foreground hover:text-primary transition-colors uppercase text-sm font-bold">Photos</a>
            <a href="#location" className="text-muted-foreground hover:text-primary transition-colors uppercase text-sm font-bold">Contact</a>
          </div>

          {/* Social */}
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors border border-border">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-white hover:bg-accent hover:text-white transition-colors border border-border">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
