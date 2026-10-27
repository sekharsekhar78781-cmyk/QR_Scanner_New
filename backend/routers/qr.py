import qrcode
from io import BytesIO
from fastapi import APIRouter,Depends
from fastapi.responses import StreamingResponse

from sqlalchemy.orm import Session
from database import get_db
from schemas import MenuResponse
from models import Menu

router=APIRouter(prefix="/tables",tags=["tables"])

FRONTEND_URL="http://127.0.0.1:5500"



@router.get("/{table_id}/menu",
            response_model=list[MenuResponse])
def get_table_menu(table_id:int,
                   db:Session =Depends(get_db)):
    
    menu_items = db.query(Menu).all()
    return menu_items


@router.get("/{table_id}/qr")
def generate_qr(table_id:int):
    
    menu_url=f"{FRONTEND_URL}/index.html?table_id={table_id}"
    
    qr=qrcode.make(menu_url)
    
    buffer=BytesIO()
    qr.save(buffer,format="PNG")
    buffer.seek(0)
    
    return StreamingResponse(
        buffer,
        media_type="image/png"
    )
    
