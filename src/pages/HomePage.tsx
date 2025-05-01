import React from 'react';
import HeroSection from '../components/HeroSection';
import StatsCounter from '../components/StatsCounter';
import ServicesSection from '../components/ServicesSection';
import TestimonialSlider from '../components/TestimonialSlider';
import ClientsSection from '../components/ClientsSection';
import { ArrowRight, CheckCircle } from 'lucide-react';
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
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="About Us"
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We are a forward-thinking technology company dedicated to shaping the digital future through
                comprehensive IT training, reliable support solutions, innovative AI technologies, and professional business solutions.
              </p>
              <div className="space-y-4 mb-6">
                <Feature text="Expert-led training programs" />
                <Feature text="24/7 IT support services" />
                <Feature text="Cutting-edge AI solutions" />
                <Feature text="Professional web development" />
                <Feature text="Strategic social media management" />
              </div>
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
      
      <TestimonialSlider />
      
      <ClientsSection />
      
      <section className="py-16 bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
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

const Feature: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center">
    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
    <span className="text-gray-700">{text}</span>
  </div>
);

export default HomePage;