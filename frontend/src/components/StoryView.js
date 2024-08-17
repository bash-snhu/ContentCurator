import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const StoryView = (props) => {
    const { id } = useParams();
    const [storyView, setStoryView] = useState([{}])

    // Read all todos
    useEffect(() => {
        axios.get('http://localhost:8000/api/story/' + id)
        .then(res => {
            setStoryView(res.data)
        })
    });

    return (
        <div>
            <h2>{storyView.title}</h2>
            <p>{storyView.description}</p>
            <p>{storyView.summary}</p>
            <main>
                <p>Lorem impsum. {storyView.title}</p>
            </main>
        </div>
    );
};

export default StoryView;