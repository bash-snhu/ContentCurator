from pydantic import BaseModel

class Story(BaseModel):
    id: int
    title: str
    description: str

class Chapter(BaseModel):
    title: str
    content: str