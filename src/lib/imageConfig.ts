// AWS S3 Image configuration for dynamic banner management
// Update the S3_BUCKET_URL and folder path to match your AWS S3 setup

export interface EventBanner {
  id: string;
  src: string;
  alt: string;
  title?: string;
}

// AWS S3 Configuration
const S3_BUCKET_URL = 'https://your-bucket-name.s3.your-region.amazonaws.com';
const EVENTS_FOLDER = 'images/events';

// Helper function to generate S3 URLs
const getS3ImageUrl = (filename: string): string => {
  return `${S3_BUCKET_URL}/${EVENTS_FOLDER}/${filename}`;
};

// Update this array to change the carousel images
// The images will be served from your AWS S3 bucket
export const eventBanners: EventBanner[] = [
  {
    id: '1',
    src: getS3ImageUrl('banner1.jpg'),
    alt: 'Event Banner 1',
    title: 'Your Event Title 1'
  },
  {
    id: '2',
    src: getS3ImageUrl('banner2.jpg'),
    alt: 'Event Banner 2',
    title: 'Your Event Title 2'
  },
  {
    id: '3',
    src: getS3ImageUrl('banner3.jpg'),
    alt: 'Event Banner 3',
    title: 'Your Event Title 3'
  },
  {
    id: '4',
    src: getS3ImageUrl('banner4.jpg'),
    alt: 'Event Banner 4',
    title: 'Your Event Title 4'
  },
  {
    id: '5',
    src: getS3ImageUrl('banner5.jpg'),
    alt: 'Event Banner 5',
    title: 'Your Event Title 5'
  }
];

// Fallback images using Pexels (for demonstration purposes)
// Remove these once you've configured your S3 bucket
export const fallbackEventBanners: EventBanner[] = [
  {
    id: '1',
    src: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Annual Tech Conference 2024',
    title: 'Annual Tech Conference 2024'
  },
  {
    id: '2',
    src: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Innovation Workshop Series',
    title: 'Innovation Workshop Series'
  },
  {
    id: '3',
    src: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Networking Mixer Event',
    title: 'Networking Mixer Event'
  },
  {
    id: '4',
    src: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Product Launch Celebration',
    title: 'Product Launch Celebration'
  },
  {
    id: '5',
    src: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Team Building Retreat',
    title: 'Team Building Retreat'
  }
];

// Configuration object for easy S3 setup
export const s3Config = {
  bucketUrl: S3_BUCKET_URL,
  eventsFolder: EVENTS_FOLDER,
  // Add any additional S3 configuration here
  region: 'your-region', // e.g., 'us-east-1'
  bucketName: 'your-bucket-name'
};
