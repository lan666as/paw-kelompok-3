from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from .database import Base


class Suara(Base):
    __tablename__ = "suara"

    id_suara = Column(Integer, primary_key=True, index=True)
    nim = Column(String, index=True)
    nama = Column(String)
    pilihan = Column(Integer)