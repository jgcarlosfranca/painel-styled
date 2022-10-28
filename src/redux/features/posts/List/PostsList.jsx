import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
  fetchPosts,
} from "../postsSlice";
import {
  StyledPostP,
  StyledPostListTitleH2,
  StyledPostSection,
} from "./PostList.styles";
import PostsExcerpt from "../Excerpt/PostsExcerpt";
import useOnceEffect from "../../../../utils/Hooks/useOnce";

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);
  // REACT 18 corno com disparando o useEffetct duas vezes (só substituir o useEffect pelo meu hook)
  useOnceEffect(() => {
    if (postStatus === "idle") {
      console.log("dispatch - use effect");
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  let content;
  if (postStatus === "loading") {
    content = <StyledPostP>"Loading..."</StyledPostP>; // colocar spiner depois
  } else if (postStatus === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post) => (
      <PostsExcerpt key={post.id} post={post} />
    ));
  } else if (postStatus === "failed") {
    content = <StyledPostP>{error}</StyledPostP>;
  }

  return (
    <StyledPostSection>
      <StyledPostListTitleH2>Posts</StyledPostListTitleH2>
      {content}
    </StyledPostSection>
  );
};

export default PostsList;
