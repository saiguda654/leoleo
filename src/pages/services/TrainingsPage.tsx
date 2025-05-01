import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, GraduationCap, Code, ShieldCheck, Database, Cloud, Clock, Trophy, BookOpen } from 'lucide-react';

const workshopImages = [
  {
    url: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Cloud Computing Workshop',
    date: 'March 2024'
  },
  {
    url: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'AI Development Training',
    date: 'April 2024'
  },
  {
    url: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Cybersecurity Bootcamp',
    date: 'April 2024'
  },
  {
    url: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Data Science Workshop',
    date: 'May 2024'
  }
];

interface CourseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  topics: string[];
}

const CourseCard: React.FC<CourseCardProps> = ({ icon, title, description, topics }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        {title} {title.includes('Cloud') ? '☁️' : 
                title.includes('Data') ? '📊' : 
                title.includes('Software') ? '💻' : 
                title.includes('Cybersecurity') ? '🔒' : 
                title.includes('Certification') ? '📜' : '🚀'}
      </h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <h4 className="font-semibold text-gray-700 mb-2">Popular Topics:</h4>
      <ul className="space-y-1">
        {topics.map((topic, index) => (
          <li key={index} className="text-gray-600 flex items-start">
            <span className="mr-2">✨</span>
            <span>{topic}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface DeliveryModelCardProps {
  title: string;
  description: string;
  features: string[];
}

const DeliveryModelCard: React.FC<DeliveryModelCardProps> = ({ title, description, features }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        {title} {title.includes('Corporate') ? '🏢' : 
                title.includes('Bootcamp') ? '🎯' : '🎓'}
      </h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-600 flex items-start">
            <span className="mr-2">🌟</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
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
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {title} {number === "01" ? '🎯' : 
                  number === "02" ? '⚡' : 
                  number === "03" ? '🔄' : '📈'}
        </h3>
        <p className="text-gray-600">{description}</p>
      </div>
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

const TrainingsPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-24">
        <div
          className="absolute inset-0 bg-cover bg-center z-0 opacity-20"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          }}
        ></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">IT Training Programs</h1>
            <p className="text-xl text-blue-100">
              Expert-led, hands-on training courses designed to build real-world skills and accelerate
              career growth in the fast-evolving technology landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Training Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Comprehensive IT Training Solutions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              LeoAxis offers tailored training programs for both educational institutions and corporate
              clients, focused on developing practical skills that drive real-world results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="IT Training Workshop"
                className="rounded-lg shadow-md"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Training Approach</h3>
              <p className="text-gray-700 mb-6">
                We believe in learning by doing. Our training programs combine theoretical knowledge with
                hands-on practice, real-world projects, and expert guidance to ensure participants develop
                applicable skills they can use immediately.
              </p>
              
              <ul className="space-y-3">
                <FeatureItem
                  icon={<Clock className="h-5 w-5 text-blue-600" />}
                  title="Flexible Scheduling"
                  description="Choose from full-time, part-time, weekend, and evening courses to fit your schedule."
                />
                <FeatureItem
                  icon={<BookOpen className="h-5 w-5 text-blue-600" />}
                  title="Custom Curriculum"
                  description="Programs tailored to specific organizational needs and skill requirements."
                />
                <FeatureItem
                  icon={<Trophy className="h-5 w-5 text-blue-600" />}
                  title="Industry-Recognized Certifications"
                  description="Preparation for in-demand certifications that boost career prospects."
                />
                <FeatureItem
                  icon={<Code className="h-5 w-5 text-blue-600" />}
                  title="Project-Based Learning"
                  description="Build a portfolio of real-world projects that demonstrate your capabilities."
                />
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Training Programs</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of training programs designed to build expertise across
              today's most in-demand technology domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CourseCard
              icon={<Cloud className="h-12 w-12 text-blue-600" />}
              title="Cloud Computing"
              description="Master cloud platforms like AWS, Azure, and Google Cloud. Learn architecture, deployment, security, and optimization."
              topics={['AWS Solutions Architect', 'Azure Administrator', 'Cloud Security', 'DevOps for Cloud']}
            />
            
            <CourseCard
              icon={<Database className="h-12 w-12 text-purple-600" />}
              title="Data Science & Analytics"
              description="Build skills in data analysis, machine learning, visualization, and statistical modeling."
              topics={['Python for Data Science', 'Machine Learning', 'Big Data Analytics', 'Data Visualization']}
            />
            
            <CourseCard
              icon={<Code className="h-12 w-12 text-emerald-600" />}
              title="Software Development"
              description="Learn modern programming languages, frameworks, and development methodologies."
              topics={['Full-Stack Web Development', 'Mobile App Development', 'API Design', 'Agile Development']}
            />
            
            <CourseCard
              icon={<ShieldCheck className="h-12 w-12 text-red-600" />}
              title="Cybersecurity"
              description="Develop skills to protect systems, networks, and data from digital attacks."
              topics={['Network Security', 'Ethical Hacking', 'Security Operations', 'Threat Intelligence']}
            />
            
            <CourseCard
              icon={<GraduationCap className="h-12 w-12 text-amber-600" />}
              title="IT Certification Prep"
              description="Targeted preparation for industry-recognized certifications."
              topics={['CompTIA', 'Cisco', 'Microsoft', 'Project Management (PMP)']}
            />
            
            <CourseCard
              icon={<BookOpen className="h-12 w-12 text-indigo-600" />}
              title="Specialized Training"
              description="Focused programs for specific technologies and skills."
              topics={['Blockchain', 'IoT Development', 'UI/UX Design', 'IT Project Management']}
            />
          </div>
        </div>
      </section>

      {/* Training Models */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Training Models</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We offer multiple training delivery formats to meet your unique needs and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <DeliveryModelCard
              title="Corporate Training"
              description="Custom training programs designed specifically for your organization's needs, delivered on-site or remotely."
              features={[
                'Tailored to your specific requirements',
                'Flexible scheduling for minimal disruption',
                'Team-based exercises relevant to your business',
                'Pre and post-training assessments'
              ]}
            />
            
            <DeliveryModelCard
              title="Bootcamp Programs"
              description="Intensive, immersive training experiences that build job-ready skills in a condensed timeframe."
              features={[
                'Full-time and part-time options',
                'Hands-on, project-based curriculum',
                'Industry-expert instructors',
                'Career support and placement assistance'
              ]}
            />
            
            <DeliveryModelCard
              title="Academic Partnerships"
              description="Collaborative programs with educational institutions to enhance technology curriculum and student outcomes."
              features={[
                'Industry-aligned curriculum development',
                'Faculty training and development',
                'Student workshops and seminars',
                'Internship and employment pathways'
              ]}
            />
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Training Success Stories</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hear from individuals and organizations who have transformed their capabilities through
              our training programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">TechCorp Team Upskilling</h3>
              <p className="text-gray-600 italic mb-4">
                "LeoAxis trained our entire development team of 50+ people on cloud technologies. The
                custom curriculum and hands-on approach resulted in a seamless transition to
                cloud-native development, significantly reducing our time-to-market."
              </p>
              <div className="text-sm text-gray-500">
                Alex Johnson, CTO, TechCorp
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Career Transition Success</h3>
              <p className="text-gray-600 italic mb-4">
                "After 10 years in a non-technical role, I enrolled in LeoAxis's Data Science
                Bootcamp. Within three months of graduation, I secured a role as a Junior Data
                Analyst with a 40% salary increase. The practical skills and career support made
                all the difference."
              </p>
              <div className="text-sm text-gray-500">
                Jessica Martinez, Data Analyst, AnalyticsPro
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Interested in Our Training Programs?</h2>
            <p className="text-gray-600">
              Contact us to discuss your training needs and how we can help you achieve your learning goals.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg shadow-md p-8">
            <div className="text-center">
              <a
                href="mailto:info@leoaxis.com?subject=Training Program Inquiry"
                className="inline-flex items-center px-6 py-3 text-white font-medium rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Contact Us via Email
              </a>
              <p className="mt-4 text-gray-600">
                Or call us at: <a href="tel:+919618076715" className="text-blue-600 hover:text-blue-800">+91 96180 76715</a>
              </p>
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
              Find answers to common questions about our training programs.
            </p>
          </div>

          <div className="space-y-6">
            <FaqItem
              question="How are your training programs delivered?"
              answer="We offer multiple delivery formats including in-person, virtual live instructor-led, hybrid, and self-paced options. Each format is designed to provide an optimal learning experience while accommodating different schedules and learning preferences."
            />
            
            <FaqItem
              question="Do you provide custom training programs for organizations?"
              answer="Yes, we specialize in developing customized training programs tailored to your organization's specific needs, technologies, and skill gaps. Our team works closely with you to understand your requirements and design a curriculum that addresses your unique challenges."
            />
            
            <FaqItem
              question="Are there prerequisites for your courses?"
              answer="Prerequisites vary by course. Some introductory programs have no prerequisites, while more advanced courses may require basic knowledge or experience in related fields. Each course description includes specific prerequisites and recommended background knowledge."
            />
            
            <FaqItem
              question="Do you provide certification preparation?"
              answer="Yes, many of our programs are designed to prepare participants for industry-recognized certifications. We offer specific exam prep courses as well as incorporating certification objectives into our broader training programs where relevant."
            />
            
            <FaqItem
              question="What kind of support do participants receive after training?"
              answer="We offer post-training support including access to training materials, forums for ongoing questions, refresher sessions, and in some programs, one-on-one mentoring. For bootcamp participants, we also provide career support and job placement assistance."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Enhance Your Tech Skills?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you're an individual looking to advance your career or an organization seeking to
            upskill your team, we have training solutions to meet your needs.
          </p>
          <a
            href="mailto:info@leoaxis.com?subject=Training Inquiry"
            className="bg-white text-blue-900 hover:bg-blue-50 font-medium py-3 px-6 rounded-md transition-colors inline-block"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default TrainingsPage;