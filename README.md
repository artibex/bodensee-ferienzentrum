# Bodensee Ferienzentrum Website

A modern, mobile-first website for a Lake Constance vacation center offering 3 beautiful apartments with pool access and full amenities.

## 🌟 Features

- **Mobile-First Responsive Design** - Optimized for all devices
- **German Language Support** - Complete German localization
- **Dark/Light Theme Toggle** - Automatic theme switching with user preference
- **Modern UI/UX** - Clean, professional vacation resort aesthetic
- **SEO Optimized** - Proper meta tags, Open Graph, and semantic HTML
- **Accessibility Ready** - WCAG compliant design
- **Fast Performance** - Optimized images and lazy loading

## 🏠 Pages

- **Startseite (Home)** - Hero section, features, gallery, accommodations preview
- **Unterkünfte (Accommodations)** - Detailed apartment listings
- **Über uns (About)** - Personal host story and statistics
- **Kontakt (Contact)** - Contact form and booking information

## 🛠 Tech Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Wouter** for routing
- **React Hook Form** + Zod for forms
- **Shadcn/ui** components

### Backend
- **Express.js** with TypeScript
- **Drizzle ORM** with PostgreSQL
- **RESTful API** design
- **Session management**

### Development
- **Vite** for build tooling
- **Hot Module Replacement**
- **ESLint** for code quality
- **TypeScript** strict mode

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/[USERNAME]/bodensee-ferienzentrum.git
cd bodensee-ferienzentrum
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your database credentials
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utilities and configuration
│   │   └── index.css      # Global styles and theme
├── server/                # Backend Express application
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Data storage interface
│   └── index.ts           # Server entry point
├── shared/                # Shared TypeScript schemas
└── README.md
```

## 🎨 Design System

### Colors
- **Lake Blue** - Primary brand color inspired by Lake Constance
- **Alpine Green** - Secondary color from Alpine landscape
- **Warm Grays** - Neutral tones for text and backgrounds

### Typography
- **Inter** - Sans-serif for body text
- **Playfair Display** - Serif for headings and branding

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px  
- **Desktop:** > 1024px

## 🌐 Deployment

### Replit (Recommended)
This project is optimized for Replit deployment:

1. Import the repository to Replit
2. Set up environment variables in Secrets
3. Run `npm run dev`

### Vercel/Netlify
For static deployment:

1. Build the project: `npm run build`
2. Deploy the `dist` folder

### Docker
```bash
docker build -t bodensee-ferienzentrum .
docker run -p 5000:5000 bodensee-ferienzentrum
```

## 📊 Performance Features

- **Image Optimization** - WebP format with lazy loading
- **Code Splitting** - Dynamic imports for optimal bundle size
- **CSS Optimization** - Purged unused styles
- **SEO Ready** - Meta tags, sitemap, robots.txt

## 🛡 Security Features

- **Input Validation** - Zod schema validation
- **XSS Protection** - Sanitized user inputs
- **CSRF Protection** - Secure session handling

## 📄 License

MIT License - feel free to use this project as a template for your own vacation rental website.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📞 Support

For questions about this project, please open an issue in the GitHub repository.

---

Built with ❤️ for the beautiful Lake Constance region