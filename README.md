# Bodhrik Frontend Engineer Assignment

A mentoring session analytics dashboard built with Next.js 16, TypeScript, React Query, and Recharts. The application allows mentors to browse mentoring sessions, apply filters, and analyze session performance through interactive visualizations.

## Live Demo

https://bodhrik-assignment.vercel.app

## Repository

> Add your GitHub repository link here

## Features

- Mock JSON API serving mentoring session data
- Dashboard displaying mentoring sessions
- Filter sessions by:
  - Student Name
  - Mentor
  - Date
  - Score Range
- Session detail page
- Interactive performance chart using Recharts
- Dashboard summary cards
- Loading, empty, and error states
- Mock authentication using Next.js Middleware and cookies
- Responsive layout
- Reusable component architecture

## Tech Stack

### Frontend

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui (Base UI)

### State Management & Data Fetching

- TanStack React Query

### Data Visualization

- Recharts

### Utilities

- date-fns
- Faker.js

## Project Structure

```text
app/
├── api/
├── dashboard/
├── login/

components/
├── dashboard/
├── filters/
├── session/
├── ui/

hooks/
lib/
providers/
scripts/
types/
data/
```

## Getting Started

### Clone the repository

```bash
git clone <repository-url>
cd dashboard-app
```

### Install dependencies

```bash
npm install
```

### Generate mock data

```bash
npm run generate:sessions
```

### Start the development server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

## Available Scripts

Start the development server:

```bash
npm run dev
```

Generate mock session data:

```bash
npm run generate:sessions
```

Build the application:

```bash
npm run build
```

Run ESLint:

```bash
npm run lint
```

## Mock Authentication

The dashboard is protected using a simple mock authentication flow implemented with Next.js Middleware and browser cookies. Users attempting to access protected routes without authentication are redirected to the login page.

## Dashboard

The dashboard provides:

- Session listing
- Search and filtering
- Dashboard summary cards
- Responsive table layout

## Session Detail

Each session includes:

- Student information
- Mentor information
- Session summary
- Average engagement, clarity, and pacing scores
- Interactive metrics chart

## Assignment Requirements Covered

- Mock JSON API
- Dashboard with session listing
- Session filtering
- Session detail page
- Chart visualization
- Loading state
- Empty state
- Error state
- Mock authentication
- Responsive layout
- Full Git commit history
- TypeScript implementation

## Notes

- Session data is generated using Faker.js and served through a mock API route.
- React Query is used for efficient data fetching and caching.
- The application is built using reusable components to maintain a clean and scalable codebase.

## Author

**Manvesh Thakur**