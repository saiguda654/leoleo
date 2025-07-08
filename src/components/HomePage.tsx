import React from 'react';
import HeroSection from '../components/HeroSection';
import StatsCounter from '../components/StatsCounter';
import ServicesSection from '../components/ServicesSection';
import TestimonialSlider from '../components/TestimonialSlider';
import ClientsSection from '../components/ClientsSection';
import { ActivitiesSection } from '../components/ActivitiesSection';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      
      <StatsCounter />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="/images/about.jpg"
                alt="About Us"
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We are a forward-thinking technology company dedicated to shaping the digital future through
                comprehensive IT training, reliable support solutions, and innovative AI technologies.
              </p>
              <blockquote className="border-l-4 border-blue-600 pl-4 mb-6 italic text-gray-600">
                "In the world of technology, continuous learning and adaptation are not just advantages – they're necessities.
                We're here to guide you through that journey."
              </blockquote>
              <Link
                to="/about"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
              >
                Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <ServicesSection />
      
      <ActivitiesSection />
      
      <TestimonialSlider />
      
      <ClientsSection />
      
      <section className="py-16 bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our tailored solutions can help you achieve your technology goals.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-800 hover:bg-blue-50 font-medium py-3 px-6 rounded-md transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
