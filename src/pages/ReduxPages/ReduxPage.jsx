import React from "react";
import { StyledReduxPageConteiner } from "./ReduxPage.styles";
import { Card } from "../../components/Card";
import PostsList from "../../redux/features/posts/PostsList";

const ReduxPage = () => {
  return (
    <StyledReduxPageConteiner>
      <Card>
        <PostsList />
      </Card>
    </StyledReduxPageConteiner>
  );
};

export default ReduxPage;
