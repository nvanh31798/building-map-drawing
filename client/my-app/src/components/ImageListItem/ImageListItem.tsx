import { ImageFile } from "../../core/models/ImageFile";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useAppDispatch } from "../../core/store/hooks";
import { removeImage } from "../../core/slice/imageSlice";
interface ImageListItemProps {
  image: ImageFile;
}

export const ImageListItem = ({ image }: ImageListItemProps) => {
  const dispatch = useAppDispatch();
  const handleRemove = () => {
    dispatch(removeImage(image.id));
  };

  return (
    <div draggable className="flex mb-2 items-center p-3 shadow-md justify-between w-90 h-20">
      <div className="flex items-center gap-3 w-64">
        <img
          className="shadow-md"
          width={50}
          height={50}
          src={image.url}
          alt={image.name}
        />
        <p className="text-sm truncate">{image.name}</p>
      </div>
      <IconButton onClick={handleRemove} className="absolute">
        <CloseIcon />
      </IconButton>
    </div>
  );
};
