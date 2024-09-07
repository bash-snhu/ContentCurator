import React from "react";
import Fandom from "../Collection/Fandom";

function MainStories(props) {
    // Generates an unordered list of story entries
    return (
        <div>
            {props.fandomList.map((fandom, index) => <Fandom key={fandom.id} fandom={fandom} />)}
        </div>
    )
}

export default MainStories;