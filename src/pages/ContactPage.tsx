import React from 'react';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-24">
        <div
          className="absolute inset-0 bg-cover bg-center z-0 opacity-20"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          }}
        ></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100">
              Have questions or ready to get started? Reach out to our team and we'll be happy to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              
              <div className="space-y-8">
                <ContactInfoItem
                  icon={<MapPin className="h-6 w-6 text-blue-600" />}
                  title="Our Location"
                  content={
                    <>
                      <p>104/4, Ganesh Nagar Colony</p>
                      <p>Hyderabad, Telangana 501510</p>
                      <p>India</p>
                    </>
                  }
                />
                
                <ContactInfoItem
                  icon={<Phone className="h-6 w-6 text-blue-600" />}
                  title="Phone Numbers"
                  content={
                    <>
                      <p>
                        <a href="tel:+919618076715" className="hover:text-blue-600 transition-colors">
                          +91 96180 76715
                        </a>
                      </p>
                    </>
                  }
                />
                
                <ContactInfoItem
                  icon={<Mail className="h-6 w-6 text-blue-600" />}
                  title="Email Us"
                  content={
                    <>
                      <p>
                        <a href="mailto:info@leoaxis.com" className="hover:text-blue-600 transition-colors">
                          info@leoaxis.com
                        </a>
                      </p>
                    </>
                  }
                />
                
                <ContactInfoItem
                  icon={<Clock className="h-6 w-6 text-blue-600" />}
                  title="Business Hours"
                  content={
                    <>
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </>
                  }
                />
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/company/leoaxis1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-200 hover:bg-blue-600 hover:text-white transition-colors h-10 w-10 rounded-full flex items-center justify-center text-gray-600"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/leoaxis_official/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-200 hover:bg-blue-600 hover:text-white transition-colors h-10 w-10 rounded-full flex items-center justify-center text-gray-600"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61575506524539"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-200 hover:bg-blue-600 hover:text-white transition-colors h-10 w-10 rounded-full flex items-center justify-center text-gray-600"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Find Us</h2>
          <div className="h-96 rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.927387725485!2d78.55729571478473!3d17.27013088815989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba659868b4727%3A0x41f983a6b2fcf82e!2sGanesh%20Nagar%20Colony%2C%20Telangana%20501510!5e0!3m2!1sen!2sin!4v1646132546789!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Find answers to common questions about our services.
            </p>
          </div>

          <div className="space-y-6">
            <FaqItem
              question="How quickly can you respond to IT support requests?"
              answer="For our managed IT support clients, we guarantee response times of 1 hour for critical issues and 4 hours for non-critical issues during business hours. Emergency support is available 24/7 for clients on our premium support plans."
            />
            
            <FaqItem
              question="Do you offer customized training programs for specific needs?"
              answer="Yes, we specialize in creating customized training programs tailored to your organization's specific needs, technologies, and skill gaps. Our team works closely with you to develop curriculum that addresses your unique requirements."
            />
            
            <FaqItem
              question="What industries do your AI solutions serve?"
              answer="Our AI innovations have been implemented across various industries including healthcare, finance, retail, manufacturing, and education. We adapt our solutions to meet the specific challenges and opportunities in each sector."
            />
            
            <FaqItem
              question="Can you work with our existing IT infrastructure?"
              answer="Absolutely! We pride ourselves on our ability to integrate with and enhance existing IT infrastructures. Our team conducts thorough assessments to understand your current setup before recommending solutions that complement and improve what you already have."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how LeoAxis can help transform your business through advanced IT training, reliable support, and innovative AI solutions.
          </p>
          <a
            href="mailto:info@leoaxis.com"
            className="bg-white text-blue-900 hover:bg-blue-50 font-medium py-3 px-6 rounded-md transition-colors inline-block"
          >
            Email Us Now
          </a>
        </div>
      </section>
    </div>
  );
};

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ icon, title, content }) => {
  return (
    <div className="flex">
      <div className="mt-1 mr-4">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <div className="text-gray-600 space-y-1">{content}</div>
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

export default ContactPage;