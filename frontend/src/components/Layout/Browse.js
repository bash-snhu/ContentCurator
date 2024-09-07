import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Fandoms from '../Collection/Fandoms';

// Serve URL based on development environment
let fandoms_url = ""
if (process.env.NODE_ENV === "development") {
    fandoms_url = "http://localhost:8000/api/collection/fandoms/";
} else {
    fandoms_url = "https://api.scale-bone.co/api/collection/fandoms/"
}

const Browse = () => {
    const [fandomList, setFandomList] = useState([{}])

    // Read all stories
    useEffect(() => {
        axios.get(fandoms_url)
            .then(res => {
                setFandomList(res.data)
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    return (
        <div>
            {<Fandoms fandomList={fandomList} />}
        </div>
    );
};

export default Browse;