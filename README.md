# Management system

A platform for managing a small agricultural operation (trout farm, crops, greenhouse, chickens, etc.).

## Project Objective

AgroFlow is a farm management platform inspired by The Wild Oasis project from the Next.js course.

Instead of building a hotel reservation system, I am adapting the same architecture and concepts to a future agricultural business. The goal is to learn modern full-stack development while building software that could eventually be used in a real farm operation.

This project is focused on:

- Learning Next.js through a real-world application
- Practicing backend development and database design
- Building software related to agriculture and automation
- Creating a portfolio project with potential business value
- Establishing a foundation for future AI and IoT integrations

---

## Core Idea

The Wild Oasis manages:

- Cabins
- Guests
- Reservations

AgroFlow manages:

- Production units (crops, ponds, greenhouses, etc.)
- Users
- Production records and farm tasks

The objective is not to copy the hotel business but to reuse the same software architecture and development concepts.

---

## Project Analogies

| The Wild Oasis         | AgroFlow                                   |
| ---------------------- | ------------------------------------------ |
| Hotel                  | Farm / Agricultural Business               |
| Cabin                  | Crop, Pond, Greenhouse, or Production Unit |
| Guest                  | User / Worker                              |
| Booking                | Production Record                          |
| Reservation            | Scheduled Farm Task                        |
| Reservation Dates      | Production Cycle Dates                     |
| Cabin Availability     | Inventory or Production Capacity           |
| Hotel Dashboard        | Farm Dashboard                             |
| Guest Profile          | User Profile                               |
| Cabin List             | Production Unit List                       |
| Cabin Detail           | Production Unit Detail                     |
| Reservation Management | Task & Production Management               |

---

## Main Features

### Dashboard

- Farm overview
- Production statistics
- Recent activity

### Inventory

- Manage feed
- Manage fertilizers
- Manage tools and supplies

### Production

- Record harvests
- Record fish production
- Track production history

### Finance

- Register expenses
- Register income
- Profit tracking

### Tasks

- Feeding schedules
- Irrigation schedules
- Maintenance reminders

### Authentication

- Login
- Logout
- Protected routes

### Profile

- Update personal information
- Manage account settings

---

## Planned Pages

```text
/
Homepage

/dashboard
Farm overview

/inventory
Inventory management

/production
Production records

/finance
Expenses and income

/tasks
Farm tasks

/profile
User profile

/login
Authentication
```

---

## Initial Database Design

```text
Users
Farms
Inventory
ProductionRecords
Expenses
Tasks
```

Relationships:

```text
User
 └── Farm

Farm
 ├── Inventory
 ├── ProductionRecords
 ├── Expenses
 └── Tasks
```

---

## Technology Stack

- Next.js
- React
- Tailwind CSS
- PostgreSQL
- Prisma
- Authentication (NextAuth or Better Auth)

---

## Future Roadmap

After completing the core application:

- Weather API integration
- AI-based production predictions
- Disease detection models
- IoT sensor integration
- Automated alerts
- Mobile support
- Multi-farm SaaS version

---

## Learning Goals

This project is primarily a learning vehicle for:

- Next.js App Router
- Server Components
- Route Handlers
- Authentication
- Database design
- ORM usage
- Full-stack architecture
- Clean project organization

The long-term vision is to combine:

Software Engineering + Agriculture + Automation + Artificial Intelligence

into a real business-oriented platform.

