import React from 'react';
import { CheckCircle, Server, Clock, Shield, PenTool as Tool, HeartPulse, Activity, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const SupportPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-24">
        <div
          className="absolute inset-0 bg-cover bg-center z-0 opacity-20"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          }}
        ></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">IT Support Solutions</h1>
            <p className="text-xl text-blue-100">
              Comprehensive IT support services tailored to your business needs, ensuring your
              technology runs smoothly, securely, and efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Support Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Reliable IT Support for Modern Businesses</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              LeoAxis provides end-to-end IT support services designed to minimize downtime, maximize
              security, and optimize your technology infrastructure for peak performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="IT Support Team"
                className="rounded-lg shadow-md"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Why Choose Our Support Services</h3>
              <p className="text-gray-700 mb-6">
                With LeoAxis as your IT support partner, you gain access to a team of certified
                professionals committed to keeping your systems running optimally while providing
                exceptional service and rapid resolution times.
              </p>
              
              <ul className="space-y-3">
                <FeatureItem
                  icon={<Clock className="h-5 w-5 text-blue-600" />}
                  title="Responsive Support"
                  description="Our team responds to critical issues within 1 hour, with 24/7 emergency support available."
                />
                <FeatureItem
                  icon={<Shield className="h-5 w-5 text-blue-600" />}
                  title="Proactive Monitoring"
                  description="We identify and address potential issues before they impact your operations."
                />
                <FeatureItem
                  icon={<Tool className="h-5 w-5 text-blue-600" />}
                  title="Expert Technicians"
                  description="Certified specialists with expertise across diverse technologies and platforms."
                />
                <FeatureItem
                  icon={<Users className="h-5 w-5 text-blue-600" />}
                  title="Dedicated Account Management"
                  description="A personal point of contact who understands your business and technology needs."
                />
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Support Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive suite of IT support services that can be tailored to meet your
              specific needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<HeartPulse className="h-12 w-12 text-blue-600" />}
              title="Managed IT Services"
              description="Comprehensive management of your entire IT infrastructure, including systems, networks, and security."
              features={[
                '24/7 system monitoring and management',
                'Proactive maintenance and updates',
                'Security monitoring and management',
                'Regular system health reporting'
              ]}
            />
            
            <ServiceCard
              icon={<Server className="h-12 w-12 text-purple-600" />}
              title="Infrastructure Support"
              description="Expert management and maintenance of your physical and virtual IT infrastructure."
              features={[
                'Server setup and management',
                'Network configuration and optimization',
                'Cloud infrastructure management',
                'Data backup and disaster recovery'
              ]}
            />
            
            <ServiceCard
              icon={<Shield className="h-12 w-12 text-emerald-600" />}
              title="Cybersecurity Services"
              description="Protection for your systems, networks, and data from cyber threats and breaches."
              features={[
                'Security assessments and audits',
                'Threat monitoring and prevention',
                'Security policy implementation',
                'Incident response and remediation'
              ]}
            />
            
            <ServiceCard
              icon={<Activity className="h-12 w-12 text-red-600" />}
              title="Help Desk Support"
              description="Responsive assistance for day-to-day IT issues and user support needs."
              features={[
                'Multi-channel support (phone, email, chat)',
                'Tiered support levels for all issues',
                'Knowledge base and self-service resources',
                'Support for hardware and software problems'
              ]}
            />
            
            <ServiceCard
              icon={<Tool className="h-12 w-12 text-amber-600" />}
              title="On-Site Technical Support"
              description="In-person technical assistance for issues that require hands-on resolution."
              features={[
                'Hardware troubleshooting and repair',
                'Workstation setup and configuration',
                'Network infrastructure maintenance',
                'Physical security implementation'
              ]}
            />
            
            <ServiceCard
              icon={<Clock className="h-12 w-12 text-indigo-600" />}
              title="IT Consulting"
              description="Strategic guidance on technology planning, implementation, and optimization."
              features={[
                'IT strategy development',
                'Technology roadmapping',
                'Vendor selection and management',
                'IT budget planning and optimization'
              ]}
            />
          </div>
        </div>
      </section>

      {/* Support Plans */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Support Plans</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Choose the support plan that best fits your organization's needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              title="Essential Support"
              price="Starting at $999"
              period="per month"
              description="Basic support for small businesses with limited IT needs."
              features={[
                'Business hours support (8AM-6PM)',
                'Next business day response for critical issues',
                'Remote support and troubleshooting',
                'Basic system monitoring',
                'Monthly system health reports'
              ]}
              cta="Schedule a Consultation"
              highlight={false}
            />
            
            <PricingCard
              title="Professional Support"
              price="Starting at $1,999"
              period="per month"
              description="Comprehensive support for growing businesses with moderate IT complexity."
              features={[
                'Extended hours support (7AM-9PM)',
                '4-hour response for critical issues',
                'Remote and on-site support',
                'Proactive system monitoring',
                'Quarterly technology reviews',
                'Dedicated account manager'
              ]}
              cta="Schedule a Consultation"
              highlight={true}
            />
            
            <PricingCard
              title="Enterprise Support"
              price="Starting at $3,999"
              period="per month"
              description="Complete IT management for organizations with complex technology needs."
              features={[
                '24/7 support coverage',
                '1-hour response for critical issues',
                'Priority on-site support',
                'Comprehensive system monitoring',
                'Monthly technology strategy meetings',
                'Dedicated technical account team',
                'Custom reporting and compliance support'
              ]}
              cta="Schedule a Consultation"
              highlight={false}
            />
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Need a customized support solution? We create tailored plans to match your specific requirements.
            </p>
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors inline-block"
            >
              Request Custom Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Support Process</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We follow a structured process to ensure your IT systems receive the attention and care they need.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <ProcessStep
                number="01"
                title="Assessment & Planning"
                description="We start by thoroughly understanding your current IT infrastructure, challenges, and goals to create a tailored support plan."
              />
              
              <ProcessStep
                number="02"
                title="Implementation"
                description="Our team sets up monitoring systems, establishes support channels, and implements proactive maintenance protocols."
              />
              
              <ProcessStep
                number="03"
                title="Ongoing Support"
                description="We provide continuous monitoring, regular maintenance, and responsive support for all IT issues that arise."
              />
              
              <ProcessStep
                number="04"
                title="Regular Reviews"
                description="Scheduled reviews of your IT performance, security posture, and future needs to ensure your technology continues to support your business effectively."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Client Success Story</h2>
          </div>

          <div className="bg-gray-50 rounded-lg shadow-md max-w-4xl mx-auto p-8">
            <div className="text-blue-600 font-medium mb-2">Global Systems - Manufacturing</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">87% Reduction in System Downtime</h3>
            
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">The Challenge:</h4>
              <p className="text-gray-600">
                Global Systems was experiencing frequent IT outages that disrupted manufacturing operations,
                resulting in costly production delays and frustrated employees.
              </p>
            </div>
            
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Our Solution:</h4>
              <p className="text-gray-600">
                LeoAxis implemented our Professional Support plan with enhanced monitoring, proactive
                maintenance, and rapid response protocols specifically designed for manufacturing environments.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">The Results:</h4>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>87% reduction in system downtime</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>35% decrease in IT support tickets</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>$300,000 estimated annual savings from prevented production delays</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Find answers to common questions about our IT support services.
            </p>
          </div>

          <div className="space-y-6">
            <FaqItem
              question="What are your support hours?"
              answer="Our support hours vary by plan. Essential Support is available during business hours (8AM-6PM local time), Professional Support offers extended hours (7AM-9PM), and Enterprise Support provides 24/7 coverage. Emergency support is available 24/7 for critical issues on all plans."
            />
            
            <FaqItem
              question="How quickly do you respond to support requests?"
              answer="Response times depend on issue severity and your support plan. For critical issues, Enterprise clients receive 1-hour response, Professional clients 4-hour response, and Essential clients next-business-day response. Non-critical issues have longer response times."
            />
            
            <FaqItem
              question="Can you support remote employees?"
              answer="Yes, we provide comprehensive support for remote and hybrid work environments. Our solutions include secure remote access, cloud service management, home office setup assistance, and endpoint security for remote devices."
            />
            
            <FaqItem
              question="Do you offer on-site support?"
              answer="Yes, on-site support is included in our Professional and Enterprise plans, with Enterprise clients receiving priority on-site response. Essential Support clients can add on-site support for an additional fee."
            />
            
            <FaqItem
              question="How do you handle security incidents?"
              answer="We have a structured incident response process that includes containment, investigation, remediation, and prevention. Our team is trained in security best practices and works quickly to minimize the impact of security incidents."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Reliable IT Support?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our IT support services can help your business minimize
            downtime, maximize security, and operate more efficiently.
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

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start">
      <div className="mt-1 mr-3">{icon}</div>
      <div>
        <h4 className="font-semibold text-gray-800">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
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
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow h-full flex flex-col">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <ul className="space-y-2 mt-auto">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-600 flex items-start">
            <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlight: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  period,
  description,
  features,
  cta,
  highlight,
}) => {
  return (
    <div
      className={`rounded-lg p-8 h-full flex flex-col ${
        highlight
          ? 'bg-blue-600 text-white shadow-lg transform -translate-y-4'
          : 'bg-white border border-gray-100 shadow-sm'
      }`}
    >
      <h3 className={`text-xl font-bold mb-2 ${highlight ? 'text-white' : 'text-gray-800'}`}>
        {title}
      </h3>
      <div className="mb-4">
        <span className={`text-3xl font-bold ${highlight ? 'text-white' : 'text-gray-800'}`}>
          {price}
        </span>
        <span className={`text-sm ${highlight ? 'text-blue-100' : 'text-gray-500'}`}>
          {' '}{period}
        </span>
      </div>
      <p className={`mb-6 ${highlight ? 'text-blue-100' : 'text-gray-600'}`}>{description}</p>
      
      <ul className={`space-y-3 mb-8 flex-grow ${highlight ? 'text-blue-50' : 'text-gray-600'}`}>
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle
              className={`h-5 w-5 mr-2 mt-0.5 flex-shrink-0 ${
                highlight ? 'text-blue-200' : 'text-green-500'
              }`}
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <Link
        to="/contact"
        className={`block text-center py-3 px-4 rounded-md transition-colors ${
          highlight
            ? 'bg-white text-blue-600 hover:bg-blue-50'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        {cta}
      </Link>
    </div>
  );
};

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description }) => {
  return (
    <div className="flex">
      <div className="flex-shrink-0 mr-6">
        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
          {number}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
};

export default SupportPage;