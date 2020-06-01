import React from "react";
import ReactDOM from "react-dom";

import "./index.sass";
import { App } from "./App";
import { state, addPost } from "./redux/state";
import { rerenderEntireTree } from "./render";
import { BrowserRouter } from "react-router-dom";

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} />
    </BrowserRouter>
  );
};

rerenderEntireTree(state);
 