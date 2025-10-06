import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const cities = [
    "Mumbai", "Delhi", "Bangalore", "Kolkata", 
    "Pune", "Hyderabad", "Ahmedabad", "Chennai", 
    "Ghaziabad", "Noida"
  ];

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">SingleDebt</h3>
            <p className="text-sm opacity-80 mb-4">
              India's leading debt management company helping thousands achieve financial freedom through expert Debt Management Plans.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services In</h4>
            <div className="grid grid-cols-2 gap-2 text-sm opacity-80">
              {cities.slice(0, 6).map((city) => (
                <a key={city} href="#" className="hover:text-primary transition-colors">
                  {city}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>📞 +91 730 431 2983</li>
              <li>📞 022 6876 2605</li>
              <li>✉️ info@singledebt.in</li>
              <li>📍 Andheri, Mumbai</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} SingleDebt. All rights reserved. | Best Debt Management Company in India & UAE 2023</p>
          <p className="mt-2">We provide legal advice related to debts. This is not a loan service.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
