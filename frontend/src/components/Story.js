import axios from 'axios'
import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Story(props) {
    const deleteStoryHandler = (title) => {
    axios.delete(`http://localhost:8000/api/story/${title}`)
        .then(res => console.log(res.data)) }

    const storyId = "/story/" + props.story.id
    
    return (
        <div>
            <p>
                <h3><Link to={storyId}>{props.story.title}</Link><span>{props.story.id}</span></h3>
                <span style={{ fontWeight: 'bold, underline' }}>{props.story.description}</span> 
                <hr></hr>
            </p>
        </div>
    )
}

export default Story;