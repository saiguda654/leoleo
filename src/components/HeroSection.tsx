import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-950 to-secondary-900">
      <div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-20"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 to-secondary-900/90 backdrop-blur-sm"></div>
      </div>

      <div className="container relative z-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white max-w-2xl"
          >
            <h1 className="heading-1 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary-200 to-secondary-200">
              Shaping The Digital Future
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Empowering businesses through expert IT training, reliable support solutions, innovative AI solutions, and professional business services.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="btn-primary group"
              >
                Explore Our Services 
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="btn-secondary"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <ServiceCard
                  title="IT Training"
                  description="Expert-led courses for modern tech skills"
                  link="/services/trainings"
                />
                <ServiceCard
                  title="IT Support"
                  description="24/7 technical solutions & maintenance"
                  link="/services/support"
                />
                <ServiceCard
                  title="AI Solutions"
                  description="Cutting-edge AI implementation"
                  link="/services/ai"
                />
                <ServiceCard
                  title="Business Solutions"
                  description="Website & social media management"
                  link="/services/business"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce bg-white/10 p-2 w-10 h-10 ring-1 ring-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/20 transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, link }) => {
  return (
    <Link
      to={link}
      className="bg-white/5 backdrop-blur-sm p-6 rounded-xl hover:bg-white/10 transition-colors group"
    >
      <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 text-sm mb-4">{description}</p>
      <span className="text-primary-300 text-sm flex items-center group-hover:text-primary-200">
        Learn more <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
};

export default HeroSection;