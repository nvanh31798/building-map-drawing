import { Layer, Stage } from "react-konva";
import { useAppDispatch, useAppSelector } from "../../core/store/hooks";
import { useContext, useEffect, useState } from "react";
import { KonvaImage } from "../KonvaImage/KonvaImage";
import { removeMaterial } from "../../core/slice/drawingSlice";
import { StageRefContext } from "../../context/stageRefContext/StageRefContext";
import { ImageUpload } from "../ImageUpload/ImageUpload";

const DrawingMapContainer = () => {
  const { materials, isDeleting } = useAppSelector((state) => state.drawing);
  const [items, setItem] = useState<JSX.Element[]>([]);
  const stageRef = useContext(StageRefContext);
  const dispatch = useAppDispatch();

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

  const render = () => {
    if (!materials.length) {
      return <ImageUpload />;
    }

    return (
      <Stage
        className="m-5 p-5"
        width={500}
        height={500}
        ref={stageRef}
      >
        <Layer>{items}</Layer>
      </Stage>
    );
  };

  return <div className="w-50 border-2 rounded-xl">{render()}</div>;
};

export default DrawingMapContainer;
