// AWS S3 Image configuration for dynamic banner management

export interface EventBanner {
  id: string;
  src: string;
  alt: string;
}

// AWS S3 Configuration
const S3_BUCKET_URL = 'https://leoaxis6666.s3.us-east-1.amazonaws.com';
const EVENTS_FOLDER = 'images/events';

// Helper function to generate S3 URLs
const getS3ImageUrl = (filename: string): string => {
  return `${S3_BUCKET_URL}/${EVENTS_FOLDER}/${filename}`;
};

// Import the manifest-based approach
import { fetchImagesFromManifest, processManifestImages } from './s3Service';

// Function to fetch images dynamically from S3
export const fetchS3Images = async (): Promise<EventBanner[]> => {
  try {
    // Use the manifest-based approach for more reliable image fetching
    const manifestImages = await fetchImagesFromManifest();
    
    if (manifestImages.length > 0) {
      return processManifestImages(manifestImages);
    } else {
      // If manifest is empty or not found, return fallback images silently
      return fallbackEventBanners;
    }
  } catch (error) {
    console.warn('Using fallback images due to S3 access issue.');
    return fallbackEventBanners; // Return fallback images if S3 fetch fails
  }
};

// Static configuration for manual management (backup approach)
export const eventBanners: EventBanner[] = [
  {
    id: '1',
    src: getS3ImageUrl('banner1.jpg'),
    alt: 'Event Banner 1'
  },
  {
    id: '2',
    src: getS3ImageUrl('banner2.jpg'),
    alt: 'Event Banner 2'
  },
  {
    id: '3',
    src: getS3ImageUrl('banner3.jpg'),
    alt: 'Event Banner 3'
  },
  {
    id: '4',
    src: getS3ImageUrl('banner4.jpg'),
    alt: 'Event Banner 4'
  },
  {
    id: '5',
    src: getS3ImageUrl('banner5.jpg'),
    alt: 'Event Banner 5'
  }
];

// Fallback images using Pexels (for demonstration purposes)
export const fallbackEventBanners: EventBanner[] = [
  {
    id: '1',
    src: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Annual Tech Conference 2024'
  },
  {
    id: '2',
    src: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Innovation Workshop Series'
  },
  {
    id: '3',
    src: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Networking Mixer Event'
  },
  {
    id: '4',
    src: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Product Launch Celebration'
  },
  {
    id: '5',
    src: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Team Building Retreat'
  }
];

// Configuration object for easy S3 setup
export const s3Config = {
  bucketUrl: S3_BUCKET_URL,
  eventsFolder: EVENTS_FOLDER,
  region: 'us-east-1',
  bucketName: 'leoaxis6666'
};
