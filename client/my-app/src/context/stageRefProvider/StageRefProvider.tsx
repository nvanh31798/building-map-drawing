import { ReactNode, useRef } from "react";
import { StageRefContext } from "../stageRefContext/StageRefContext";

interface StageRefProviderProps {
  children: ReactNode;
}

export const StageRefProvider = ({ children }: StageRefProviderProps) => {
  const stageRef = useRef(null);

  return (
    <StageRefContext.Provider value={stageRef}>
      {children}
    </StageRefContext.Provider>
  );
};
