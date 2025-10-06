import { Card } from "@/components/ui/card";
import { Quote, Star, Award, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ranganathan Iyer",
      location: "Andheri, Mumbai",
      text: "SingleDebt helped me consolidate my ₹8 lakhs debt into a single manageable EMI. No more harassment calls! Highly recommended for anyone in Mumbai struggling with debt.",
      rating: 5,
      debt: "₹8L"
    },
    {
      name: "Priya Sharma",
      location: "Bandra, Mumbai",
      text: "I was drowning in credit card debt and personal loans. The team at SingleDebt negotiated with my creditors and reduced my monthly payments by 45%. Life-changing!",
      rating: 5,
      debt: "₹12L"
    },
    {
      name: "Amit Patel",
      location: "Borivali, Mumbai",
      text: "Professional service, compassionate team, and results that speak for themselves. Within 6 months, I'm on track to being debt-free. Thank you SingleDebt!",
      rating: 5,
      debt: "₹5.5L"
    }
  ];

  const trustSignals = [
    {
      icon: Award,
      title: "Award Winning",
      description: "Best Debt Management Company in India & UAE 2023"
    },
    {
      icon: MapPin,
      title: "Mumbai Office",
      description: "Head office in Andheri. FREE consultation daily 9:30 AM - 6 PM"
    },
    {
      icon: Star,
      title: "Multi-lingual",
      description: "We speak Marathi, Hindi, Tamil, Telugu & English"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Mumbai <span className="text-primary">Trusts</span> SingleDebt
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real stories from real people who achieved financial freedom with our help
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden h-full">
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="w-16 h-16 text-primary" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {testimonial.location}
                    </p>
                  </div>
                  <div className="bg-accent px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-primary">{testimonial.debt}</span>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">"{testimonial.text}"</p>
              </div>
            </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {trustSignals.map((signal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-8 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 bg-accent border-2 border-primary/20 h-full">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <signal.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{signal.title}</h3>
              <p className="text-muted-foreground">{signal.description}</p>
            </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="inline-block bg-primary text-primary-foreground p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-2">Break Free from Debt in Mumbai—TODAY!</h3>
            <p className="text-lg opacity-90">Trusted by customers with 94% satisfaction rate</p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
