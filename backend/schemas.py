from pydantic import BaseModel

class MenuResponse(BaseModel):
    id:int
    name:str
    description:str|None
    price:float
    category:str
    is_available:bool
    
