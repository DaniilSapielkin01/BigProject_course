import React from "react";
import stl from "./Post.module.sass";

export const Post = (props) => {
  return (
    <div className={stl.post}>
      {props.posts.map((p) => (
        <div>
          {p.message}
          <div>{p.likesCount}</div>
        </div>
      ))}
    </div>
  );
};
