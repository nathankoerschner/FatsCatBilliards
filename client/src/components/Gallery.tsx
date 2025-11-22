import heroBg from "@assets/generated_images/cinematic_pool_hall_interior.png";
import crowdImg from "@assets/generated_images/energetic_crowd_watching_tournament.png";

export default function Gallery() {
  const images = [
    heroBg,
    crowdImg,
    heroBg, // Placeholder for real images
    crowdImg,
    heroBg,
    crowdImg,
  ];

  return (
    <section id="gallery" className="py-20 bg-card/20">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center">
          THE <span className="text-primary">ATMOSPHERE</span>
        </h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 auto-rows-[200px]">
        {images.map((src, i) => (
          <div 
            key={i} 
            className={`relative group overflow-hidden border border-border/20 ${i === 0 || i === 3 ? 'md:col-span-2' : ''}`}
          >
            <img 
              src={src} 
              alt="Fat Cats Billiards" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
               <span className="text-white font-heading font-bold text-xl tracking-widest uppercase border-2 border-white px-4 py-2">View</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
