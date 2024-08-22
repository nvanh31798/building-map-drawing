import { Layer, Stage } from "react-konva";
import { useAppDispatch, useAppSelector } from "../../core/store/hooks";
import { useContext, useEffect, useState } from "react";
import { KonvaImage } from "../KonvaImage/KonvaImage";
import { removeMaterial } from "../../core/slice/drawingSlice";
import { StageRefContext } from "../../context/stageRefContext/StageRefContext";
import { ImageUploadContainer } from "../ImageUploadContainer/ImageUploadContainer";
import { randomUUID } from "crypto";

const DrawingMapContainer = () => {
  const { materials, isDeleting } = useAppSelector((state) => state.drawing);
  const imageFiles = useAppSelector((state) => state.image.images);

  const [items, setItem] = useState<JSX.Element[]>([]);
  const stageRef = useContext(StageRefContext);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!imageFiles || !imageFiles.length) {
      return;
    }
    const handleItemRemove = (id: string) => {};

    const newItem = imageFiles.map((file) => {
      return (
        <KonvaImage
          onClick={() => handleItemRemove(file.url)}
          id={file.url}
          key={file.url}
          url={file.url}
        />
      );
    });

    if (!newItem.length) {
      setItem([]);
      return;
    }

    setItem(newItem);
  }, [imageFiles.length, isDeleting]);

  if (!imageFiles.length) {
    return <ImageUploadContainer />;
  }

  return (
    <Stage className="rounded-xl border-2" width={520} height={520} ref={stageRef}>
      <Layer>{items}</Layer>
    </Stage>
  );
};

export default DrawingMapContainer;
