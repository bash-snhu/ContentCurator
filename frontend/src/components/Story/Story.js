import axios from 'axios'
import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Story(props) {
    const storyId = "/story/" + props.story.id

    return (
        <div className='story-entry'>
            <h2><Link to={storyId}>{props.story.title}</Link></h2>

            <h3 className='separator p-10'>
                {props.story.main_pairing?.map(
                    (main_pairing, index) => (
                        <Link class="main-pairing-block">{main_pairing}</Link>
                    )
                )}
            </h3>

            <span style={{ fontWeight: 'bold, underline' }}>{props.story.summary}</span>

            <h3>Pairings</h3>
            <ul className='att-list'>
                {/* Main Pairings Map */}
                {props.story.main_pairing?.map(
                    (main_pairing, index) => (
                        <Link><li className='main-pairing'>{main_pairing}</li></Link>
                    )
                )}

                {/* Accessory Pairings Map
                 */}
                {props.story.accessory_pairings?.map((pairing, index) => (
                    <Link><li className="accessory-pairing" key={index}>{pairing}</li></Link>
                ))}
            </ul>

            <h3>Themes</h3>
            <ul className='att-list'>
                {props.story.themes?.map((tag, index) => (
                    <Link to={"/story/theme/" + tag}><li key={index}>{tag}</li></Link>
                ))}
            </ul>

        </div >
    )
}

export default Story;