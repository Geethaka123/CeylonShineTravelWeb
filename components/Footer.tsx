"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Palmtree,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Blog", href: "#" },
    ],
    services: [
      { name: "Flight Booking", href: "#" },
      { name: "Hotel Reservations", href: "#" },
      { name: "Car Rentals", href: "#" },
      { name: "Tour Packages", href: "#" },
      { name: "Travel Insurance", href: "#" },
    ],
    destinations: [
      { name: "Sigiriya", href: "#" },
      { name: "Galle Fort", href: "#" },
      { name: "Ella", href: "#" },
      { name: "Mirissa", href: "#" },
      { name: "Kandy", href: "#" },
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Travel Tips", href: "#" },
      { name: "Emergency Support", href: "#" },
      { name: "FAQ", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <footer className="bg-ceylon-dark relative overflow-hidden pt-32 pb-16 border-t border-white/5">
      {/* Nature Overlay */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        whileInView={{ opacity: 0.2, scale: 1, rotate: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute -bottom-20 -left-20 text-ceylon-gold">
          <Palmtree size={500} strokeWidth={0.5} />
        </div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24"
        >
          {/* Brand Identity */}
          <div className="lg:col-span-2 space-y-10">
            <h3 className="text-4xl font-serif text-white tracking-tight">
              Ceylon <span className="italic text-ceylon-teal uppercase tracking-[0.2em] font-bold text-2xl ml-2">Shine</span>
            </h3>
            <p className="text-white/50 font-light leading-relaxed max-w-md text-lg">
              Crafting paths to the hidden soul of Sri Lanka. We believe in travel 
              that honors the land, respects the culture, and resonates with the traveler.
            </p>
            <div className="flex space-x-8">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ 
                    y: -8, 
                    color: "#f8b133",
                    textShadow: "0 0 15px rgba(248, 177, 51, 0.4)" 
                  }}
                  className="text-white/30 hover:text-white transition-all duration-300"
                  aria-label={`Follow CeylonShine on ${social.label}`}
                >
                  <social.icon size={24} strokeWidth={1.2} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links - Simplified */}
          <div className="space-y-10">
            <h4 className="text-[10px] uppercase tracking-[0.5em] text-ceylon-teal font-bold bg-white/5 w-fit px-4 py-1 rounded-full">Journeys</h4>
            <ul className="space-y-5">
              {footerLinks.destinations.map((link) => (
                <li key={link.name}>
                  <motion.a 
                    href={link.href} 
                    whileHover={{ x: 10, color: "#f8b133" }}
                    className="text-white/40 hover:text-ceylon-gold text-base transition-all font-light flex items-center space-x-3"
                  >
                    <span className="w-1 h-1 rounded-full bg-ceylon-teal/30" />
                    <span>{link.name}</span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="space-y-10">
            <h4 className="text-[10px] uppercase tracking-[0.5em] text-ceylon-teal font-bold bg-white/5 w-fit px-4 py-1 rounded-full">Contact</h4>
            <div className="space-y-8">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center space-x-4 text-white/50"
              >
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:bg-ceylon-teal transition-colors">
                  <Phone size={16} className="text-ceylon-gold" />
                </div>
                <span className="text-base font-light tracking-wide">+94 77 993 3765</span>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center space-x-4 text-white/50"
              >
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                  <MapPin size={16} className="text-ceylon-gold" />
                </div>
                <span className="text-base font-light tracking-wide">Ahangama, Sri Lanka</span>
              </motion.div>
              <div className="pt-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-ceylon-gold/40 font-bold bg-ceylon-gold/5 px-4 py-2 rounded-full w-fit">Available 24/7 for you</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold">
            © 2025 Ceylon Shine Travel. Honor the Journey.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5, color: "#f8b133" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-4 text-[10px] uppercase tracking-[0.4em] text-white/30 hover:text-ceylon-gold transition-all font-black group"
            aria-label="Back to top"
          >
            <span className="border-b border-transparent group-hover:border-ceylon-gold pb-1 transition-all">Back to Top</span>
            <div className="bg-white/5 p-2 rounded-full border border-white/10 group-hover:bg-ceylon-gold group-hover:text-white transition-all">
              <ArrowUp size={16} />
            </div>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
