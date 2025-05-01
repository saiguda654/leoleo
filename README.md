# LeoAxis Website

A modern, responsive website for LeoAxis, showcasing IT Training, IT Support, and AI Innovation services.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- ⚡ Built with Vite and React
- 🔒 Supabase integration for database and authentication
- 📧 Contact form with EmailJS integration
- 🎭 Smooth animations with Framer Motion
- 📱 Mobile-friendly navigation
- 🖼️ Dynamic image galleries
- 💬 Testimonials system
- 🗺️ Interactive location map
- 📊 Statistics and counters

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Supabase
- EmailJS
- Framer Motion
- React Router DOM
- Lucide React Icons

## Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account
- EmailJS account

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_ANON_KEY=your-anon-key
VITE_EMAILJS_SERVICE_ID=your-service-id
VITE_EMAILJS_TEMPLATE_ID=your-template-id
VITE_EMAILJS_PUBLIC_KEY=your-public-key
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd leoaxis-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
├── src/
│   ├── components/     # Reusable components
│   ├── pages/         # Page components
│   ├── lib/           # Utility functions and configurations
│   ├── App.tsx        # Main application component
│   └── main.tsx       # Application entry point
├── public/            # Static assets
├── supabase/         # Supabase configurations and migrations
└── package.json      # Project dependencies and scripts
```

## Components

- `Navbar`: Responsive navigation with mobile menu
- `Footer`: Site footer with navigation and contact info
- `HeroSection`: Landing page hero section
- `ServicesSection`: Services showcase
- `TestimonialSlider`: Client testimonials carousel
- `ContactForm`: EmailJS integrated contact form
- `ClientsSection`: Client showcase with logos

## Pages

- `HomePage`: Landing page
- `AboutPage`: Company information
- `ServicesPages`: IT Training, Support, and AI services
- `ContactPage`: Contact information and form
- `ClientsPage`: Client showcase
- `TestimonialsPage`: Client testimonials

## Database Schema

The project uses Supabase with the following main table:

- `testimonials`: Stores client testimonials with moderation status

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email info@leoaxis.com or create an issue in the repository.