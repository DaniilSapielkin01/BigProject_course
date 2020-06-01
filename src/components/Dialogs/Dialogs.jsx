import React from "react";
import { NavLink } from "react-router-dom";

import stl from "./Dialogs.module.sass";
import { DialogItem } from "./DialogItem/DialogItem";
import { Message } from "./Message/Message";

export const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElement = props.state.messages.map((m) => (
    <Message message={m.message} />
  ));
  return (
    <div className={stl.dialogs}>
      <div className={stl.dialogsItem}>{dialogsElements}</div>
      <div className={stl.messages}>{messagesElement}</div>
    </div>
  );
};
