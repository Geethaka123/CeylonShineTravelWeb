"use client";

import { motion } from "framer-motion";
import {
  Search,
  MapPin,
  Calendar,
  Users,
  Star,
  Plane,
  Globe,
  Compass,
  Mountain,
  Palmtree,
  Camera,
  Heart,
  Shield,
  Clock,
} from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const destinations = [
    {
      name: "Sigiriya",
      image: "./sigiriya.png",
    },
    {
      name: "Galle Fort",
      image: "./galle.png",
    },
    {
      name: "Tea Estates",
      image: "./tea.png",
    },
    {
      name: "Sigiriya",
      image: "./sigiriya.png",
    },
    {
      name: "Galle Fort",
      image: "./galle.png",
    },
    {
      name: "Tea Estates",
      image: "./tea.png",
    },
    {
      name: "Sigiriya",
      image:
        "./sigiriya.png",
    },
    {
      name: "Galle Fort",
      image:
       "./galle.png",
    },
    {
      name: "Tea Estates",
      image:
       "./tea.png",
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Safe Travel",
      description: "24/7 Support & Insurance",
    },
    { icon: Clock, title: "Flexible Plans", description: "Free Cancellation" },
    {
      icon: Heart,
      title: "Local Experts",
      description: "Authentic Experiences",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 20,
      },
    },
  };

  const titleWordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ceylon-dark">
      {/* Serene Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1546708973-b339540b5162?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Serene Sri Lankan Landscape - CeylonShine Travel Agency"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Soft Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-ceylon-dark/80" />
        <div className="absolute inset-0 bg-ceylon-teal/5 backdrop-blur-[1px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Calm Heading */}
          <div className="space-y-8">
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-xl px-6 py-2 rounded-full border border-white/10 shadow-2xl"
            >
              <div className="w-2 h-2 rounded-full bg-ceylon-gold animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.5em] text-ceylon-gold font-bold">
                The Pearl of the Indian Ocean
              </span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-6xl md:text-[7rem] font-serif text-white leading-[1] tracking-tight"
            >
              <span className="block overflow-hidden">
                <motion.span className="inline-block">Serenity in Every</motion.span>
              </span>
              <span className="block italic text-ceylon-gold glow-text-soft">Journey</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-2xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed font-sans"
            >
              Discover the hidden soul of Sri Lanka through curated paths, 
              ancient wisdom, and breathtaking nature.
            </motion.p>
          </div>

          {/* Minimal Search Component */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="glass max-w-4xl mx-auto rounded-[3.5rem] p-3 shadow-2xl border border-white/20 bg-white/10 flex flex-col md:flex-row items-center gap-2"
          >
            <div className="flex-1 flex items-center px-8 gap-4 border-r border-white/10 w-full group">
              <MapPin className="text-ceylon-gold transition-transform group-focus-within:scale-125" size={24} />
              <input 
                type="text" 
                placeholder="Where to next?"
                className="bg-transparent border-none focus:ring-0 w-full py-5 text-white placeholder-white/40 font-medium text-lg"
              />
            </div>
            <div className="flex-1 flex items-center px-8 gap-4 border-r border-white/10 w-full cursor-pointer hover:bg-white/5 transition-colors h-full">
              <Calendar className="text-ceylon-gold" size={24} />
              <span className="text-white/60 font-medium py-5 text-lg">When?</span>
            </div>
            <div className="flex-1 flex items-center px-8 gap-4 w-full cursor-pointer hover:bg-white/5 transition-colors h-full">
              <Users className="text-ceylon-gold" size={24} />
              <span className="text-white/60 font-medium py-5 text-lg">Who?</span>
            </div>
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px -10px rgba(29, 162, 160, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-ceylon-teal text-white h-16 px-12 rounded-full font-bold uppercase tracking-widest text-sm shadow-xl transition-all duration-300 w-full md:w-auto overflow-hidden relative group"
            >
              <span className="relative z-10">Explore</span>
              <motion.div 
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"
                initial={false}
              />
            </motion.button>
          </motion.div>

          {/* Subtle Stats/Social Proof */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-16 pt-12"
          >
            {[
              { label: "Happy Souls", value: "12k+" },
              { label: "Hidden Gems", value: "80+" },
              { label: "Expert Guides", value: "45" },
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10, scale: 1.1 }}
                className="text-center cursor-default group"
              >
                <p className="text-4xl font-serif text-white group-hover:text-ceylon-gold transition-colors duration-300">{stat.value}</p>
                <div className="w-8 h-[1px] bg-ceylon-gold/30 mx-auto my-2 group-hover:w-full transition-all duration-500" />
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold group-hover:text-white transition-colors uppercase tracking-widest font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 10, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-20 opacity-[0.07]"
        >
          <Palmtree size={400} className="text-white" />
        </motion.div>
        <motion.div 
          animate={{ 
            y: [0, 40, 0],
            rotate: [0, -5, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 -right-20 opacity-[0.07]"
        >
          <Palmtree size={500} className="text-white" />
        </motion.div>
      </div>

      {/* Aesthetic Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, type: "spring" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 group cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 group-hover:text-ceylon-gold transition-colors font-bold">Scroll Down</span>
        <div className="relative w-[2px] h-16 bg-white/10 overflow-hidden rounded-full">
          <motion.div
            animate={{ 
              y: [-64, 64]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "circIn"
            }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-ceylon-gold to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
