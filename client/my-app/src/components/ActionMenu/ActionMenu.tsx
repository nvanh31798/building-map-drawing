import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Button, SvgIconProps } from "@mui/material";
import { useAppDispatch } from "../../core/store/hooks";
import { deleteSwitch } from "../../core/slice/drawingSlice";

interface Action {
  label: string;
  icon: SvgIconProps;
  actionCallback: () => void;
}

export const ActionMenu = () => {
  const dispatch = useAppDispatch();
  const actions: Action[] = [
    {
      label: "Delete",
      icon: <DeleteOutlineIcon />,
      actionCallback: () => {
        dispatch(deleteSwitch());
      },
    },
  ];

  return (
    <div>
      {actions.map((action) => (
        <>
          <Button
            onClick={() => action.actionCallback()}
            endIcon={<DeleteOutlineIcon />}
          ></Button>
        </>
      ))}
    </div>
  );
};
