// Alternative approach: Create a simple API service for S3 image management
// This is a more reliable approach than direct S3 XML parsing

export interface S3ImageMetadata {
  filename: string;
  url: string;
  lastModified: string;
  size: number;
}

// Simple approach: Use a JSON file in your S3 bucket to list images
export const fetchImagesFromManifest = async (): Promise<any[]> => {
  try {
    // You can create a manifest.json file in your S3 bucket that lists all images
    const response = await fetch('https://leoaxis8520.s3.us-east-1.amazonaws.com/images/events/manifest.json', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });
    
    if (!response.ok) {
      console.warn(`Manifest file not accessible (${response.status}). Using fallback images.`);
      return [];
    }
    
    const manifest = await response.json();
    return manifest.images || [];
  } catch (error) {
    console.warn('Manifest file not available. Using fallback images.');
    return [];
  }
};

// Example manifest.json structure you would upload to S3:
/*
{
  "images": [
    {
      "filename": "conference-2024.jpg",
      "title": "Annual Conference 2024",
      "alt": "Annual Conference 2024"
    },
    {
      "filename": "workshop-series.jpg", 
      "title": "Workshop Series",
      "alt": "Innovation Workshop Series"
    },
    {
      "filename": "networking-event.jpg",
      "title": "Networking Event",
      "alt": "Networking Mixer Event"
    }
  ],
  "lastUpdated": "2024-01-15T10:30:00Z"
}
*/

// Function to generate image URLs from manifest
export const processManifestImages = (manifestImages: any[]) => {
  const S3_BASE_URL = 'https://leoaxis8520.s3.us-east-1.amazonaws.com/images/events';
  
  return manifestImages.map((img, index) => ({
    id: (index + 1).toString(),
    src: `${S3_BASE_URL}/${img.filename}`,
    alt: img.alt || img.title || img.filename.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ')
  }));
};
