'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Plane, Hotel, Car, Map, Camera, Heart, Shield, Clock } from 'lucide-react';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Plane,
      title: 'Flight Booking',
      description: 'Find the best deals on flights to any destination worldwide with our extensive network of airlines.',
      features: ['Best Price Guarantee', '24/7 Support', 'Flexible Booking']
    },
    {
      icon: Hotel,
      title: 'Hotel Reservations',
      description: 'Book luxury hotels, cozy resorts, and unique accommodations that match your travel style.',
      features: ['Verified Properties', 'Free Cancellation', 'Loyalty Rewards']
    },
    {
      icon: Car,
      title: 'Car Rentals',
      description: 'Explore destinations at your own pace with reliable car rental services worldwide.',
      features: ['Wide Selection', 'Insurance Included', 'GPS Navigation']
    },
    {
      icon: Map,
      title: 'Custom Tours',
      description: 'Create personalized itineraries with our expert travel planners and local guides.',
      features: ['Tailored Experiences', 'Local Expertise', 'Unique Routes']
    },
    {
      icon: Camera,
      title: 'Travel Photography',
      description: 'Capture your memories with professional photography services at iconic locations.',
      features: ['Professional Photographers', 'High-Quality Images', 'Digital Delivery']
    },
    {
      icon: Heart,
      title: 'Honeymoon Packages',
      description: 'Romantic getaways designed for newlyweds with special amenities and experiences.',
      features: ['Romantic Settings', 'Special Amenities', 'Privacy Guaranteed']
    },
    {
      icon: Shield,
      title: 'Travel Insurance',
      description: 'Comprehensive coverage for your peace of mind during international and domestic travel.',
      features: ['Medical Coverage', 'Trip Cancellation', 'Baggage Protection']
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock assistance for any travel emergencies or itinerary changes.',
      features: ['Instant Response', 'Multi-language', 'Global Coverage']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-sandy-beige/30 via-sky-white to-sunshine-yellow/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-palm-green">Our</span>
            <span className="text-travel-gradient"> Services</span>
          </h2>
          <p className="text-lg text-palm-green/80 max-w-3xl mx-auto">
            We provide comprehensive travel solutions to make your journey seamless and unforgettable. 
            From booking to support, we've got you covered every step of the way.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="card-travel group cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-sunshine-yellow to-sunset-orange rounded-full flex items-center justify-center shadow-lg"
              >
                <service.icon className="w-8 h-8 text-sky-white" />
              </motion.div>
              
              <h3 className="text-xl font-semibold text-palm-green mb-3 group-hover:text-teal-green transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-palm-green/70 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: (index * 0.1) + (featureIndex * 0.05) }}
                    className="flex items-center text-sm text-palm-green/80"
                  >
                    <div className="w-2 h-2 bg-sunshine-yellow rounded-full mr-3" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
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
            <h3 className="text-3xl font-bold text-palm-green mb-4">
              Ready to Start Your Adventure?
            </h3>
            <p className="text-palm-green/80 mb-8 text-lg">
              Let us help you create the perfect travel experience. Our experts are here to make your dreams come true.
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