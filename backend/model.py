from bson import ObjectId
from pydantic import BaseModel

class Story(BaseModel):
    id: int
    title: str
    main_pairing: str
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