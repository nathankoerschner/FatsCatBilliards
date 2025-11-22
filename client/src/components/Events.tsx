import { Calendar, Mic, Shield } from "lucide-react";
import crowdImg from "@assets/generated_images/energetic_crowd_watching_tournament.png";

export default function Events() {
  const events = [
    {
      title: "APA League Night",
      date: "Mondays & Wednesdays",
      desc: "Join the best league in Asheville. 8-ball and 9-ball formats available.",
      icon: Calendar,
      color: "text-primary"
    },
    {
      title: "Karaoke & DJ",
      date: "Friday & Saturday Nights",
      desc: "Sing your heart out or enjoy the mix. Late night food menu available.",
      icon: Mic,
      color: "text-accent"
    },
    {
      title: "UFC Watch Parties",
      date: "Select Saturdays",
      desc: "Catch every fight on our massive HD projectors. No cover for most events.",
      icon: Shield,
      color: "text-red-500"
    }
  ];

  return (
    <section id="events" className="py-20 bg-card/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${crowdImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">EVENTS & <span className="text-primary">TOURNAMENTS</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">There's always something happening at Fat Cat's. Check out our weekly schedule.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((e, i) => (
            <div key={i} className="group bg-background/80 backdrop-blur p-8 rounded-xl border border-border hover:border-primary/50 transition-all hover:-translate-y-1 duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
              
              <div className={`w-12 h-12 rounded-full bg-card flex items-center justify-center mb-6 ${e.color} border border-border group-hover:scale-110 transition-transform`}>
                <e.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-2xl font-heading font-bold mb-2 text-white">{e.title}</h3>
              <p className="text-primary font-medium mb-4 uppercase tracking-wider text-sm">{e.date}</p>
              <p className="text-muted-foreground text-sm">{e.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-background/50 backdrop-blur rounded-2xl border border-border flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-left">
            <h3 className="text-2xl font-heading font-bold text-white mb-2">Watch Live Matches</h3>
            <p className="text-muted-foreground">We stream major tournaments and league finals on Facebook Live.</p>
          </div>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="bg-[#1877F2] hover:bg-[#1877F2]/90 text-white px-6 py-3 rounded-lg font-bold uppercase text-sm tracking-wide transition-colors">
            Watch on Facebook
          </a>
        </div>
      </div>
    </section>
  );
}
