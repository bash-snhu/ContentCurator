import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function ChapterView() {
    const { id, cid } = useParams();
    const [chapterContents, setChapterContents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/story/' + id + "/chapter/" + cid)
            .then(res => {
                setChapterContents(res.data)
            })
    }, [id, cid]);

    return (
        <div>
            <h1>ChapterView</h1>
            <p>Story ID: {id}</p>
            <main>
                <h1>Chapter {cid}</h1>
                <p>{chapterContents.content}</p>
            </main>
        </div>
    )
}