```
agroflow/
│
├── src/
│
│   ├── app/                               # Next.js App Router.
│   │                                      # Defines all routes (pages) of the application.
│   │                                      # UI composition + navigation layer.
│   │
│   │   ├── (marketing)/                   # Public website (Landing)
│   │   │
│   │   │   ├── page.tsx                   # Homepage (/)
│   │   │   ├── about/                     # About page
│   │   │   └── pricing/                   # Pricing page
│   │   │
│   │   ├── (auth)/                        # Authentication routes
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   └── forgot-password/
│   │   │
│   │   ├── dashboard/                     # Protected application area
│   │   │
│   │   │   ├── layout.tsx                 # Shared dashboard UI (sidebar, navbar)
│   │   │   ├── page.tsx                   # Dashboard overview
│   │   │
│   │   │   ├── inventory/
│   │   │   ├── production/
│   │   │   ├── finance/
│   │   │   ├── tasks/
│   │   │   ├── devices/
│   │   │   ├── analytics/
│   │   │   ├── reports/
│   │   │   ├── settings/
│   │   │   └── profile/
│   │   │
│   │   ├── api/                           # Backend endpoints (REST/webhooks)
│   │   │   ├── auth/
│   │   │   ├── inventory/
│   │   │   ├── production/
│   │   │   ├── finance/
│   │   │   ├── tasks/
│   │   │   ├── devices/
│   │   │   └── webhooks/
│   │   │
│   │   ├── layout.tsx                     # Root layout (global app wrapper)
│   │   └── globals.css                    # Global styles
│
│   ├── components/                        # Reusable UI components (no business logic)
│   │   ├── ui/
│   │   ├── layout/
│   │   ├── charts/
│   │   ├── tables/
│   │   ├── forms/
│   │   ├── maps/
│   │   └── common/
│   │
│   ├── features/                          # Business domains (core logic by module)
│   │
│   │   ├── inventory/
│   │   │   ├── actions/                   # Server Actions (called from UI)
│   │   │   ├── components/                # Feature-specific UI
│   │   │   ├── hooks/                     # Feature hooks
│   │   │   ├── services/                  # Business logic (rules, calculations)
│   │   │   ├── schemas/                   # Zod validation
│   │   │   ├── types.ts
│   │   │   └── utils.ts
│   │   │
│   │   ├── production/
│   │   ├── finance/
│   │   ├── tasks/
│   │   ├── devices/
│   │   ├── weather/
│   │   ├── analytics/
│   │   ├── ai/
│   │   └── auth/
│   │
│   ├── server/                            # Backend core (domain-independent logic)
│   │   ├── services/                      # Orchestration logic
│   │   ├── repositories/                  # DB access only (Prisma queries)
│   │   ├── validators/                    # Backend validation rules
│   │   └── permissions/                   # Authorization rules
│   │
│   ├── lib/                               # Infrastructure layer (singletons/utilities)
│   │   ├── prisma.ts                      # Prisma client instance
│   │   ├── auth.ts                        # Auth config
│   │   ├── db.ts                          # DB helpers
│   │   ├── logger.ts                      # Logging
│   │   ├── env.ts                         # Env validation
│   │   └── utils.ts                       # Generic helpers
│   │
│   ├── hooks/                             # Global React hooks
│   ├── types/                             # Shared TypeScript types
│   ├── constants/                         # App constants (roles, statuses)
│   ├── config/                            # App configuration (feature flags, APIs)
│   ├── styles/                            # Extra styles if needed
│   │
│   └── middleware.ts                      # Auth, redirects, permissions
│
├── prisma/                                # Database layer
│   ├── schema.prisma
│   ├── migrations/
│   └── seed.ts
│
├── public/                                # Static assets
│   ├── icons/
│   ├── images/
│   └── logos/
│
├── tests/                                 # Testing
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
├── next.config.ts
├── package.json
└── README.md
```

