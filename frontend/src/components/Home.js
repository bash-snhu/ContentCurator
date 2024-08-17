import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MainStories from './MainStories';

const Home = () => {
    const [storyList, setStoryList] = useState([{}])

    // Read all todos
    useEffect(() => {
        axios.get('http://localhost:8000/api/stories')
        .then(res => {
            setStoryList(res.data)
        })
    });

    return (
        <div>
            <MainStories storyList={storyList}/>
        </div>
    );
};

export default Home;