import React from 'react';
import { useForm } from 'react-hook-form';
import { Star } from 'lucide-react';
import { toast } from 'react-toastify';
import { supabase } from '../lib/supabase';

interface TestimonialFormData {
  name: string;
  company: string;
  role: string;
  service: string;
  testimonial: string;
  rating: number;
}

const TestimonialForm: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<TestimonialFormData>();
  const [rating, setRating] = React.useState(0);

  const onSubmit = async (data: TestimonialFormData) => {
    try {
      const { error } = await supabase
        .from('testimonials')
        .insert([
          {
            name: data.name,
            company: data.company,
            role: data.role,
            service: data.service,
            testimonial: data.testimonial,
            rating: rating,
            status: 'pending'
          }
        ]);

      if (error) throw error;

      toast.success('Thank you for your testimonial! It will be reviewed and published soon.');
      reset();
      setRating(0);
    } catch (error) {
      toast.error('Failed to submit testimonial. Please try again.');
      console.error('Error submitting testimonial:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Name is required' })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 border-gray-300"
            placeholder="Your name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
            Company <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="company"
            {...register('company', { required: 'Company is required' })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 border-gray-300"
            placeholder="Your company"
          />
          {errors.company && (
            <p className="mt-1 text-sm text-red-500">{errors.company.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="role" className="block text-gray-700 font-medium mb-2">
            Your Role <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="role"
            {...register('role', { required: 'Role is required' })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 border-gray-300"
            placeholder="Your job title"
          />
          {errors.role && (
            <p className="mt-1 text-sm text-red-500">{errors.role.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
            Service Category <span className="text-red-500">*</span>
          </label>
          <select
            id="service"
            {...register('service', { required: 'Please select a service' })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 border-gray-300"
          >
            <option value="">Select a service</option>
            <option value="training">IT Training</option>
            <option value="support">IT Support</option>
            <option value="ai">AI Solutions</option>
          </select>
          {errors.service && (
            <p className="mt-1 text-sm text-red-500">{errors.service.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="testimonial" className="block text-gray-700 font-medium mb-2">
          Your Testimonial <span className="text-red-500">*</span>
        </label>
        <textarea
          id="testimonial"
          {...register('testimonial', { required: 'Please share your experience' })}
          rows={5}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 border-gray-300"
          placeholder="Share your experience working with LeoAxis..."
        ></textarea>
        {errors.testimonial && (
          <p className="mt-1 text-sm text-red-500">{errors.testimonial.message}</p>
        )}
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Your Rating <span className="text-red-500">*</span>
        </label>
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              className="focus:outline-none"
            >
              <Star
                className={`h-8 w-8 ${
                  star <= rating
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-gray-300'
                } hover:text-yellow-400 transition-colors`}
              />
            </button>
          ))}
        </div>
        {rating === 0 && (
          <p className="mt-1 text-sm text-red-500">Please select a rating</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting || rating === 0}
        className="w-full btn-primary disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Your Testimonial'}
      </button>
    </form>
  );
};

export default TestimonialForm;