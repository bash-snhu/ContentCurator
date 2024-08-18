from fastapi import FastAPI, HTTPException

from model import Story, Chapter

from database import (
    fetch_all_stories,
    fetch_one_story,
    fetch_one_chapter,
    fetch_all_chapters,
    create_story,
    add_chapter
)

# an HTTP-specific exception class  to generate exception information

from fastapi.middleware.cors import CORSMiddleware
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

@app.get("/api/story/{story_id}/chapters")
async def get_chapters(story_id: int):
    response = await fetch_all_chapters(int(story_id))
    return response

@app.get("/api/chapter/{id}")
async def get_chapter_by_id(id: int):
    response = await fetch_one_chapter(id)
    if response:
        return response
    raise HTTPException(404, f"There is no story with the title {id}")

@app.get("/api/stories")
async def get_stories():
    response = await fetch_all_stories()
    return response

@app.get("/api/story/{id}", response_model=Story)
async def get_story_by_id(id):
    response = await fetch_one_story(int(id))
    if response:
        return response
    raise HTTPException(404, f"There is no story with the id {id}")

# /api/story
@app.post("/api/story/", response_model=Story)
async def post_story(story: Story):
    response = await create_story(story.dict())
    if response:
        return response
    raise HTTPException(400, "Something went wrong")

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