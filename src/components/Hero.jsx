import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import heroImage from "@/assets/mumbai-hero.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Stressed by Debt in <span className="text-primary">Mumbai?</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              India's 1st & Leading Debt Management Company is Here!
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Mumbai's fast-paced lifestyle often leads to financial and mental stress—multiple EMIs, harassing creditor calls, and sleepless nights.
            </p>
            
            <div className="bg-card rounded-lg p-6 space-y-4 shadow-lg border border-border">
              <h3 className="font-semibold text-lg">SingleDebt specializes in Debt Management Plans (DMP), helping you regain control with:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2 text-xl">✓</span>
                  <div>
                    <strong>Local Expertise:</strong> Mumbai-based financial advisors & legal teams.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 text-xl">✓</span>
                  <div>
                    <strong>Reduced EMIs:</strong> Consolidate multiple loans into a single affordable EMI repayment plan tailored to your income.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 text-xl">✓</span>
                  <div>
                    <strong>Legal Protection:</strong> Shield yourself from recovery agent harassment (calls, home/work visits, legal notices).
                  </div>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get a FREE Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                onClick={() => window.open('https://www.google.com/maps', '_blank')}
              >
                <MapPin className="w-5 h-5 mr-2" />
                Visit Our Office
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
