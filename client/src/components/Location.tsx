import { MapPin, Clock, Phone, Mail } from "lucide-react";

export default function Location() {
  return (
    <section id="location" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 rounded-3xl overflow-hidden bg-background border border-border">
          {/* Info */}
          <div className="p-8 md:p-12 space-y-8">
            <h2 className="text-4xl font-bold text-white mb-6">LOCATION & <span className="text-primary">HOURS</span></h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading text-xl font-bold text-white">Address</h3>
                  <p className="text-muted-foreground">2345 Hendersonville Rd<br/>Arden, NC 28704</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading text-xl font-bold text-white">Phone</h3>
                  <a href="tel:+18286810555" className="text-muted-foreground hover:text-white transition-colors cursor-pointer">(828) 681-0555</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading text-xl font-bold text-white mb-2">Hours</h3>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-muted-foreground">
                    <span>Monday - Thursday</span>
                    <span className="text-white">11:30 AM - 2:00 AM</span>
                    <span>Friday</span>
                    <span className="text-white">11:30 AM - 12:00 AM</span>
                    <span>Saturday</span>
                    <span className="text-white">11:30 AM - 12:00 AM</span>
                    <span>Sunday</span>
                    <span className="text-white">12:00 PM - 2:00 AM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[400px] lg:h-full bg-muted relative">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3246.337882156788!2d-82.5365!3d35.4878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8859bd6d5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2s2345%20Hendersonville%20Rd%2C%20Arden%2C%20NC%2028704!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
               width="100%" 
               height="100%" 
               style={{border:0, filter: 'grayscale(100%) invert(90%) contrast(85%)'}} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
