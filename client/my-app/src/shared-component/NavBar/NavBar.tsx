import { Button, IconButton } from "@mui/material";
import { ImageList } from "../../components/ImageList/ImageList";
import { useRef } from "react";
import { useFileInput } from "../../hooks/useFileInput";
import { HiddenInput } from "../HiddenInput/HiddenInput";
import { useAppSelector } from "../../core/store/hooks";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export const NavBar = () => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const images = useAppSelector((state) => state.image.images);
  const { handleAddImageFile } = useFileInput();

  const handleFileClicked = () => {
    inputFileRef?.current?.click();
  };

  return (
    <div className="shadow-md p-5 mr-5 flex flex-col content-center gap-2 w-96">
      <h1 className="text-3xl font-bold underline"></h1>
      <ImageList />
      <HiddenInput
        handleChange={(e) => handleAddImageFile(e?.target.files)}
        inputRef={inputFileRef}
      />

      {!images.length && <p className="text-center text-sm font-thin">No image uploaded</p>}
      <div className="mx-auto mt-5">
        <IconButton onClick={handleFileClicked}>
          <AddCircleOutlineIcon color="secondary" fontSize="large"></AddCircleOutlineIcon>
        </IconButton>
      </div>
    </div>
  );
};
