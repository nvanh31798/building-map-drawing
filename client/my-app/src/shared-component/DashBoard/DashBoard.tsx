import React from "react";
import DrawingMapContainer from "../../components/DrawingMapContainer/DrawingMapContainer";
import { DrawingMenuBar } from "../../components/DrawingMenuBar/DrawingMenuBar";

export const DashBoard = () => {
  return (
    <div>
      <div>
        <DrawingMenuBar />
        <DrawingMapContainer />
      </div>
    </div>
  );
};
