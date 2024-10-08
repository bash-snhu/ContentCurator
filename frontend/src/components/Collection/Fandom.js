import axios from 'axios'
import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Story(props) {
    const fandomId = "/story/" + props.fandom.id

    return (
        <div className='fandom-entry'>
            <h2><Link to={fandomId}>{props.fandom.title_en} | {props.fandom.title_orig}</Link></h2>
            <h2>Type: {props.fandom.type} | Count: {props.fandom.story_count}</h2>
        </div>
    )
}

export default Story;