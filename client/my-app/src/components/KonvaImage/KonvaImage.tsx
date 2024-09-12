import { Image, Rect, Transformer } from "react-konva";
import useImage from "use-image";
import { useKonvaImage } from "../../hooks/useKonvaImage";
import { useState, useRef, useEffect } from "react";

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
  const [active, setActive] = useState(false);
  const { calculateImageScale } = useKonvaImage();

  const scale = calculateImageScale(image?.height, image?.width, height, width);

  // State to manage the crop rectangle position and size
  const [crop, setCrop] = useState({ x: 0, y: 0, width: 100, height: 100 });
  const [isCropping, setIsCropping] = useState(false);

  // References for the Rect and Transformer
  const cropRectRef = useRef<any>(null);
  const trRef = useRef<any>(null);

  useEffect(() => {
    if (active && trRef.current && cropRectRef.current) {
      // Attach transformer to the selected cropping rectangle
      trRef.current.nodes([cropRectRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [active, crop]);

  const handleClick = () => {
    setActive(!active);
    onClick?.();
  };

  const handleMouseDown = (e: any) => {
    setIsCropping(true);
    const { x, y } = e.target.getStage().getPointerPosition();
    setCrop({ x, y, width: 0, height: 0 });
  };

  const handleMouseMove = (e: any) => {
    if (!isCropping) return;
    const { x, y } = e.target.getStage().getPointerPosition();
    setCrop((prevCrop) => ({
      ...prevCrop,
      width: x - prevCrop.x,
      height: y - prevCrop.y,
    }));
  };

  const handleMouseUp = () => {
    setIsCropping(false);
  };

  const handleTransform = () => {
    // Update the crop state when the cropping rectangle is resized
    const node = cropRectRef.current;
    const newCrop = {
      x: node.x(),
      y: node.y(),
      width: node.width() * node.scaleX(),
      height: node.height() * node.scaleY(),
    };
    setCrop(newCrop);

    // Reset the scale to 1 after applying the new size
    node.scaleX(1);
    node.scaleY(1);
  };

  return (
    <>
      {active && <div className="p-2 border-2"></div>}
      {image && (
        <>
          <Image
            id={id}
            className={"object-scale-down"}
            onClick={handleClick}
            width={Math.round((image?.width ?? 0) / scale)}
            height={Math.round((image?.height ?? 0) / scale)}
            draggable
            image={image}
            crop={crop}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          />
          {/* Draw a rectangle to represent the cropping area */}
          {/* <Rect
            ref={cropRectRef}
            x={crop.x}
            y={crop.y}
            width={crop.width}
            height={crop.height}
            stroke="red"
            draggable
            onTransformEnd={handleTransform}
            onDragEnd={handleTransform}
          /> */}
          {/* Transformer to handle resizing and rotating */}
          {active && (
            <Transformer
              ref={trRef}
              rotateEnabled={false}
              keepRatio={false}
              boundBoxFunc={(oldBox, newBox) => {
                // Limit resizing to avoid negative width or height
                if (newBox.width < 1 || newBox.height < 1) {
                  return oldBox;
                }
                return newBox;
              }}
            />
          )}
        </>
      )}
    </>
  );
};
