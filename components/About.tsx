"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-ceylon-light">
      {/* Hero Section with Owner */}
      <section
        id="about"
        className="pt-28 pb-16 bg-gradient-to-br from-ceylon-teal via-ceylon-navy to-ceylon-golden relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-extrabold text-ceylon-white mb-6">
                About{" "}
                <span className="text-ceylon-golden">Ceylon Shine Travel</span>
              </h1>
              <p className="text-ceylon-white/90 text-lg md:text-xl leading-relaxed mb-8">
                We craft memorable journeys across Sri Lanka and beyond. With
                personalized itineraries, vetted partners, and dedicated
                support, we turn your travel dreams into reality.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-1 bg-ceylon-golden rounded-full"></div>
                <span className="text-ceylon-white/80 font-medium">
                  Est. 2020
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-ceylon-golden to-ceylon-teal rounded-3xl transform rotate-6 scale-105"></div>
                <div className="relative bg-white rounded-3xl p-2">
                  <div className="relative h-96 w-full rounded-2xl overflow-hidden">
                    <Image
                      src="/owner-image.png"
                      alt="Ceylon Shine Travel Founder & CEO"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                {/* <div className="absolute -bottom-6 -right-6 bg-ceylon-white rounded-2xl p-4 shadow-xl">
                  <h4 className="font-bold text-ceylon-dark">Sarah Perera</h4>
                  <p className="text-ceylon-teal text-sm">Founder & CEO</p>
                </div> */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Values, Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-ceylon-navy/10 to-ceylon-teal/10">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-ceylon-dark mb-4">
              What Drives <span className="text-travel-gradient">Us</span>
            </h2>
            <p className="text-ceylon-dark/70 max-w-2xl mx-auto text-lg">
              Our commitment to excellence and passion for travel guides
              everything we do
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl p-8 border border-ceylon-teal/20 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-ceylon-teal to-ceylon-navy rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-ceylon-dark mb-4">
                Our <span className="text-ceylon-teal">Mission</span>
              </h3>
              <p className="text-ceylon-dark/70">
                To deliver exceptional, sustainable travel experiences that
                celebrate culture, nature, and community while creating lasting
                memories.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass rounded-2xl p-8 border border-ceylon-golden/20 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-ceylon-golden to-ceylon-navy rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-ceylon-dark mb-4">
                Our <span className="text-ceylon-golden">Values</span>
              </h3>
              <p className="text-ceylon-dark/70">
                Hospitality, integrity, and stewardship. We respect local
                communities and the environment while delighting our guests with
                authentic experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass rounded-2xl p-8 border border-ceylon-navy/20 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-ceylon-navy to-ceylon-leaf rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-ceylon-dark mb-4">
                Why <span className="text-ceylon-navy">Choose Us</span>
              </h3>
              <p className="text-ceylon-dark/70">
                Expert planners, 24/7 assistance, and handpicked stays and
                experiences for every style and budget with personalized
                attention.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      {/* <section className="py-20 bg-gradient-to-br from-ceylon-teal/20 to-ceylon-navy/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-ceylon-dark mb-6">
                Our <span className="text-travel-gradient">Story</span>
              </h2>
              <p className="text-ceylon-dark/70 text-lg leading-relaxed mb-6">
                Founded in Ahangama, Ceylon Shine Travel began with a simple belief:
                travel should feel effortless and inspiring. Today, we partner
                with local guides and global providers to offer safe, authentic
                adventures that bring people closer to the heart of Sri Lanka
                and the world.
              </p>
              <p className="text-ceylon-dark/70 text-lg leading-relaxed mb-8">
                Our journey is marked by thousands of satisfied travelers who
                have entrusted us with their most precious moments. From humble
                beginnings to becoming one of Sri Lanka's most trusted travel
                partners, our commitment to excellence remains unwavering.
              </p>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-ceylon-teal">
                    5000+
                  </div>
                  <div className="text-ceylon-dark/70">Happy Travelers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-ceylon-golden">
                    150+
                  </div>
                  <div className="text-ceylon-dark/70">Destinations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-ceylon-navy">
                    4.9★
                  </div>
                  <div className="text-ceylon-dark/70">Average Rating</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-ceylon-golden to-ceylon-teal rounded-3xl transform -rotate-6 scale-105"></div>
                <div className="relative bg-white rounded-3xl p-2">
                  <div className="relative h-80 w-full rounded-2xl overflow-hidden">
                    <Image
                      src="/team-photo.svg"
                      alt="Ceylon Shine Travel Team"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* Leadership Team Section */}
      {/* <section className="py-20 bg-gradient-to-br from-ceylon-navy/5 to-ceylon-teal/5">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-ceylon-dark mb-4">
              Meet Our <span className="text-travel-gradient">Leadership</span>
            </h2>
            <p className="text-ceylon-dark/70 max-w-2xl mx-auto text-lg">
              The passionate team behind Ceylon Shine Travel's success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center group"
            >
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-ceylon-teal to-ceylon-navy rounded-full transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white">
                  <Image
                    src="/owner-photo.svg"
                    alt="Sarah Perera - Founder & CEO"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-ceylon-dark mb-2">
                Sarah Perera
              </h3>
              <p className="text-ceylon-teal font-medium mb-3">Founder & CEO</p>
              <p className="text-ceylon-dark/70 text-sm max-w-xs mx-auto">
                With over 15 years in the travel industry, Sarah's vision and
                leadership have made Ceylon Shine Travel a trusted name in
                luxury travel experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center group"
            >
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-ceylon-golden to-ceylon-navy rounded-full transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white">
                  <Image
                    src="/team-member-1.svg"
                    alt="Rajith Silva - Operations Director"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-ceylon-dark mb-2">
                Rajith Silva
              </h3>
              <p className="text-ceylon-golden font-medium mb-3">
                Operations Director
              </p>
              <p className="text-ceylon-dark/70 text-sm max-w-xs mx-auto">
                Rajith ensures every journey runs smoothly with his expertise in
                logistics and customer service excellence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center group"
            >
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-ceylon-navy to-ceylon-leaf rounded-full transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white">
                  <Image
                    src="/team-member-2.svg"
                    alt="Priya Fernando - Creative Director"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-ceylon-dark mb-2">
                Priya Fernando
              </h3>
              <p className="text-ceylon-navy font-medium mb-3">
                Creative Director
              </p>
              <p className="text-ceylon-dark/70 text-sm max-w-xs mx-auto">
                Priya brings creativity and innovation to every itinerary,
                ensuring unique and memorable experiences for our clients.
              </p>
            </motion.div>
          </div>
        </div>
      </section> */}
    </main>
  );
}
