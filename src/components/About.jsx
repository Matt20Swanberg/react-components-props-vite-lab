import React from "react";

/* Displays the blog image and about text
 * Props:
 * - image: image source for the blog logo
 * - about: description text for the blog
 */
function About({ image = "https://via.placeholder.com/215", about }) {
    return (
        <aside>
            <img src={image} alt="blog logo" />
            <p>{about}</p>
        </aside>
    );
}

export default About;