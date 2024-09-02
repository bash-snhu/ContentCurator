import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MainStories from '../DisplayLists/MainStories';

const Home = () => {
    const [storyList, setStoryList] = useState([{}])

    // Read all stories
    useEffect(() => {
        axios.get('https://api.scale-bone.co/api/stories')
            .then(res => {
                setStoryList(res.data)
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    return (
        <div>
            {<MainStories storyList={storyList} />}
        </div>
    );
};

export default Home;