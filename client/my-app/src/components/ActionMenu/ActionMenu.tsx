import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Button } from "@mui/material";
import { useAppDispatch } from "../../core/store/hooks";
import { deleteSwitch } from "../../core/slice/drawingSlice";
import { ReactNode, useContext } from "react";
import { StageRefContext } from "../../context/stageRefContext/StageRefContext";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";

interface Action {
  label: string;
  icon: ReactNode;
  actionCallback: () => void;
}

export const ActionMenu = () => {
  const dispatch = useAppDispatch();
  const stageRef = useContext(StageRefContext);
  const actions: Action[] = [
    {
      label: "Delete",
      icon: <DeleteOutlineIcon />,
      actionCallback: () => {
        dispatch(deleteSwitch());
      },
    },
    {
      label: "Export",
      icon: <InsertPhotoIcon />,
      actionCallback: async () => {
        const uri = await stageRef?.current?.toImage();
        console.log(uri);
      },
    },
  ];

  return (
    <div>
      {actions.map((action) => (
        <Button
          key={action.label}
          onClick={() => action.actionCallback()}
          endIcon={action.icon}
        ></Button>
      ))}
    </div>
  );
};
