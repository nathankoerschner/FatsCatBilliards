import { Target, Trophy, Music, Beer, Tv } from "lucide-react";

export default function About() {
  const features = [
    { icon: Target, label: "Diamond Tables" },
    { icon: Trophy, label: "Tournaments" },
    { icon: Beer, label: "Bar & Grill" },
    { icon: Music, label: "Live Music" },
    { icon: Tv, label: "UFC Fights" },
  ];

  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              MORE THAN JUST A <span className="text-primary">POOL HALL</span>
            </h2>
            <div className="w-20 h-1 bg-accent rounded-full" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Fat Cat’s Billiards is Asheville’s premier pool hall and grill — offering a tournament-level experience with a relaxed, neighborhood vibe. Whether you're a league player looking for action on our 7ft and 9ft Diamond tables, or just hanging out for wings and karaoke, we've got your spot.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              {features.map((f, i) => (
                <div key={i} className="flex flex-col items-center p-4 bg-card/50 rounded-lg border border-border/50 hover:border-primary/50 transition-colors">
                  <f.icon className="w-8 h-8 text-primary mb-2" />
                  <span className="font-heading uppercase text-sm tracking-wide">{f.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl blur-2xl -z-10" />
            <img 
              src="/attached_assets/fatcats_1763819263557.jpg" 
              alt="Fat Cat Mascot" 
              className="mx-auto max-h-[400px] object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
