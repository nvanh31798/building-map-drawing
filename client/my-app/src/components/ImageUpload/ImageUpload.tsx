import React from "react";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import IconButton from "@mui/material/IconButton";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { Button, Divider } from "@mui/material";

export const ImageUpload = () => {
  return (
    <div className="h-96 w-full">
      <div className="flex relative p-2 content-center items-center m-3">
        <div className="border-2 p-3 rounded-full mr-5">
          <CloudUploadOutlinedIcon />
        </div>
        <div>
          <h6 className="text-lg">Upload files</h6>
          <p className="text-sm text-gray-400">
            Select and upload the files of your choice
          </p>
        </div>
        <IconButton
          size="small"
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
          }}
        >
          <CancelOutlinedIcon fontSize="small" />
        </IconButton>
      </div>
      <Divider aria-hidden="true" />

      <div className="m-5 border-2 border-dashed rounded-xl content-center items-center flex flex-col h-56 justify-evenly">
        <CloudUploadOutlinedIcon />
        <div>
          <h6 className="text-sm text-center">Choose a file or drag & drop it here</h6>
          <p className="text-sm text-center text-gray-400 mt-2">
            JPEG, PNG, PDG, and SVG, up to 50MB
          </p>
        </div>
        <Button sx={{borderColor: "none"}} variant="outlined" title="Browse file">Browse file</Button>
      </div>
    </div>
  );
};
