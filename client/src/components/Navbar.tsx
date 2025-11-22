import { Link } from "wouter";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur border-b border-border/40">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
            <img 
              src="/attached_assets/fatcats_1763819263557.jpg" 
              alt="Fat Cat's Billiards" 
              className="h-14 w-auto rounded-full border-2 border-primary"
            />
            <span className="hidden md:block font-heading text-2xl font-bold text-foreground uppercase tracking-wider">
              Fat Cat's
              <span className="text-primary ml-1">Billiards</span>
            </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#menu" className="text-foreground/80 hover:text-primary transition-colors font-heading text-lg uppercase">Menu</a>
          <a href="#events" className="text-foreground/80 hover:text-primary transition-colors font-heading text-lg uppercase">Events</a>
          <a href="#gallery" className="text-foreground/80 hover:text-primary transition-colors font-heading text-lg uppercase">Photos</a>
          <a href="#location" className="text-foreground/80 hover:text-primary transition-colors font-heading text-lg uppercase">Contact</a>
          
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wide rounded-full px-6">
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border/40 p-4 flex flex-col gap-4">
          <a href="#menu" className="text-lg font-heading uppercase text-center py-2" onClick={() => setIsOpen(false)}>Menu</a>
          <a href="#events" className="text-lg font-heading uppercase text-center py-2" onClick={() => setIsOpen(false)}>Events</a>
          <a href="#gallery" className="text-lg font-heading uppercase text-center py-2" onClick={() => setIsOpen(false)}>Photos</a>
          <a href="#location" className="text-lg font-heading uppercase text-center py-2" onClick={() => setIsOpen(false)}>Contact</a>
          <Button className="w-full bg-primary text-primary-foreground uppercase font-bold">
            Call (828) 681-0555
          </Button>
        </div>
      )}
    </nav>
  );
}
