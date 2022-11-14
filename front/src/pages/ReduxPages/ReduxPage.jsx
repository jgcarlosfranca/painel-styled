import React from "react";
import { StyledReduxPageConteiner } from "./ReduxPage.styles";
import { BackGroundFixedCard } from "../../components/BackGroundFixedCard/BackGroundFixedCard";
import PostsList from "../../redux/features/posts/List/PostsList";
import AddPostForm from "../../redux/features/posts/Add/AddPostForm";

const ReduxPage = () => {
  return (
    <StyledReduxPageConteiner>
      <BackGroundFixedCard>
        <AddPostForm />
        <PostsList />
      </BackGroundFixedCard>
    </StyledReduxPageConteiner>
  );
};

export default ReduxPage;
