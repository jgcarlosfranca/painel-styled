import React from "react";
import { StyledReduxPageConteiner } from "./ReduxPage.styles";
import { BackGroundFixedCard } from "../../components/BackGroundFixedCard/BackGroundFixedCard";
import PostsList from "../../redux/features/posts/PostsList";

const ReduxPage = () => {
  return (
    <StyledReduxPageConteiner>
      <BackGroundFixedCard>
        <PostsList />
      </BackGroundFixedCard>
    </StyledReduxPageConteiner>
  );
};

export default ReduxPage;
