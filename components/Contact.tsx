"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle,
  AlertCircle,
  Compass,
  ArrowRight,
  Globe,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';

// Form data type
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  destination: string;
  message: string;
}

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Form state
  // Form data state for controlled inputs
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    destination: "",
    message: "",
  });

  // Client-side validation state
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Formspree hook
  const [state, handleSubmit] = useForm("maqedpjk");

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Form validation
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (
      !/^[\+]?[0-9\s\-\(\)]{10,}$/.test(formData.phone.replace(/\s/g, ""))
    ) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.destination) {
      newErrors.destination = "Please select a destination";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  // Handle form submission
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Call Formspree submit handler
    await handleSubmit(e);

    // Optional: clear form data on success happens in the success view or manually here if needed
    // But since we switch views on success, clearing simple inputs might not be strictly necessary immediately
    if (state.succeeded) {
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            destination: "",
            message: "",
        });
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Talk to an Expert",
      info: "+94 77 993 3765",
      description: "Available 24/7 for you",
      color: "bg-ceylon-gold"
    },
    {
      icon: MapPin,
      title: "Our Sanctuary",
      info: "Ahangama, Sri Lanka",
      description: "Visit our colonial estate",
      color: "bg-ceylon-teal"
    },
    {
      icon: Clock,
      title: "Live Support",
      info: "Mon - Sat",
      description: "9:00 AM - 6:00 PM",
      color: "bg-ceylon-dark"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden bg-white">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-ceylon-light/50 -skew-x-12 translate-x-1/2 pointer-events-none" />
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute -top-64 -right-64 opacity-[0.03] pointer-events-none"
      >
        <Compass size={800} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Left Column: Atmospheric Content (40%) */}
          <div className="lg:col-span-5 space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center space-x-3 bg-ceylon-teal/5 px-6 py-2 rounded-full border border-ceylon-teal/10">
                <Sparkles size={14} className="text-ceylon-teal" />
                <span className="text-[10px] uppercase tracking-[0.4em] text-ceylon-teal font-black">Begin your journey</span>
              </div>
              
              <h2 className="text-6xl md:text-8xl font-serif text-ceylon-dark leading-[0.9] tracking-tighter">
                Let's <br />
                <span className="italic text-ceylon-gold glow-text-soft">Connect</span>
              </h2>
              
              <p className="text-xl text-ceylon-dark/50 font-light leading-relaxed max-w-sm">
                Every great adventure starts with a single conversation. Tell us your dreams, and we'll handle the rest.
              </p>
            </motion.div>

            {/* Vertical boutique cards */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {contactInfo.map((info, idx) => (
                <motion.div
                  key={info.title}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-6 p-6 rounded-3xl bg-ceylon-light/30 border border-white hover:bg-white hover:shadow-2xl hover:shadow-ceylon-teal/5 transition-all duration-500 group"
                >
                  <div className={`w-14 h-14 rounded-2xl ${info.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <info.icon size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-ceylon-teal font-black mb-1">{info.title}</h4>
                    <p className="text-xl font-serif text-ceylon-dark">{info.info}</p>
                    <p className="text-[10px] text-ceylon-dark/40 uppercase tracking-widest font-bold mt-1">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

           
          </div>

          {/* Right Column: High-End Form (60%) */}
          <div className="lg:col-span-7 relative">
          
            <AnimatePresence mode="wait">
              {state.succeeded ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="h-full min-h-[600px] flex flex-col items-center justify-center text-center space-y-8 bg-ceylon-teal/5 rounded-[4rem] border-2 border-dashed border-ceylon-teal/20 p-12"
                >
                  <div className="w-24 h-24 bg-ceylon-teal text-white rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                    <CheckCircle size={48} />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-5xl font-serif text-ceylon-dark">Message Sent!</h3>
                    <p className="text-ceylon-dark/50 max-w-sm mx-auto text-lg font-light">
                      Thank you for beginning your journey with us. 
                      Our experts will reach out to you within the next 2 hours.
                    </p>
                  </div>
                  <button 
                    onClick={() => window.location.reload()}
                    className="text-[10px] uppercase tracking-[0.4em] font-black text-ceylon-teal hover:text-ceylon-dark transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-[4rem] p-10 md:p-16 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-ceylon-gold/3 relative overflow-hidden"
                >
                  {/* Form Glow Effect */}
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-ceylon-gold/10 blur-[100px] rounded-full pointer-events-none" />
                  
                  <form onSubmit={handleFormSubmit} className="space-y-10 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="relative group">
                        <label className="absolute -top-3 left-6 bg-white px-2 text-[10px] uppercase tracking-[0.2em] text-ceylon-teal font-black z-10">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full bg-ceylon-light/50 border-2 border-ceylon-teal/5 rounded-3xl px-8 py-5 text-ceylon-dark focus:bg-white focus:border-ceylon-teal focus:ring-0 transition-all duration-300 font-medium placeholder:text-ceylon-dark/30 hover:border-ceylon-gold/30"
                          placeholder="Your given name"
                        />
                        {errors.firstName && <p className="text-[10px] text-ceylon-clay mt-2 ml-4 italic flex items-center gap-1"><AlertCircle size={10}/> {errors.firstName}</p>}
                      </div>
                      <div className="relative group">
                        <label className="absolute -top-3 left-6 bg-white px-2 text-[10px] uppercase tracking-[0.2em] text-ceylon-teal font-black z-10">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full bg-ceylon-light/50 border-2 border-ceylon-teal/5 rounded-3xl px-8 py-5 text-ceylon-dark focus:bg-white focus:border-ceylon-teal focus:ring-0 transition-all duration-300 font-medium placeholder:text-ceylon-dark/30 hover:border-ceylon-gold/30"
                          placeholder="Your family name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="relative group">
                        <label className="absolute -top-3 left-6 bg-white px-2 text-[10px] uppercase tracking-[0.2em] text-ceylon-teal font-black z-10">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-ceylon-light/50 border-2 border-ceylon-teal/5 rounded-3xl px-8 py-5 text-ceylon-dark focus:bg-white focus:border-ceylon-teal focus:ring-0 transition-all duration-300 font-medium placeholder:text-ceylon-dark/30 hover:border-ceylon-gold/30"
                          placeholder="name@example.com"
                        />
                        {errors.email && <p className="text-[10px] text-ceylon-clay mt-2 ml-4 italic flex items-center gap-1"><AlertCircle size={10}/> {errors.email}</p>}
                      </div>
                      <div className="relative group">
                        <label className="absolute -top-3 left-6 bg-white px-2 text-[10px] uppercase tracking-[0.2em] text-ceylon-teal font-black z-10">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full bg-ceylon-light/50 border-2 border-ceylon-teal/5 rounded-3xl px-8 py-5 text-ceylon-dark focus:bg-white focus:border-ceylon-teal focus:ring-0 transition-all duration-300 font-medium placeholder:text-ceylon-dark/30 hover:border-ceylon-gold/30"
                          placeholder="+94 7X XXX XXXX"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <label className="absolute -top-3 left-6 bg-white px-2 text-[10px] uppercase tracking-[0.2em] text-ceylon-teal font-black z-10">Journey Interest</label>
                      <select
                        name="destination"
                        value={formData.destination}
                        onChange={handleInputChange}
                        className="w-full bg-ceylon-light/50 border-2 border-ceylon-teal/5 rounded-3xl px-8 py-5 text-ceylon-dark focus:bg-white focus:border-ceylon-teal focus:ring-0 transition-all duration-300 font-medium appearance-none hover:border-ceylon-gold/30"
                      >
                        <option value="">Choose a path...</option>
                        <option value="Sigiriya">Sigiriya - Ancient Highs</option>
                        <option value="Galle Fort">Galle Fort - Colonial Soul</option>
                        <option value="Ella">Ella - Misty Mountains</option>
                        <option value="Mirissa">Mirissa - Coastal Secrets</option>
                        <option value="Kandy">Kandy - Royal Heritage</option>
                        <option value="Yala">Yala - Wild Hearts</option>
                        <option value="Custom">A Bespoke Journey</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-ceylon-gold">
                        <ArrowRight size={18} className="rotate-90" />
                      </div>
                    </div>

                    <div className="relative">
                      <label className="absolute -top-3 left-6 bg-white px-2 text-[10px] uppercase tracking-[0.2em] text-ceylon-teal font-black z-10">Your Vision</label>
                      <textarea
                        rows={5}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full bg-ceylon-light/50 border-2 border-ceylon-teal/5 rounded-[2rem] px-8 py-6 text-ceylon-dark focus:bg-white focus:border-ceylon-teal focus:ring-0 transition-all duration-300 font-medium resize-none placeholder:text-ceylon-dark/30 hover:border-ceylon-gold/30"
                        placeholder="Tell us what sparks your wanderlust..."
                      />
                    </div>

                    <motion.button
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 20px 40px -10px rgba(29, 162, 160, 0.4)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      disabled={state.submitting}
                      className="w-full py-6 bg-ceylon-teal text-white rounded-3xl text-[10px] uppercase tracking-[0.5em] font-black shadow-2xl overflow-hidden relative group"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        {state.submitting ? (
                          <>Preparing Wings... <Compass className="animate-spin" size={16}/></>
                        ) : (
                          <>Start the Journey <Send size={14} /></>
                        )}
                      </span>
                      <motion.div 
                        className="absolute inset-0 bg-white"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                    </motion.button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
              {/* Immersive Sanctuary Card */}
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[3rem] p-10 bg-ceylon-dark text-white shadow-2xl group mt-10"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-[2s]">
                <Globe size={180} />
              </div>
              <div className="relative z-10 space-y-6">
                <h3 className="text-3xl font-serif leading-tight">Visit our sanctuary <br />in <span className="text-ceylon-gold">Ahangama</span></h3>
                <p className="text-white/40 font-light text-sm max-w-[200px]">Experience traditional Ceylon tea in our colonial-style office.</p>
                <motion.button 
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-3 text-[10px] uppercase tracking-[0.3em] font-black text-ceylon-gold"
                >
                  <span>Get Directions</span>
                  <ArrowRight size={14} />
                </motion.button>
              </div>
            </motion.div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
