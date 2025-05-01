import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Share2, BarChart, Rocket, Code, Layout, MessageSquare, TrendingUp, CheckCircle } from 'lucide-react';

const BusinessPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-24">
        <div
          className="absolute inset-0 bg-cover bg-center z-0 opacity-20"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          }}
        ></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Business Solutions</h1>
            <p className="text-xl text-blue-100">
              Transform your digital presence with our comprehensive website development and social media management services.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ServiceCard
              icon={<Globe className="h-12 w-12 text-blue-600" />}
              title="Website Development"
              description="Custom-built websites that drive results and enhance your brand's online presence."
              features={[
                'Responsive design for all devices',
                'SEO optimization built-in',
                'Fast loading speeds',
                'Secure and scalable architecture',
                'Content management system',
                'Analytics integration'
              ]}
            />
            
            <ServiceCard
              icon={<Share2 className="h-12 w-12 text-purple-600" />}
              title="Social Media Management"
              description="Strategic social media solutions to grow your audience and engage customers."
              features={[
                'Content strategy development',
                'Regular posting schedule',
                'Engagement monitoring',
                'Analytics and reporting',
                'Community management',
                'Campaign planning'
              ]}
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">Website Development</h3>
              <div className="space-y-8">
                <ProcessStep
                  number="01"
                  icon={<Layout className="h-6 w-6" />}
                  title="Discovery & Planning"
                  description="We analyze your business needs and plan the perfect website structure."
                />
                <ProcessStep
                  number="02"
                  icon={<Code className="h-6 w-6" />}
                  title="Design & Development"
                  description="Our team creates a custom design and builds your website using modern technologies."
                />
                <ProcessStep
                  number="03"
                  icon={<Rocket className="h-6 w-6" />}
                  title="Launch & Optimization"
                  description="We launch your site and optimize it for peak performance."
                />
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Social Media Management</h3>
              <div className="space-y-8">
                <ProcessStep
                  number="01"
                  icon={<BarChart className="h-6 w-6" />}
                  title="Strategy Development"
                  description="We create a tailored social media strategy aligned with your goals."
                />
                <ProcessStep
                  number="02"
                  icon={<MessageSquare className="h-6 w-6" />}
                  title="Content Creation & Engagement"
                  description="Regular posting and active community engagement to build your presence."
                />
                <ProcessStep
                  number="03"
                  icon={<TrendingUp className="h-6 w-6" />}
                  title="Monitoring & Optimization"
                  description="Continuous analysis and optimization of your social media performance."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits of Our Business Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BenefitCard
              title="Increased Online Visibility"
              description="Improve your search engine rankings and social media presence to reach more potential customers."
              icon={<Globe className="h-8 w-8 text-blue-600" />}
            />
            
            <BenefitCard
              title="Better Customer Engagement"
              description="Connect with your audience through professional websites and active social media management."
              icon={<MessageSquare className="h-8 w-8 text-purple-600" />}
            />
            
            <BenefitCard
              title="Measurable Results"
              description="Track your success with detailed analytics and regular performance reports."
              icon={<BarChart className="h-8 w-8 text-emerald-600" />}
            />
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">E-commerce Success</h3>
              <p className="text-sm text-gray-500 mb-4">Fashion Boutique</p>
              <p className="text-gray-600 mb-4">
                Complete digital transformation with a modern e-commerce website and strategic social media presence.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">200% increase in online sales</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">150% growth in social media following</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">45% improvement in customer engagement</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Brand Transformation</h3>
              <p className="text-sm text-gray-500 mb-4">Local Restaurant</p>
              <p className="text-gray-600 mb-4">
                Digital presence overhaul with new website and comprehensive social media strategy.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">150% increase in online reservations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">300% increase in social media engagement</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">25% growth in average order value</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Grow Your Business Online?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can help transform your digital presence and grow your business.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-900 hover:bg-blue-50 font-medium py-3 px-6 rounded-md transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-8 border border-gray-100 hover:shadow-md transition-shadow">
      <div className="mb-6">{icon}</div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface ProcessStepProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, icon, title, description }) => {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 mr-4">
        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
          {number}
        </div>
      </div>
      <div>
        <div className="flex items-center mb-2">
          <div className="mr-2 text-blue-600">{icon}</div>
          <h4 className="text-lg font-semibold">{title}</h4>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

interface BenefitCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description, icon }) => {
  return (
    <div className="text-center p-6">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default BusinessPage;