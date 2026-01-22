"use client";

import { motion } from "framer-motion";
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
} from "lucide-react";
import { useState } from "react";

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
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    destination: "",
    message: "",
  });

  // Form validation and submission state
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Send email via Gmail SMTP API
  const sendEmailViaGmail = async (formData: FormData) => {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to send email");
    }

    return await response.json();
  };

  // Create mailto link as fallback
  const createMailtoLink = (formData: FormData) => {
    const subject = `New Contact Form Submission - ${formData.destination}`;
    const body = `
Hello Ceylon Shine Travel Team,

You have received a new contact form submission:

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Destination Interest: ${formData.destination}

Message:
${formData.message}

---
This message was sent from the Ceylon Shine Travel website contact form.
    `.trim();

    return `mailto:geethakasandesh95@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

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
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Try Gmail SMTP API first
      try {
        await sendEmailViaGmail(formData);
        setSubmitStatus("success");
      } catch (gmailError) {
        console.warn("Gmail API failed, falling back to mailto:", gmailError);
        // Fallback to mailto
        const mailtoLink = createMailtoLink(formData);
        window.open(mailtoLink, "_blank");
        setSubmitStatus("success");
      }

      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        destination: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      info: "+94 77 993 3765",
      description: "Available 24/7 for emergencies",
    },
    // {
    //   icon: Mail,
    //   title: "Email Us",
    //   info: "info@ceylonshinetravel.com",
    //   description: "Get a response within 2 hours",
    // },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "Ahangama, Southern Province, Sri Lanka",
      description: "Mon-Fri: 9AM-6PM",
    },
    {
      icon: Clock,
      title: "Live Chat",
      info: "Available Now",
      description: "Instant support online",
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
      id="contact"
      className="py-20 bg-gradient-to-br from-ceylon-white via-ceylon-golden/30 to-ceylon-golden/20"
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
            <span className="text-ceylon-leaf">Get In</span>
            <span className="text-travel-gradient"> Touch</span>
          </h2>
          <p className="text-lg text-ceylon-leaf/80 max-w-3xl mx-auto">
            Ready to start your next adventure in Sri Lanka? Our travel experts
            are here to help you plan the perfect trip. Contact us today and
            let's make your travel dreams come true.
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
              <h3 className="text-2xl font-semibold text-ceylon-leaf mb-6">
                Send us a Message
              </h3>
            </motion.div>

            <motion.form
              variants={itemVariants}
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-ceylon-leaf mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`input-travel w-full ${
                      errors.firstName
                        ? "border-red-500 focus:border-red-500"
                        : ""
                    }`}
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-ceylon-leaf mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`input-travel w-full ${
                      errors.lastName
                        ? "border-red-500 focus:border-red-500"
                        : ""
                    }`}
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-ceylon-leaf mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`input-travel w-full ${
                    errors.email ? "border-red-500 focus:border-red-500" : ""
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-ceylon-leaf mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`input-travel w-full ${
                    errors.phone ? "border-red-500 focus:border-red-500" : ""
                  }`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-ceylon-leaf mb-2">
                  Destination Interest *
                </label>
                <select
                  name="destination"
                  value={formData.destination}
                  onChange={handleInputChange}
                  className={`input-travel w-full ${
                    errors.destination
                      ? "border-red-500 focus:border-red-500"
                      : ""
                  }`}
                >
                  <option value="">Select a destination</option>
                  <option value="Sigiriya">Sigiriya</option>
                  <option value="Galle Fort">Galle Fort</option>
                  <option value="Ella">Ella</option>
                  <option value="Mirissa">Mirissa</option>
                  <option value="Kandy">Kandy</option>
                  <option value="Yala National Park">Yala National Park</option>
                  <option value="Other">Other</option>
                </select>
                {errors.destination && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.destination}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-ceylon-leaf mb-2">
                  Message *
                </label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`input-travel w-full resize-none ${
                    errors.message ? "border-red-500 focus:border-red-500" : ""
                  }`}
                  placeholder="Tell us about your travel plans and preferences..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Success/Error Messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg flex items-center"
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>
                    Message sent successfully! We've received your inquiry and
                    will get back to you soon.
                  </span>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg flex items-center"
                >
                  <AlertCircle className="w-5 h-5 mr-2" />
                  <span>Failed to send message. Please try again later.</span>
                </motion.div>
              )}

              <motion.button
                type="submit"
                variants={itemVariants}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                // disabled={isSubmitting}
                disabled={true} // disabled={true} to test
                className={`btn-primary w-full flex items-center justify-center space-x-2 ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
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
              <h3 className="text-2xl font-semibold text-ceylon-leaf mb-6">
                Contact Information
              </h3>
              <p className="text-ceylon-leaf/80 mb-8">
                We're here to help you plan the perfect trip to Sri Lanka. Reach
                out to us through any of these channels.
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
                    className="w-12 h-12 bg-gradient-to-br from-ceylon-golden to-ceylon-brown rounded-full flex items-center justify-center shadow-lg"
                  >
                    <info.icon className="w-6 h-6 text-ceylon-white" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-ceylon-leaf group-hover:text-ceylon-teal transition-colors duration-300">
                      {info.title}
                    </h4>
                    <p className="text-ceylon-leaf/80 font-medium">
                      {info.info}
                    </p>
                    <p className="text-sm text-ceylon-leaf/60">
                      {info.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Emergency Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="glass rounded-2xl p-6 border-l-4 border-ceylon-brown"
            >
              <div className="flex items-center space-x-3 mb-3">
                <MessageCircle className="w-6 h-6 text-ceylon-brown" />
                <h4 className="font-semibold text-ceylon-leaf">
                  Emergency Support
                </h4>
              </div>
              <p className="text-ceylon-leaf/80 text-sm mb-3">
                Need immediate assistance during your trip? Our 24/7 emergency
                hotline is always available.
              </p>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-ceylon-brown" />
                <span className="text-sm font-medium text-ceylon-leaf">
                  +94 77 993 3765
                </span>
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
            <h3 className="text-2xl font-semibold text-ceylon-leaf mb-4">
              Why Choose Ceylon Shine Travel?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-ceylon-golden to-ceylon-brown rounded-full flex items-center justify-center">
                  <span className="text-2xl">⭐</span>
                </div>
                <h4 className="font-semibold text-ceylon-leaf mb-2">
                  Expert Planning
                </h4>
                <p className="text-sm text-ceylon-leaf/70">
                  Many years of travel expertise
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-ceylon-golden to-ceylon-brown rounded-full flex items-center justify-center">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h4 className="font-semibold text-ceylon-leaf mb-2">
                  Safe & Secure
                </h4>
                <p className="text-sm text-ceylon-leaf/70">
                  Full travel insurance included
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-ceylon-golden to-ceylon-brown rounded-full flex items-center justify-center">
                  <span className="text-2xl">💎</span>
                </div>
                <h4 className="font-semibold text-ceylon-leaf mb-2">
                  Premium Service
                </h4>
                <p className="text-sm text-ceylon-leaf/70">
                  Personalized travel experiences
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
