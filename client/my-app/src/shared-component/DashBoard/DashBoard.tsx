import DrawingMapContainer from "../../components/DrawingMapContainer/DrawingMapContainer";
import { DrawingMenuBar } from "../../components/DrawingMenuBar/DrawingMenuBar";
import { StageRefProvider } from "../../context/stageRefProvider/StageRefProvider";
import { NavBar } from "../NavBar/NavBar";

export const DashBoard = () => {
  
  return (
    <StageRefProvider>
      <NavBar />
      <DrawingMapContainer />
      <DrawingMenuBar />
    </StageRefProvider>
  );
};
