import React from "react";
import PostAuthor from "../Author/PostAuthor";
import TimeAgo from "../TimeAgo";
import ReactionButton from "../ReactionButton/ReactionButton";
import { StyledPostArticle } from "./PostsExcerpt.styles";

const PostsExcerpt = ({ post }) => {
  return (
    <StyledPostArticle>
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timeStamp={post.date} />
      </p>
      <ReactionButton post={post} />
    </StyledPostArticle>
  );
};

export default PostsExcerpt;
