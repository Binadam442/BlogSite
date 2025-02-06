import React from "react";
import { useParams, Link } from "react-router-dom";
import posts from "./posts";

export default function PostPage() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) return <p className="not-found">Post not found!</p>;

  return (
    <div>
      <h1 className="post-title">{post.title}</h1>
      <p className="post-content">{post.content}</p>
      <Link to="/" className="back-link">Back to Home</Link>
    </div>
  );
}
