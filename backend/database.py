import motor.motor_asyncio
from model import Story, Chapter

client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://localhost:27017/')
database = client.Stories
collection = database.Story
chapter_collection = database.Chapter
indexer = database.Index

async def get_next_id():
    document = await indexer.find_one({"title": "indexer"})
    if document:
        story_index = document.get("story_index", 0)
        await indexer.update_one({"title": "indexer"}, {"$inc": {"story_index": 1}})
        return int(story_index)
    else:
        await indexer.insert_one({"title": "indexer", "story_index": 1})
        return 0

async def fetch_all_stories():
    stories = []
    cursor = collection.find({})
    async for document in cursor:
        stories.append(Story(**document))
    return stories

async def fetch_one_story(id):
    document = await collection.find_one({"id": id})
    return document

async def fetch_all_chapters(story_id):
    chapters = []
    cursor = chapter_collection.find({"story_id": int(story_id)})
    
    async for chapter in cursor:
        chapters.append(Chapter(**chapter))
    return chapters

async def fetch_one_chapter(id, chapter_index):
    document = await chapter_collection.find_one({"story_id": int(id), "chapter_index": int(chapter_index)})
    return document

async def create_story(story: dict):
    document = {"id": await get_next_id(), "title": story["title"], "description": story["description"]}
    result = await collection.insert_one(document)
    return document

async def add_chapter(id:int, title:str, content:str):
    document = {"title": title, "content": content}
    await collection.update_one({"id": id}, {"$push": {"chapters": document}})
    return document

# async def update_todo(title, desc):
#     await collection.update_one({"title": title}, {"$set": {"description": desc}})
#     document = await collection.find_one({"title": title})
#     return document

# async def remove_todo(title):
#     await collection.delete_one({"title": title})
#     return True