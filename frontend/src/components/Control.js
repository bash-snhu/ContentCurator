import React from 'react';
import { NavLink } from 'react-router-dom';


const Control = () => {
    // Add your component logic here

    return (
        <div className="navigation">
            <ul>
                <li><NavLink to="/add">Add Story</NavLink></li>
                <li><a href="{{}}">Add Chapter</a></li>
                <li><NavLink to="/">Home</NavLink></li>
                <li><a href="{{}}">Chapters</a></li>
            </ul>
        </div>
    );
};

export default Control;