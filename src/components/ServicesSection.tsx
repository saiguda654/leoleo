import React from 'react';
import { Lightbulb, Server, GraduationCap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of services designed to help businesses thrive in the digital age,
            from cutting-edge training to reliable support and innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            title="IT Trainings"
            description="Expert-led training programs for colleges and corporations, covering cloud computing, data science, software development, cybersecurity, and more."
            icon={<GraduationCap className="h-8 w-8 text-blue-600" />}
            link="/services/trainings"
            color="bg-blue-50"
            hoverColor="border-blue-400"
          />
          
          <ServiceCard
            title="IT Support Solutions"
            description="Comprehensive IT support services including infrastructure setup, maintenance, remote and on-site support tailored for businesses of all sizes."
            icon={<Server className="h-8 w-8 text-purple-600" />}
            link="/services/support"
            color="bg-purple-50"
            hoverColor="border-purple-400"
          />
          
          <ServiceCard
            title="AI Innovations"
            description="Cutting-edge AI solutions for business automation, predictive analytics, and intelligent applications across various industries."
            icon={<Lightbulb className="h-8 w-8 text-emerald-600" />}
            link="/services/ai"
            color="bg-emerald-50"
            hoverColor="border-emerald-400"
          />

          <ServiceCard
            title="Business Solutions"
            description="Professional website development and social media management services to enhance your digital presence and grow your business."
            icon={<Globe className="h-8 w-8 text-amber-600" />}
            link="/services/business"
            color="bg-amber-50"
            hoverColor="border-amber-400"
          />
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  color: string;
  hoverColor: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link, color, hoverColor }) => {
  return (
    <div className={`rounded-lg p-6 border-2 border-transparent hover:${hoverColor} ${color} transition-all duration-300 flex flex-col`}>
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <Link
        to={link}
        className="text-blue-600 font-medium inline-flex items-center hover:text-blue-800 transition-colors mt-auto"
      >
        Learn More
        <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </Link>
    </div>
  );
};

export default ServicesSection;