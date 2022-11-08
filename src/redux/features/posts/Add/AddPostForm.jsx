import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddPostWrapper,
  AddPostSection,
  AddPostForms,
  AddPostLabel,
  AddPostinput,
  AddPostContentTextArea,
  buttonFooterWrapper,
} from "./AddPostForm.styles";
import { Button } from "../../../../components/Button";
import { postAdded } from "../postsSlice";
import { selectAllUsers } from "../../users/userSlice";
import { addNewPost } from "../postsSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const [addRequestStatus, setAddRequestStatus] = useState("idle"); // observa o status da requiaição do redux

  const users = useSelector(selectAllUsers); // aq pega todos os users do store do redux

  const onTitleChanged = (event) => setTitle(event.target.value);
  const onContentChanged = (event) => setContent(event.target.value);
  const onAuthChanged = (event) => setUserId(event.target.value);

  const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle';

  const onSavePostClicked = () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending"); // atualizando o status da req redux
        /*dispatch addNewPosts*/
        dispatch(addNewPost({ title, body: content, userId })).unwrap();

        setTitle("");
        setContent("");
        setUserId("");
      } catch (err) {
        console.error("Failed to save the post", err);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };

  // aq seleciona qual user vai fazer uma interação com o post
  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  const dispatchDummy = (event) => {
    event.preventDefault();
    window.alert("teste de click");
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
          <AddPostLabel htmlFor="postAuthor">Author:</AddPostLabel>
          <select id="postAuthor" value={userId} onChange={onAuthChanged}>
            <option value={""}>Selecione...</option>
            {userOptions}
          </select>
          <AddPostLabel htmlFor="postContent">Content:</AddPostLabel>
          <AddPostContentTextArea
            id="postContent"
            name="postContent"
            value={content}
            onChange={onContentChanged}
          />
          <buttonFooterWrapper>
            <Button
              onClick={onSavePostClicked}
              titulo={"Save Post"}
              tamanho={"200px"}
              disabled={!canSave}
            ></Button>
            <Button
              onClick={(event) => dispatchDummy(event)}
              titulo={"window Alert"}
              tamanho={"200px"}
              colorBackground="#086812"
            ></Button>
          </buttonFooterWrapper>
        </AddPostForms>
      </AddPostSection>
    </AddPostWrapper>
  );
};

export default AddPostForm;
