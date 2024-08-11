import { Layer, Stage } from "react-konva";
import { useAppDispatch, useAppSelector } from "../../core/store/hooks";
import { useEffect, useState } from "react";
import { fetchMaterialThunk } from "../../core/thunks/fetchMaterialThunk";
import { KonvaImage } from "../KonvaImage/KonvaImage";

const DrawingMapContainer = () => {
  const materials = useAppSelector((state) => state.drawing.materials);
  const [items, setItem] = useState<JSX.Element[]>([]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMaterialThunk());
  }, []);

  useEffect(() => {
    if (!materials || !materials.length) {
      return;
    }

    const newItem = materials.map((material) => {
      return (
        <KonvaImage
          id={material.id}
          key={material.id}
          url={material.resourceURL}
        />
      );
    });
    setItem(newItem);
  }, [materials]);

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
