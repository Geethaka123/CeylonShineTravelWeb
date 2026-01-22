"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, Quote } from "lucide-react";

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
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      text: "Our honeymoon in Sri Lanka was absolutely magical! Ceylon Shine Travel arranged everything perfectly - from the romantic beachfront villa in Mirissa to the private sunset dinner at Sigiriya. Every detail was taken care of, allowing us to focus on creating beautiful memories.",
      trip: "Sri Lanka Honeymoon Package",
    },
    {
      name: "Michael Chen",
      location: "Toronto, Canada",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      text: "The Yala National Park safari exceeded all expectations. Our guide was incredibly knowledgeable about the wildlife, and the accommodations were top-notch. Ceylon Shine Travel handled all the logistics flawlessly, making our wildlife adventure unforgettable.",
      trip: "Yala Wildlife Safari",
    },
    {
      name: "Emma Rodriguez",
      location: "London, UK",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      text: "Kandy was a dream come true! Ceylon Shine Travel curated the perfect mix of traditional culture and spiritual experiences. From the Temple of the Tooth to the beautiful lake views, every moment was perfectly planned.",
      trip: "Kandy Cultural Experience",
    },
    {
      name: "David Thompson",
      location: "Sydney, Australia",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      text: "Our family trip to Ella was incredible. The kids loved the train ride through the mountains, and we enjoyed the tea plantations. Ceylon Shine Travel made sure everything was family-friendly and safe.",
      trip: "Ella Mountain Adventure",
    },
    {
      name: "Lisa Wang",
      location: "Vancouver, Canada",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      text: "Galle Fort was everything I imagined and more! The colonial architecture, stunning ocean views, and charming streets were breathtaking. Our travel planner found us the perfect boutique hotel within the fort walls.",
      trip: "Galle Fort Heritage Tour",
    },
    {
      name: "James Wilson",
      location: "Melbourne, Australia",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
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
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-ceylon-golden/40 via-ceylon-white to-ceylon-golden/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-ceylon-leaf">What Our</span>
            <span className="text-travel-gradient"> Travelers Say</span>
          </h2>
          <p className="text-lg text-ceylon-leaf/80 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from our satisfied travelers
            who have experienced Sri Lanka with us and created memories that
            last a lifetime.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className="card-travel group relative"
            >
              {/* Quote Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br from-ceylon-golden to-ceylon-brown rounded-full flex items-center justify-center shadow-lg"
              >
                <Quote className="w-6 h-6 text-ceylon-white" />
              </motion.div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.1 + 0.3 + i * 0.1 }}
                  >
                    <Star className="w-5 h-5 text-ceylon-golden fill-current" />
                  </motion.div>
                ))}
              </div>

              {/* Testimonial Text */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 + 0.4 }}
                className="text-ceylon-leaf/80 mb-6 leading-relaxed italic"
              >
                "{testimonial.text}"
              </motion.p>

              {/* Trip Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 + 0.5 }}
                className="mb-4"
              >
                <span className="text-sm font-semibold text-ceylon-teal bg-ceylon-teal/10 px-3 py-1 rounded-full">
                  {testimonial.trip}
                </span>
              </motion.div>

              {/* Author */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 + 0.6 }}
                className="flex items-center space-x-3"
              >
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-ceylon-leaf">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-ceylon-leaf/70">
                    {testimonial.location}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="glass rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.1 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300"
                >
                  {stat.emoji}
                </motion.div>
                <div className="text-3xl font-bold text-ceylon-leaf mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-ceylon-leaf/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Testimonials;
