import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, Brain, DollarSign, TrendingUp, BarChart, Shield, Layers, CheckCircle } from 'lucide-react';

const AIPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-24">
        <div
          className="absolute inset-0 bg-cover bg-center z-0 opacity-10"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          }}
        ></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(56,189,248,0.1),transparent_30%),radial-gradient(circle_at_70%_60%,rgba(168,85,247,0.15),transparent_30%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200">
              AI Innovations
            </h1>
            <p className="text-xl text-blue-100">
              Transform your business with custom AI solutions that drive automation, insights, and
              competitive advantage in today's data-driven world.
            </p>
          </div>
        </div>
      </section>

      {/* AI Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">AI Solutions for Business Impact</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At LeoAxis, we harness the power of artificial intelligence to build customized
              solutions that solve real business challenges, drive operational efficiency,
              and create new opportunities for growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="AI Technology Visualization"
                className="rounded-lg shadow-md"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Why Choose AI Solutions</h3>
              <p className="text-gray-700 mb-6">
                AI technology has moved beyond hype to deliver tangible business benefits across
                industries. Our solutions focus on practicality and ROI, translating complex AI
                capabilities into measurable business outcomes.
              </p>
              
              <ul className="space-y-4">
                <BenefitItem
                  icon={<Brain className="h-6 w-6 text-blue-600" />}
                  title="Enhanced Decision Making"
                  description="Leverage data-driven insights to make faster, more accurate business decisions."
                />
                <BenefitItem
                  icon={<DollarSign className="h-6 w-6 text-green-600" />}
                  title="Operational Efficiency"
                  description="Automate routine tasks and optimize processes to reduce costs and improve productivity."
                />
                <BenefitItem
                  icon={<TrendingUp className="h-6 w-6 text-purple-600" />}
                  title="Competitive Advantage"
                  description="Stay ahead with innovative AI capabilities that differentiate your products and services."
                />
                <BenefitItem
                  icon={<Lightbulb className="h-6 w-6 text-amber-600" />}
                  title="Innovation Catalyst"
                  description="Uncover new business opportunities and transform your operational models."
                />
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our AI Solutions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We design and implement customized AI solutions across a range of business functions
              and industry needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SolutionCard
              icon={<BarChart className="h-12 w-12 text-blue-600" />}
              title="Predictive Analytics"
              description="Transform your data into actionable insights and accurate forecasts to drive strategic decision-making."
              capabilities={[
                'Sales forecasting',
                'Customer lifetime value prediction',
                'Demand planning',
                'Risk assessment models'
              ]}
            />
            
            <SolutionCard
              icon={<Brain className="h-12 w-12 text-purple-600" />}
              title="Machine Learning Systems"
              description="Custom ML models that continuously learn and improve from your business data."
              capabilities={[
                'Classification & clustering',
                'Recommendation engines',
                'Anomaly detection',
                'Natural language processing'
              ]}
            />
            
            <SolutionCard
              icon={<Layers className="h-12 w-12 text-emerald-600" />}
              title="Intelligent Automation"
              description="AI-powered automation that goes beyond simple RPA to handle complex, judgment-based tasks."
              capabilities={[
                'Document processing',
                'Intelligent workflow automation',
                'Smart agents & assistants',
                'Process optimization'
              ]}
            />
            
            <SolutionCard
              icon={<Shield className="h-12 w-12 text-red-600" />}
              title="AI-Enhanced Security"
              description="Advanced threat detection and prevention using behavioral analysis and pattern recognition."
              capabilities={[
                'Fraud detection',
                'Threat intelligence',
                'Behavioral biometrics',
                'Predictive security analytics'
              ]}
            />
            
            <SolutionCard
              icon={<DollarSign className="h-12 w-12 text-amber-600" />}
              title="Financial Intelligence"
              description="AI solutions for financial operations, risk management, and investment decision support."
              capabilities={[
                'Algorithmic trading',
                'Credit risk assessment',
                'Financial forecasting',
                'Expense optimization'
              ]}
            />
            
            <SolutionCard
              icon={<Lightbulb className="h-12 w-12 text-indigo-600" />}
              title="Custom AI Solutions"
              description="Bespoke AI applications designed for your unique business challenges and opportunities."
              capabilities={[
                'Industry-specific AI models',
                'Research & development support',
                'Concept-to-production implementation',
                'AI strategy consulting'
              ]}
            />
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">AI Across Industries</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our AI solutions create impact across diverse sectors, with specialized applications
              for industry-specific challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <IndustryCard
              title="Healthcare & Life Sciences"
              image="https://images.pexels.com/photos/4226122/pexels-photo-4226122.jpeg?auto=compress&cs=tinysrgb&w=600"
              applications={[
                'Diagnostic assistance & medical imaging',
                'Patient outcome prediction',
                'Drug discovery acceleration',
                'Personalized treatment planning'
              ]}
            />
            
            <IndustryCard
              title="Financial Services"
              image="https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=600"
              applications={[
                'Algorithmic trading systems',
                'Fraud detection & prevention',
                'Customer risk assessment',
                'Process automation'
              ]}
            />
            
            <IndustryCard
              title="Retail & E-commerce"
              image="https://images.pexels.com/photos/1036856/pexels-photo-1036856.jpeg?auto=compress&cs=tinysrgb&w=600"
              applications={[
                'Recommendation engines',
                'Inventory & price optimization',
                'Customer behavior analysis',
                'Supply chain intelligence'
              ]}
            />
            
            <IndustryCard
              title="Manufacturing"
              image="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600"
              applications={[
                'Predictive maintenance',
                'Quality control automation',
                'Production optimization',
                'Supply chain forecasting'
              ]}
            />
            
            <IndustryCard
              title="Human Resources"
              image="https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb&w=600"
              applications={[
                'Talent acquisition & matching',
                'Performance prediction',
                'Employee engagement analysis',
                'Workforce planning'
              ]}
            />
            
            <IndustryCard
              title="Marketing & Sales"
              image="https://images.pexels.com/photos/1447418/pexels-photo-1447418.jpeg?auto=compress&cs=tinysrgb&w=600"
              applications={[
                'Customer segmentation',
                'Campaign optimization',
                'Conversion prediction',
                'Customer lifetime value modeling'
              ]}
            />
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">AI Success Stories</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              See how our AI solutions have transformed businesses across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <CaseStudyCard
              title="AI-Powered Customer Insights"
              client="Innovate Inc - Healthcare"
              challenge="Innovate Inc needed to better understand patient feedback and improve their healthcare services."
              solution="We implemented an AI-powered text analytics system that processes patient feedback from multiple channels."
              results={[
                '43% improvement in patient satisfaction scores',
                'Identified 12 critical service improvement opportunities',
                '68% reduction in analysis time',
                'Enabled proactive service adjustments'
              ]}
            />
            
            <CaseStudyCard
              title="Predictive Maintenance System"
              client="Global Systems - Manufacturing"
              challenge="Global Systems was experiencing costly equipment failures and downtime."
              solution="We developed an AI-based predictive maintenance system using IoT sensors and machine learning."
              results={[
                '76% reduction in unplanned downtime',
                '$1.2M annual maintenance cost savings',
                '34% increase in equipment lifespan',
                'Optimized maintenance scheduling'
              ]}
            />
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our AI Implementation Approach</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We follow a structured methodology to ensure successful AI implementation that delivers tangible business value.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <ProcessStep
                number="01"
                title="Discovery & Assessment"
                description="We start by understanding your business goals, evaluating existing data assets, and identifying specific opportunities where AI can create value."
              />
              
              <ProcessStep
                number="02"
                title="Solution Design"
                description="Our team designs a tailored AI solution architecture, selects appropriate models and technologies, and creates a detailed implementation roadmap."
              />
              
              <ProcessStep
                number="03"
                title="Development & Training"
                description="We develop custom AI models, train them with your data, and refine them through iterative testing to ensure optimal performance and accuracy."
              />
              
              <ProcessStep
                number="04"
                title="Integration & Deployment"
                description="The AI solution is seamlessly integrated with your existing systems and deployed with minimal disruption to your business operations."
              />
              
              <ProcessStep
                number="05"
                title="Monitoring & Optimization"
                description="We continuously monitor performance, retrain models as needed, and make ongoing improvements to maximize the value of your AI investment."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Demo Request Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Request an AI Solution Demo</h2>
            <p className="text-gray-600">
              Interested in seeing how our AI solutions could benefit your business? Contact us to
              schedule a personalized demo tailored to your industry and specific challenges.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-center">
              <a
                href="mailto:info@leoaxis.com?subject=AI Solution Demo Request"
                className="inline-flex items-center px-6 py-3 text-white font-medium rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Request Demo via Email
              </a>
              <p className="mt-4 text-gray-600">
                Or call us at: <a href="tel:+919618076715" className="text-blue-600 hover:text-blue-800">+91 96180 76715</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our AI solutions can help address your specific technology challenges and opportunities.
          </p>
          <a
            href="mailto:info@leoaxis.com?subject=AI Solutions Inquiry"
            className="bg-white text-blue-900 hover:bg-blue-50 font-medium py-3 px-6 rounded-md transition-colors inline-block"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
};

interface BenefitItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start">
      <div className="mt-1 mr-4">{icon}</div>
      <div>
        <h4 className="text-lg font-semibold text-gray-800 mb-1">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  capabilities: string[];
}

const SolutionCard: React.FC<SolutionCardProps> = ({ icon, title, description, capabilities }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow h-full flex flex-col">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <h4 className="font-semibold text-gray-700 mb-2 mt-auto">Key Capabilities:</h4>
      <ul className="space-y-1">
        {capabilities.map((capability, index) => (
          <li key={index} className="text-gray-600 flex items-start">
            <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
            <span>{capability}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface IndustryCardProps {
  title: string;
  image: string;
  applications: string[];
}

const IndustryCard: React.FC<IndustryCardProps> = ({ title, image, applications }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
      <div className="h-40 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" />
      </div>
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
        
        <ul className="space-y-2">
          {applications.map((application, index) => (
            <li key={index} className="text-gray-600 flex items-start">
              <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
              <span>{application}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

interface CaseStudyCardProps {
  title: string;
  client: string;
  challenge: string;
  solution: string;
  results: string[];
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  title,
  client,
  challenge,
  solution,
  results
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
      <div className="text-blue-600 font-medium mb-2">{client}</div>
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

export default AIPage;