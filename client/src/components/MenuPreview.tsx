import { Button } from "@/components/ui/button";
import burgerImg from "@assets/generated_images/appetizing_burger_and_wings.png";

export default function MenuPreview() {
  const items = [
    { name: "Classic Fat Cat Burger", price: "$12", desc: "Half-pound angus beef, cheddar, caramelized onions, house sauce." },
    { name: "Jumbo Wings (10)", price: "$14", desc: "Buffalo, BBQ, Lemon Pepper, or Ghost Pepper. Served with ranch." },
    { name: "Nachos Supreme", price: "$11", desc: "Loaded with queso, jalapenos, salsa, sour cream, and grilled chicken." },
    { name: "Philly Cheesesteak", price: "$13", desc: "Shaved ribeye, peppers, onions, provolone on a hoagie roll." },
  ];

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
             <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-border">
               <img src={burgerImg} alt="Fat Cats Burger" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                 <div className="text-white">
                    <p className="font-heading text-2xl font-bold mb-1">Kitchen Open Late</p>
                    <p className="text-gray-300 text-sm">Full menu available until 1 AM daily.</p>
                 </div>
               </div>
             </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              FUEL YOUR <span className="text-accent">GAME</span>
            </h2>
            <p className="text-muted-foreground">
              We're not just a pool hall — our kitchen serves up Asheville's best bar bites. From massive burgers to crispy wings, we've got the fuel you need to keep playing.
            </p>

            <div className="space-y-4">
              {items.map((item, i) => (
                <div key={i} className="flex justify-between items-start border-b border-border/50 pb-4 group hover:bg-card/30 p-2 rounded transition-colors">
                  <div>
                    <h4 className="text-xl font-heading font-bold text-white group-hover:text-primary transition-colors">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                  <span className="text-accent font-bold font-heading text-xl">{item.price}</span>
                </div>
              ))}
            </div>

            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full md:w-auto font-bold uppercase rounded-full">
              View Full Menu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
