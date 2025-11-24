import { Star } from "lucide-react";

export default function Reviews() {
  const reviews = [
    { name: "Mike R.", text: "Best tables in Asheville, hands down. The Diamond tables play fast and true. Great beer selection too.", stars: 5 },
    { name: "Sarah J.", text: "Came for the sports, stayed for the wings. The atmosphere is electric on Friday nights!", stars: 5 },
    { name: "David B.", text: "Clean place, friendly staff, and plenty of tables. The weekly league is run very professionally.", stars: 5 },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
           <div className="flex gap-1 mb-4">
             {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 fill-accent text-accent" />)}
           </div>
           <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
             94% RECOMMEND <span className="text-muted-foreground text-2xl block md:inline ml-2 font-normal">(48+ Reviews)</span>
           </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-card p-8 rounded-2xl border border-border shadow-lg relative">
              <div className="text-4xl text-primary/20 font-serif absolute top-4 left-4">"</div>
              <p className="text-lg text-gray-300 mb-6 relative z-10 italic">
                {r.text}
              </p>
              <div className="flex items-center justify-between border-t border-border/50 pt-4">
                <span className="font-bold text-white font-heading text-xl">{r.name}</span>
                <div className="flex gap-0.5">
                  {[...Array(r.stars)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
