# Learning App

## Overview

The Learning App is a monorepo project that includes both a frontend built with Vue.js and a backend built with Express.js, using TypeScript. The backend uses Redis for caching. This guide will help you set up the project and get it running.

## Prerequisites

- Node.js (v16 or higher recommended)
- Yarn (latest version)
- Redis (Running locally or remotely)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/viktorbezruk/learning-app.git
   cd learningAPP
   ```

2. Install dependencies:
   In the root directory, run:

   ```bash
   yarn
   ```

   This command will install dependencies for both the frontend and backend workspaces.

3. Set up Redis:
   Ensure that you have a Redis server running. You can use Docker to set it up quickly:

   ```bash
   docker run --name learning-app-redis -p 6379:6379 -d redis
   ```

## Running the Backend

1. Navigate to the backend package:

   ```bash
   cd packages/backend
   ```

2. Start the backend in development mode:

   ```bash
   yarn dev
   ```

   This will start the server on [http://localhost:3000](http://localhost:3000) and watch for changes.

### Production build:
To build and run the backend in production mode, use:

```bash
yarn build
yarn start
```

## Running the Frontend

1. Navigate to the frontend package:

   ```bash
   cd packages/frontend
   ```

2. Start the frontend in development mode:

   ```bash
   yarn dev
   ```

   This will start the Vue development server, typically on [http://localhost:5173](http://localhost:5173).

### Production build:
To build the frontend for production, use:

```bash
yarn build
```

After building, you can preview the production build:

```bash
yarn preview
```

## Environment Variables

Ensure that you create `.env` files for the backend and frontend, where necessary. Example configuration:

**Backend `.env`:**

```env
REDIS_HOST=localhost
REDIS_PORT=6379
PORT=3000
```

**Frontend `.env`:**

```env
VITE_API_BASE_URL=http://localhost:3000/api
```

## Scripts

**Backend:**

- `yarn dev`: Starts the backend in development mode.
- `yarn start`: Runs the backend in production.

**Frontend:**

- `yarn dev`: Starts the frontend development server.
- `yarn build`: Builds the frontend for production.
- `yarn preview`: Previews the production build.

## Folder Structure

- `packages/backend`: The backend service built with Express.js.
- `packages/frontend`: The frontend application built with Vue.js.
- `/styles`: Global SCSS files for shared styles (if needed).

## Notes

- Redis is used for caching in the backend. Make sure Redis is properly configured and running before starting the backend.
- The application uses Bootstrap for styles, but some custom styles are also present.