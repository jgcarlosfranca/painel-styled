import React from "react";
import { useDispatch } from "react-redux";
import { reactionAdded } from "../postsSlice";
import { StyledReactionButtons } from "./ReactionButton.styles";

const reactionEmoji = {
  thumbsUp: "👍", // ctrl shift p> insert emoji
  wow: "😲",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

const ReactionButton = ({ post }) => {
  const dispatch = useDispatch();
  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <StyledReactionButtons
        key={name}
        type="button"
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
      >
        {emoji}
        {post.reactions[name]}
      </StyledReactionButtons>
    );
  });
  return <div>{reactionButtons}</div>;
};

export default ReactionButton;
