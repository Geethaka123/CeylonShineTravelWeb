'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      info: '+1 (555) 123-4567',
      description: 'Available 24/7 for emergencies'
    },
    {
      icon: Mail,
      title: 'Email Us',
      info: 'info@travelagency.com',
      description: 'Get a response within 2 hours'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: '123 Travel Street, City',
      description: 'Mon-Fri: 9AM-6PM'
    },
    {
      icon: Clock,
      title: 'Live Chat',
      info: 'Available Now',
      description: 'Instant support online'
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
    <section id="contact" className="py-20 bg-gradient-to-br from-sky-white via-sandy-beige/30 to-sunshine-yellow/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-palm-green">Get In</span>
            <span className="text-travel-gradient"> Touch</span>
          </h2>
          <p className="text-lg text-palm-green/80 max-w-3xl mx-auto">
            Ready to start your next adventure? Our travel experts are here to help you plan 
            the perfect trip. Contact us today and let's make your travel dreams come true.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-palm-green mb-6">
                Send us a Message
              </h3>
            </motion.div>

            <motion.form variants={itemVariants} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-palm-green mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="input-travel w-full"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-palm-green mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="input-travel w-full"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-palm-green mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="input-travel w-full"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-palm-green mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="input-travel w-full"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-palm-green mb-2">
                  Destination Interest
                </label>
                <select className="input-travel w-full">
                  <option>Select a destination</option>
                  <option>Bali, Indonesia</option>
                  <option>Santorini, Greece</option>
                  <option>Tokyo, Japan</option>
                  <option>Machu Picchu, Peru</option>
                  <option>Maldives</option>
                  <option>Swiss Alps</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-palm-green mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="input-travel w-full resize-none"
                  placeholder="Tell us about your travel plans and preferences..."
                />
              </div>

              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </motion.button>
            </motion.form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-palm-green mb-6">
                Contact Information
              </h3>
              <p className="text-palm-green/80 mb-8">
                We're here to help you plan the perfect trip. Reach out to us through any of these channels.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-start space-x-4 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 bg-gradient-to-br from-sunshine-yellow to-sunset-orange rounded-full flex items-center justify-center shadow-lg"
                  >
                    <info.icon className="w-6 h-6 text-sky-white" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-palm-green group-hover:text-teal-green transition-colors duration-300">
                      {info.title}
                    </h4>
                    <p className="text-palm-green/80 font-medium">{info.info}</p>
                    <p className="text-sm text-palm-green/60">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Emergency Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="glass rounded-2xl p-6 border-l-4 border-sunset-orange"
            >
              <div className="flex items-center space-x-3 mb-3">
                <MessageCircle className="w-6 h-6 text-sunset-orange" />
                <h4 className="font-semibold text-palm-green">Emergency Support</h4>
              </div>
              <p className="text-palm-green/80 text-sm mb-3">
                Need immediate assistance during your trip? Our 24/7 emergency hotline is always available.
              </p>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-sunset-orange" />
                <span className="text-sm font-medium text-palm-green">+1 (555) 911-0000</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Map or Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.0 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-palm-green mb-4">
              Why Choose Our Travel Agency?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-sunshine-yellow to-sunset-orange rounded-full flex items-center justify-center">
                  <span className="text-2xl">⭐</span>
                </div>
                <h4 className="font-semibold text-palm-green mb-2">Expert Planning</h4>
                <p className="text-sm text-palm-green/70">15+ years of travel expertise</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-sunshine-yellow to-sunset-orange rounded-full flex items-center justify-center">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h4 className="font-semibold text-palm-green mb-2">Safe & Secure</h4>
                <p className="text-sm text-palm-green/70">Full travel insurance included</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-sunshine-yellow to-sunset-orange rounded-full flex items-center justify-center">
                  <span className="text-2xl">💎</span>
                </div>
                <h4 className="font-semibold text-palm-green mb-2">Premium Service</h4>
                <p className="text-sm text-palm-green/70">Personalized travel experiences</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 