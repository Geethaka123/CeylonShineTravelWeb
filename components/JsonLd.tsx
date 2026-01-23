import React from 'react';

const JsonLd = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "CeylonShine Travel Agency",
    "description": "Experience the serene beauty of Sri Lanka with our curated, aesthetic travel experiences. Luxury tours, nature retreats, and cultural journeys in the Pearl of the Indian Ocean.",
    "url": "https://ceylonshine.com",
    "telephone": "+94XXXXXXXXX",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Colombo",
      "addressCountry": "LK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 6.9271,
      "longitude": 79.8612
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/ceylonshine",
      "https://www.instagram.com/ceylonshine",
      "https://twitter.com/ceylonshine"
    ],
    "image": "https://ceylonshine.com/og-image.jpg",
    "priceRange": "$$"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default JsonLd;
