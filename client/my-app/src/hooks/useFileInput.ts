import React from "react";
import { useAppDispatch } from "../core/store/hooks";
import { addImage } from "../core/slice/imageSlice";
import { ImageFile } from "../core/models/ImageFile";

export const useFileInput = () => {
  const dispatch = useAppDispatch();

  const handleAddImageFile = (files: FileList | null) => {
    if (files && files[0]) {
      const reader = new FileReader();
      const file = files[0];
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        dispatch(
          addImage({
            name: file.name,
            url: imageUrl,
            lastModified: file.lastModified,
          } as ImageFile),
        );
      };

      reader.readAsDataURL(file);
    }
  };

  return { handleAddImageFile };
};
