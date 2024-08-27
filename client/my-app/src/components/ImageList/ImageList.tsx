import { useAppSelector } from "../../core/store/hooks";
import { ImageListItem } from "../ImageListItem/ImageListItem";

export const ImageList = () => {
  const imageFiles = useAppSelector((state) => state.image.images);
  return (
    <div className="flex flex-col content-center w-80 gap-3">
      {imageFiles.map((file) => (
        <ImageListItem image={file}/>
      ))}
    </div>
  );
};
