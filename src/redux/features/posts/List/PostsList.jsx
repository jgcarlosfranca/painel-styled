import { useSelector } from "react-redux";
import { selectAllPosts } from "../postsSlice";
import { StyledPostArticle } from "./PostList.styles";
import "./index.css";

import React from "react";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map((post) => (
    <StyledPostArticle key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
    </StyledPostArticle>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
