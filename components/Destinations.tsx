"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, MapPin, Clock, Users } from "lucide-react";
import { useState } from "react";
import PackageDetailsModal from "./PackageDetailsModal";

const Destinations = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (destination: any) => {
    setSelectedPackage(destination);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPackage(null);
  };

  const destinations = [
    {
      name: "Sigiriya",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      // price: "$899",
      duration: "3 days",
      travelers: "2-6 people",
      description:
        "Ancient palace and fortress complex with stunning views and rich history.",
      detailedDescription:
        "Experience the magnificent Sigiriya Rock Fortress, a UNESCO World Heritage site that stands as one of Sri Lanka's most iconic landmarks. This ancient palace complex, built by King Kassapa I in the 5th century, offers breathtaking panoramic views and showcases remarkable ancient engineering and artistic achievements.",
      inclusions: [
        "3N Hotel Accommodation in heritage hotel",
        "All Meals (Breakfast, Lunch, Dinner)",
        "Entrance fees to Sigiriya Rock Fortress",
        "Professional English-speaking guide",
        "Air-conditioned vehicle transfers",
        "Minneriya National Park safari",
      ],
      highlights: [
        "Climb the iconic Sigiriya Rock Fortress",
        "Explore ancient frescoes and water gardens",
        "Wildlife safari at Minneriya National Park",
        "Visit Dambulla Cave Temple",
        "Traditional Sri Lankan cultural show",
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Dambulla Cave Temple",
          description:
            "Arrive at Colombo airport, transfer to Dambulla. Visit the famous Dambulla Cave Temple with its ancient Buddhist murals and statues.",
        },
        {
          day: 2,
          title: "Sigiriya Rock Fortress",
          description:
            "Early morning climb to Sigiriya Rock Fortress. Explore the ancient palace ruins, frescoes, and enjoy panoramic views from the summit.",
        },
        {
          day: 3,
          title: "Minneriya Safari & Departure",
          description:
            "Morning safari at Minneriya National Park to spot elephants and other wildlife. Afternoon transfer back to Colombo for departure.",
        },
      ],
      accommodation: {
        type: "Heritage Hotel with Modern Amenities",
        features: [
          "Air conditioning",
          "Free WiFi",
          "Restaurant",
          "Swimming pool",
          "Garden view",
          "24/7 room service",
        ],
      },
      meals: [
        "Daily breakfast",
        "Traditional Sri Lankan lunch",
        "Dinner with local cuisine",
      ],
      transfers: [
        "Airport pickup and drop-off",
        "All sightseeing transfers",
        "Safari vehicle",
      ],
      activities: [
        "Sigiriya Rock climbing",
        "Dambulla Cave Temple visit",
        "Minneriya National Park safari",
        "Cultural show",
      ],
      priceIncludes: [
        "3 nights accommodation",
        "All meals as specified",
        "All entrance fees",
        "Professional guide",
        "All transfers",
        "Safari charges",
      ],
      priceExcludes: [
        "International flights",
        "Personal expenses",
        "Tips and gratuities",
        "Travel insurance",
        "Visa fees",
      ],
      cancellationPolicy:
        "Free cancellation up to 7 days before departure. 50% refund for cancellations 3-6 days before. No refund for cancellations within 3 days.",
      bookingPolicy:
        "Full payment required at time of booking. Confirmation will be sent within 24 hours.",
    },
    {
      name: "Galle Fort",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      price: "$699",
      duration: "2 days",
      travelers: "2-4 people",
      description:
        "Historic coastal fort with colonial architecture and beautiful ocean views.",
      detailedDescription:
        "Discover the charming Galle Fort, a UNESCO World Heritage site that perfectly blends Dutch colonial architecture with Sri Lankan culture. This historic fortress offers a unique glimpse into the island's colonial past while providing stunning ocean views and a vibrant cultural atmosphere.",
      inclusions: [
        "2N Hotel Accommodation in colonial boutique hotel",
        "Half Board Meals",
        "Fort walking tour with guide",
        "All transfers in air-conditioned vehicle",
        "Entrance fees to museums",
        "Sunset cruise",
      ],
      highlights: [
        "Explore UNESCO World Heritage Galle Fort",
        "Colonial architecture walking tour",
        "Sunset cruise along the coast",
        "Visit Galle Lighthouse and Clock Tower",
        "Shopping at local boutiques and cafes",
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Fort Exploration",
          description:
            "Arrive in Galle, check into boutique hotel. Afternoon walking tour of the fort, visiting museums, lighthouse, and colonial buildings.",
        },
        {
          day: 2,
          title: "Cultural Sites & Sunset Cruise",
          description:
            "Morning visit to nearby temples and markets. Afternoon sunset cruise along the coast. Evening at leisure to explore local cafes and shops.",
        },
      ],
      accommodation: {
        type: "Boutique Colonial Hotel",
        features: [
          "Historic colonial architecture",
          "Ocean view rooms",
          "Free WiFi",
          "Restaurant",
          "Garden courtyard",
          "Concierge service",
        ],
      },
      meals: ["Daily breakfast", "Traditional Sri Lankan dinner"],
      transfers: [
        "Airport pickup and drop-off",
        "All sightseeing transfers",
        "Sunset cruise boat",
      ],
      activities: [
        "Fort walking tour",
        "Museum visits",
        "Sunset cruise",
        "Shopping and dining",
      ],
      priceIncludes: [
        "2 nights accommodation",
        "Half board meals",
        "All entrance fees",
        "Professional guide",
        "All transfers",
        "Sunset cruise",
      ],
      priceExcludes: [
        "International flights",
        "Personal expenses",
        "Tips and gratuities",
        "Travel insurance",
        "Additional meals",
      ],
      cancellationPolicy:
        "Free cancellation up to 5 days before departure. 30% refund for cancellations 2-4 days before. No refund for cancellations within 2 days.",
      bookingPolicy:
        "50% deposit required at booking, balance due 7 days before departure.",
    },
    {
      name: "Ella",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      price: "$799",
      duration: "4 days",
      travelers: "2-8 people",
      description:
        "Mountain village with tea plantations, hiking trails, and scenic train rides.",
      detailedDescription:
        "Immerse yourself in the breathtaking beauty of Ella, a charming mountain village surrounded by lush tea plantations and misty hills. This 4-day adventure combines scenic train journeys, invigorating hikes, and authentic tea plantation experiences in Sri Lanka's hill country.",
      inclusions: [
        "4N Hotel Accommodation in mountain resort",
        "All Meals (Breakfast, Lunch, Dinner)",
        "Scenic train journey (Kandy to Ella)",
        "Tea plantation tour and tasting",
        "Professional hiking guide",
        "All transfers and activities",
      ],
      highlights: [
        "Scenic train journey through tea country",
        "Hike to Little Adam's Peak",
        "Visit Nine Arch Bridge",
        "Tea plantation tour and factory visit",
        "Ella Rock hiking adventure",
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Scenic Train Journey",
          description:
            "Arrive in Kandy, board the famous scenic train to Ella. Enjoy breathtaking views of tea plantations and mountains during the journey.",
        },
        {
          day: 2,
          title: "Little Adam's Peak & Nine Arch Bridge",
          description:
            "Morning hike to Little Adam's Peak for sunrise views. Afternoon visit to the iconic Nine Arch Bridge and surrounding areas.",
        },
        {
          day: 3,
          title: "Ella Rock & Tea Plantation",
          description:
            "Challenging hike to Ella Rock for panoramic views. Afternoon tea plantation tour with factory visit and tasting session.",
        },
        {
          day: 4,
          title: "Departure",
          description:
            "Morning at leisure for last-minute shopping or relaxation. Transfer back to Colombo for departure.",
        },
      ],
      accommodation: {
        type: "Mountain Resort with Tea Garden Views",
        features: [
          "Mountain view rooms",
          "Free WiFi",
          "Restaurant",
          "Tea garden access",
          "Hiking equipment rental",
          "Fireplace lounge",
        ],
      },
      meals: [
        "Daily breakfast",
        "Traditional Sri Lankan meals",
        "Tea plantation lunch",
        "Mountain resort dinner",
      ],
      transfers: [
        "Airport pickup and drop-off",
        "Scenic train tickets",
        "All hiking transfers",
        "Tea plantation transport",
      ],
      activities: [
        "Scenic train journey",
        "Little Adam's Peak hike",
        "Ella Rock hiking",
        "Tea plantation tour",
        "Nine Arch Bridge visit",
      ],
      priceIncludes: [
        "4 nights accommodation",
        "All meals as specified",
        "Scenic train journey",
        "All entrance fees",
        "Professional hiking guide",
        "All transfers and activities",
      ],
      priceExcludes: [
        "International flights",
        "Personal expenses",
        "Tips and gratuities",
        "Travel insurance",
        "Hiking equipment (available for rent)",
      ],
      cancellationPolicy:
        "Free cancellation up to 10 days before departure. 25% refund for cancellations 5-9 days before. No refund for cancellations within 5 days.",
      bookingPolicy:
        "30% deposit required at booking, balance due 14 days before departure. Hiking difficulty: Moderate to challenging.",
    },
    {
      name: "Mirissa",
      image:
        "https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      price: "$599",
      duration: "3 days",
      travelers: "2-6 people",
      description:
        "Pristine beaches, whale watching, and laid-back coastal atmosphere.",
      detailedDescription:
        "Escape to the tropical paradise of Mirissa, where pristine beaches meet crystal-clear waters. This 3-day coastal retreat offers whale watching adventures, beach relaxation, and the perfect blend of adventure and tranquility on Sri Lanka's southern coast.",
      inclusions: [
        "3N Beach Hotel Accommodation",
        "Half Board Meals",
        "Whale watching boat trip",
        "Snorkeling equipment and trip",
        "Beach transfers",
        "Sunset beach dinner",
      ],
      highlights: [
        "Whale and dolphin watching expedition",
        "Snorkeling in coral reefs",
        "Relaxation on pristine beaches",
        "Sunset beach dinner",
        "Local fishing village visit",
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Beach Relaxation",
          description:
            "Arrive in Mirissa, check into beach hotel. Afternoon beach relaxation and exploration of the coastal area.",
        },
        {
          day: 2,
          title: "Whale Watching & Snorkeling",
          description:
            "Early morning whale watching boat trip. Afternoon snorkeling adventure in coral reefs. Evening sunset beach dinner.",
        },
        {
          day: 3,
          title: "Beach Activities & Departure",
          description:
            "Morning beach activities and local fishing village visit. Afternoon transfer back to Colombo for departure.",
        },
      ],
      accommodation: {
        type: "Beachfront Hotel with Ocean Views",
        features: [
          "Ocean view rooms",
          "Beach access",
          "Free WiFi",
          "Restaurant",
          "Swimming pool",
          "Beach bar",
        ],
      },
      meals: [
        "Daily breakfast",
        "Seafood lunch",
        "Sunset beach dinner",
        "Traditional coastal cuisine",
      ],
      transfers: [
        "Airport pickup and drop-off",
        "Whale watching boat",
        "Beach transfers",
        "Snorkeling boat",
      ],
      activities: [
        "Whale watching",
        "Snorkeling",
        "Beach relaxation",
        "Fishing village tour",
        "Sunset dinner",
      ],
      priceIncludes: [
        "3 nights accommodation",
        "Half board meals",
        "Whale watching trip",
        "Snorkeling equipment",
        "All transfers",
        "Beach activities",
      ],
      priceExcludes: [
        "International flights",
        "Personal expenses",
        "Tips and gratuities",
        "Travel insurance",
        "Additional water activities",
      ],
      cancellationPolicy:
        "Free cancellation up to 7 days before departure. 40% refund for cancellations 3-6 days before. No refund for cancellations within 3 days.",
      bookingPolicy:
        "Full payment required at time of booking. Weather-dependent activities may be rescheduled.",
    },
    {
      name: "Kandy",
      image:
        "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.6,
      price: "$649",
      duration: "2 days",
      travelers: "2-4 people",
      description:
        "Cultural capital with the Temple of the Tooth and beautiful lake views.",
      detailedDescription:
        "Experience the cultural heart of Sri Lanka in Kandy, home to the sacred Temple of the Tooth Relic and surrounded by beautiful hills and lakes. This 2-day cultural journey offers insights into Sri Lankan traditions, religious heritage, and the royal history of the last kingdom of Sri Lanka.",
      inclusions: [
        "2N Hotel Accommodation in city center",
        "All Meals (Breakfast, Lunch, Dinner)",
        "Temple of the Tooth entrance",
        "Cultural dance show",
        "City tour with guide",
        "All transfers",
      ],
      highlights: [
        "Visit sacred Temple of the Tooth Relic",
        "Traditional Kandyan cultural dance show",
        "Kandy Lake boat ride",
        "Royal Botanical Gardens tour",
        "Local market and craft shopping",
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Temple of the Tooth",
          description:
            "Arrive in Kandy, check into hotel. Afternoon visit to the sacred Temple of the Tooth Relic and Kandy Lake. Evening cultural dance show.",
        },
        {
          day: 2,
          title: "Botanical Gardens & Departure",
          description:
            "Morning visit to Royal Botanical Gardens. Afternoon local market shopping and craft center visit. Transfer back to Colombo for departure.",
        },
      ],
      accommodation: {
        type: "City Center Hotel with Lake Views",
        features: [
          "Lake view rooms",
          "Free WiFi",
          "Restaurant",
          "Cultural show venue",
          "Garden",
          "Concierge service",
        ],
      },
      meals: [
        "Daily breakfast",
        "Traditional Sri Lankan lunch",
        "Cultural dinner with show",
        "Local cuisine",
      ],
      transfers: [
        "Airport pickup and drop-off",
        "City tour vehicle",
        "Lake boat",
        "All sightseeing transfers",
      ],
      activities: [
        "Temple of the Tooth visit",
        "Cultural dance show",
        "Lake boat ride",
        "Botanical Gardens tour",
        "Market shopping",
      ],
      priceIncludes: [
        "2 nights accommodation",
        "All meals as specified",
        "All entrance fees",
        "Cultural show tickets",
        "Professional guide",
        "All transfers",
      ],
      priceExcludes: [
        "International flights",
        "Personal expenses",
        "Tips and gratuities",
        "Travel insurance",
        "Shopping expenses",
      ],
      cancellationPolicy:
        "Free cancellation up to 5 days before departure. 30% refund for cancellations 2-4 days before. No refund for cancellations within 2 days.",
      bookingPolicy:
        "50% deposit required at booking, balance due 7 days before departure. Temple visits require appropriate dress code.",
    },
    {
      name: "Yala National Park",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      price: "$999",
      duration: "3 days",
      travelers: "2-6 people",
      description:
        "Wildlife safari with leopards, elephants, and diverse bird species.",
      detailedDescription:
        "Embark on an unforgettable wildlife adventure in Yala National Park, Sri Lanka's premier wildlife destination. This 3-day safari experience offers the best chance to spot leopards, elephants, and over 200 bird species in their natural habitat, combined with luxury tented accommodation and expert wildlife guides.",
      inclusions: [
        "3N Luxury Tented Camp Accommodation",
        "All Meals (Breakfast, Lunch, Dinner)",
        "6 Safari game drives",
        "Professional wildlife guide",
        "4WD safari vehicle",
        "All park entrance fees",
      ],
      highlights: [
        "Multiple leopard spotting opportunities",
        "Elephant herds in natural habitat",
        "Over 200 bird species",
        "Luxury tented camp experience",
        "Expert wildlife photography guidance",
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Evening Safari",
          description:
            "Arrive at Yala, check into luxury tented camp. Afternoon briefing and evening safari drive to spot wildlife during golden hour.",
        },
        {
          day: 2,
          title: "Full Day Safari Adventure",
          description:
            "Early morning safari drive for leopard spotting. Return to camp for breakfast. Afternoon safari focusing on elephants and bird watching.",
        },
        {
          day: 3,
          title: "Morning Safari & Departure",
          description:
            "Final morning safari drive for last wildlife encounters. Breakfast at camp and transfer back to Colombo for departure.",
        },
      ],
      accommodation: {
        type: "Luxury Tented Camp",
        features: [
          "Luxury tented accommodation",
          "Private bathroom",
          "Solar power",
          "Restaurant",
          "Wildlife viewing deck",
          "Expert guides",
        ],
      },
      meals: [
        "Daily breakfast",
        "Safari picnic lunch",
        "Camp dinner",
        "Traditional Sri Lankan cuisine",
      ],
      transfers: [
        "Airport pickup and drop-off",
        "4WD safari vehicle",
        "All park transfers",
        "Camp transport",
      ],
      activities: [
        "6 safari game drives",
        "Wildlife photography",
        "Bird watching",
        "Nature walks",
        "Camp activities",
      ],
      priceIncludes: [
        "3 nights luxury tented camp",
        "All meals as specified",
        "6 safari game drives",
        "Professional wildlife guide",
        "4WD safari vehicle",
        "All park entrance fees",
      ],
      priceExcludes: [
        "International flights",
        "Personal expenses",
        "Tips and gratuities",
        "Travel insurance",
        "Camera equipment rental",
      ],
      cancellationPolicy:
        "Free cancellation up to 14 days before departure. 20% refund for cancellations 7-13 days before. No refund for cancellations within 7 days.",
      bookingPolicy:
        "Full payment required at time of booking. Wildlife sightings are not guaranteed but highly likely with our expert guides.",
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
      id="destinations"
      className="py-20 bg-gradient-to-br from-ceylon-white via-ceylon-golden/20 to-ceylon-golden/10"
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
            <span className="text-ceylon-leaf">Popular</span>
            <span className="text-travel-gradient"> Destinations</span>
          </h2>
          <p className="text-lg text-ceylon-leaf/80 max-w-3xl mx-auto">
            Discover Sri Lanka's most breathtaking destinations handpicked by
            our travel experts. Each location offers unique experiences and
            unforgettable memories.
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
                transition: { duration: 0.2 },
              }}
              className="glass glass-hover group cursor-pointer overflow-hidden rounded-xl transition-all duration-300"
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
                {/* <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="absolute top-4 right-4 bg-gradient-to-r from-ceylon-brown to-ceylon-golden text-ceylon-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg"
                >
                  {destination.price}
                </motion.div> */}

                {/* Rating */}
                <div className="absolute bottom-4 left-4 flex items-center space-x-1 bg-ceylon-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                  <Star className="w-4 h-4 text-ceylon-golden fill-current" />
                  <span className="text-sm font-semibold text-ceylon-leaf">
                    {destination.rating}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div
                className="p-6 backdrop-blur-sm"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              >
                <h3 className="text-xl font-semibold text-ceylon-leaf mb-2 group-hover:text-ceylon-teal transition-colors duration-300">
                  {destination.name}
                </h3>

                <p className="text-ceylon-leaf/80 mb-4 leading-relaxed">
                  {destination.description}
                </p>

                {/* Trip Details */}
                <div
                  className="space-y-2 backdrop-blur-sm rounded-lg p-3"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                >
                  <div className="flex items-center text-sm text-ceylon-leaf/90">
                    <Clock className="w-4 h-4 mr-2 text-ceylon-teal" />
                    <span>{destination.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-ceylon-leaf/90">
                    <Users className="w-4 h-4 mr-2 text-ceylon-teal" />
                    <span>{destination.travelers}</span>
                  </div>
                  <div className="flex items-center text-sm text-ceylon-leaf/90">
                    <MapPin className="w-4 h-4 mr-2 text-ceylon-teal" />
                    <span>All inclusive</span>
                  </div>
                </div>

                {/* View Details Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleViewDetails(destination)}
                  className="w-full mt-4 bg-gradient-to-r from-ceylon-teal to-ceylon-navy text-ceylon-white py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
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
          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-8 py-4"
          >
            View All Destinations
          </motion.button> */}
        </motion.div>
      </div>

      {/* Package Details Modal */}
      <PackageDetailsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        packageDetails={selectedPackage}
      />
    </section>
  );
};

export default Destinations;
