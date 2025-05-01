import React from 'react';
import { Building, CheckCircle, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const clients = [
  {
    id: 1,
    name: 'TechCorp',
    logo: 'https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=300',
    industry: 'Software Development',
    services: ['IT Training', 'AI Implementation'],
    testimonial: 'Helped us upskill our entire development team on cloud technologies in record time.',
  },
  {
    id: 2,
    name: 'Innovate Inc',
    logo: 'https://images.pexels.com/photos/1337382/pexels-photo-1337382.jpeg?auto=compress&cs=tinysrgb&w=300',
    industry: 'Healthcare',
    services: ['AI Solutions', 'IT Support'],
    testimonial: 'The AI diagnostics assistant has transformed our patient screening process.',
  },
  {
    id: 3,
    name: 'Global Systems',
    logo: 'https://images.pexels.com/photos/1337383/pexels-photo-1337383.jpeg?auto=compress&cs=tinysrgb&w=300',
    industry: 'Manufacturing',
    services: ['IT Support', 'IT Training'],
    testimonial: 'Their IT support team has reduced our system downtime by 87% in the first year of partnership.',
  },
  {
    id: 4,
    name: 'StartupVision',
    logo: 'https://images.pexels.com/photos/1337384/pexels-photo-1337384.jpeg?auto=compress&cs=tinysrgb&w=300',
    industry: 'E-commerce',
    services: ['AI Solutions', 'IT Training'],
    testimonial: 'Helped us implement an AI-driven recommendation engine that increased our conversion rate by 34%.',
  },
  {
    id: 5,
    name: 'Future Academy',
    logo: 'https://images.pexels.com/photos/1337385/pexels-photo-1337385.jpeg?auto=compress&cs=tinysrgb&w=300',
    industry: 'Education',
    services: ['IT Training', 'IT Support'],
    testimonial: 'Our partnership has modernized our curriculum and prepared hundreds of students for tech careers.',
  },
  {
    id: 6,
    name: 'DataDrive',
    logo: 'https://images.pexels.com/photos/1337386/pexels-photo-1337386.jpeg?auto=compress&cs=tinysrgb&w=300',
    industry: 'Data Analytics',
    services: ['AI Solutions', 'IT Training'],
    testimonial: 'The custom data science training program exceeded our expectations.',
  }
];

const ClientsPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-24">
        <div
          className="absolute inset-0 bg-cover bg-center z-0 opacity-20"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          }}
        ></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Trusted Clients</h1>
            <p className="text-xl text-blue-100">
              Partnering with forward-thinking organizations across industries to deliver
              transformative technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Breakdown */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Industries We Serve</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <IndustryCard
              icon={<Building className="h-12 w-12 text-blue-600" />}
              title="Enterprise & Corporate"
              description="From Fortune 500 companies to mid-size businesses, we help enterprises optimize their IT operations, train their workforce, and implement AI-driven efficiency."
            />
            
            <IndustryCard
              icon={<Users className="h-12 w-12 text-purple-600" />}
              title="Education & Research"
              description="We partner with colleges, universities, and research institutions to provide cutting-edge IT training programs and technology infrastructure support."
            />
            
            <IndustryCard
              icon={<Building className="h-12 w-12 text-emerald-600" />}
              title="Startups & Growth Companies"
              description="Our scalable solutions help emerging businesses build robust IT foundations, access top-tier training, and leverage AI capabilities without enterprise-level investments."
            />
          </div>
        </div>
      </section>

      {/* Client Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 text-center">Our Client Portfolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-center mb-12">
            We're proud to partner with organizations of all sizes across diverse sectors.
            Here are some of the forward-thinking companies we work with.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client) => (
              <ClientCard key={client.id} client={client} />
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Client Success Stories</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <SuccessStory
              company="TechCorp"
              title="Transformation Through Cloud Training"
              challenge="TechCorp needed to rapidly upskill 200+ developers on cloud technologies to support their digital transformation initiative."
              solution="LeoAxis designed an intensive 8-week customized training program combining instructor-led sessions with hands-on labs and practical projects."
              results={[
                "97% of developers certified in cloud technologies",
                "50% reduction in development time for new cloud services",
                "30% improvement in code quality metrics"
              ]}
              image="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            
            <SuccessStory
              company="Innovate Inc"
              title="AI-Powered Healthcare Diagnostics"
              challenge="Innovate Inc wanted to improve the accuracy and efficiency of their patient pre-screening process to reduce wait times and improve care."
              solution="LeoAxis developed a custom AI diagnostic assistant that analyzes patient data and symptoms to provide preliminary assessments and triage recommendations."
              results={[
                "43% reduction in patient wait times",
                "26% improvement in diagnosis accuracy",
                "Annual cost savings of $1.2 million"
              ]}
              image="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.slice(0, 6).map((client) => (
              <div key={client.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <p className="text-gray-700 italic mb-4">"{client.testimonial}"</p>
                <div className="flex items-center">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <p className="font-medium text-gray-900">{client.name}</p>
                    <p className="text-sm text-gray-500">{client.industry}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Client Portfolio?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how LeoAxis can help address your specific technology challenges and opportunities.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-900 hover:bg-blue-50 font-medium py-3 px-6 rounded-md transition-colors inline-block"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

interface IndustryCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-md transition-shadow text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

interface ClientCardProps {
  client: {
    id: number;
    name: string;
    logo: string;
    industry: string;
    services: string[];
  };
}

const ClientCard: React.FC<ClientCardProps> = ({ client }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
      <img
        src={client.logo}
        alt={`${client.name} logo`}
        className="h-16 mx-auto mb-4 object-contain"
      />
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{client.name}</h3>
      <p className="text-sm text-gray-500 mb-3">{client.industry}</p>
      <div className="flex flex-wrap justify-center gap-2">
        {client.services.map((service, index) => (
          <span
            key={index}
            className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full"
          >
            {service}
          </span>
        ))}
      </div>
    </div>
  );
};

interface SuccessStoryProps {
  company: string;
  title: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
}

const SuccessStory: React.FC<SuccessStoryProps> = ({
  company,
  title,
  challenge,
  solution,
  results,
  image
}) => {
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-8">
        <div className="text-blue-600 font-medium mb-2">{company}</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
        
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">The Challenge:</h4>
          <p className="text-gray-600">{challenge}</p>
        </div>
        
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Our Solution:</h4>
          <p className="text-gray-600">{solution}</p>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Key Results:</h4>
          <ul className="text-gray-600 space-y-2">
            {results.map((result, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                <span>{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ClientsPage;