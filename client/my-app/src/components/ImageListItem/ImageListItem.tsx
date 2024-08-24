import React from "react";
import { ImageFile } from "../../core/models/ImageFile";

interface ImageListItemProps {
  image: ImageFile;
}

export const ImageListItem = ({ image }: ImageListItemProps) => {

  return <div>{image.name}</div>;
};
