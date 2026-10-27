from fastapi import FastAPI
from models import Menu
from database import engine,Base

from routers.qr import router as qr_router
from fastapi.middleware.cors import CORSMiddleware

app=FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173",
        "http://127.0.0.1:5173",],
    allow_credentials=False,  
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)


app.include_router(qr_router)