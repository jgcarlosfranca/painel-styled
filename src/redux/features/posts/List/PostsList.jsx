import { useSelector } from "react-redux";
import { selectAllPosts } from "../postsSlice";
import { StyledPostArticle, StyledPostSection } from "./PostList.styles";
import PostAuthor from "../Author/PostAuthor";
import TimeAgo from "../TimeAgo";

import React from "react";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map((post) => (
    <StyledPostArticle key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timeStamp={post.date} />
      </p>
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
