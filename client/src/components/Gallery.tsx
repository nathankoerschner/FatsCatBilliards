import poolBallsImg from "@assets/generated_images/close_up_of_pool_balls_on_blue_felt.png";
import dartsImg from "@assets/generated_images/close_up_of_dart_board_with_darts.png";
import cornholeImg from "@assets/generated_images/close_up_of_cornhole_bag_on_board.png";

export default function Gallery() {
  const mainImage = "/attached_assets/fatcats_1764013548845.webp";

  return (
    <section id="gallery" className="py-20 bg-card/20">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          THE <span className="text-primary">ATMOSPHERE</span>
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[300px]">
          
          {/* Main Atmosphere Shot - Spans 2 cols on large screens */}
          <div className="lg:col-span-2 lg:row-span-2 relative group overflow-hidden rounded-2xl border border-border/20 shadow-2xl">
            <img 
              src={mainImage} 
              alt="Fat Cats Atmosphere" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-wide">Tournament Night</h3>
              <p className="text-primary font-medium">Live Action</p>
            </div>
          </div>

          {/* Close Ups */}
          <div className="relative group overflow-hidden rounded-2xl border border-border/20 shadow-xl">
            <img 
              src={poolBallsImg} 
              alt="Pool Table Detail" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
          </div>

          <div className="relative group overflow-hidden rounded-2xl border border-border/20 shadow-xl">
            <img 
              src={dartsImg} 
              alt="Darts Area" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
          </div>

          <div className="relative group overflow-hidden rounded-2xl border border-border/20 shadow-xl">
            <img 
              src={cornholeImg} 
              alt="Cornhole Boards" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
          </div>

        </div>
      </div>
    </section>
  );
}
