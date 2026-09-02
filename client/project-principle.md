# Project Principles & Folder Structure Guide
## PCI Apps — Engineering Standards

---

## 1. Overview

This document defines the architectural principles, folder structure, and coding conventions for all projects built by **PCI Apps**. 

Our stack is a **monolithic** application architecture that houses both client and server code within a single repository, leveraging the power of Next.js for full-stack development.

I want the container folder to hold logic and states while the component folder will hold UI and presentations and the shared folder will hold reusuable components like buttons, checkbox, skeleton etc. For input fields we will use formik

### Core Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend Framework** | Next.js (JavaScript) |
| **Backend Runtime** | Node.js with Express.js |
| **Database** | PostgreSQL |
| **State Management** | React Hooks + Context API |
| **Form Handling** | Formik |
| **Styling** | Tailwind CSS 

---

## 2. File Naming Rules (Strict)

| File Type | Naming Pattern | Example |
|-----------|---------------|---------|
| React Components | `PascalCase.jsx` | `UserProfile.jsx` |
| Containers | `PascalCase.jsx` | `DashboardContainer.jsx` |
| Custom Hooks | `camelCase.js` with `use` prefix | `useAuth.js` |
| Utility Functions | `camelCase.js` | `formatters.js` |
| API Services | `camelCase.js` with `Service` suffix | `userService.js` |
| Express Models | `PascalCase.js` | `User.js` |
| Express Controllers | `camelCase.js` with `Controller` suffix | `authController.js` |
| Express Routes | `camelCase.js` with `Routes` suffix | `userRoutes.js` |

**Rule:** All frontend component files MUST use `.jsx` extension. All backend files MUST use `.js`.
 Database Schema Definition (For PostgreSQL)
Without this, OpenCode won't know how to build your models:

markdown
## 3. Database Schema (PostgreSQL)

### Users Table
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  role VARCHAR(50) DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
Sessions Table (for JWT refresh tokens or login tracking)
sql
CREATE TABLE sessions (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  token VARCHAR(500) NOT NULL,
  expires_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
5. Environment Variables Template (So AI knows what to use)
markdown
## 6. Environment Variables

### Client (.env.local)
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_APP_NAME=PCI Apps

text

### Server (.env)
PORT=5000
DATABASE_URL=postgresql://postgres:password@localhost:5432/pciapps_db
JWT_SECRET=your_super_secret_key_change_this
JWT_EXPIRES_IN=7d
NODE_ENV=development

text
4. API Routing Convention (For Express)
markdown
## API Endpoint Structure

All API routes follow RESTful conventions:

| Method | Endpoint | Controller | Description |
|--------|----------|------------|-------------|
| POST | `/api/auth/register` | `authController.register` | Create new user |
| POST | `/api/auth/login` | `authController.login` | Authenticate user |
| GET | `/api/users` | `userController.getAll` | Get all users |
| GET | `/api/users/:id` | `userController.getOne` | Get single user |
| PUT | `/api/users/:id` | `userController.update` | Update user |
| DELETE | `/api/users/:id` | `userController.delete` | Delete user |

**Note:** All protected routes require a Bearer token in the `Authorization` header.
5. Explicit Container-Component Rule (For AI Logic)
markdown
## Container vs Component Rule (ENFORCED)

**A Component (Presentational):**
- ONLY receives data via `props`
- NEVER calls APIs directly
- NEVER uses `useState` for external data (only UI state like toggles)
- Example: `<UserProfile user={userData} onEdit={handleEdit} />`

**A Container (Logic):**
- Makes API calls via services
- Manages state with `useState` or `useReducer`
- Passes data and callbacks to Components
- Example: `<DashboardContainer />` fetches data and renders `<StatsCard />`

**AI Instruction:** If you are unsure whether to put logic in a Component or Container, ALWAYS put it in a Container.


-- Colour of the website

Color Role	Hex Code	Usage	Psychology
Primary (Dark Navy)	#0A1628	Main backgrounds, headers, footers	Authority, depth, intelligence, seriousness
Secondary (Slate Navy)	#1A2D4A	Cards, sidebars, secondary sections	Stability, trust, professionalism
Accent (Warm Gold)	#D4A853	CTAs, buttons, highlights, hover states	Premium feel, exclusivity, high-value
Text (White/Ice)	#F8F9FC	Body text on dark backgrounds	Clean, readable, crisp
Subtle Gray	#8A9BB5	Secondary text, labels, meta info	Calm, sophisticated, not distracting