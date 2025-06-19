# MERN Stack Dockerized Example

This repository demonstrates how to Dockerize a full MERN (MongoDB, Express, React, Node.js) stack application using Docker Compose. The setup includes a React frontend, an Express/Node.js backend, and a PostgreSQL database, all running in isolated containers.

---

## Requirements

- [Docker](https://www.docker.com/get-started) installed on your system (Docker Desktop recommended)

---

## Getting Started

Follow these steps to get the application running locally:

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd <repo-directory>
   ```

2. **Start the application using Docker Compose:**
   ```bash
   docker compose up
   ```
   This command will build and start all services (frontend, backend, and database) as defined in `docker-compose.yml`.

3. **Access the application:**
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend API: [http://localhost:8080/api/users](http://localhost:8080/api/users)

---

## Project Structure & Services

### docker-compose.yml Overview

- **frontend**
  - Builds from `./frontend` using its Dockerfile
  - Runs on port **3000** (mapped to container's 5173)
  - Depends on the backend service
  - Loads environment variables from `frontend/.env` (if present)

- **backend**
  - Builds from `./backend` using its Dockerfile
  - Runs on port **8080**
  - Depends on the database service
  - Loads environment variables from `backend/.env` (if present)

- **db**
  - Uses the official `postgres:15-alpine` image
  - Persists data in a Docker volume (`db-data`)
  - Loads environment variables from `backend/.env` (for DB credentials)
  - Exposes port **5433**

#### Volumes
- `db-data`: Persists PostgreSQL data between container restarts

---

## Application Overview

### Backend (Express/Node.js)
- Located in `/backend`
- Provides a simple REST API at `/api/users`
- Connects to a PostgreSQL database using environment variables for credentials
- Main dependencies: `express`, `pg`, `dotenv`, `cors`

### Frontend (React + TypeScript + Vite)
- Located in `/frontend`
- Fetches user data from the backend API and displays it in a table
- Main dependencies: `react`, `react-dom`, `axios`, `vite`

---

## Environment Variables

You may need to create `.env` files in the `backend` and `frontend` directories for custom configuration. Example variables for the backend:

```
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=db
DB_PORT=5432
DB_NAME=your_db_name
PORT=8080
```

For the frontend, you might use:
```
VITE_API_BASE_URL=http://localhost:8080/api
```

---

## Useful Commands

- **Stop all containers:**
  ```bash
  docker compose down
  ```
- **Rebuild containers after code changes:**
  ```bash
  docker compose up --build
  ```

---

## License

This project is open source and available under the [MIT License](LICENSE). 