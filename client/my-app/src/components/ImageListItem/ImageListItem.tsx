import React from "react";
import { ImageFile } from "../../core/models/ImageFile";

interface ImageListItemProps {
  image: ImageFile;
}

export const ImageListItem = ({ image }: ImageListItemProps) => {
  return (
    <div className="flex items-center mt-5 p-3 shadow-lg gap-5">
      <img
        className="shadow-md"
        width={50}
        height={50}
        src={image.url}
        alt={image.name}
      />
      <p className="text-sm truncate">{image.name}</p>
    </div>
  );
};
