# 🚀 AI LHOUNG — Backend API

RESTful API service for the AI LHOUNG travel platform, built with Express 5 and Prisma ORM.

## Features

- **AI Travel Planning & Weather:** Google Gemini integration for itinerary generation and weather forecasts.
- **Authentication & Security:** JWT with refresh token rotation, bcrypt hashing, and Google OAuth 2.0.
- **Itinerary Management:** Hierarchical CRUD for Trips, Days, and Activities with coordinates.
- **Group Billing Ledger:** Integer satang-precision expense splitting and audit tracking.
- **Collaboration & Social:** Friend requests, trip sharing, and activity notifications.

## Tech Stack

- **Runtime & Framework:** Node.js, Express 5
- **Database & ORM:** PostgreSQL, Prisma ORM
- **AI Integration:** Google Gen AI SDK (Gemini Flash)
- **Security:** Helmet, CORS, Rate Limiter, Zod

## Getting Started

```bash
# Install dependencies
npm install

# Run database migration
npx prisma generate
npx prisma db push

# Start development server
npm run dev
```

## Testing

```bash
npm test
```
