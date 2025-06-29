# Backend Docker Setup

This directory contains the Docker configuration for the Sentiment Analysis backend.

## Quick Start

1. **Build and run with Docker Compose:**
   ```bash
   cd backend
   docker compose up --build
   ```

2. **Access the application:**
   - Backend API: http://localhost:10000
   - API Documentation: http://localhost:10000/docs
   - PostgreSQL Database: localhost:5432


## Docker Commands

### Build the image
```bash
docker build -t sentiment-backend .
```

### Run with Docker Compose
```bash
# Start services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down

# Stop services and remove volumes
docker-compose down -v
```


### Building Docker for docker-hub
```bash
# Build development image
docker build -t your-username/sentiment-backend:latest .

# Push latest (development)
docker push your-username/sentiment-backend:latest
```

### Render Hosting Format
```
docker.io/saimahmmed/sentiment-backend:latest
```
