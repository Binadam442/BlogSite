import React from "react";
import { Link } from "react-router-dom";
import posts from "./posts";

export default function HomePage() {
  return (
    <div>
      <h1 className="page-title">Jire Blog</h1>
      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <h2>
            <Link to={`/post/${post.id}`} className="post-title">{post.title}</Link>
          </h2>
          <p className="post-excerpt">{post.excerpt}</p>
        </div>
      ))}
    </div>
  );
}
