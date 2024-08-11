import { Material } from "../../core/models/Material";
import { Button } from "@mui/material";
import { useAppDispatch } from "../../core/store/hooks";
import { addMaterial } from "../../core/slice/drawingSlice";
import { v4 as uuidv4 } from 'uuid';

interface MaterialItemProps {
  item: Material;
}

export const MaterialItem = ({ item }: MaterialItemProps) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    const uuid = uuidv4();
    dispatch(addMaterial([{ ...item, id: uuid }]));
  };

  return <Button onClick={handleClick}>{item.label}</Button>;
};
