import React from 'react';
import { Link } from 'react-router-dom';

function ChapterSummary(props) {
    return (
        <Link to={'/story/' + props.chapter.story_id + '/chapter/' + props.chapter.chapter_index} className='block'>
            <li className='chapter-summary'>
                <h3>Chapter {props.chapter.chapter_index + 1} | {props.chapter.title}</h3>
                <p></p>
            </li>
        </Link>
    );
}

export default ChapterSummary;