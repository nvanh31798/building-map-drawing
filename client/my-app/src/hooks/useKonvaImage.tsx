import Konva from "konva";
import { Layer } from "konva/lib/Layer";
import React, { RefObject } from "react";

export const useKonvaImage = () => {
  const INITIAL_SCALE = 1;
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

  const calculateImageScale = (
    height: number = 0,
    width: number = 0,
    scaledHeight: number = 500,
    scaledWidth: number = 500,
  ) => {
    let scale = INITIAL_SCALE;

    if (scaledHeight > height && scaledWidth > width) {
      return scale;
    }

    const widthScale = Math.floor(width / scaledWidth);
    const heightScale = Math.floor(height / scaledHeight);
    scale = widthScale > heightScale ? widthScale : height;

    return scale;
  };

  return { renderImage: renderImage, calculateImageScale };
};
