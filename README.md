# CloudXAI Conference Website

A modern, responsive website for the CloudXAI Conference built with Nuxt.js and Vuetify.

## About

CloudXAI Conference is a premier event focused on Cloud Computing and Artificial Intelligence. This website provides information about the event, speakers, agenda, partners, and ticket registration.

## Tech Stack

- **Framework**: Nuxt.js 4.2.1
- **UI Library**: Vuetify 3
- **Language**: TypeScript
- **Styling**: Sass
- **Build Tool**: Nuxt (Vite)

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **npm** (comes with Node.js) or **pnpm** or **yarn** or **bun**

## Setup

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <repository-url>
   cd cloudxai-conf
   ```

2. **Install dependencies**:
   ```bash
   # Using npm
   npm install

   # Or using pnpm
   pnpm install

   # Or using yarn
   yarn install

   # Or using bun
   bun install
   ```

3. **Start the development server**:
   ```bash
   # Using npm
   npm run dev

   # Or using pnpm
   pnpm dev

   # Or using yarn
   yarn dev

   # Or using bun
   bun run dev
   ```

   The development server will start on `http://localhost:3000`

## Building for Production

### Static Site Generation (SSG)

To generate a static site for deployment:

```bash
# Using npm
npm run generate

# Or using pnpm
pnpm generate

# Or using yarn
yarn generate

# Or using bun
bun run generate
```

This command will:
- Build the application
- Generate static HTML files for all routes
- Output the static files to the `.output/public` directory

The generated static site can be deployed to any static hosting service like:
- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting
- AWS S3 + CloudFront
- Any other static hosting provider

### Standard Build

For server-side rendering (SSR) or other deployment methods:

```bash
# Using npm
npm run build

# Or using pnpm
pnpm build

# Or using yarn
yarn build

# Or using bun
bun run build
```

### Preview Production Build

To preview the production build locally:

```bash
# Using npm
npm run preview

# Or using pnpm
pnpm preview

# Or using yarn
yarn preview

# Or using bun
bun run preview
```

## Project Structure

```
cloudxai-conf/
├── app/
│   ├── assets/          # Static assets (images, data files)
│   │   ├── data/        # JSON data files (tickets, FAQ, partners)
│   │   └── images/      # Image assets
│   ├── components/      # Vue components
│   │   ├── core/        # Core components (Footer, Toolbar)
│   │   ├── home/        # Home page components
│   │   └── shared/      # Shared components
│   ├── layouts/         # Layout components
│   └── pages/           # Page components (routes)
├── public/              # Public static files
├── dist/                # Generated static files (after build)
└── nuxt.config.ts       # Nuxt configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (SSR)
- `npm run generate` - Generate static site (SSG)
- `npm run preview` - Preview production build locally
- `npm run postinstall` - Prepare Nuxt (runs automatically after install)

## Features

- 🎯 Event information and agenda
- 🎫 Ticket registration system
- 👥 Speaker profiles
- 🤝 Partner showcase
- ❓ FAQ section
- 📱 Fully responsive design
- ⚡ Fast static site generation

## Deployment

After running `npm run generate`, deploy the contents of the `.output/public` directory to your preferred static hosting service.

For Firebase Hosting (if configured), you can use:
```bash
firebase deploy
```

## Learn More

- [Nuxt Documentation](https://nuxt.com/docs/getting-started/introduction)
- [Vuetify Documentation](https://vuetifyjs.com/)
- [Nuxt Deployment Guide](https://nuxt.com/docs/getting-started/deployment)

## License

This project is private and proprietary.
