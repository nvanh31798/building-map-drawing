import { Layer, Stage } from "react-konva";
import { useAppSelector } from "../../core/store/hooks";
import { useContext, useEffect, useState } from "react";
import { KonvaImage } from "../KonvaImage/KonvaImage";
import { StageRefContext } from "../../context/stageRefContext/StageRefContext";
import { ImageUploadContainer } from "../ImageUploadContainer/ImageUploadContainer";

const DrawingMapContainer = () => {
  const { isDeleting } = useAppSelector((state) => state.drawing);
  const imageFiles = useAppSelector((state) => state.image.images);

  const [items, setItem] = useState<JSX.Element[]>([]);
  const stageRef = useContext(StageRefContext);

  useEffect(() => {
    if (!imageFiles || !imageFiles.length) {
      return;
    }
    const handleItemRemove = (id: string) => {};

    const newItem = imageFiles.map((file) => {
      return (
        <KonvaImage
          onClick={() => handleItemRemove(file.url)}
          width={stageRef?.current?.width()}
          height={stageRef?.current?.height()}
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
    <Stage className="shadow-lg" width={800} height={520} ref={stageRef}>
      <Layer>{items}</Layer>
    </Stage>
  );
};

export default DrawingMapContainer;
