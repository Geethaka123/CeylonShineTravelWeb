"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, Quote, Heart } from "lucide-react";
import Image from "next/image";

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      image:
        "/testimonial-sarah.jpg",
      text: "Our honeymoon in Sri Lanka was absolutely magical! Ceylon Shine Travel arranged everything perfectly - from the romantic beachfront villa in Mirissa to the private sunset dinner at Sigiriya. Every detail was taken care of, allowing us to focus on creating beautiful memories.",
      trip: "Sri Lanka Honeymoon Package",
    },
    {
      name: "Michael Chen",
      location: "Toronto, Canada",
      rating: 5,
      image:
        "/testimonial-michael.jpg",
      text: "The Yala National Park safari exceeded all expectations. Our guide was incredibly knowledgeable about the wildlife, and the accommodations were top-notch. Ceylon Shine Travel handled all the logistics flawlessly, making our wildlife adventure unforgettable.",
      trip: "Yala Wildlife Safari",
    },
    {
      name: "Emma Rodriguez",
      location: "London, UK",
      rating: 5,
      image:
        "/testimonial-emma.jpg",
      text: "Kandy was a dream come true! Ceylon Shine Travel curated the perfect mix of traditional culture and spiritual experiences. From the Temple of the Tooth to the beautiful lake views, every moment was perfectly planned.",
      trip: "Kandy Cultural Experience",
    },
    {
      name: "David Thompson",
      location: "Sydney, Australia",
      rating: 5,
      image:
        "/testimonial-david.jpg",
      text: "Our family trip to Ella was incredible. The kids loved the train ride through the mountains, and we enjoyed the tea plantations. Ceylon Shine Travel made sure everything was family-friendly and safe.",
      trip: "Ella Mountain Adventure",
    },
    {
      name: "Lisa Wang",
      location: "Vancouver, Canada",
      rating: 5,
      image:
        "/testimonial-lisa.jpg",
      text: "Galle Fort was everything I imagined and more! The colonial architecture, stunning ocean views, and charming streets were breathtaking. Our travel planner found us the perfect boutique hotel within the fort walls.",
      trip: "Galle Fort Heritage Tour",
    },
    {
      name: "James Wilson",
      location: "Melbourne, Australia",
      rating: 5,
      image:
        "/testimonial-james.jpg",
      text: "The Sigiriya palace experience was pure wonder. Ceylon Shine Travel arranged everything from the sunrise climb to the cultural insights. It was the most awe-inspiring vacation we've ever had.",
      trip: "Sigiriya Ancient Palace",
    },
  ];

  const stats = [
    { number: "98%", label: "Satisfaction Rate", emoji: "😊" },
    { number: "15+", label: "Years Experience", emoji: "⭐" },
    { number: "50K+", label: "Happy Travelers", emoji: "✈️" },
    { number: "150+", label: "Destinations", emoji: "🌍" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="testimonials"
      className="py-32 bg-ceylon-light relative overflow-hidden"
    >
      {/* Decorative background text */}
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 0.02, x: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span className="text-[20vw] font-serif font-bold whitespace-nowrap">Whispering Palm</span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-24 space-y-6">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.5em] text-ceylon-teal font-bold bg-white/50 px-6 py-2 rounded-full inline-block"
          >
            Shared Stories
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif text-ceylon-dark"
          >
            Voices of <span className="italic text-ceylon-gold glow-text-soft lowercase">experience</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-ceylon-gold/30 mx-auto rounded-full" 
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-xl text-ceylon-dark/60 max-w-3xl mx-auto font-light leading-relaxed font-sans mt-8"
          >
            Precious moments shared by those who walked our paths and discovered the soul of Sri Lanka.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              whileHover={{ 
                y: -12,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="card-aesthetic flex flex-col h-full bg-white/60 backdrop-blur-md border border-white/40 hover:bg-white hover:shadow-2xl transition-all duration-500"
            >
              {/* Stars & Quote Icon */}
              <div className="flex justify-between items-start mb-8">
                <div className="flex space-x-1.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                    >
                      <Star className="w-4 h-4 text-ceylon-gold fill-current" />
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  initial={{ rotate: -10, opacity: 0 }}
                  animate={inView ? { rotate: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.8 }}
                >
                  <Quote className="w-10 h-10 text-ceylon-gold/20" strokeWidth={1} />
                </motion.div>
              </div>

              {/* Testimonial Text */}
              <p className="text-ceylon-dark/70 mb-10 leading-relaxed font-light italic text-lg flex-1">
                "{testimonial.text}"
              </p>

              {/* Footer: Avatar & Info */}
              <div className="flex items-center justify-between pt-8 border-t border-ceylon-teal/5">
                <div className="flex items-center space-x-4">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-lg"
                  >
                    <Image
                      src={testimonial.image}
                      alt={`Review by ${testimonial.name} - ${testimonial.trip}`}
                      fill
                      className="w-full h-full object-cover"
                      sizes="56px"
                    />
                  </motion.div>
                  <div>
                    <h4 className="font-serif text-ceylon-dark text-xl leading-tight">
                      {testimonial.name}
                    </h4>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-ceylon-teal font-bold mt-1">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <motion.div 
                  whileHover={{ scale: 1.3, color: "#b14a27" }}
                  className="opacity-40 hover:opacity-100 transition-all cursor-pointer"
                >
                  <Heart size={20} className="text-ceylon-gold fill-current" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
