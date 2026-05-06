import React from "react";
import blogData from "../data/blog";

/* Displays the blog title in the page header.
 * Props:
 * - name: the name of the blog
 */
function Header({ name }) {
    return (
        <header>
            <h1>{name}</h1>
        </header>
    );
}

export default Header;