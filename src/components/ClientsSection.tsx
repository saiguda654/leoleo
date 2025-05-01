import React from 'react';
import { Link } from 'react-router-dom';

const partners = [
  {
    name: 'Amazon Web Services',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    type: 'Cloud Partner'
  },
  {
    name: 'Microsoft Azure',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg',
    type: 'Cloud Partner'
  },
  {
    name: 'Google Cloud',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg',
    type: 'Cloud Partner'
  },
  {
    name: 'Kubernetes',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg',
    type: 'DevOps Partner'
  },
  {
    name: 'NVIDIA',
    logo: 'https://upload.wikimedia.org/wikipedia/sco/2/21/Nvidia_logo.svg',
    type: 'AI Partner'
  },
  {
    name: 'TensorFlow',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg',
    type: 'AI Partner'
  },
  {
    name: 'Docker',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg',
    type: 'DevOps Partner'
  },
  {
    name: 'Red Hat',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Red_Hat_logo.svg',
    type: 'Technology Partner'
  }
];

const ClientsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Trusted By Industry Leaders
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          We partner with leading technology providers to deliver enterprise-grade solutions and comprehensive training programs.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
          {partners.map((partner) => (
            <div 
              key={partner.name}
              className="flex items-center justify-center group relative"
            >
              <div className="bg-white rounded-xl p-6 h-24 w-full flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-105 border border-gray-100">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-h-12 w-auto object-contain transition-all duration-300"
                />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {partner.type}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link 
            to="/clients" 
            className="inline-flex items-center px-6 py-3 text-white font-medium rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            View All Our Clients
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;