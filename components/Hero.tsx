'use client';

import { motion } from 'framer-motion';
import { Search, MapPin, Calendar, Users, Star, Plane, Globe, Compass, Mountain, Palmtree, Camera, Heart, Shield, Clock } from 'lucide-react';

const Hero = () => {
  const destinations = [
    { name: 'Sigiriya', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Galle Fort', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Tea Estates', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  ];

  const features = [
    { icon: Shield, title: 'Safe Travel', description: '24/7 Support & Insurance' },
    { icon: Clock, title: 'Flexible Plans', description: 'Free Cancellation' },
    { icon: Heart, title: 'Local Experts', description: 'Authentic Experiences' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Beautiful Waterfall Background */}
      <div className="absolute inset-0">
        {/* Main Waterfall Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        
        {/* Multiple Gradient Overlays for Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-travel-primary/30 via-transparent to-travel-secondary/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        
        {/* Subtle Animated Overlay */}
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-br from-travel-accent/10 via-transparent to-travel-primary/10"
        />
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Water Droplets */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-travel-white/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, 100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Animated Circles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full border-2 ${
              i % 3 === 0 ? 'border-travel-accent/20' : 
              i % 3 === 1 ? 'border-travel-primary/20' : 'border-travel-white/10'
            }`}
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}

        {/* Floating Travel Icons */}
        {[Plane, Globe, Compass, Mountain, Palmtree, Camera].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute text-travel-white/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: i * 0.5 }}
          >
            <Icon size={24} />
          </motion.div>
        ))}
      </div>

      {/* Main Content with Enhanced Styling */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Column - Main Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Enhanced Badge */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center space-x-3 bg-travel-white/15 backdrop-blur-md rounded-full px-8 py-4 border border-travel-white/30 shadow-lg"
              >
                <Star className="w-5 h-5 text-travel-accent animate-pulse" />
                <span className="text-sm font-semibold text-travel-white">Trusted by 50,000+ Travelers</span>
              </motion.div>

              {/* Enhanced Main Heading */}
              <motion.div variants={itemVariants} className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="text-travel-white drop-shadow-lg">Discover</span>
                  <br />
                  <span className="text-travel-gradient drop-shadow-lg">Sri Lanka's</span>
                  <br />
                  <span className="text-travel-white text-4xl md:text-5xl drop-shadow-lg">Natural Wonders</span>
                </h1>
                
                <p className="text-xl text-travel-white/95 leading-relaxed max-w-lg drop-shadow-md">
                  Experience the magic of cascading waterfalls, pristine beaches, and ancient temples. 
                  Let us guide you through the most breathtaking landscapes of the Pearl of the Indian Ocean.
                </p>
              </motion.div>

              {/* Enhanced Features */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-travel-white/15 backdrop-blur-md rounded-xl p-6 border border-travel-white/25 shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    <feature.icon className="w-10 h-10 text-travel-accent mb-4" />
                    <h3 className="font-bold text-travel-white mb-2 text-lg">{feature.title}</h3>
                    <p className="text-sm text-travel-white/80">{feature.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Enhanced Search & Destinations */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Enhanced Search Form */}
              <motion.div
                variants={itemVariants}
                className="glass rounded-2xl p-8 shadow-2xl border border-travel-white/30 backdrop-blur-md"
              >
                <h3 className="text-2xl font-bold text-travel-white mb-6 flex items-center">
                  <Compass className="w-6 h-6 mr-3 text-travel-accent" />
                  Plan Your Adventure
                </h3>
                
                <div className="space-y-4">
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-travel-primary" />
                    <input
                      type="text"
                      placeholder="Where would you like to go?"
                      className="w-full pl-12 pr-4 py-4 bg-travel-white/95 border border-travel-beach rounded-xl focus:outline-none focus:ring-2 focus:ring-travel-primary focus:border-transparent transition-all duration-300 text-travel-dark shadow-lg"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-travel-primary" />
                      <input
                        type="date"
                        className="w-full pl-12 pr-4 py-4 bg-travel-white/95 border border-travel-beach rounded-xl focus:outline-none focus:ring-2 focus:ring-travel-primary focus:border-transparent transition-all duration-300 text-travel-dark shadow-lg"
                      />
                    </div>
                    
                    <div className="relative">
                      <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-travel-primary" />
                      <select className="w-full pl-12 pr-4 py-4 bg-travel-white/95 border border-travel-beach rounded-xl focus:outline-none focus:ring-2 focus:ring-travel-primary focus:border-transparent transition-all duration-300 text-travel-dark shadow-lg">
                        <option>Travelers</option>
                        <option>1 Person</option>
                        <option>2 People</option>
                        <option>3+ People</option>
                      </select>
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary flex items-center justify-center space-x-3 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    <Search className="w-5 h-5" />
                    <span>Find Your Perfect Trip</span>
                  </motion.button>
                </div>
              </motion.div>

              {/* Enhanced Popular Destinations */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h3 className="text-xl font-semibold text-travel-white flex items-center">
                  <Camera className="w-5 h-5 mr-2 text-travel-accent" />
                  Popular Destinations
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {destinations.map((dest, index) => (
                    <motion.div
                      key={dest.name}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="relative h-28 rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundImage: `url('${dest.image}')` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <p className="text-sm font-semibold text-travel-white drop-shadow-lg">{dest.name}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-3"
        >
          <span className="text-travel-white/80 text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-travel-white/60 rounded-full flex justify-center backdrop-blur-sm">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-travel-white/80 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 