import { Button } from "@mui/material";
import { ImageList } from "../../components/ImageList/ImageList";
import { useRef } from "react";
import { useFileInput } from "../../hooks/useFileInput";
import { HiddenInput } from "../HiddenInput/HiddenInput";

export const NavBar = () => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const { handleAddImageFile } = useFileInput();

  const handleFileClicked = () => {
    inputFileRef?.current?.click();
  };

  return (
    <div className="border p-5 mr-5">
      <h1 className="text-3xl font-bold underline"></h1>
      <ImageList />
      <HiddenInput
        handleChange={(e) => handleAddImageFile(e?.target.files)}
        inputRef={inputFileRef}
      />
      <Button onClick={handleFileClicked}>Add</Button>
    </div>
  );
};
