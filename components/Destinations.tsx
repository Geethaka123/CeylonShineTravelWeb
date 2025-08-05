'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, MapPin, Clock, Users } from 'lucide-react';

const Destinations = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const destinations = [
    {
      name: 'Bali, Indonesia',
      image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
      rating: 4.8,
      price: '$1,299',
      duration: '7 days',
      travelers: '2-4 people',
      description: 'Tropical paradise with pristine beaches, ancient temples, and vibrant culture.'
    },
    {
      name: 'Santorini, Greece',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      rating: 4.9,
      price: '$2,199',
      duration: '8 days',
      travelers: '2-6 people',
      description: 'Stunning white architecture, crystal blue waters, and breathtaking sunsets.'
    },
    {
      name: 'Tokyo, Japan',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      rating: 4.7,
      price: '$1,899',
      duration: '6 days',
      travelers: '1-4 people',
      description: 'Modern metropolis blending cutting-edge technology with traditional culture.'
    },
    {
      name: 'Machu Picchu, Peru',
      image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      rating: 4.9,
      price: '$1,599',
      duration: '9 days',
      travelers: '2-8 people',
      description: 'Ancient Incan citadel nestled in the Andes mountains with breathtaking views.'
    },
    {
      name: 'Maldives',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      rating: 4.8,
      price: '$3,299',
      duration: '10 days',
      travelers: '2-6 people',
      description: 'Overwater bungalows, crystal clear waters, and pristine coral reefs.'
    },
    {
      name: 'Swiss Alps',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      rating: 4.6,
      price: '$2,499',
      duration: '7 days',
      travelers: '2-6 people',
      description: 'Majestic mountain peaks, world-class skiing, and charming alpine villages.'
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
    <section id="destinations" className="py-20 bg-gradient-to-br from-sky-white via-sandy-beige/20 to-sunshine-yellow/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-palm-green">Popular</span>
            <span className="text-travel-gradient"> Destinations</span>
          </h2>
          <p className="text-lg text-palm-green/80 max-w-3xl mx-auto">
            Discover the world's most breathtaking destinations handpicked by our travel experts. 
            Each location offers unique experiences and unforgettable memories.
          </p>
        </motion.div>

        {/* Destinations Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
              className="card-travel group cursor-pointer overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <motion.img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Price Badge */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="absolute top-4 right-4 bg-gradient-to-r from-sunset-orange to-sunshine-yellow text-sky-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg"
                >
                  {destination.price}
                </motion.div>
                
                {/* Rating */}
                <div className="absolute bottom-4 left-4 flex items-center space-x-1 bg-sky-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                  <Star className="w-4 h-4 text-sunshine-yellow fill-current" />
                  <span className="text-sm font-semibold text-palm-green">{destination.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-palm-green mb-2 group-hover:text-teal-green transition-colors duration-300">
                  {destination.name}
                </h3>
                
                <p className="text-palm-green/70 mb-4 leading-relaxed">
                  {destination.description}
                </p>

                {/* Trip Details */}
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-palm-green/80">
                    <Clock className="w-4 h-4 mr-2 text-teal-green" />
                    <span>{destination.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-palm-green/80">
                    <Users className="w-4 h-4 mr-2 text-teal-green" />
                    <span>{destination.travelers}</span>
                  </div>
                  <div className="flex items-center text-sm text-palm-green/80">
                    <MapPin className="w-4 h-4 mr-2 text-teal-green" />
                    <span>All inclusive</span>
                  </div>
                </div>

                {/* View Details Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-4 bg-gradient-to-r from-teal-green to-ocean-blue text-sky-white py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-8 py-4"
          >
            View All Destinations
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Destinations; 