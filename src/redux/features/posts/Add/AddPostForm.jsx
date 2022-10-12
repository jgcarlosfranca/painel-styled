import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import {
  AddPostWrapper,
  AddPostSection,
  AddPostForms,
  AddPostLabel,
  AddPostinput,
  AddPostContentTextArea,
} from "./AddPostForm.styles";
import { Button } from "../../../../components/Button";

import { postAdded } from "../../posts/postsSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const onTitleChanged = (event) => setTitle(event.target.value);
  const onContentChanged = (event) => setContent(event.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content));
      setTitle("");
      setContent("");
    }
  };

  return (
    <AddPostWrapper>
      <AddPostSection>
        <h2>Add a New Post</h2>
        <AddPostForms>
          <AddPostLabel htmlFor="postTitle">Post Title:</AddPostLabel>
          <AddPostinput
            type={"text"}
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={onTitleChanged}
          />
          <AddPostLabel htmlFor="postContent">Content:</AddPostLabel>
          <AddPostContentTextArea
            id="postContent"
            name="postContent"
            value={content}
            onChange={onContentChanged}
          />
          <Button
            onClick={onSavePostClicked}
            titulo={"Save Post"}
            tamanho={"200px"}
          ></Button>
        </AddPostForms>
      </AddPostSection>
    </AddPostWrapper>
  );
};

export default AddPostForm;
