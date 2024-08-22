import { Button } from "@mui/material";
import React, { ChangeEvent, useRef } from "react";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import { useAppDispatch } from "../../core/store/hooks";
import { addImage, addImageURL } from "../../core/slice/imageSlice";

export const ImageUpload = () => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const handleFileCommon = (files: FileList | null) => {
    if (files && files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        dispatch(addImage({ ...files[0], url: imageUrl }));
      };

      reader.readAsDataURL(files[0]);
    }
  };

  const handleFileInput = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();

    handleFileCommon(event?.target.files);
  };

  const handleDropFile = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();

    handleFileCommon(event?.dataTransfer.files);
  };

  const handleFileClicked = () => {
    inputFileRef?.current?.click();
  };

  return (
    <div
      onDrop={(e) => handleDropFile(e)}
      onClick={handleFileClicked}
      onDragOver={(event) => event.preventDefault()}
      className="m-5 border-2 border-dashed rounded-xl content-center items-center h-full flex flex-col justify-evenly cursor-pointer"
    >
      <input
        onChange={(e) => handleFileInput(e)}
        type="file"
        ref={inputFileRef}
        accept="image/*"
        style={{ display: "none" }}
      />
      <CloudUploadOutlinedIcon />
      <div>
        <h6 className="text-sm text-center">
          Choose a file or drag & drop it here
        </h6>
        <p className="text-sm text-center text-gray-400 mt-2">
          JPEG, PNG, PDG, and SVG, up to 50MB
        </p>
      </div>
      <Button
        sx={{ borderColor: "none" }}
        variant="outlined"
        color="inherit"
        title="Browse file"
      >
        Browse file
      </Button>
    </div>
  );
};
