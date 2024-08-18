import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ChapterSummary from './ChapterSummary';
import axios from 'axios';

const StoryView = () => {
    const { id } = useParams();
    const [storyView, setStoryView] = useState([{}])
    const [chapters, setChapterView] = useState([{}])

    useEffect(() => {
        axios.get('http://localhost:8000/api/story/' + id)
        .then(res => {
            setStoryView(res.data)
        })
    }, [id]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/story/' + id + '/chapters')
        .then(res => {
            setChapterView(res.data)
        })
    }, [id]);

    return (
        <div>
            <div className='story-summary'>
            <center><h1>{storyView.title}</h1></center>
            <p><b>Description:</b> <em>{storyView.description}</em></p>
            <p><b>Summary:</b> {storyView.summary}</p>
            </div>

            <ul class="chapters">
                {chapters.map((chapter, index) => <ChapterSummary key={chapter.id} chapter={chapter} />)}
            </ul>
        </div>
    );
};

export default StoryView;