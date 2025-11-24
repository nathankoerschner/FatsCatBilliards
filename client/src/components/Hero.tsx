import { Button } from "@/components/ui/button";
import heroBg from "@assets/generated_images/cinematic_pool_hall_interior.png";
import { ArrowRight, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 text-center">
        <div className="animate-in fade-in zoom-in duration-1000">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-none drop-shadow-2xl">
            ASHEVILLE'S HOME FOR <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300">POOL & GOOD TIMES</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto font-light">
            Premier tables, cold drinks, great food, and the best league action in Western NC.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 h-auto rounded-full shadow-[0_0_20px_rgba(33,168,224,0.5)] hover:shadow-[0_0_30px_rgba(33,168,224,0.7)] transition-all">
              View Menu
            </Button>
            
            <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-6 h-auto rounded-full">
              <ArrowRight className="w-5 h-5 mr-2" />
              See Leagues
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
