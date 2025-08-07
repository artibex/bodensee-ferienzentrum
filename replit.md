# Overview

This is a full-stack web application for a Bodensee Ferienzentrum (Lake Constance vacation resort) built with React, Express, and TypeScript. The application showcases vacation accommodations at Lake Constance with modern web technologies, featuring a responsive design with German language content, accommodation listings, booking inquiries, and comprehensive resort information.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety
- **Routing**: Wouter for client-side routing with German route names (/unterkuenfte, /ueber-uns, /kontakt)
- **Styling**: Tailwind CSS with custom theme variables and Shadcn/ui components
- **State Management**: TanStack React Query for server state management
- **Form Handling**: React Hook Form with Zod validation for type-safe form schemas
- **Animations**: Framer Motion for smooth page transitions and component animations
- **Build Tool**: Vite with hot module replacement and development optimizations

## Backend Architecture
- **Server**: Express.js with TypeScript running on Node.js
- **API Structure**: RESTful API with `/api` prefix for all endpoints
- **Storage Interface**: Abstract storage layer with in-memory implementation (MemStorage class)
- **Development**: Hot reloading with tsx for TypeScript execution
- **Production**: esbuild bundling for optimized server deployment

## Database Design
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Three main entities:
  - Users table with authentication fields
  - Bookings table for reservation management with status tracking
  - Accommodations table for property listings with features and pricing
- **Migrations**: Drizzle Kit for database schema management
- **Connection**: Configured for Neon serverless PostgreSQL

## Component Architecture
- **UI Components**: Comprehensive Shadcn/ui component library with Radix UI primitives
- **Layout**: Modular header/footer components with responsive navigation
- **Sections**: Reusable homepage sections (hero, features, gallery, accommodations, about, contact)
- **Theme**: Light/dark mode support with CSS custom properties
- **Typography**: Inter and Playfair Display fonts for modern, elegant design

## Development Features
- **Hot Reloading**: Full-stack development with Vite HMR
- **Type Safety**: Strict TypeScript configuration across client and server
- **Code Quality**: ESLint configuration and path aliases for clean imports
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

# External Dependencies

## Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form with Zod resolvers
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state synchronization
- **Build Tools**: Vite with React plugin and runtime error overlay

## UI and Styling
- **Component Library**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS with PostCSS processing
- **Icons**: Lucide React for consistent iconography
- **Animations**: Framer Motion for page transitions and interactions
- **Carousel**: Embla Carousel React for image galleries

## Backend and Database
- **Database**: Neon serverless PostgreSQL with connection pooling
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Validation**: Zod with Drizzle-Zod integration for schema validation

## Development and Build
- **TypeScript**: Strict type checking with path mapping
- **Build**: esbuild for production server bundling
- **Development**: tsx for TypeScript execution in development
- **Assets**: Image optimization and lazy loading support

## Utilities
- **Date Handling**: date-fns for date manipulation and formatting
- **Styling Utilities**: clsx and class-variance-authority for dynamic styling
- **UUID**: crypto module for unique identifier generation
- **Form Validation**: Comprehensive validation with react-hook-form and Zod schemas