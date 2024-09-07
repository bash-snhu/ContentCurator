import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MainStories from '../DisplayLists/MainStories';
import { useParams } from 'react-router-dom';

// Serve URL based on development environment
let story_url = ""
if (process.env.NODE_ENV === "development") {
    story_url = `http://localhost:8000/api/story/theme/`;
} else {
    story_url = `https://api.scale-bone.co/api/story/theme/`;
}


const Home = () => {
    const [storyList, setStoryList] = useState([{}])
    const { theme } = useParams();

    // Read all stories
    useEffect(() => {
        axios.get(story_url + `${theme}`)
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