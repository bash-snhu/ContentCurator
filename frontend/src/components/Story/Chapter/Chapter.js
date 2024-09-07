import React from "react";

function Chapter(props) {
    return (
        <section class="Chapter">
            <h2>Chapter Title {props.chapter.title}</h2>
            <h3>Chapter Subtitle</h3>
            <article>
                <p>It was the best of times, it was the worst of times.</p>
            </article>
        </section>
    )
}

export default Chapter;