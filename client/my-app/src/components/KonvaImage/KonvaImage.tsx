import { Image } from "react-konva";
import useImage from "use-image";

interface KonvaImageProps {
  url: string;
  id: string;
  onClick?: () => void;
}

export const KonvaImage = ({ url, id, onClick }: KonvaImageProps) => {
  const [image] = useImage(url, "anonymous");
  const handleClick = () => {
    onClick?.();
  };

  return (
    <Image
      onClick={handleClick}
      width={500}
      height={500}
      draggable
      image={image}
    />
  );
};
