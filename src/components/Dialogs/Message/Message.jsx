import React from "react";
import stl from "./../Dialogs.module.sass";

export const Message = (props) => {
  return <div className={stl.dialog}>{props.message}</div>;
};
