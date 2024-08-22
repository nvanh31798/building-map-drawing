import React from "react";
import { ImageFile } from "../../core/models/ImageFile";
import { useAppSelector } from "../../core/store/hooks";
import { ImageListItem } from "../ImageListItem/ImageListItem";

export const ImageList = () => {
  const imageFiles = useAppSelector((state) => state.image.images);
  return (
    <div>
      {imageFiles.map((file) => (
        <ImageListItem image={file}/>
      ))}
    </div>
  );
};
