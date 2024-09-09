import axios from 'axios'
import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Bookmarks, CheckFat, QrCode } from "@phosphor-icons/react";

function Story(props) {
    const storyId = "/story/" + props.story.id

    return (
        <div className='story-entry'>
            <div className="section1">
                <div className="story-title-block">
                    <h2 className='story-block-title'>
                        <Link to={storyId}>{props.story.title}</Link>
                    </h2>
                    <div className="badges">
                        <Link className='badge-link'><div className="title-badge"><Bookmarks size={22} /></div></Link>
                        <Link className='badge-link'><div className="title-badge"><CheckFat size={22} /></div></Link>
                        <Link className='badge-link'><div className="title-badge"><QrCode size={22} /></div></Link>
                    </div>
                </div>

                <h3 className='separator p-10'>
                    <Link className='bar-right main-pairing-block'>{props.story.fandom}</Link>
                    {props.story.main_pairing?.map(
                        (main_pairing, index) => (
                            <Link className="main-pairing-block">{main_pairing}</Link>
                        )
                    )}
                </h3>
            </div>

            <div className="triangle-clipped"></div>

            <div className="section2">
                <p className="story-summary"><strong>Summary:</strong> {props.story.summary}</p>
            </div>

            <div className="triangle-clipped"></div>

            <div className="section3">
                <div className="attributes">
                    <h3 className='att-headers'>Pairings</h3>
                    <ul className='att-list'>
                        {/* Main Pairings Map */}
                        {props.story.main_pairing?.map(
                            (main_pairing, index) => (
                                <Link><li className='main-pairing'>{main_pairing}</li></Link>
                            )
                        )}

                        {/* Accessory Pairings Map */}
                        {props.story.accessory_pairings?.map((pairing, index) => (
                            <Link><li className="accessory-pairing" key={index}>{pairing}</li></Link>
                        ))}
                    </ul>
                </div>

                <div className="attributes">
                    <h3 className='att-headers'>Themes</h3>
                    <ul className='att-list'>

                        {props.story.themes?.map((tag, index) => (
                            <Link to={"/story/theme/" + tag}><li key={index}>{tag}</li></Link>
                        ))}
                    </ul>
                </div>

                <div className="attributes">
                    <h3 className='att-headers'>Warnings</h3>
                    <ul className='att-list'>
                        {props.story.warnings?.map((tag, index) => (
                            <Link to={"/story/theme/" + tag}><li key={index}>{tag}</li></Link>
                        ))}
                    </ul>
                </div>



                <div className="border"></div>
            </div>
        </div >
    )
}

export default Story;