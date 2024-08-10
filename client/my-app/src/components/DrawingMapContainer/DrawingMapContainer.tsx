import useImage from "use-image";
import { Stage, Layer, Image } from "react-konva";

const DrawingMapContainer = () => {
  const [image] = useImage(
    "https://upload.wikimedia.org/wikipedia/commons/8/8c/SVG_logo_h.svg",
  );

  return (
    <Stage className="m-5 p-5 border-2" width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Image draggable image={image} />
      </Layer>
    </Stage>
  );
};

export default DrawingMapContainer;
