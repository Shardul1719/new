
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 md:backdrop-blur-sm border-b border-border"
      style={{ transform: "translateZ(0)", willChange: "transform" }}
    >
      <nav className="flex items-center justify-between max-w-[100vw] px-4 py-4 mx-auto">
        
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-primary">SingleDebt</div>
          <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">
            Mumbai
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("services")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="text-foreground hover:text-primary transition-colors"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Contact
          </button>
          <Button
            onClick={() => scrollToSection("contact")}
            size="sm"
            className="bg-primary hover:bg-primary/90"
          >
            <Phone className="w-4 h-4 mr-2" />
            Get Free Consultation
          </Button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-foreground ml-auto pr-1"
          style={{ marginRight: "2px" }}
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 pb-4 space-y-4 animate-fade-in px-4">
          <button
            onClick={() => scrollToSection("services")}
            className="block text-foreground hover:text-primary transition-colors w-full text-left"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="block text-foreground hover:text-primary transition-colors w-full text-left"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="block text-foreground hover:text-primary transition-colors w-full text-left"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="block text-foreground hover:text-primary transition-colors w-full text-left"
          >
            Contact
          </button>
          <Button
            onClick={() => scrollToSection("contact")}
            size="sm"
            className="w-full bg-primary hover:bg-primary/90"
          >
            <Phone className="w-4 h-4 mr-2" />
            Get Free Consultation
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
