from typing import List, Optional
from datetime import datetime
from pydantic import BaseModel


class SuaraBase(BaseModel):
    nim: str
    nama: str

class SuaraCreate(SuaraBase):
    pilihan: int

class Suara(SuaraBase):
    id_suara: int
    pilihan: int

    class Config:
        orm_mode = True


class HasilBase(BaseModel):
    rekapitulasi: dict

class HasilCreate(HasilBase):
    pass

class Hasil(HasilBase):
    waktu_rekapitulasi: datetime

    class Config:
        orm_mode = True