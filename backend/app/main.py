from fastapi import FastAPI
# from app.routers import auth  # Commented out for now
from app.routers import sentiments
from . import models
from .database import engine
from fastapi.middleware.cors import CORSMiddleware
import os

# Only create tables if database is properly configured
try:
    if os.getenv("DATABASE_URL") and "sqlite" not in os.getenv("DATABASE_URL", ""):
        models.Base.metadata.create_all(bind=engine)
        print("Database tables created successfully")
    else:
        print("Using SQLite or no database configured - skipping table creation")
except Exception as e:
    print(f"Warning: Could not create database tables: {e}")


app = FastAPI()

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],  # Add "PUT" method
    allow_headers=["*"],
)

@app.get("/", tags=["Root"])
def root():
    return {"message": "Hello World"}

@app.get("/health", tags=["Health"])
def health_check():
    """Simple health check endpoint for monitoring"""
    import os
    return {
        "status": "healthy",
        "environment": os.getenv("ENVIRONMENT", "development"),
        "database_configured": bool(os.getenv("DATABASE_URL")),
        "port": os.getenv("PORT", "10000")
    }

# app.include_router(auth.router)
app.include_router(sentiments.router)
