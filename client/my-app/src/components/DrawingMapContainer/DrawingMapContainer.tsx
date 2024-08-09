import React from "react";
import MapGL from 'react-map-gl';
import { DrawPolygonMode, Editor } from "react-map-gl-draw";

const DEFAULT_VIEWPORT = {
    width: 800,
    height: 600,
    longitude: -122.45,
    latitude: 37.78,
    zoom: 14,
  };

const DrawingMapContainer = () => {
  return (
    <div>
      <h1>This is drawing map container</h1>
      <MapGL
        {...DEFAULT_VIEWPORT}
        width="100%"
        height="100%"
        mapStyle={"mapbox://styles/mapbox/light-v9"}
        onViewportChange={() => console.log("Viewpoint change")}
      >
        {/* <Editor
          // to make the lines/vertices easier to interact with
          clickRadius={12}
          mode={new DrawPolygonMode()}
        /> */}
      </MapGL>
    </div>
  );
};

export default DrawingMapContainer;
