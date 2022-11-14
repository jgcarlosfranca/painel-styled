import { useSelector } from "react-redux";
import { selectAllUsers } from "../../users/userSlice";
import React from "react";

// criacao de um component rafce
const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers); // tras todos os users do slice

  const author = users.find((user) => user.id === userId);

  return <span>by {author ? author.name : "Unknow author"}</span>;
};

export default PostAuthor;
