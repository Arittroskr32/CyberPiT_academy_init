# CyberPiT Academy

A modern "Under Construction" page for the CyberPiT Academy subdomain, built with React, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Beautiful gradient background with animated elements
- **Countdown Timer**: Real-time countdown to launch date
- **Interactive Elements**: Animated icons and floating effects
- **Responsive**: Fully responsive design for all devices
- **Email Signup**: Newsletter subscription for launch notifications
- **Feature Preview**: Showcase of upcoming academy features

## Quick Start

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## Project Structure

```
academy/
├── public/              # Static assets
├── src/
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Application entry point
│   ├── index.css       # Global styles and animations
│   └── vite-env.d.ts   # TypeScript environment definitions
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── tailwind.config.js  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite build configuration
```

## Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server
- **Lucide React** - Beautiful icon library

## Deployment

This project is configured to run on port 3001 and can be deployed to any static hosting service:

- **Netlify**: Connect your Git repository for automatic deployments
- **Vercel**: Import your Git repository
- **GitHub Pages**: Use the build output
- **Custom Server**: Serve the `dist` folder after building

## Customization

### Countdown Timer
The countdown timer is set to 3 months from the current date. To modify:

```typescript
// In App.tsx, line ~15
const targetDate = new Date();
targetDate.setMonth(targetDate.getMonth() + 3); // Change this value
```

### Colors and Styling
The design uses a blue/purple gradient theme. To customize colors, modify the Tailwind classes in `App.tsx` or update the CSS custom properties in `index.css`.

### Content
All text content is directly in the `App.tsx` component and can be easily modified.

## Development

- **Port**: Development server runs on port 3001
- **Hot Reload**: Enabled for instant updates during development
- **TypeScript**: Full type checking and IntelliSense support
- **Linting**: ESLint configured for React and TypeScript

## License

© 2025 CyberPiT Inc. All rights reserved.
