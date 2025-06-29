#!/bin/bash

# Use PORT environment variable if provided (for Render), otherwise default to 10000
PORT=${PORT:-10000}

# Start the application
exec uvicorn app.main:app --host 0.0.0.0 --port $PORT 