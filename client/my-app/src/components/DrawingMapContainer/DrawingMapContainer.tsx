import { Layer, Stage } from "react-konva";
import { useAppDispatch, useAppSelector } from "../../core/store/hooks";
import { useEffect, useState } from "react";
import { fetchMaterialThunk } from "../../core/thunks/fetchMaterialThunk";
import { KonvaImage } from "../KonvaImage/KonvaImage";
import { removeMaterial } from "../../core/slice/drawingSlice";

const DrawingMapContainer = () => {
  const { materials, isDeleting } = useAppSelector((state) => state.drawing);
  const [items, setItem] = useState<JSX.Element[]>([]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMaterialThunk());
  }, []);

  useEffect(() => {
    if (!materials) {
      return;
    }
    const handleItemRemove = (id: string) => {
      if (!isDeleting) {
        return;
      }
      dispatch(removeMaterial(id));
    };
    const newItem = materials.map((material) => {
      return (
        <KonvaImage
          onClick={() => handleItemRemove(material.id)}
          id={material.id}
          key={material.id}
          url={material.resourceURL}
        />
      );
    });

    if (!newItem.length) {
      setItem([]);
      return;
    }

    setItem(newItem);
  }, [materials, isDeleting]);

  return (
    <Stage
      className="m-5 p-5 border-2 bg-red-200"
      width={window.innerWidth}
      height={window.innerHeight}
    >
      <Layer>{items}</Layer>
    </Stage>
  );
};

export default DrawingMapContainer;
