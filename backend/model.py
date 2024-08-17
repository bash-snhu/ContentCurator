from pydantic import BaseModel

class Story(BaseModel):
    id: int
    title: str
    description: str
    summary: str

class Chapter(BaseModel):
    story_id: int
    title: str
    content: str