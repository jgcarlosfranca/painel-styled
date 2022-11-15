import React from "react";
import { StyledReduxSimplePageConteiner } from "./ReduxSimplePage.styles";
import { BackGroundFixedCard } from "../../components/BackGroundFixedCard/BackGroundFixedCard";
import PostsList from "../../redux/features/posts/List/PostsList";
import AddPostForm from "../../redux/features/posts/Add/AddPostForm";

const ReduxSimplePage = () => {
  return (
    <StyledReduxSimplePageConteiner>
      <BackGroundFixedCard>
        <AddPostForm />
        <PostsList />
      </BackGroundFixedCard>
    </StyledReduxSimplePageConteiner>
  );
};

export default ReduxSimplePage;
