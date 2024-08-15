import DrawingMapContainer from "../../components/DrawingMapContainer/DrawingMapContainer";
import { DrawingMenuBar } from "../../components/DrawingMenuBar/DrawingMenuBar";
import { StageRefProvider } from "../../context/stageRefProvider/StageRefProvider";

export const DashBoard = () => {
  
  return (
    <StageRefProvider>
      <DrawingMapContainer />
      {/* <DrawingMenuBar /> */}
    </StageRefProvider>
  );
};
