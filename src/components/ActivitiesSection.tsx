import React from 'react';
import { ImageCarousel } from './ImageCarousel';
import { fallbackEventBanners } from '../lib/imageConfig';

export const ActivitiesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Activities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the exciting events, workshops, and activities that bring our community together. 
            From innovative conferences to hands-on workshops, we create memorable experiences that inspire and connect.
          </p>
        </div>

        {/* Image Carousel */}
        <div className="mb-16">
          <ImageCarousel 
            images={fallbackEventBanners}
            autoplayInterval={6000}
            className="mb-8"
          />
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
};
