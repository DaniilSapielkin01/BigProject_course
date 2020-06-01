import React from "react";

import stl from "./ProfileInfo.module.sass";

export const ProfileInfo = () => {
  return (
    <div>
      <img src="https://99px.ru/sstorage/53/2013/12/tmb_91205_3821.jpg" />
      <div className={stl.descriptionBlock}>avatar + description</div>
    </div>
  );
};
