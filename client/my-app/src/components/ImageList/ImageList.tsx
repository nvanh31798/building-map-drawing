import { useAppSelector } from "../../core/store/hooks";
import { ImageListItem } from "../ImageListItem/ImageListItem";

export const ImageList = () => {
  const imageFiles = useAppSelector((state) => state.image.images);
  return (
    <div className="flex flex-col w-80 gap-3 self-center content-center">
      {imageFiles.map((file) => (
        <ImageListItem image={file}/>
      ))}
    </div>
  );
};
