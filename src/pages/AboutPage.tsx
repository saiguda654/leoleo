import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Brain, Rocket, Heart, Star, Shield, Users } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-24">
        <div
          className="absolute inset-0 bg-cover bg-center z-0 opacity-20"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          }}
        ></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-blue-100">
              Pioneering the future of technology through expert training, reliable support, and
              innovative AI solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-blue-50 p-8 rounded-lg border border-blue-100">
              <div className="flex items-center mb-4">
                <Rocket className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-blue-800">Our Mission</h2>
              </div>
              <p className="text-gray-700 mb-4">
                To empower businesses and individuals with cutting-edge technology skills and solutions
                that drive innovation, efficiency, and growth in the digital economy.
              </p>
              <p className="text-gray-700">
                We strive to be the bridge that connects our clients to the future of technology,
                making advanced IT concepts accessible and applicable to real-world challenges.
              </p>
            </div>

            <div className="bg-indigo-50 p-8 rounded-lg border border-indigo-100">
              <div className="flex items-center mb-4">
                <Star className="h-8 w-8 text-indigo-600 mr-3" />
                <h2 className="text-2xl font-bold text-indigo-800">Our Vision</h2>
              </div>
              <p className="text-gray-700 mb-4">
                To be the leading technology enabler, recognized for excellence in IT training,
                support services, and AI innovations that transform how organizations operate.
              </p>
              <p className="text-gray-700">
                We envision a world where technology is harnessed ethically and effectively to
                create sustainable business advantages and positive societal impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Company</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              LeoAxis is a leading technology solutions provider with a proven track record of delivering
              excellence in IT training, support, and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center justify-center mb-4">
                <Users className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Expert Team</h3>
              <p className="text-gray-600 text-center">
                Our team consists of certified professionals with extensive experience across diverse technology domains.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center justify-center mb-4">
                <Shield className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Industry Recognition</h3>
              <p className="text-gray-600 text-center">
                Recognized for excellence in technology solutions and training by leading industry organizations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center justify-center mb-4">
                <Brain className="h-12 w-12 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Innovation Focus</h3>
              <p className="text-gray-600 text-center">
                Committed to staying at the forefront of technology trends and delivering cutting-edge solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and define our approach to
              client relationships, service delivery, and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              icon={<Star className="h-8 w-8 text-yellow-500" />}
              title="Excellence"
              description="We pursue the highest standards in every aspect of our work, from curriculum development to technical support and solutions."
            />
            <ValueCard
              icon={<Brain className="h-8 w-8 text-purple-500" />}
              title="Innovation"
              description="We constantly explore emerging technologies and methodologies to bring fresh, forward-thinking solutions to our clients."
            />
            <ValueCard
              icon={<Shield className="h-8 w-8 text-blue-500" />}
              title="Integrity"
              description="We operate with honesty, transparency, and ethical practices in all our business relationships and decisions."
            />
            <ValueCard
              icon={<Users className="h-8 w-8 text-green-500" />}
              title="Collaboration"
              description="We believe in working closely with our clients to understand their unique needs and co-create effective solutions."
            />
            <ValueCard
              icon={<Rocket className="h-8 w-8 text-red-500" />}
              title="Adaptability"
              description="We embrace change, continuously evolve our offerings, and help our clients navigate technological shifts."
            />
            <ValueCard
              icon={<Heart className="h-8 w-8 text-pink-500" />}
              title="Empowerment"
              description="We equip individuals and organizations with the knowledge and tools they need to achieve independence and success."
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What sets us apart and makes us the trusted technology partner for businesses and
              educational institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <AdvantageItem
                title="Industry-Leading Expertise"
                description="Our team consists of certified professionals with extensive experience across diverse technology domains."
              />
              <AdvantageItem
                title="Customized Solutions"
                description="We tailor our services to your specific needs rather than offering one-size-fits-all packages."
              />
              <AdvantageItem
                title="Practical Approach"
                description="Our training programs and solutions focus on real-world applications and tangible business outcomes."
              />
            </div>
            <div>
              <AdvantageItem
                title="Ongoing Support"
                description="We provide continuous assistance and updates to ensure the long-term success of implemented solutions."
              />
              <AdvantageItem
                title="Future-Ready Focus"
                description="Our offerings are designed to prepare you for upcoming technological trends and challenges."
              />
              <AdvantageItem
                title="Proven Track Record"
                description="We've successfully delivered hundreds of projects and training programs with measurable results."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us on Our Mission</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you're looking to enhance your team's skills, upgrade your IT infrastructure, or
            implement AI solutions, we're here to help you succeed.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-900 hover:bg-blue-50 font-medium py-3 px-6 rounded-md transition-colors inline-block"
          >
            Get in Touch Today
          </Link>
        </div>
      </section>
    </div>
  );
};

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-center mb-3">
        {icon}
        <h3 className="text-xl font-semibold text-gray-800 ml-3">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

interface AdvantageItemProps {
  title: string;
  description: string;
}

const AdvantageItem: React.FC<AdvantageItemProps> = ({ title, description }) => {
  return (
    <div className="flex items-start mb-6">
      <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
      <div className="ml-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default AboutPage;