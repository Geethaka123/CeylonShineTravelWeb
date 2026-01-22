"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Star,
  Clock,
  Users,
  MapPin,
  Plane,
  Utensils,
  Car,
  Wifi,
  Shield,
  CheckCircle,
} from "lucide-react";

interface PackageDetails {
  name: string;
  image: string;
  rating: number;
  price: string;
  duration: string;
  travelers: string;
  description: string;
  detailedDescription: string;
  inclusions: string[];
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  accommodation: {
    type: string;
    features: string[];
  };
  meals: string[];
  transfers: string[];
  activities: string[];
  priceIncludes: string[];
  priceExcludes: string[];
  cancellationPolicy: string;
  bookingPolicy: string;
}

interface PackageDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageDetails: PackageDetails | null;
}

const PackageDetailsModal = ({
  isOpen,
  onClose,
  packageDetails,
}: PackageDetailsModalProps) => {
  if (!packageDetails) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative">
              <div className="h-64 overflow-hidden">
                <img
                  src={packageDetails.image}
                  alt={packageDetails.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>

              {/* Package Title and Rating */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {packageDetails.name}
                    </h2>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                        <span className="text-sm font-semibold text-gray-800">
                          {packageDetails.rating}
                        </span>
                      </div>
                      <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-sm font-semibold text-gray-800">
                          {packageDetails.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* <div className="text-right">
                    <div className="text-3xl font-bold text-white">
                      {packageDetails.price}
                    </div>
                    <div className="text-white/80 text-sm">Starting price</div>
                  </div> */}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 max-h-[calc(90vh-16rem)] overflow-y-auto">
              {/* Description */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Package Overview
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {packageDetails.detailedDescription}
                </p>
              </div>

              {/* Package Highlights */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Package Highlights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {packageDetails.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Package Inclusions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {packageDetails.inclusions.map((inclusion, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Plane className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      <span className="text-gray-600">{inclusion}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Detailed Itinerary
                </h3>
                <div className="space-y-4">
                  {packageDetails.itinerary.map((day, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-blue-500 pl-4"
                    >
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="bg-blue-500 text-white text-sm font-semibold px-2 py-1 rounded">
                          Day {day.day}
                        </span>
                        <h4 className="font-semibold text-gray-800">
                          {day.title}
                        </h4>
                      </div>
                      <p className="text-gray-600 text-sm">{day.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Accommodation Details */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Accommodation
                </h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {packageDetails.accommodation.type}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {packageDetails.accommodation.features.map(
                      (feature, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2"
                        >
                          <Wifi className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">
                            {feature}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Price Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Price Includes
                  </h3>
                  <div className="space-y-2">
                    {packageDetails.priceIncludes.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Price Excludes
                  </h3>
                  <div className="space-y-2">
                    {packageDetails.priceExcludes.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <X className="w-4 h-4 text-red-500 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Policies */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Important Information
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Cancellation Policy
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {packageDetails.cancellationPolicy}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Booking Policy
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {packageDetails.bookingPolicy}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="border-t bg-gray-50 px-6 py-4 flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                {/* <div className="text-2xl font-bold text-gray-800">
                  {packageDetails.price}
                </div>
                <div className="text-gray-600 text-sm">
                  Starting price per person
                </div> */}
              </div>
              <div className="flex gap-3">
                <button className="px-6 py-2 border-2 border-red-600 text-red-600 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors">
                  CALL NOW 0776772710
                </button>
                <button className="px-6 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  SUBMIT INQUIRY
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PackageDetailsModal;
