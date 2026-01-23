"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-ceylon-light">
      {/* Hero Section with Owner */}
      <section
        id="about"
        className="pt-32 pb-24 bg-ceylon-light relative overflow-hidden"
      >
        {/* Animated Background Gradients - Light & Airy */}
        <div className="absolute top-0 left-0 w-full h-full">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -left-1/4 w-[100%] h-[100%] bg-ceylon-teal/20 blur-[120px] rounded-full" 
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-1/2 -right-1/4 w-[100%] h-[100%] bg-ceylon-gold/20 blur-[120px] rounded-full" 
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
            >
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-1.5 rounded-full bg-ceylon-teal/5 border border-ceylon-teal/10 text-ceylon-teal text-[10px] uppercase tracking-[0.4em] mb-8 font-bold"
              >
                Our Legacy
              </motion.div>
              <h2 className="text-5xl md:text-7xl font-serif text-ceylon-dark mb-8 leading-[1.1]">
                About <br />
                <span className="text-ceylon-teal italic">Ceylon Shine</span>
              </h2>
              <p className="text-ceylon-dark/60 text-xl font-light leading-relaxed mb-10 max-w-xl">
                Born in the heart of Ahangama, we craft bespoke journeys that bridge 
                the gap between standard travel and soulful discovery.
              </p>
              <div className="flex items-center space-x-6">
                <div className="w-20 h-0.5 bg-ceylon-golden/30 rounded-full"></div>
                <span className="text-ceylon-golden font-serif italic text-lg opacity-80">
                  Est. 2020 • Sri Lanka
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 40, damping: 20, delay: 0.3 }}
              className="relative"
            >
              <div className="relative w-full max-w-lg mx-auto">
                {/* Refined Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-ceylon-golden/10 to-ceylon-teal/10 rounded-[4rem] blur-2xl transform rotate-6 translate-x-4 translate-y-4"></div>
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-ceylon-teal/5 rounded-[3rem] p-4 backdrop-blur-sm border border-ceylon-teal/10 transform -rotate-2 group-hover:rotate-0 transition-transform duration-700"></div>
                  <div className="relative bg-white rounded-[3rem] p-2 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden">
                    <div className="relative h-[500px] w-full rounded-[2.5rem] overflow-hidden">
                      <Image
                        src="/owner-image.png"
                        alt="Ceylon Shine Travel Founder"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-[2s]"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ceylon-light/40 via-transparent to-transparent"></div>
                    </div>
                  </div>
                  
                  {/* Floating Recognition Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                    className="absolute -bottom-8 -right-8 bg-white rounded-3xl p-6 shadow-2xl border border-ceylon-teal/5 max-w-[200px]"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {[1,2,3,4,5].map(s => <span key={s} className="text-ceylon-gold text-xs">★</span>)}
                    </div>
                    <p className="text-ceylon-dark font-serif text-sm leading-tight italic">"Turning travel dreams into timeless reality."</p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Values, Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-ceylon-dark/5 to-ceylon-teal/5 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-ceylon-gold/5 blur-[100px] rounded-full -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-ceylon-teal/5 blur-[100px] rounded-full -ml-48 -mb-48" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-ceylon-dark mb-6">
              The Soul of Our <span className="text-ceylon-teal">Journey</span>
            </h2>
            <div className="w-24 h-1 bg-ceylon-gold/30 mx-auto mb-8 rounded-full" />
            <p className="text-ceylon-dark/60 max-w-2xl mx-auto text-xl font-light">
              Crafting experiences that resonate with the spirit of Sri Lanka, 
              guided by an unwavering commitment to authenticity and excellence.
            </p>
          </motion.div>

          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.2
                }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-10 md:grid-cols-3"
          >
            {[
              {
                title: "Mission",
                color: "teal",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />,
                description: "To deliver exceptional, sustainable travel experiences that celebrate culture, nature, and community while creating lasting memories.",
                colors: "from-ceylon-teal to-ceylon-navy"
              },
              {
                title: "Values",
                color: "golden",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
                description: "Hospitality, integrity, and stewardship. We respect local communities and the environment while delighting our guests with authentic experiences.",
                colors: "from-ceylon-golden to-ceylon-navy"
              },
              {
                title: "Choose Us",
                color: "navy",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />,
                description: "Expert planners, 24/7 assistance, and handpicked stays and experiences for every style and budget with personalized attention.",
                colors: "from-ceylon-navy to-ceylon-leaf"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { type: "spring", stiffness: 100, damping: 15 } 
                  }
                }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group bg-white rounded-[3rem] p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-ceylon-teal/5 relative overflow-hidden"
              >
                {/* Micro-Glow Effect */}
                <div className={`absolute -top-12 -right-12 w-32 h-32 bg-ceylon-${item.color === 'navy' ? 'dark' : (item.color === 'golden' ? 'gold' : 'teal')}/5 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-700`} />
                
                <div className={`w-14 h-14 bg-gradient-to-br ${item.colors} rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:rotate-6 transition-transform duration-500`}>
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>
                
                <h3 className="text-2xl font-serif text-ceylon-dark mb-4">
                  Our <span className={`text-ceylon-${item.color}`}>{item.title}</span>
                </h3>
                <p className="text-ceylon-dark/60 leading-relaxed font-light text-lg">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
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
