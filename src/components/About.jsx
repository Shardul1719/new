"use client";

import React, { useRef } from "react";
import ReactLenis from "lenis/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Shield,
  CreditCardIcon,
  ChartNoAxesCombinedIcon,
  Users,
} from "lucide-react";

/**
 * Character component: animates a single character using scrollYProgress motion value
 * props:
 * - char: single character or space
 * - index, centerIndex
 * - scrollYProgress: motion value from useScroll
 */
const Character = ({ char, index, centerIndex, scrollYProgress }) => {
  const isSpace = char === " ";
  const distanceFromCenter = index - centerIndex;

  // strong 3D motion multipliers
  const x = useTransform(scrollYProgress, [0, 0.6], [
    distanceFromCenter * 160,
    0,
  ]);
  const rotateX = useTransform(scrollYProgress, [0, 0.6], [
    distanceFromCenter * 60,
    0,
  ]);
  const y = useTransform(scrollYProgress, [0, 0.6], [
    Math.abs(distanceFromCenter) * 30,
    0,
  ]);

  return (
    <motion.span
      className={`inline-block ${isSpace ? "w-3" : ""}`}
      style={{
        x,
        rotateX,
        y,
        display: "inline-block",
      }}
    >
      {char}
    </motion.span>
  );
};

/**
 * CardAnimated: animates each feature card with scroll progress
 * props:
 * - index, total, scrollYProgressCards
 * - children: card content
 */
const CardAnimated = ({ index, total, scrollYProgressCards, children }) => {
  const centerIndex = Math.floor(total / 2);
  const distance = index - centerIndex;

  // strong card motion
  const x = useTransform(scrollYProgressCards, [0, 0.6], [
    distance * 120,
    0,
  ]);
  const rotate = useTransform(scrollYProgressCards, [0, 0.6], [
    distance * 14,
    0,
  ]);
  const y = useTransform(scrollYProgressCards, [0, 0.6], [
    Math.abs(distance) * 20,
    0,
  ]);
  const scale = useTransform(scrollYProgressCards, [0, 0.6], [0.85, 1]);

  return (
    <motion.div
      style={{
        x,
        rotate,
        y,
        scale,
        transformOrigin: "center",
      }}
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  const features = [
    {
      icon: CreditCardIcon,
      title: "Consolidate Debts",
      description:
        "Multiple unsecured loans like credit card debt, personal loans, and EMIs into one low-interest monthly repayment plan, negotiated with your creditors.",
    },
    {
      icon: Shield,
      title: "Harassment Relief",
      description:
        "Protection from recovery agents including calls, home/work visits, and legal notices.",
    },
    {
      icon: ChartNoAxesCombinedIcon,
      title: "Rebuild Credit Scores",
      description:
        "Follow RBI guidelines while managing your debt to improve your credit standing.",
    },
  ];

  // refs and scroll motion values
  const headingRef = useRef(null);
  const cardsRef = useRef(null);
  const bottomRef = useRef(null);

  const { scrollYProgress: headingProgress } = useScroll({
    target: headingRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: cardsProgress } = useScroll({
    target: cardsRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: bottomProgress } = useScroll({
    target: bottomRef,
    offset: ["start end", "end start"],
  });

  // heading text broken into characters
  const headingText = "What is a Debt Management Plan (DMP)?";
  const characters = headingText.split("");
  const centerIndex = Math.floor(characters.length / 2);

  return (
    <ReactLenis root>
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Animated Heading */}
          <div ref={headingRef} className="text-center mb-16 space-y-4">
            <div
              className="mx-auto max-w-5xl"
              style={{ perspective: "900px" }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                <span className="inline-block">
                  {characters.map((char, idx) => (
                    <Character
                      key={idx}
                      char={char}
                      index={idx}
                      centerIndex={centerIndex}
                      scrollYProgress={headingProgress}
                    />
                  ))}
                </span>
              </h2>
            </div>

            <motion.p
              className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4"
              initial={{ opacity: 0, y: 30, rotateX: 10 }}
              style={{
                // subtle 3d entry tied to heading progress
                transformStyle: "preserve-3d",
                perspective: 800,
              }}
              animate={{

              }}
            >
              A Debt Management Plan (DMP) is a tailored debt solution designed to
              help you regain control of your finances and achieve debt-free
              living.
            </motion.p>
          </div>

          {/* Animated Cards Grid */}
          <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <CardAnimated
                key={index}
                index={index}
                total={features.length}
                scrollYProgressCards={cardsProgress}
              >
                <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border-border h-full">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                      {/* animate icon inside slightly */}
                      <motion.div
                        style={{
                          transformOrigin: "center",
                        }}
                        animate={{
                          // small breathing animation, independent of scroll
                        }}
                      >
                        <feature.icon className="w-8 h-8 text-primary" />
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </Card>
              </CardAnimated>
            ))}
          </div>

          {/* Bottom DID YOU KNOW card (animated) */}
          <div ref={bottomRef} className="mt-12">
            <motion.div
              className="w-full"
              initial={{ opacity: 0, y: 100, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="bg-accent border-l-4 border-l-primary p-8 shadow-lg rounded-2xl">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-md">
                      <Users className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Did You Know?
                    </h3>
                    <p className="text-lg text-foreground">
                      <strong className="text-primary">2,300+</strong> Mumbaikars and{" "}
                      <strong className="text-primary">50,000+</strong> clients all India
                      escaped debt traps with our DMP in 2023 — just like Ranganathan Iyer
                      from Andheri, Mumbai.
                    </p>
                  </div>
                </div>

                <p className="text-lg text-foreground mt-6 text-center font-bold">
                  Watch his story:{" "}
                  <a
                    href="https://youtu.be/i1o0xXZhxaM?si=u7NwmyYWc4NuwQg1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-2"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M5 3v18l15-9L5 3z" fill="#E11D2D" />
                    </svg>
                    Ranganathan Iyer’s Debt-Free Journey
                  </a>
                </p>
              </Card>
            </motion.div>
          </div>

        </div>
      </section>
    </ReactLenis>
  );
};

export default About;
