import React from "react";
import Article from "./Article";

/* Renders a list of Article components
 * Props:
 * - posts: array of blog post objects
 */
function ArticleList({ posts }) {
    return (
        <main>
            {posts.map((post) => (
                <Article
                    key={post.id}
                    title={post.title}
                    date={post.date}
                    preview={post.preview}
                />
            ))}
        </main>
    );
}

export default ArticleList;