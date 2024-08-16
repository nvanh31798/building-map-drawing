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
  const imageURLs = useAppSelector((state) => state.image.imageURL);

  const [items, setItem] = useState<JSX.Element[]>([]);
  const stageRef = useContext(StageRefContext);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!imageURLs) {
      return;
    }
    const handleItemRemove = (id: string) => {};

    const newItem = imageURLs.map((imageURL) => {
      return (
        <KonvaImage
          onClick={() => handleItemRemove(imageURL)}
          id={imageURL}
          key={imageURL}
          url={imageURL}
        />
      );
    });

    if (!newItem.length) {
      setItem([]);
      return;
    }

    setItem(newItem);
  }, [imageURLs, isDeleting]);

  const render = () => {
    if (!imageURLs.length) {
      return <ImageUploadContainer />;
    }

    return (
      <Stage className="m-5 p-5" width={500} height={500} ref={stageRef}>
        <Layer>{items}</Layer>
      </Stage>
    );
  };

  return <div className="w-full border-2 rounded-xl">{render()}</div>;
};

export default DrawingMapContainer;
