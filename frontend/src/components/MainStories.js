import React from "react";
import Story from "./Story";

function MainStories(props) {
    return (
        <div>
            <ul>
                {props.storyList.map((story, index) => <Story key={story.id} story={story} />)}
            </ul>
        </div>
    )
}

export default MainStories;