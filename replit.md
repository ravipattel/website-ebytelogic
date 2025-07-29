# eByteLogic - Embedded Software & Multimedia Engineering Platform

## Overview

eByteLogic is a Next.js-based company website showcasing embedded software development services, multimedia engineering solutions, and specialized BSP (Board Support Package) development. The platform serves as a comprehensive portfolio and service showcase for embedded systems engineering, targeting OEMs, product companies, and businesses requiring custom embedded solutions.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

**July 29, 2025**
- Updated hero section layout to include multimedia workflow image
- Modified hero content area from full width to 3/5 width on large screens
- Added right-side image section (2/5 width) showing multimedia workflow diagram
- Copied user-provided workflow image to public/images/multimedia-workflow.png
- Enhanced visual appeal with professional multimedia acquisition/processing/delivery diagram

## System Architecture

### Frontend Architecture
- **Framework**: Next.js 15.3.3 with App Router architecture
- **Language**: TypeScript with relaxed type checking (`noImplicitAny: false`)
- **Styling**: Tailwind CSS 4.1.8 for utility-first styling
- **Fonts**: Custom Google Fonts (Poppins, Roboto) loaded via CDN
- **Build Tool**: Turbopack for development (`--turbopack` flag)

### Component Structure
- **Layout System**: Root layout with Header, Footer, and TopButton components
- **Page Structure**: Route-based pages using Next.js App Router (`app/` directory)
- **Component Library**: Custom reusable components in `src/components/`
- **View Components**: Page-specific components organized in `src/views/`

### UI/UX Features
- **Loading System**: Custom video loader component with fade-out animation
- **Animations**: Framer Motion 12.23.6 and GSAP 3.13.0 for advanced animations
- **Typography Effects**: Typed.js for dynamic text animations
- **Image Gallery**: React Photo View for image lightbox functionality
- **Carousels**: Swiper.js for interactive slide components
- **Icons**: React Icons library for consistent iconography

## Key Components

### Core Sections
1. **Home Page**: Hero section with animated typography, services showcase, technology highlights
2. **About Page**: Company overview, team expertise, platform capabilities
3. **Services**: Detailed service offerings with individual service detail pages
4. **Case Studies**: Project showcases with dedicated pages for each case study
5. **Industries**: Industry-specific solutions and applications
6. **Blog System**: Content management for technical articles and insights
7. **Contact System**: Contact forms and company information
8. **FAQ System**: Collapsible FAQ sections

### Interactive Features
- **Dynamic Navigation**: Multi-level dropdown menus with service categorization
- **Responsive Design**: Mobile-first approach with breakpoint-specific layouts
- **Scroll Animations**: GSAP-powered scroll-triggered animations
- **Form Handling**: Contact and newsletter subscription forms
- **Social Integration**: LinkedIn, Twitter, YouTube, and GitHub links

## Data Flow

### Static Content Architecture
- **Asset Management**: Images stored in `src/assets/images/` with categorized folders
- **Content Structure**: Component-based content management without external CMS
- **Route Handling**: Next.js App Router with nested routes and dynamic segments
- **State Management**: React hooks for local component state management

### Content Categories
- **Service Data**: Embedded in components with structured service information
- **Case Study Data**: Detailed project information with technical specifications
- **Industry Information**: Sector-specific content and use cases
- **Blog Content**: Technical articles and development insights

## External Dependencies

### Animation & Interaction Libraries
- **Framer Motion**: Advanced React animations and gestures
- **GSAP**: Professional-grade animation library
- **Typed.js**: Text typing animations
- **Swiper**: Touch slider components

### Media & Visualization
- **React Photo View**: Image gallery and lightbox functionality
- **Mermaid**: Diagram and flowchart generation
- **React Icons**: Comprehensive icon library

### Development Tools
- **TypeScript**: Type safety with flexible configuration
- **ESLint**: Code quality and consistency
- **PostCSS**: CSS processing with Autoprefixer

## Deployment Strategy

### Vercel Integration
- **Platform**: Optimized for Vercel deployment (mentioned in README)
- **Build Process**: Next.js static generation and server-side rendering
- **Performance**: Automatic optimization for fonts, images, and assets
- **Domain**: Currently configured for ebytelogic.com

### Development Workflow
- **Local Development**: Hot reloading with Turbopack
- **Asset Optimization**: Next.js automatic image optimization
- **SEO**: Built-in metadata management and favicon configuration
- **Analytics**: Prepared for integration with external analytics services

### Technical Specifications
- **Node.js**: Compatible with Node.js 20+
- **Build Commands**: Standard Next.js build and start scripts
- **Package Management**: npm/yarn/pnpm/bun compatibility
- **Browser Support**: Modern browser support through Next.js compilation

The application demonstrates a professional service website architecture focused on embedded systems engineering, with emphasis on multimedia processing, BSP development, and cross-platform application development. The codebase is structured for maintainability and scalability, with clear separation of concerns between layout, content, and functionality components.