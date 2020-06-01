import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import "./App.sass";
import { Header, Profile, Navbar, Dialogs } from "./components/index";

export const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        {/* <Route path="/dialogs" component={Dialogs} />
          <Route path="/profile" component={Profile} /> */}

        <Route
          path="/dialogs"
          render={() => <Dialogs state={props.state.messagesPage} />}
        />
        <Route
          path="/profile"
          render={() => (
            <Profile
              profilePage={props.state.profilePage}
              addPost={props.addPost}
            />
          )}
        />
      </div>
    </div>
  );
};
