import { Image, Rect } from "react-konva";
import useImage from "use-image";
import { useKonvaImage } from "../../hooks/useKonvaImage";
import { useState } from "react";
import { KonvaEventObject } from "konva/lib/Node";

interface KonvaImageProps {
  url: string;
  id: string;
  height?: number;
  width?: number;
  onClick?: () => void;
}

export const KonvaImage = ({
  url,
  id,
  onClick,
  height = 500,
  width = 500,
}: KonvaImageProps) => {
  const [image] = useImage(url, "anonymous");

  const { calculateImageScale } = useKonvaImage();

  const scale = calculateImageScale(image?.height, image?.width, height, width);

  const [cropRect, setCropRect] = useState({
    x: 50,
    y: 50,
    width: 100,
    height: 100,
    isDragging: false,
  });

  const handleDragMove = (e: KonvaEventObject<DragEvent>) => {
    setCropRect({
      ...cropRect,
      x: e.target.x(),
      y: e.target.y(),
    });
  };

  const handleResize = (e: KonvaEventObject<MouseEvent>) => {
    const stage = e.target.getStage();
    const pointerPosition = stage?.getPointerPosition();
    if (pointerPosition) {
      const newWidth = pointerPosition.x - cropRect.x;
      const newHeight = pointerPosition.y - cropRect.y;
      setCropRect((prev) => ({
        ...prev,
        width: newWidth > 0 ? newWidth : 0,
        height: newHeight > 0 ? newHeight : 0,
      }));
    }
  };

  const handleMouseUp = () => {
    setCropRect({ ...cropRect, isDragging: false });
  };
  
  const handleClick = () => {
    onClick?.();
  };

  return (
    // <Image
    //   id={id}
    //   className={"object-scale-down"}
    //   onClick={handleClick}
    //   width={Math.round((image?.width ?? 0) / scale)}
    //   height={Math.round((image?.height ?? 0) / scale)}
    //   draggable
    //   image={image}
    // />
    <>
    {image && (
      <Image
        id={id}
        className={"object-scale-down"}
        onClick={handleClick}
        width={Math.round((image?.width ?? 0) / scale)}
        height={Math.round((image?.height ?? 0) / scale)}
        draggable
        image={image}
        crop={{
          x: cropRect.x * scale,
          y: cropRect.y * scale,
          width: cropRect.width * scale,
          height: cropRect.height * scale,
        }}
      />
    )}
    {/* Crop Selection Rectangle */}
    <Rect
      x={cropRect.x}
      y={cropRect.y}
      width={cropRect.width}
      height={cropRect.height}
      stroke="red"
      strokeWidth={2}
      draggable
      onDragMove={handleDragMove}
      onTransform={handleResize}
      onMouseUp={handleMouseUp}
      onMouseDown={() => setCropRect({ ...cropRect, isDragging: true })}
    />
  </>
  );
};
