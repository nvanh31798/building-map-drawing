import { Layer, Stage } from "react-konva";
import { useAppDispatch, useAppSelector } from "../../core/store/hooks";
import { useEffect, useRef } from "react";
import { fetchMaterialThunk } from "../../core/thunks/fetchMaterialThunk";
import useImage from "use-image";
import { KonvaImage } from "../KonvaImage/KonvaImage";
import Konva from "konva";

const DrawingMapContainer = () => {
  const materials = useAppSelector((state) => state.drawing.materials);
  const layerRef = useRef<Konva.Stage>(null);

  const dispatch = useAppDispatch();

  return (
    <Stage
      className="m-5 p-5 border-2"
      width={window.innerWidth}
      height={window.innerHeight}
      ref={layerRef}
    >
      <Layer>
        {materials.length > 0 &&
          materials.map((material) => {
            if (!material.resourceURL) {
              return <h1>Faild to load</h1>;
            }
            <KonvaImage key={material.id} url={material.resourceURL} />;
          })}
        <KonvaImage
          url={
            "https://upload.wikimedia.org/wikipedia/commons/8/8c/SVG_logo_h.svg"
          }
        />
      </Layer>
    </Stage>
  );
};

export default DrawingMapContainer;
