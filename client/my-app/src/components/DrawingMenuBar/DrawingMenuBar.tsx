import React from "react";
import materialList from "../../mock/material-mock.json";
import { MaterialList } from "../MaterialList/MaterialList";

export const DrawingMenuBar = () => {

  return (
    <div className="border-2 p-5 m-5 sticky top-2 z-40">
      <MaterialList materialList={materialList} />
    </div>
  );
};
