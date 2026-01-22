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
      id="services"
      className="py-20 bg-gradient-to-br from-ceylon-golden/30 via-ceylon-white to-ceylon-golden/20"
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
            <span className="text-ceylon-leaf">Our</span>
            <span className="text-travel-gradient"> Services</span>
          </h2>
          <p className="text-lg text-ceylon-leaf/80 max-w-3xl mx-auto">
            We provide comprehensive travel solutions to make your journey
            seamless and unforgettable. From booking to support, we've got you
            covered every step of the way.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="glass glass-hover group cursor-pointer rounded-2xl transition-all duration-500 overflow-hidden relative before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300 mt-5"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-20 h-20 mx-auto mb-6 relative mt-5"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-ceylon-golden/20 to-ceylon-brown/20 rounded-2xl blur-sm"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-ceylon-golden to-ceylon-brown rounded-2xl flex items-center justify-center shadow-xl backdrop-blur-sm border border-white/20">
                  <service.icon className="w-10 h-10 text-ceylon-white drop-shadow-lg" />
                </div>
              </motion.div>

              <div
                className="px-8 pb-8 pt-2 backdrop-blur-sm"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              >
                <h3 className="text-2xl font-bold text-ceylon-leaf mb-4 group-hover:text-ceylon-teal transition-colors duration-300 text-center">
                  {service.title}
                </h3>

                <p className="text-ceylon-leaf/80 mb-6 leading-relaxed text-center text-base">
                  {service.description}
                </p>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <h4 className="text-sm font-semibold text-ceylon-leaf/90 mb-3 text-center uppercase tracking-wide">
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          delay: index * 0.1 + featureIndex * 0.05,
                        }}
                        className="flex items-center text-sm text-ceylon-leaf/90 group-hover:text-ceylon-leaf transition-colors duration-300"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-ceylon-golden to-ceylon-brown rounded-full mr-3 flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-ceylon-leaf mb-4">
              Ready to Start Your Adventure?
            </h3>
            <p className="text-ceylon-leaf/80 mb-8 text-lg">
              Let us help you create the perfect travel experience. Our experts
              are here to make your dreams come true.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4"
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
