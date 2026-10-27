from sqlalchemy import Column,String,Integer,Float,Boolean
from database import Base


class Menu(Base):
    __tablename__="menu"
    id=Column(Integer,primary_key=True,index=True)
    name=Column(String(100),nullable=False)
    description=Column(String(300),nullable=True)
    price=Column(Float,nullable=False)
    category=Column(String(50),nullable=False)
    is_available=Column(Boolean,default=True,nullable=False)