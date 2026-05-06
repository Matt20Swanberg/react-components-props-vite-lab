import React from "react";

/* Displays a single blog article preview
 * Props:
 * - title: article title
 * - date: publication date
 * - preview: short preview text
 */
function Article({ title, date = "January 1, 1970", preview }) {
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>
    );
}

export default Article;