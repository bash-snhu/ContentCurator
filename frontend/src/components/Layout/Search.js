import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MainStories from '../DisplayLists/MainStories';
import { useParams } from 'react-router-dom';

const Home = () => {
    const [storyList, setStoryList] = useState([{}])
    const { theme } = useParams();

    // Read all stories
    useEffect(() => {
        axios.get(`https://api.scale-bone.co/api/story/theme/${theme}`)
            .then(res => {
                setStoryList(res.data)
            })
            .catch(err => {
                console.error(err);
            });
    }, [theme]);

    return (
        <div>
            {<MainStories storyList={storyList} />}
        </div>
    );
};

export default Home;