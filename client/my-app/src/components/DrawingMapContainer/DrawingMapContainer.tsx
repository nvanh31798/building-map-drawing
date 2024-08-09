import Konva from "konva";
import React from "react";
import useImage from "use-image";
import { Stage, Layer, Rect, Text, Image } from "react-konva";

const DrawingMapContainer = () => {
  const [image] = useImage(
    "https://upload.wikimedia.org/wikipedia/commons/8/8c/SVG_logo_h.svg",
  );

  return (
    <Stage className="m-5 p-5 border-2" width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Text text="Try click on rect" />
        <Rect
          x={20}
          y={20}
          width={50}
          height={50}
          fill={"red"}
          draggable
          shadowBlur={5}
        />
        <Image draggable image={image} />
      </Layer>
    </Stage>
  );
};

// const KonvaImg = () => {
//   const imageObj = new Image();
//   const ImgTest = Konva.Image.fromURL('http://www.w3.org/2000/svg', (image) => {
//     layer.add(image);
//   });
// }

export default DrawingMapContainer;
