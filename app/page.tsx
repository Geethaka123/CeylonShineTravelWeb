import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Destinations from "@/components/Destinations";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AboutPage from "@/components/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - CeylonShine Travel Agency | Discover Sri Lanka",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AboutPage />
      <Services />
      <Destinations />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
