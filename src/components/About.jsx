import { Card } from "@/components/ui/card";

import { Shield, TrendingDown, Users, Award, CreditCardIcon, Tally5Icon, ChartNoAxesCombinedIcon } from "lucide-react";

import { motion } from "framer-motion";



const About = () => {

  const features = [

    {

      icon: CreditCardIcon,

      title: "Consolidate Debts",

      description: "Multiple unsecured loans like credit card debt, personal loans, and EMIs into one low-interest monthly repayment plan, negotiated with your creditors."

    },

    {

      icon: Shield,

      title: "Harassment Relief",

      description: "Protection from recovery agents including calls, home/work visits, and legal notices."

    },

    {

      icon: ChartNoAxesCombinedIcon,

      title: "Rebuild Credit Scores",

      description: "Follow RBI guidelines while managing your debt to improve your credit standing."

    },

    // {

    //   icon: Award,

    //   title: "Proven Track Record",

    //   description: "2,300+ Mumbaikars and 50,000+ clients all India escaped debt traps with our DMP in 2023."

    // }

  ];



  return (

    <section id="services" className="py-20 bg-background">

      <div className="container mx-auto px-4">

        <motion.div 

          className="text-center mb-16 space-y-4"

          initial={{ opacity: 0, y: 30 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true }}

          transition={{ duration: 0.5 }}

        >

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">

            What is a <span className="text-primary">Debt Management Plan (DMP)?</span>

          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">

            A Debt Management Plan (DMP) is a tailored debt solution designed to help you regain control of your finances and achieve debt-free living.

          </p>

        </motion.div>



        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

          {features.map((feature, index) => (

            <motion.div

              key={index}

              initial={{ opacity: 0, y: 30 }}

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true }}

              transition={{ duration: 0.5, delay: index * 0.1 }}

            >

              <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border-border h-full">

              <div className="flex flex-col items-center text-center space-y-4">

                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">

                  <feature.icon className="w-8 h-8 text-primary" />

                </div>

                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>

                <p className="text-muted-foreground">{feature.description}</p>

              </div>

            </Card>

            </motion.div>

          ))}

        </div>



        <motion.div

          initial={{ opacity: 0, y: 30 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true }}

          transition={{ duration: 0.5 }}

        >

          <Card className="bg-accent border-l-4 border-l-primary p-8">

          <div className="flex items-start space-x-4">

            <div className="flex-shrink-0">

              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">

                <Users className="w-6 h-6 text-primary-foreground" />

              </div>

            </div>

            <div>

              <h3 className="text-2xl font-bold text-foreground mb-2">Did You Know?</h3>

              <p className="text-lg text-foreground">

                <strong className="text-primary">2,300+</strong> Mumbaikars and <strong className="text-primary">50,000+</strong> clients all India escaped debt traps with our DMP in 2023—just like Ranganathan Iyer from Andheri, Mumbai.

              </p>

            </div>

          </div>

              <p className="text-lg text-foreground mt-4 text-center">

                Watch his story:{" "}

                <a

                  href="https://youtu.be/i1o0xXZhxaM?si=u7NwmyYWc4NuwQg1" 

                  target="_blank"

                  rel="noopener noreferrer"

                  className="text-primary font-semibold hover:underline"

                >

                  Ranganathan Iyer’s Debt-Free Journey

                </a>

              </p>

        </Card>

        </motion.div>

      </div>

    </section>

  );

};



export default About;
