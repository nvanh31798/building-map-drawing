import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";

import { Divider } from "@mui/material";
import { ImageUpload } from "../ImageUpload/ImageUpload";

export const ImageUploadContainer = () => {
  return (
    <div
      style={{ height: 520, width: 800 }}
      className="border-2 shadow-lg rounded-xl flex flex-col w-full h-96"
    >
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
      </div>
      <Divider aria-hidden="true" />
      <ImageUpload />
    </div>
  );
};
