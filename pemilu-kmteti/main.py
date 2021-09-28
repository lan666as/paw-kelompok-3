from typing import List
from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session
from datetime import datetime
import re

from . import crud, models, schemas
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind = engine)

app = FastAPI()

## Dependency
def get_db():
  db = SessionLocal()
  try:
    yield db
  finally:
    db.close()
 
#POST method
@app.post("/suara", response_model = schemas.Suara)
def create_suara(suara: schemas.SuaraCreate, db: Session = Depends(get_db)):
  if(re.search("^\d{2}\/\d{6}\/[a-zA-Z]{2}\/\d{5}$", suara.nim) is None):
    raise HTTPException(status_code = 400, detail = "NIM tidak sesuai format.")
  row_suara = crud.get_suara_by_nim(db, nim = suara.nim)
  if row_suara:
    raise HTTPException(status_code = 400, detail = "NIM sudah menggunakan hak pilih.")
  return crud.create_suara(db = db, suara = suara)

#GET method
@app.get("/hasil", response_model = schemas.Hasil)
def read_hasil(db: Session = Depends(get_db)):
  db_suara = crud.get_all_suara(db)
  all_pilihan = [suara.pilihan for suara in db_suara]
  return schemas.Hasil(rekapitulasi = {pilihan:all_pilihan.count(pilihan) for pilihan
                                       in set(all_pilihan)}, waktu_rekapitulasi = datetime.now())
