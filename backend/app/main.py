from fastapi import FastAPI
from app.routers import auth, sentiments
from . import models
from .database import engine
from fastapi.middleware.cors import CORSMiddleware

models.Base.metadata.create_all(bind=engine)


app = FastAPI()

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],  # Add "PUT" method
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(sentiments.router)
