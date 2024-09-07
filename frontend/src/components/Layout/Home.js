import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MainStories from '../DisplayLists/MainStories';

// Serve URL based on development environment
let stories_url = ""
if (process.env.NODE_ENV === "development") {
    stories_url = "http://localhost:8000/api/stories";
} else {
    stories_url = "https://api.scale-bone.co/api/stories"
}

const Home = () => {
    const [storyList, setStoryList] = useState([{}])

    // Read all stories
    useEffect(() => {
        axios.get(stories_url)
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