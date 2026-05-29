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

| The Wild Oasis | AgroFlow |
|---------------|-----------|
| Hotel | Farm / Agricultural Business |
| Cabin | Crop, Pond, Greenhouse, or Production Unit |
| Guest | User / Worker |
| Booking | Production Record |
| Reservation | Scheduled Farm Task |
| Reservation Dates | Production Cycle Dates |
| Cabin Availability | Inventory or Production Capacity |
| Hotel Dashboard | Farm Dashboard |
| Guest Profile | User Profile |
| Cabin List | Production Unit List |
| Cabin Detail | Production Unit Detail |
| Reservation Management | Task & Production Management |

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