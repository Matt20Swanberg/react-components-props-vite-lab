import React from "react";
import blogData from "../data/blog";
import Header from "./Header.jsx"
import About from "./About.jsx"
import ArticleList from "./ArticleList"
import logo from "../assets/logo.js"

console.log(blogData);

/* Main application component
 * Renders the Header, About section, and ArticleList
 */
function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={logo} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
