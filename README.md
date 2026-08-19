# Pehnava — Fashion Store in Ajmer

A modern, responsive fashion e-commerce demo website created for **Pehnava**, a fashion store based in Ajmer, Rajasthan.

The project focuses on a premium storefront experience, responsive design, product discovery, and a clean shopping interface suitable for presenting a real-world retail website concept to clients.

## Live Demo

**Cloudflare Pages:** Add the deployed URL here after deployment.

## Project Overview

Pehnava is a frontend-first fashion store experience designed to demonstrate how a local fashion retailer can present its products and brand online with a polished, mobile-friendly interface.

The current repository is a **demo website**. It does not include a production payment gateway, authentication system, inventory backend, or order-processing service.

## Features

- Responsive fashion storefront for desktop, tablet, and mobile
- Modern landing page and branded visual presentation
- Product browsing and product-focused layouts
- Shopping/cart interaction for demo purposes
- Responsive navigation and mobile-friendly UI
- Reusable React components
- Fast Vite development and production builds
- Tailwind CSS styling
- Lucide icons
- Static frontend deployment suitable for client demonstrations

## Tech Stack

### Frontend

- **React 19**
- **TypeScript**
- **Vite 6**
- **Tailwind CSS 4**
- **Lucide React**

### Deployment

- **Cloudflare Pages**
- GitHub-based continuous deployment

## Project Structure

```text
Pehnava-Rj01-Demo-Website/
├── public/              # Static assets
├── src/                 # Application source code
├── package.json         # Project metadata and scripts
├── package-lock.json    # npm dependency lockfile
├── vite.config.*        # Vite configuration
├── tsconfig*.json       # TypeScript configuration
└── README.md            # Project documentation
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (LTS recommended)
- npm
- Git

### Clone the repository

```bash
git clone https://github.com/Saksham1105/Pehnava-Rj01-Demo-Website.git
cd Pehnava-Rj01-Demo-Website
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The Vite development server will start locally.

## Production Build

Create an optimized production build with:

```bash
npm run build
```

The compiled website is generated in:

```text
dist/
```

To preview the production build locally:

```bash
npm run preview
```

## Deployment on Cloudflare Pages

This repository is configured for a standard Vite deployment.

Use the following Cloudflare Pages build settings:

```text
Framework preset: Vite
Production branch: main
Build command: npm run build
Build output directory: dist
Root directory: /
```

Every push to the `main` branch can trigger a new deployment when GitHub integration is enabled.

## Development Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run the TypeScript validation script |

## Current Scope

This project is intended primarily as a **client presentation and frontend demo**.

### Included

- Storefront UI
- Product presentation
- Responsive layouts
- Interactive frontend elements
- Demo shopping experience

### Not Included in the Demo

- Real payment processing
- Customer authentication
- Production order management
- Live inventory synchronization
- Admin dashboard
- Delivery/logistics integration
- Production database

These capabilities can be added as part of a production implementation.

## Future Production Enhancements

Potential next-stage integrations include:

- Product and inventory database
- Customer accounts and authentication
- Order management
- Online payments
- WhatsApp order integration
- Admin dashboard
- Customer notifications
- Analytics and sales reporting
- Custom domain and production SEO
- CMS or product management workflow

## Deployment Architecture

```text
GitHub Repository
       │
       ▼
Cloudflare Pages
       │
       ▼
Production Build (dist/)
       │
       ▼
Client Demo Website
```

## Credits

Built as a web development project for **Pehnava — Fashion Store in Ajmer**.

**Developer:** Saksham Raj Singh Chauhan  
**GitHub:** [Saksham1105](https://github.com/Saksham1105)

## License

This repository is a project/demo implementation for Pehnava. Reuse, redistribution, or commercial deployment should be coordinated with the project owner.
