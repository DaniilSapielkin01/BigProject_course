import React from "react";

import stl from "./Navbar.module.sass";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className={stl.nav}>
      <div>
        <NavLink to="/profile" activeClassName={stl.active}>
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink to="/dialogs" activeClassName={stl.active}>
          {" "}
          Messanger
        </NavLink>
      </div>
      <div>
        <a>News</a>
      </div>
      <div>
        <a>Music</a>
      </div>
      <div>
        <a>Settings</a>
      </div>
    </nav>
  );
};