```
agroflow/
│
├── src/
│
│   ├── app/
│   # PURPOSE: Next.js App Router (UI + routing layer)
│   # This is the entry point for all user navigation.
│   # It defines pages, layouts, and route structure.
│   # It should NOT contain business logic.
│   #
│   # RESPONSIBILITIES:
│   # - Render UI pages
│   # - Handle navigation (routes)
│   # - Call Server Actions or API routes
│   # - Compose feature components
│   #
│   # FLOW:
│   # UI → Server Actions → services → repository → DB
│
│   │
│   │   ├── (marketing)/
│   │   # PURPOSE: Public-facing SaaS website
│   │   # Landing pages used for acquisition (SEO + marketing)
│   │   # No authentication required
│   │
│   │   ├── page.tsx
│   │   # Homepage entry point (/)
│   │   # Combines marketing sections: hero, features, pricing, CTA
│   │
│   │   ├── about/
│   │   # Explains company/product vision, mission, story
│   │
│   │   └── pricing/
│   │   # Shows subscription plans and billing tiers
│   │
│   │
│   │   ├── (auth)/
│   │   # PURPOSE: Authentication flow (login/register/reset)
│   │   # Handles user identity lifecycle
│   │   # Usually integrated with NextAuth/BetterAuth/etc.
│   │
│   │   ├── login/
│   │   # Login page + form
│   │
│   │   ├── register/
│   │   # User creation flow
│   │
│   │   └── forgot-password/
│   │   # Password recovery flow
│   │
│   │
│   │   ├── dashboard/
│   │   # PURPOSE: Core authenticated application (SaaS product)
│   │   # This is where users manage real operations (farm, IoT, finance, etc.)
│   │   #
│   │   # RESPONSIBILITIES:
│   │   # - Display operational data
│   │   # - Trigger actions (create/update/delete)
│   │   # - Consume feature modules
│   │
│   │   ├── layout.tsx
│   │   # Shared UI shell for dashboard (sidebar, navbar, layout rules)
│   │
│   │   ├── page.tsx
│   │   # Main dashboard overview
│   │   # Aggregates KPIs from multiple domains:
│   │   # inventory + production + finance + devices + AI insights
│   │
│   │   ├── inventory/
│   │   ├── production/
│   │   ├── finance/
│   │   ├── tasks/
│   │   ├── devices/
│   │   ├── analytics/
│   │   ├── reports/
│   │   ├── settings/
│   │   └── profile/
│   │   #
│   │   # PURPOSE (all subroutes):
│   │   # Each folder represents a user-facing feature page.
│   │   # They mostly import feature components and call server actions.
│   │
│   │
│   │   ├── api/
│   │   # PURPOSE: Backend HTTP interface (REST + webhooks)
│   │   # Used by:
│   │   # - mobile apps
│   │   # - IoT devices
│   │   # - external integrations (Stripe, sensors, etc.)
│   │   #
│   │   # NOTE:
│   │   # This is separate from Server Actions.
│   │   # API routes are public/externally callable.
│   │
│   │   ├── auth/
│   │   ├── inventory/
│   │   ├── production/
│   │   ├── finance/
│   │   ├── tasks/
│   │   ├── devices/
│   │   └── webhooks/
│   │
│   │
│   │   ├── layout.tsx
│   │   # Global application wrapper
│   │   # Applies to ALL routes (auth + marketing + dashboard)
│   │   # Used for global providers (theme, auth session, etc.)
│   │
│   └── globals.css
│       # Global styling rules (Tailwind base, resets, fonts)
│
│
├── components/
│   # PURPOSE: Reusable UI library (presentation layer only)
│   # These components should NOT contain business logic.
│   #
│   # RESPONSIBILITIES:
│   # - UI consistency across app
│   # - Shared design system
│   #
│   ├── ui/
│   # Primitive components (buttons, inputs, modals)
│   # Lowest-level reusable UI building blocks
│
│   ├── layout/
│   # Structural components (Navbar, Sidebar, Footer)
│   # Used to compose pages
│
│   ├── charts/
│   # Data visualization components (KPIs, graphs)
│
│   ├── tables/
│   # Generic reusable data tables
│
│   ├── forms/
│   # Form inputs, form wrappers, validation UI
│
│   ├── maps/
│   # GIS / farm mapping visual components
│
│   └── common/
│   # Misc shared UI utilities (badges, loaders, alerts)
│
│
├── features/
│   # PURPOSE: Domain-driven business logic (core of the system)
│   # Each folder = one business domain (Inventory, Finance, IoT, etc.)
│   #
│   # RESPONSIBILITIES:
│   # - Business rules
│   # - Data transformation
│   # - Feature-specific UI + logic
│   # - Server Actions entry point
│
│   ├── inventory/
│   │   ├── actions/
│   │   # Server Actions (Next.js)
│   │   # Bridge between UI and backend services
│   │
│   │   ├── components/
│   │   # UI specific only to inventory feature
│   │   # NOT reusable globally
│   │
│   │   ├── hooks/
│   │   # React hooks for inventory state/logic
│   │
│   │   ├── services/
│   │   # BUSINESS LOGIC LAYER
│   │   # Example:
│   │   # - calculateStockLevels()
│   │   # - registerPurchase()
│   │   # - validateInventoryRules()
│   │   #
│   │   # This is the "brain" of the feature
│   │
│   │   ├── schemas/
│   │   # Zod validation (input validation layer)
│   │
│   │   ├── types.ts
│   │   # TypeScript models for inventory domain
│   │
│   │   └── utils.ts
│   │   # Small helper functions (formatting, mapping, etc.)
│   │
│   ├── production/
│   ├── finance/
│   ├── tasks/
│   ├── devices/
│   ├── weather/
│   ├── analytics/
│   ├── ai/
│   └── auth/
│
│
├── server/
│   # PURPOSE: Backend core logic (framework-independent layer)
│   # This is the "true backend" of your system.
│   #
│   # RESPONSIBILITIES:
│   # - Orchestrate business operations
│   # - Enforce permissions
│   # - Access database via repositories
│
│   ├── services/
│   # CROSS-FEATURE BUSINESS ORCHESTRATION
│   # Example:
│   # - handleFarmClosingDay()
│   # - generateMonthlyReport()
│
│   ├── repositories/
│   # DATABASE ACCESS LAYER ONLY
│   # All Prisma queries live here
│   #
│   # RULE:
│   # No business logic here. Only CRUD operations.
│
│   ├── validators/
│   # Backend-level validation (extra safety layer)
│
│   └── permissions/
│   # Authorization rules (RBAC / ABAC)
│   # Example:
│   # - canDeleteDevice(user)
│   # - canEditFinance(user)
│
│
├── lib/
│   # PURPOSE: Infrastructure & global singletons
│   #
│   # RESPONSIBILITIES:
│   # - Initialize external services
│   # - Provide reusable system utilities
│
│   ├── prisma.ts
│   # Singleton Prisma client
│
│   ├── auth.ts
│   # Authentication configuration
│
│   ├── db.ts
│   # Database helper functions
│
│   ├── logger.ts
│   # Central logging system
│
│   ├── env.ts
│   # Environment variable validation (Zod)
│
│   └── utils.ts
│   # Generic helpers (date, string, formatting)
│
│
├── prisma/
│   # PURPOSE: Database schema + migrations
│
│   ├── schema.prisma
│   # Database structure definition
│
│   ├── migrations/
│   # Version history of DB changes
│
│   └── seed.ts
│   # Initial data setup
│
│
├── hooks/
│   # PURPOSE: Global reusable React hooks
│   # Cross-feature state or logic hooks
│
│
├── types/
│   # PURPOSE: Global TypeScript types shared across system
│   # (not feature-specific models)
│
│
├── constants/
│   # PURPOSE: Fixed application values
│   # Example:
│   # - roles (admin, user)
│   # - statuses (pending, approved)
│   # - units (kg, liters)
│
│
├── config/
│   # PURPOSE: System configuration layer
│   # Feature flags, integrations, external services
│
│
├── public/
│   # PURPOSE: Static assets served directly by browser
│   #
│   ├── icons/
│   ├── images/
│   └── logos/
│
│
├── styles/
│   # PURPOSE: Extra styling layer (optional)
│
│
├── tests/
│   # PURPOSE: Quality assurance
│
│   ├── unit/
│   # Test individual functions/components
│
│   ├── integration/
│   # Test interaction between modules
│
│   └── e2e/
│   # Test full user flows (Playwright/Cypress)
│
│
├── middleware.ts
│   # PURPOSE: Runs BEFORE requests hit the app
│   # Used for:
│   # - authentication checks
│   # - redirects
│   # - route protection
│
├── next.config.ts
├── package.json
└── README.md
```
