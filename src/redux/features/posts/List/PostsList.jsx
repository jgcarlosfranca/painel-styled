import { useSelector } from "react-redux";
import { selectAllPosts } from "../postsSlice";
import { StyledPostArticle, StyledPostSection } from "./PostList.styles";

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
    <StyledPostSection>
      <h2>Posts</h2>
      {renderedPosts}
    </StyledPostSection>
  );
};

export default PostsList;
