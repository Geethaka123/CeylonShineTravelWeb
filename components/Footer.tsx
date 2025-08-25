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
      { name: "Europe", href: "#" },
      { name: "Asia", href: "#" },
      { name: "Americas", href: "#" },
      { name: "Africa", href: "#" },
      { name: "Oceania", href: "#" },
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

  return (
    <footer className="bg-gradient-to-br from-palm-green via-ocean-blue to-palm-green relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-sunshine-yellow rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-sunset-orange rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-teal-green rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <h3 className="text-2xl font-bold text-sky-white mb-4">
                <span className="text-travel-gradient">Ceylon</span>
                <span className="text-sky-white">Shine</span>
              </h3>
              <p className="text-sky-white/80 mb-6 leading-relaxed">
                We specialize in creating unforgettable travel experiences. From
                exotic destinations to luxury accommodations, we make your
                travel dreams come true with personalized service and expert
                planning.
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3"
            >
              <div className="flex items-center space-x-3 text-sky-white/80 hover:text-sunshine-yellow transition-colors duration-300">
                <Phone className="w-4 h-4" />
                <span>+94 (77) 993-3765</span>
              </div>
              <div className="flex items-center space-x-3 text-sky-white/80 hover:text-sunshine-yellow transition-colors duration-300">
                <Mail className="w-4 h-4" />
                <span>ceylonshinetravel@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sky-white/80 hover:text-sunshine-yellow transition-colors duration-300">
                <MapPin className="w-4 h-4" />
                <span>Thithagalle, Ahangama, Sri Lanka, 80650</span>
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {/* {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + categoryIndex * 0.1 }}
            >
              <h4 className="text-lg font-semibold text-sky-white mb-4 capitalize">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + categoryIndex * 0.1 + linkIndex * 0.05 }}
                  >
                    <a
                      href={link.href}
                      className="text-sky-white/70 hover:text-sunshine-yellow transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))} */}
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass rounded-2xl p-8 mb-12"
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-sky-white mb-2">
              Stay Updated
            </h3>
            <p className="text-sky-white/80">
              Subscribe to our newsletter for exclusive travel deals and
              destination inspiration.
            </p>
          </div>
          <div className="max-w-md mx-auto">
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-sky-white/10 border border-sky-white/20 rounded-lg text-sky-white placeholder-sky-white/50 focus:outline-none focus:ring-2 focus:ring-sunshine-yellow focus:border-transparent transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-sunshine-yellow to-sunset-orange text-sky-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="border-t border-sky-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-sky-white/70 text-sm"
            >
              © 2025 CeylonShine Travel Agency. All rights reserved.
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-10 h-10 bg-sky-white/10 backdrop-blur-sm border border-sky-white/20 rounded-full flex items-center justify-center text-sky-white hover:text-sunshine-yellow hover:bg-sky-white/20 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-sunshine-yellow to-sunset-orange rounded-full flex items-center justify-center text-sky-white shadow-lg hover:shadow-xl transition-all duration-300 z-50"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
};

export default Footer;
