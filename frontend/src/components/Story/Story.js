import axios from 'axios'
import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Story(props) {
    const deleteStoryHandler = (title) => {
        axios.delete(`http://localhost:8000/api/story/${title}`)
            .then(res => console.log(res.data))
    }

    const storyId = "/story/" + props.story.id

    return (
        <div className='story-entry'>
            <h2><Link to={storyId}>{props.story.title}</Link></h2>
            <h3>{props.story.main_pairing}</h3>
            <span style={{ fontWeight: 'bold, underline' }}>{props.story.summary}</span>

            <h3>Accessory Pairings</h3>
            <ul className='att-list'>
                {props.story.accessory_pairings?.map((pairing, index) => (
                    <Link><li key={index}>{pairing}</li></Link>
                ))}
            </ul>

            <h3>Themes:</h3>
            <ul className='att-list'>
                {props.story.themes?.map((tag, index) => (
                    <Link to={"/story/theme/" + tag}><li key={index}>{tag}</li></Link>
                ))}
            </ul>
            <hr></hr>
        </div >
    )
}

export default Story;