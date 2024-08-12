import { Stage } from "konva/lib/Stage";
import React, { createContext, RefObject, useContext } from "react";

export const StageRefContext = createContext<RefObject<Stage> | null>(
  null,
);

export const useStageRef = () => useContext(StageRefContext);
