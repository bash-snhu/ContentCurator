from fastapi import FastAPI, HTTPException

from model import Story, Chapter

from database import (
    fetch_all_stories,
    fetch_one_story,
    fetch_one_chapter,
    fetch_all_chapters,
    fetch_story_by_theme,
    create_story,
    add_chapter
)

# an HTTP-specific exception class  to generate exception information

from fastapi.middleware.cors import CORSMiddleware
from typing import List
app = FastAPI()

origins = [
    "http://localhost:3000",
]

# what is a middleware? 
# software that acts as a bridge between an operating system or database and applications, especially on a network.

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def read_root():
    return {"Hello": "World"}

# Fetch all chapters view
@app.get("/api/story/{story_id}/chapters")
async def get_chapters(story_id: int):
    response = await fetch_all_chapters(int(story_id))
    return response

# Fetch single chapter view
@app.get("/api/story/{id}/chapter/{cid}", response_model = Chapter)
async def get_chapter_by_id(id: int, cid: int):
    response = await fetch_one_chapter(int(id), int(cid))
    if response:
        return response
    raise HTTPException(404, f"There is no chapter {cid} in story {id}")

@app.get("/api/stories")
async def get_stories():
    response = await fetch_all_stories()
    return response

# Fetch story by id
@app.get("/api/story/{id}", response_model=Story)
async def get_story_by_id(id):
    response = await fetch_one_story(int(id))
    if response:
        return response
    raise HTTPException(404, f"There is no story with the id {id}")

# Fetch single story information
@app.get("/api/story/theme/{theme}", response_model=List[Story])
async def get_story_by_theme(theme: str):
    response = await fetch_story_by_theme(theme)
    if response:
        return response
    raise HTTPException(404, f"There is no story with the theme {theme}")

# @app.put("/api/story/{id}/", response_model=Story)
# async def put_story(title: str, desc: str):
#     response = await update_story(title, desc)
#     if response:
#         return response
#     raise HTTPException(404, f"There is no story with the title {id}")

# @app.delete("/api/story/{id}")
# async def delete_story(title):
#     response = await remove_story(title)
#     if response:
#         return "Successfully deleted story"
#     raise HTTPException(404, f"There is no story with the title {id}")