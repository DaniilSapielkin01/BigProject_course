import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import stl from "./../Dialogs.module.sass";

export const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return <NavLink to={path}>{props.name}</NavLink>;
};
