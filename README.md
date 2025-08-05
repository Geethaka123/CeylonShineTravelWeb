# Wanderlust Travel Agency Website

A modern, responsive travel agency website built with Next.js, TypeScript, and Tailwind CSS. This website showcases a professional travel agency with beautiful UI, interactive components, and comprehensive travel services.

## Features

- **Modern Design**: Clean, professional design with beautiful animations and transitions
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Components**: Hero section with search functionality, service cards, destination showcases
- **Contact Form**: Functional contact form with validation
- **Testimonials**: Customer reviews and ratings display
- **SEO Optimized**: Proper meta tags and structured content
- **Performance**: Optimized images and fast loading times

## Tech Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icons
- **Framer Motion**: Smooth animations (ready for implementation)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd travel-agency-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section with search
│   ├── Services.tsx         # Services showcase
│   ├── Destinations.tsx     # Popular destinations
│   ├── Testimonials.tsx     # Customer reviews
│   ├── Contact.tsx          # Contact form
│   └── Footer.tsx           # Footer with links
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies
```

## Components

### Header
- Fixed navigation with logo
- Responsive mobile menu
- Contact information display

### Hero
- Full-screen hero section with background image
- Interactive search form
- Statistics display
- Smooth animations

### Services
- Service cards with icons
- Hover effects and animations
- Call-to-action section

### Destinations
- Destination cards with images
- Rating system
- Pricing information
- Responsive grid layout

### Testimonials
- Customer review cards
- Star ratings
- Customer photos and locations
- Statistics section

### Contact
- Functional contact form
- Company information
- Emergency contact details
- Form validation

### Footer
- Company information
- Service and destination links
- Newsletter subscription
- Social media links

## Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.js`:
- Primary: Blue shades (`primary-50` to `primary-900`)
- Secondary: Yellow shades (`secondary-50` to `secondary-900`)

### Images
All images are sourced from Unsplash for high-quality, free-to-use photos. You can replace them with your own images.

### Content
Update the content in each component to match your travel agency's services, destinations, and contact information.

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The website can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## Performance

- Optimized images with Next.js Image component
- Lazy loading for better performance
- Minimal bundle size
- Fast loading times

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support or questions, please contact:
- Email: info@wanderlust.com
- Phone: +1 (555) 123-4567

---

Built with ❤️ using Next.js and Tailwind CSS 