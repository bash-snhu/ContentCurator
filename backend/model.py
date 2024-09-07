from bson import ObjectId
from pydantic import BaseModel, Field
from typing import Optional

class PyObjectId(ObjectId):

    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v):
        if not ObjectId.is_valid(v):
            raise ValueError('Invalid objectid')
        return ObjectId(v)

    @classmethod
    def __modify_schema__(cls, field_schema):
        field_schema.update(type='string')

class Story(BaseModel):
    _id: Optional[PyObjectId] = Field(alias="_id", default=None)
    id: int
    title: str
    lang: str
    main_pairing: list[str]
    accessory_pairings: list[str]
    summary: str
    chapter_count: int
    themes: list[str]
    warnings: list[str]

class Chapter(BaseModel):
    story_id: int
    chapter_index: int
    title: str
    content: str
    warnings: list[str]

class Fandom(BaseModel):
    _id: Optional[PyObjectId] = Field(alias="_id", default=None)
    fandom_id: int
    type: str
    title_en: str
    title_orig: str


