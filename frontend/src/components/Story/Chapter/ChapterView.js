import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

// Serve URL based on development environment
let chapter_url = ""
if (process.env.NODE_ENV === "development") {
    chapter_url = "http://localhost:8000/api/story/";
} else {
    chapter_url = "https://api.scale-bone.co/api/story/"
}

export default function ChapterView() {
    const { id, cid } = useParams();
    const [chapterContents, setChapterContents] = useState([]);
    let actualIndex = Number(cid) + 1

    useEffect(() => {
        axios.get(chapter_url + id + "/chapter/" + cid)
            .then(res => {
                setChapterContents(res.data)
            })
    }, [id, cid]);

    return (
        <div>
            <h1>{chapterContents.title}</h1>
            <p>Story ID: {id}</p>
            <main>
                <h1>Chapter {actualIndex}</h1>
                <p>{chapterContents.content}</p>
            </main>
        </div>
    )
}