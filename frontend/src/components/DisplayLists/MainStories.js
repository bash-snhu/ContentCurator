import React from "react";
import Story from "../Story/Story";

function MainStories(props) {
    // Generates an unordered list of story entries
    return (
        <div className="story-wrapper">
            {props.storyList.map((story, index) => <Story key={story.id} story={story} />)}
        </div>
    )
}

export default MainStories;