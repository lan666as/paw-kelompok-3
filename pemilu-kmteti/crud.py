from sqlalchemy.orm import Session

from . import models, schemas

def get_all_suara(db: Session):
    return db.query(models.Suara).all()

def create_suara(db: Session, suara: schemas.SuaraCreate):
    db_suara = models.Suara(nim = suara.nim, nama = suara.nama, pilihan = suara.pilihan)
    db.add(db_suara)
    db.commit()
    db.refresh(db_suara)
    return db_suara

def get_suara_by_nim(db: Session, nim: int):
    return db.query(models.Suara).filter(models.Suara.nim == nim).first()