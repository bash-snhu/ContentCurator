import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ChapterSummary from './Chapter/ChapterSummary';
import axios from 'axios';

const StoryView = () => {
    const { id } = useParams();
    const [storyView, setStoryView] = useState([{}])
    const [chapters, setChapterView] = useState([{}])

    // Pull story information
    useEffect(() => {
        axios.get('https://api.scale-bone.co/api/story/' + id)
            .then(res => {
                setStoryView(res.data)
            })
    }, [id]);

    // Pulls all chapters for the story
    useEffect(() => {
        axios.get('https://api.scale-bone.co/api/story/' + id + '/chapters')
            .then(res => {
                setChapterView(res.data)
            })
    }, [id]);

    return (
        <div>
            <div className='story-summary'>
                <h1 className='story-title'>{storyView.title}</h1>
                <p><b>Summary:</b> {storyView.summary}</p>
                <p><b>Pairing:</b> {storyView.main_pairing}</p>
            </div>

            <ul className="chapters">
                {chapters.map((chapter, index) => <ChapterSummary key={chapter.id} chapter={chapter} />)}
            </ul>
        </div>
    );
};

export default StoryView;