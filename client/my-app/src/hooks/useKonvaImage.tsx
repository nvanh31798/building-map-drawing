import Konva from "konva";
import { Layer } from "konva/lib/Layer";
import React, { RefObject } from "react";

export const useKonvaImage = () => {
  const renderImage = (
    url: string,
    ref?: RefObject<Layer> | null,
    handleClick?: () => void,
  ) => {
    Konva.Image.fromURL(url, (img) => {
      img.className = "object-scale-down";
      img.draggable(true);
      img.addEventListener("click", () => handleClick?.());

      ref?.current?.add(img);
      ref?.current?.draw();
    });
  };

  return { renderImage: renderImage };
};
