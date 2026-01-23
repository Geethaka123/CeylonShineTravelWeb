"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Plane,
  Hotel,
  Car,
  Map,
  Camera,
  Heart,
  Shield,
  Clock,
  Compass,
} from "lucide-react";

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Plane,
      title: "Flight Booking",
      description:
        "Find the best deals on flights to any destination worldwide with our extensive network of airlines.",
      features: ["Best Price Guarantee", "24/7 Support", "Flexible Booking"],
    },
    {
      icon: Hotel,
      title: "Hotel Reservations",
      description:
        "Book luxury hotels, cozy resorts, and unique accommodations that match your travel style.",
      features: ["Verified Properties", "Free Cancellation", "Loyalty Rewards"],
    },
    {
      icon: Car,
      title: "Car Rentals",
      description:
        "Explore destinations at your own pace with reliable car rental services worldwide.",
      features: ["Wide Selection", "Insurance Included", "GPS Navigation"],
    },
    {
      icon: Map,
      title: "Custom Tours",
      description:
        "Create personalized itineraries with our expert travel planners and local guides.",
      features: ["Tailored Experiences", "Local Expertise", "Unique Routes"],
    },
    {
      icon: Camera,
      title: "Travel Photography",
      description:
        "Capture your memories with professional photography services at iconic locations.",
      features: [
        "Professional Photographers",
        "High-Quality Images",
        "Digital Delivery",
      ],
    },
    // {
    //   icon: Heart,
    //   title: "Honeymoon Packages",
    //   description:
    //     "Romantic getaways designed for newlyweds with special amenities and experiences.",
    //   features: [
    //     "Romantic Settings",
    //     "Special Amenities",
    //     "Privacy Guaranteed",
    //   ],
    // },
    // {
    //   icon: Shield,
    //   title: "Travel Insurance",
    //   description:
    //     "Comprehensive coverage for your peace of mind during international and domestic travel.",
    //   features: ["Medical Coverage", "Trip Cancellation", "Baggage Protection"],
    // },
    {
      icon: Clock,
      title: "24/7 Support",
      description:
        "Round-the-clock assistance for any travel emergencies or itinerary changes.",
      features: ["Instant Response", "Multi-language", "Global Coverage"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="services"
      className="py-32 bg-ceylon-light relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <motion.div 
        style={{ y: -50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 opacity-[0.03] pointer-events-none"
      >
        <Compass size={600} strokeWidth={0.5} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-24 space-y-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-xs uppercase tracking-[0.4em] text-ceylon-teal font-bold bg-ceylon-teal/5 px-6 py-2 rounded-full inline-block"
          >
            Specialized Experiences
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif text-ceylon-dark"
          >
            Curated for <span className="italic text-ceylon-gold glow-text-soft">You</span>
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
            Beyond traditional travel, we offer paths to discovery, tranquility, and 
            connection with the authentic soul of Sri Lanka.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ 
                y: -15, 
                transition: { type: "spring", stiffness: 300, damping: 15 } 
              }}
              className="card-aesthetic flex flex-col items-center text-center group bg-white/50 hover:bg-white hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-8 border-2 border-ceylon-teal/5 shadow-xl group-hover:scale-110 group-hover:border-ceylon-teal/30 group-hover:bg-ceylon-teal group-hover:text-white transition-all duration-500">
                <service.icon className="w-10 h-10 text-ceylon-teal group-hover:text-white transition-colors" strokeWidth={1.2} />
              </div>

              <h3 className="text-2xl md:text-3xl font-serif text-ceylon-dark mb-4">
                {service.title}
              </h3>

              <p className="text-ceylon-dark/60 mb-8 leading-relaxed font-light text-base px-4">
                {service.description}
              </p>

              <div className="w-full pt-8 border-t border-ceylon-gold/10 flex flex-wrap justify-center gap-3">
                {service.features.map((feature) => (
                  <motion.span 
                    key={feature} 
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(29, 162, 160, 0.1)" }}
                    className="text-[10px] uppercase tracking-widest text-ceylon-teal font-bold bg-ceylon-teal/5 px-4 py-1.5 rounded-full border border-ceylon-teal/10 cursor-default"
                  >
                    {feature}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Subtle CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, type: "spring" }}
          className="text-center mt-32"
        >
          <p className="text-ceylon-teal italic font-serif text-2xl opacity-60">
            "Every path in Sri Lanka whispers a different story..."
          </p>
          <div className="w-16 h-[1px] bg-ceylon-teal/20 mx-auto mt-6" />
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
