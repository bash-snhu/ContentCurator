import React from 'react';

function ChapterSummary(props) {
    return (
        <li className='chapter-summary'>
            <h3>Chapter {props.chapter.chapter_index + 1} | {props.chapter.title}</h3>
            <p></p>
        </li>
    );
}

export default ChapterSummary;