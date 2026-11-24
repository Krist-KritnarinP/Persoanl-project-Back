<div align="center">

# 🚀 AI LHOUNG (ไอหลง) — Backend API Service
### Robust RESTful Microservice Architecture with Google Gemini AI, Prisma ORM & Financial-Grade Billing Ledger

> *"The robust engine behind modern, stress-free travel planning"* ⚡

[![Node.js](https://img.shields.io/badge/Node.js-v20%2B-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express 5](https://img.shields.io/badge/Express-v5.2-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Prisma ORM](https://img.shields.io/badge/Prisma-v7.10-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Google Gemini AI](https://img.shields.io/badge/Google%20Gemini-Flash%203.5%20%2F%203.8-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)
[![Render](https://img.shields.io/badge/Deployed-Render-46E3B7?style=for-the-badge&logo=render&logoColor=black)](https://persoanl-project-back.onrender.com)
[![Tests Passing](https://img.shields.io/badge/Tests-58%2F58%20Passed-success?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Security Audit](https://img.shields.io/badge/Security-0%20Vulnerabilities-brightgreen?style=for-the-badge&logo=dependabot&logoColor=white)](https://github.com/Krist-KritnarinP/Persoanl-project-Back)

[🔌 Live Production API](https://persoanl-project-back.onrender.com/health/live) • [🖥️ Frontend Client Repository](https://github.com/Krist-KritnarinP/Persoanl-project-front) • [📖 API Documentation](docs/)

</div>

---

## 📖 Overview

The **AI LHOUNG API** is an enterprise-grade backend service built with **Express 5** and **Prisma ORM (PostgreSQL)** that powers the AI LHOUNG travel platform. Designed around reliability, security, and developer clarity, the system orchestrates multi-day itinerary generation via **Google Gemini AI**, executes satang-precise expense division algorithms, manages real-time geospatial coordinate mapping, and handles multi-user collaboration networks.

---

## 🏗️ System Architecture

```mermaid
flowchart TD
    subgraph Client["Frontend Client (React 19 + Vite)"]
        UI["Web Interface / Mobile PWA"]
        AXIOS["Axios Interceptor (JWT + Bearer)"]
    end

    subgraph Gateway["Express 5 Security Middleware Layer"]
        HELMET["Helmet (Security Headers)"]
        CORS["CORS Policy Validation"]
        RATE["Rate Limiter (express-rate-limit)"]
        AUTH["Auth Check (JWT Verification & Refresh Rotation)"]
    end

    subgraph ServiceLayer["Core Domain Controllers & Services"]
        AUTH_SVC["Auth Service (Bcrypt + Google OAuth 2.0)"]
        TRIP_SVC["Itinerary & Trip Service (Cascade Relations)"]
        AI_SVC["Gemini AI Service (Planner & Meteorological Engine)"]
        BILL_SVC["Billing Ledger Service (Satang Integer Math)"]
        SOCIAL_SVC["Collaboration & Notification Service"]
    end

    subgraph External["Third-Party Integrations"]
        GEMINI["Google Gen AI (Gemini 3.5 Flash / 3.8 Flash)"]
        GOOGLE_AUTH["Google Token Verification (OAuth2)"]
        SMTP["Nodemailer (SMTP Password Recovery)"]
    end

    subgraph DatabaseLayer["Data Persistence (Prisma ORM 7.10)"]
        PG[("PostgreSQL 16 Database")]
        PRISMA["Prisma Client Engine (@prisma/adapter-pg)"]
    end

    UI --> AXIOS
    AXIOS --> HELMET --> CORS --> RATE --> AUTH
    AUTH --> AUTH_SVC & TRIP_SVC & AI_SVC & BILL_SVC & SOCIAL_SVC
    AI_SVC <--> GEMINI
    AUTH_SVC <--> GOOGLE_AUTH
    AUTH_SVC <--> SMTP
    AUTH_SVC & TRIP_SVC & AI_SVC & BILL_SVC & SOCIAL_SVC --> PRISMA --> PG
```

---

## ⚡ Key Highlights & Core Capabilities

### 1. 🤖 Google Gemini AI Travel Planning & Weather Engine
- **Automated Itinerary Generation (`/api/planner`):** Dynamic multi-day itinerary planning leveraging Google's official `@google/genai` SDK. Outputs structured JSON matching date ranges, time budgets, and user interests.
- **Meteorological Climate Prediction (`/api/weather`):** Microclimate summaries taking into account geographical locations, activity timings, and October/seasonal variances.
- **Durable AI Quota Guard:** Managed via database counters (`AiUsage` model) with row-level transactional locking preventing accidental quota overruns and race conditions.
- **Resilient Multi-Model Fallback:** Primary model configured as `gemini-3.5-flash-lite` with automatic failover to `gemini-3.8-flash`.

### 2. 🔐 Defense-in-Depth Authentication & Security
- **Dual Authentication Modes:** Native email/password authentication (bcrypt hash `cost: 10`) alongside **Google OAuth 2.0 Sign-In** (`google-auth-library`).
- **Cryptographic Refresh Token Rotation:** Refresh tokens are hashed using SHA-256 (`RefreshSession` model) with token-family revocation on replay detection.
- **Global Token Invalidation:** Single-action `tokenVersion` increments instantly invalidate all active sessions upon password changes or suspicious activity.
- **Production-Hardened:** Zero vulnerabilities (`npm audit --omit=dev`), patched `proxy-addr` trust-proxy subnet validation (GHSA-jqcg-44mw-7w3h), sanitized error reporting, and Helmet HTTP protection.

### 3. 💸 Satang-Precision Financial Ledger (Trip Billing)
- **Eliminating Floating-Point Errors:** All monetary values are strictly represented and calculated as integer **Satang** (1 THB = 100 Satang).
- **Advanced Cost Allocations:** Supports equal splits, individual itemized participation, custom multipliers, and proportional VAT / service charge distribution without losing a single satang.
- **Idempotent Audit Ledger:** All mutating billing actions log tamper-evident `BillingEvent` records with UUID idempotency keys to safeguard against duplicate submissions.

### 4. 🗺️ Hierarchical Itinerary Management
- Cascading data relations: `User 1:N Trip 1:N Day 1:N Activity`.
- Precision geographic latitude and longitude storage (`Float`) allowing direct Leaflet plotting and Google Maps navigation without on-the-fly geocoding latency.
- Structured manual climate tracking (`manualWeather` JSON schema) on both Days and individual Activities.

---

## 🗄️ Database Entity-Relationship Model (Prisma)

```mermaid
erDiagram
    User ||--o{ Trip : "owns"
    User ||--o{ TripCollaborator : "collaborates"
    User ||--o{ RefreshSession : "has"
    User ||--o{ PasswordResetToken : "requests"
    User ||--o{ AiMessage : "queries"

    Trip ||--o{ Day : "contains"
    Trip ||--o{ TripCollaborator : "shares"
    Trip ||--o{ TripMember : "bills"
    Trip ||--o{ SplitBill : "records"
    Trip ||--o{ SplitSettlement : "settles"
    Trip ||--o{ BillingEvent : "audits"

    Day ||--o{ Activity : "schedules"

    User {
        int id PK
        string email UK
        string username
        string password
        int tokenVersion
        string googleSub UK
    }

    Trip {
        int id PK
        int userId FK
        string tripName
        string destination
        date startDate
        date endDate
        string shareToken UK
    }

    Day {
        int id PK
        int tripId FK
        int dayCount
        date dayDate
        json manualWeather
        json activityOrder
    }

    Activity {
        int id PK
        int dayId FK
        string activityType
        string locationName
        time activityTime
        decimal price
        float latitude
        float longitude
        json manualWeather
    }

    SplitBill {
        uuid id PK
        int tripId FK
        string title
        int total "Satang"
        json data
        boolean voided
    }

    SplitSettlement {
        uuid id PK
        int tripId FK
        uuid fromId
        uuid toId
        int amount "Satang"
        boolean reversed
    }
```

---

## 📡 RESTful API Reference

All protected endpoints require an `Authorization: Bearer <accessToken>` header.

### 🔑 Authentication (`/api/auth`)
| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/auth/register` | Register user account with email and password | Public |
| `POST` | `/api/auth/login` | Authenticate with credentials, returns access & refresh tokens | Public |
| `POST` | `/api/auth/google` | Verify Google OAuth credential and issue JWT tokens | Public |
| `POST` | `/api/auth/refresh` | Rotate refresh token and issue fresh access token | Public |
| `POST` | `/api/auth/logout` | Revoke current refresh token session | Authenticated |
| `POST` | `/api/auth/forgot-password` | Issue secure password reset token via email | Public |
| `POST` | `/api/auth/reset-password` | Complete password reset with one-time token | Public |

### ✈️ Trips & Itinerary (`/api/trips`)
| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/trips` | List all trips owned or collaborated by authenticated user | Authenticated |
| `POST` | `/api/trips` | Create a new trip with destination and date bounds | Authenticated |
| `GET` | `/api/trips/:tripId` | Fetch complete trip hierarchy (Days & Activities) | Owner / Collaborator |
| `PUT` | `/api/trips/:tripId` | Update trip metadata and description | Owner |
| `DELETE` | `/api/trips/:tripId` | Cascade delete trip and associated records | Owner |
| `POST` | `/api/trips/:tripId/share` | Generate or toggle public read-only share token | Owner |
| `GET` | `/api/shared/:shareToken` | Retrieve public trip itinerary without authentication | Public |

### 📅 Days & Activities (`/api/trips/:tripId/days` & `/api/activities`)
| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/trips/:tripId/days` | Append a new day to trip | Trip Editor |
| `PUT` | `/api/days/:dayId` | Update day description or manual weather | Trip Editor |
| `DELETE` | `/api/days/:dayId` | Remove day and its child activities | Trip Editor |
| `POST` | `/api/activities` | Create activity (Type, Location, Time, Coordinates, Price) | Trip Editor |
| `PUT` | `/api/activities/:id` | Update activity attributes or weather observation | Trip Editor |
| `DELETE` | `/api/activities/:id` | Remove activity | Trip Editor |

### 🤖 AI Planner & Weather (`/api/planner` & `/api/weather`)
| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/planner/generate` | Generate complete multi-day travel plan via Gemini | Authenticated |
| `POST` | `/api/planner/confirm` | Save and persist generated draft to database | Authenticated |
| `POST` | `/api/weather/predict-weather` | Generate meteorological forecast for trip destinations | Authenticated |

### 💸 Trip Billing & Expense Division (`/api/trips/:tripId/billing`)
| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/trips/:tripId/billing` | Retrieve ledger state, members, bills, and settlements | Owner / Collaborator |
| `POST` | `/api/trips/:tripId/billing/command` | Dispatch idempotent command (`bill.create`, `bill.remove`, `member.add`, `settle`) | Trip Editor |

### 👥 Collaboration & Social (`/api/social`)
| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/social/friends` | List confirmed friends | Authenticated |
| `POST` | `/api/social/friends/request` | Send friend request by username | Authenticated |
| `GET` | `/api/social/notifications` | Fetch unread notifications | Authenticated |

---

## 🛠️ Local Development & Setup

### Prerequisites
- **Node.js**: `v20.0.0` or higher
- **PostgreSQL**: `v14+` or `v16+` (or hosted cloud database like Neon / Supabase / Render)

### 1. Clone & Install Dependencies

```bash
git clone https://github.com/Krist-KritnarinP/Persoanl-project-Back.git
cd Persoanl-project-Back
npm install
```

### 2. Environment Configuration

Copy the example environment configuration:

```bash
cp .env.example .env
```

Edit `.env` with your credentials:

```env
# Server Configuration
PORT=8899
NODE_ENV=development
FRONTEND_URL=http://localhost:5173

# Database Connection (PostgreSQL)
DATABASE_URL="postgresql://user:password@localhost:5432/ailhoung_db?schema=public"

# Cryptography & JWT Secrets
JWT_SECRET=your_super_secret_jwt_key_at_least_32_characters_long
JWT_EXPIRES_IN=1h
REFRESH_TOKEN_EXPIRES_IN=30d

# Google Gemini API
GEMINI_API_KEY=your_gemini_api_key_here
GEMINI_MODEL=gemini-3.5-flash-lite
GEMINI_FALLBACK_MODEL=gemini-3.8-flash

# Google OAuth Client (Optional for Google Sign-In)
GOOGLE_CLIENT_ID=your_client_id.apps.googleusercontent.com
```

### 3. Database Initialization & Migration

```bash
# Generate Prisma Client
npx prisma generate

# Push database schema
npx prisma db push
```

### 4. Run the Service

```bash
# Start development server with file watch mode
npm run dev

# Start in production mode
npm start
```

API will be live at `http://localhost:8899`. Verify liveness at:
```bash
curl http://localhost:8899/health/live
```

---

## 🧪 Comprehensive Automated Test Suite

The backend features rigorous unit, security, and integration tests using the native Node.js test runner (`node:test`):

```bash
# Run all automated tests
npm test
```

### Verified Test Categories:
- **Security & Authorization:** JWT expiration, refresh rotation, replay detection, token version revocation, origin verification, and SQL query sanitization.
- **Financial Math:** Decimal-to-satang conversions, multi-payer allocations, proportional VAT/Service charge splits, and reverse repayment protection.
- **AI Quota Guards:** Rate-limiting bounds, concurrent lock reservations, prompt sanitation, and schema validation.
- **Data Integrity:** Cascade deletion, coordinate accuracy bounds, and date chronology.

> **Test Suite Status:** `58 passing (100%), 0 failures, 1 opt-in test skipped`

---

## 🚀 Production Deployment

- **Hosting Platform:** **Render** (Web Service, Singapore Region)
- **Database:** Managed Cloud PostgreSQL
- **Build Command:** `npm install && npx prisma generate`
- **Start Command:** `node src/server.js`
- **Health Check Path:** `/health/live`
- **Blueprint:** Declarative `render.yaml` configuration included at repository root.

---

## 📄 License & Author

Developed by **Kritnarin P.** for Codecamp 23 Personal Project.

[![GitHub](https://img.shields.io/badge/GitHub-Krist--KritnarinP-181717?style=flat-square&logo=github)](https://github.com/Krist-KritnarinP)
