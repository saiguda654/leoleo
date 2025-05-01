import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronDown, Search, Users, GraduationCap, Building, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const workshopImages = [
  {
    url: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Advanced DevOps Training - Bangalore',
    date: 'March 2024'
  },
  {
    url: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'AI & Machine Learning Workshop - Hyderabad',
    date: 'April 2024'
  },
  {
    url: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Cloud Computing Masterclass - Mumbai',
    date: 'April 2024'
  },
  {
    url: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Data Science Bootcamp - Delhi',
    date: 'May 2024'
  }
];

const statistics = [
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    number: '5000+',
    label: 'Trained Professionals'
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-purple-600" />,
    number: '200+',
    label: 'Training Programs'
  },
  {
    icon: <Building className="h-8 w-8 text-emerald-600" />,
    number: '150+',
    label: 'Corporate Partners'
  },
  {
    icon: <Trophy className="h-8 w-8 text-amber-600" />,
    number: '95%',
    label: 'Success Rate'
  }
];

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Senior Developer',
    company: 'TechCorp',
    quote: 'The cloud computing training from LeoAxis transformed our team\'s capabilities. Their hands-on approach and real-world scenarios made complex concepts accessible.',
    rating: 5,
    category: 'Training',
    date: '2024-03-15',
    course: 'Cloud Computing'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'CTO',
    company: 'Innovate Inc',
    quote: 'Their AI solutions have given us a competitive edge. The team understands business needs and delivers technology that truly makes a difference.',
    rating: 5,
    category: 'AI',
    date: '2024-04-20'
  },
  {
    id: 3,
    name: 'Arun Patel',
    role: 'IT Manager',
    company: 'Global Systems',
    quote: 'LeoAxis provides consistent, reliable IT support that keeps our operations running smoothly. Their response time is exceptional.',
    rating: 4,
    category: 'Support',
    date: '2024-01-10'
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    role: 'Recent Graduate',
    company: 'Tech Institute',
    quote: 'The data science bootcamp was intensive but incredibly rewarding. I secured a job within two weeks of completing the program!',
    rating: 5,
    category: 'Training',
    date: '2024-05-05',
    course: 'Data Science Bootcamp'
  },
  {
    id: 5,
    name: 'Vikram Singh',
    role: 'Founder',
    company: 'StartupVision',
    quote: 'As a startup, we needed flexible IT support that could scale with us. LeoAxis understood our needs perfectly and provided exactly what we needed.',
    rating: 5,
    category: 'Support',
    date: '2024-02-18'
  },
  {
    id: 6,
    name: 'Anita Desai',
    role: 'HR Director',
    company: 'Global Workforce',
    quote: 'The custom AI recruitment solution developed by LeoAxis has revolutionized our hiring process, reducing time-to-hire by 40% while improving candidate quality.',
    rating: 5,
    category: 'AI',
    date: '2024-03-30'
  },
  {
    id: 7,
    name: 'Karthik Iyer',
    role: 'Network Administrator',
    company: 'SecureNet',
    quote: 'The cybersecurity training provided by LeoAxis was comprehensive and practical. Our team is now better equipped to handle security threats.',
    rating: 4,
    category: 'Training',
    date: '2024-01-25',
    course: 'Advanced Cybersecurity'
  },
  {
    id: 8,
    name: 'Meera Kapoor',
    role: 'Product Manager',
    company: 'InnovateTech',
    quote: 'LeoAxis helped us implement an AI-driven product recommendation system that has significantly increased our customer engagement and sales.',
    rating: 5,
    category: 'AI',
    date: '2024-04-15'
  },
  {
    id: 9,
    name: 'Rahul Verma',
    role: 'CEO',
    company: 'GrowthWorks',
    quote: 'The IT infrastructure overhaul by LeoAxis has transformed our operations. Their support team is always available and highly knowledgeable.',
    rating: 5,
    category: 'Support',
    date: '2024-02-28'
  }
];

const TestimonialsPage: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('recent');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === workshopImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const filteredTestimonials = testimonials.filter((testimonial) => {
    const matchesCategory = filter === 'All' || testimonial.category === filter;
    const matchesSearch = 
      testimonial.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      testimonial.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      testimonial.quote.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (testimonial.course && testimonial.course.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const sortedTestimonials = [...filteredTestimonials].sort((a, b) => {
    if (sortBy === 'recent') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortBy === 'rating') {
      return b.rating - a.rating;
    } else {
      return a.name.localeCompare(b.name);
    }
  });

  return (
    <div>
      <section className="relative bg-blue-900 text-white py-24">
        <div
          className="absolute inset-0 bg-cover bg-center z-0 opacity-20"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          }}
        ></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Success Stories</h1>
            <p className="text-xl text-blue-100">
              Hear directly from our clients about their experiences working with LeoAxis.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Images Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Workshops</h2>
          <div className="relative overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
            >
              {workshopImages.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="relative aspect-video">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <h3 className="text-white text-xl font-semibold">{image.title}</h3>
                      <p className="text-white/80">{image.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {workshopImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex ? 'w-8 bg-white' : 'bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-4">
              <button
                onClick={() => setFilter('All')}
                className={`px-4 py-2 rounded-md ${
                  filter === 'All'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('Training')}
                className={`px-4 py-2 rounded-md ${
                  filter === 'Training'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                IT Training
              </button>
              <button
                onClick={() => setFilter('Support')}
                className={`px-4 py-2 rounded-md ${
                  filter === 'Support'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                IT Support
              </button>
              <button
                onClick={() => setFilter('AI')}
                className={`px-4 py-2 rounded-md ${
                  filter === 'AI'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                AI Solutions
              </button>
            </div>

            <div className="flex space-x-4 w-full md:w-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search testimonials..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="px-4 py-2 pl-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full md:w-64"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>

              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none px-4 py-2 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700"
                >
                  <option value="recent">Most Recent</option>
                  <option value="rating">Highest Rating</option>
                  <option value="name">Name (A-Z)</option>
                </select>
                <ChevronDown className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {sortedTestimonials.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">No testimonials found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedTestimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience LeoAxis?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our growing list of satisfied clients and see how our IT training, support, and AI solutions can transform your business.
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

interface TestimonialCardProps {
  testimonial: {
    id: number;
    name: string;
    role: string;
    company: string;
    quote: string;
    rating: number;
    category: string;
    date: string;
    course?: string;
  };
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100">
      <div className="flex items-center mb-4">
        <div>
          <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
          <p className="text-sm text-gray-500">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
      
      <div className="mb-4">
        <div className="flex mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        {testimonial.course && (
          <span className="inline-block bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full mb-2">
            {testimonial.course}
          </span>
        )}
      </div>
      
      <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
      
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span className="inline-block bg-gray-100 px-2 py-1 rounded">{testimonial.category}</span>
        <span>{new Date(testimonial.date).toLocaleDateString()}</span>
      </div>
    </div>
  );
};

export default TestimonialsPage;