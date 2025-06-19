# MERN Stack Dockerized Example

This repository demonstrates how to Dockerize a full MERN stack application using Docker Compose. The setup includes a React frontend, an Express/Node.js backend, and a PostgreSQL database, all running in isolated containers.

---

## Requirements

- [Docker](https://www.docker.com/get-started) installed on your system

---

## Getting Started

Follow these steps to get the application running locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/amanbnl/Dockarized-MERN-Stack-App.git
   ```

2. **Start the application using Docker Compose:**
   ```bash
   docker compose up
   ```
   This command will build and start all services (frontend, backend, and database) as defined in `docker-compose.yml`.

3. **Access the application:**
   - Frontend: [http://localhost:3000](http://localhost:3000)

---

## docker-compose File overview
The docker-compose.yml file orchestrates the following services:

- Frontend (React):
    - Built from the ./frontend directory, this service runs on port 5173 inside the container and is mapped to port 3000 on your local machine. It depends on the backend service to be up and running.

- Backend (Express/Node.js):
    - Built from the ./backend directory, this service runs on port 8080 and communicates with the PostgreSQL database. It also loads environment variables from a .env file.

- Database (PostgreSQL):
    - Uses the official lightweight postgres:15-alpine image. Data is persisted via a named Docker volume (db-data). Environment variables and port mappings are defined for seamless connection with the backend.

## Contributing 👏
- :octocat: [Pull requests](https://github.com/amanbnl/joi-validator/pulls) and 🌟 stars are always welcome.
- For changes, please open an [issue](https://github.com/amanbnl/joi-validator/issues) first to discuss what you would like to change.
## Contact 📩
📧 amanbnl6501@gmail.com

💼 Linkedin [@AmandeepSingh](https://www.linkedin.com/in/amandeep-singh-24a82b247/)

## License
MIT &copy; [AmandeepSingh](https://github.com/amanbnl)