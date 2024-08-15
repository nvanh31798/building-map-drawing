import { Button } from "@mui/material";
import React, { ChangeEvent, useRef } from "react";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";

export const ImageUpload = () => {
  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleFileInput = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    const droppedFiles = event?.target.files;
    console.log("dropped", droppedFiles);
  };

  const handleDropFile = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
    const droppedFiles = event?.dataTransfer.files;
    console.log("dropped", droppedFiles);
  };

  const handleFileClicked = () => {
    inputFileRef?.current?.click();
  };

  return (
    <div
      onDrop={(e) => handleDropFile(e)}
      onClick={handleFileClicked}
      onDragOver={(event) => event.preventDefault()}
      className="m-5 border-2 border-dashed rounded-xl content-center items-center flex flex-col h-56 justify-evenly cursor-pointer"
    >
      <input
        onChange={(e) => handleFileInput(e)}
        type="file"
        id="file"
        ref={inputFileRef}
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
        title="Browse file"
      >
        Browse file
      </Button>
    </div>
  );
};
