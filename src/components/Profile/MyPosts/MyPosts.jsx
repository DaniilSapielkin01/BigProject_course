import React from "react";

import stl from "./MyPosts.module.sass";
import { Post } from "./Post/Post";

export const MyPosts = (props) => {
  let newPostElement = React.createRef();
  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = " ";
  };

  return (
    <div>
      <h3>My posts</h3>
      <textarea
        cols="50"
        rows="2"
        ref={newPostElement}
        value={props.newPostText}
      ></textarea>
      <button onClick={addPost}>Add post</button>

      <div>New post</div>
      <Post posts={props.posts} />
    </div>
  );
};
