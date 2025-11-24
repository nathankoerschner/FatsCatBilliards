import { Target, Trophy, Beer, Tv } from "lucide-react";

export default function About() {
  const features = [
    { icon: Target, label: "Diamond Tables" },
    { icon: Trophy, label: "Leagues" },
    { icon: Beer, label: "Bar & Grill" },
    { icon: Tv, label: "UFC Fights" },
  ];

  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="bg-[#4CA6CB] relative rounded-[4rem] overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-[#4CA6CB] via-[#6bc0e0] to-[#4CA6CB] opacity-90" />
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)`,
            backgroundSize: '100% 100%'
          }} />
          <div className="relative z-10 py-20 px-12 md:px-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              MORE THAN JUST A <span className="text-[#FF8C00]">POOL HALL</span>
            </h2>
            <div className="w-20 h-1 bg-white rounded-full" />
            <p className="text-lg text-black leading-relaxed font-medium">
              Fat Cat's Billiards is Asheville's premier pool hall and grill — offering a league-level experience with a relaxed, neighborhood vibe. Whether you're a league player looking for action on our Diamond tables, or just hanging out for wings and sports, we've got your spot.
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
              src="/fatcats.png"
              alt="Fat Cat Mascot"
              className="mx-auto max-h-[400px] object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
}
