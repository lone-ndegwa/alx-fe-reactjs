import React from "react";
import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { postId } = useParams();

  return (
    <div>
      <h1>Blog Post ID: {postId}</h1>
      <p>This is the dynamic route showing post #{postId}.</p>
    </div>
  );
}
