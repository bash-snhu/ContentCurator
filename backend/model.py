from bson import ObjectId
from pydantic import BaseModel

class Story(BaseModel):
    id: int
    title: str
    description: str
    summary: str
    chapter_count: int

class Chapter(BaseModel):
    story_id: int
    title: str
    content: str
    chapter_index: int