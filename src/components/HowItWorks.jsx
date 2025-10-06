"use client";

import { motion, useAnimation } from "framer-motion";
import {
  BadgeCheckIcon,
  CalculatorIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  HandshakeIcon,
  ShieldCheckIcon,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Autoplay, EffectCards, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import { cn } from "@/lib/utils";

// === MAIN COMPONENT ===
const Skiper48 = () => {
  const cards = [
    {
      icon: <CalculatorIcon className="h-10 w-10 text-blue-500" />,
      title: "Single EMI",
      description: "Plan tailored to your income & Mumbai living costs.",
    },
    {
      icon: <ShieldCheckIcon className="h-10 w-10 text-green-500" />,
      title: "Legal Shield",
      description: "Redirect calls to our Mumbai paralegal team.",
    },
    {
      icon: <HandshakeIcon className="h-10 w-10 text-purple-500" />,
      title: "In-House Advocates",
      description: "Handle Mumbai courts, all India arbitration & hearings.",
    },
    {
      icon: <BadgeCheckIcon className="h-10 w-10 text-red-500" />,
      title: "Credit Repair Program",
      description: "With Mumbai-based counselors.",
    },
  ];

  return (
    <section id="how-it-works" className="flex flex-col items-center justify-center w-full overflow-hidden bg-[#f5f4f3] py-16">
      {/* Animated Heading */}
      <motion.div
        className="text-center mb-12 px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
          How We Solve{" "}
          <span className="text-primary">Debt Challenges</span> in Mumbai
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
          Our proven 4-step process has helped thousands of Mumbaikars achieve
          financial freedom
        </p>
      </motion.div>

      {/* Animated Carousel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <Carousel_002 cards={cards} loop />
      </motion.div>

      {/* Animated Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <StatsSection />
      </motion.div>
    </section>
  );
};

export { Skiper48 };

// === CAROUSEL COMPONENT ===
const Carousel_002 = ({
  cards,
  className,
  showPagination = false,
  showNavigation = false,
  loop = true,
  autoplay = false,
  spaceBetween = 40,
}) => {
  const css = `
  .Carousal_002 {
    padding-bottom: 50px !important;
  }
  `;

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn("relative w-full max-w-4xl", className)}
    >
      <style>{css}</style>

      <Swiper
        spaceBetween={spaceBetween}
        autoplay={
          autoplay
            ? {
                delay: 1500,
                disableOnInteraction: false,
              }
            : false
        }
        effect="cards"
        grabCursor={true}
        loop={loop}
        pagination={
          showPagination
            ? {
                clickable: true,
              }
            : false
        }
        navigation={
          showNavigation
            ? {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }
            : false
        }
        className="Carousal_002 w-[350px] sm:w-[400px] h-[420px] sm:h-[500px]"
        modules={[EffectCards, Autoplay, Pagination, Navigation]}
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <SwiperSlide
              key={index}
              className="relative flex flex-col items-center justify-start rounded-3xl bg-gradient-to-b from-[#FFD4CC] to-[#FFB6A8] shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-8 border border-[#ffb3a3]/40"
            >
              {/* Floating Icon */}
              <div className="absolute top-6 flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg border-4 border-[#FFD4CC]">
                {React.cloneElement(card.icon, {
                  size: 36,
                  color: "#E63946",
                  strokeWidth: 2.5,
                })}
              </div>

              {/* Inner White Section */}
              <div className="bg-white rounded-2xl shadow-sm p-12 mt-28 text-center w-full">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </div>
            </SwiperSlide>
          </motion.div>
        ))}

        {showNavigation && (
          <div>
            <div className="swiper-button-next after:hidden">
              <ChevronRightIcon className="h-6 w-6 text-white" />
            </div>
            <div className="swiper-button-prev after:hidden">
              <ChevronLeftIcon className="h-6 w-6 text-white" />
            </div>
          </div>
        )}
      </Swiper>
    </motion.div>
  );
};

export { Carousel_002 };

// === STATS SECTION ===
const StatsSection = () => {
  const stats = [
    { label: "Happy Clients in Mumbai", value: 5000, suffix: "+", duration: 2 },
    { label: "Debt Managed", value: 500, suffix: "Cr+", duration: 2 },
    { label: "Success Rate", value: 98, suffix: "%", duration: 2 },
    { label: "Years of Experience", value: 10, suffix: "+", duration: 2 },
  ];

  return (
    // <section className="w-full bg-[#FF0000] py-16">
    <section className="w-[105%] bg-[#FF0000] py-16 ml-[-2.5%] sm:w-full sm:ml-0">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center gap-8 max-w-6xl mx-auto text-white">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <AnimatedStat stat={stat} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// === COUNT-UP ANIMATION COMPONENT ===
const AnimatedStat = ({ stat }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          controls.start({ opacity: 1, y: 0 });
          let start = 0;
          const end = stat.value;
          const duration = stat.duration * 1000;
          const increment = (end - start) / (duration / 16);

          const counter = setInterval(() => {
            start += increment;
            if (start >= end) {
              start = end;
              clearInterval(counter);
            }
            setCount(Math.floor(start));
          }, 16);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls, stat.value, stat.duration, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center"
    >
      <div className="text-4xl md:text-5xl font-bold mb-2">
        {count}
        {stat.suffix}
      </div>
      <div className="text-lg">{stat.label}</div>
    </motion.div>
  );
};

export default Skiper48;
