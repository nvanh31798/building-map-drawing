import { Button } from "@mui/material";
import React, { ChangeEvent, useRef } from "react";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import { HiddenInput } from "../../shared-component/HiddenInput/HiddenInput";
import { useFileInput } from "../../hooks/useFileInput";

export const ImageUpload = () => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const { handleAddImageFile } = useFileInput();

  const handleFileInput = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();

    handleAddImageFile(event?.target.files);
  };

  const handleDropFile = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();

    handleAddImageFile(event?.dataTransfer.files);
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
      <HiddenInput
        handleChange={(e) => handleFileInput(e)}
        inputRef={inputFileRef}
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
