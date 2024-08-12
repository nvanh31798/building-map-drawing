import materialList from "../../mock/material-mock.json";
import { MaterialList } from "../MaterialList/MaterialList";
import { ActionMenu } from "../ActionMenu/ActionMenu";

export const DrawingMenuBar = () => {

  return (
    <div className="border-2 p-5 m-5 sticky top-2 z-40">
      <MaterialList materialList={materialList} />
      <ActionMenu />
    </div>
  );
};
