import { Image } from "react-konva";
import useImage from "use-image";

interface KonvaImageProps {
  url: string;
  id: string;
  onClick?: () => void;
}

export const KonvaImage = ({ url, id, onClick }: KonvaImageProps) => {
  const [image] = useImage(url, "anonymous");

  const width = 500;
  const height = 500;

  const handleClick = () => {
    onClick?.();
  };

  return (
    <Image
      className={"object-scale-down"}
      onClick={handleClick}
      width={Math.floor((image?.height ?? 0) / 12)}
      height={Math.floor((image?.height ?? 0) / 12)}
      draggable
      image={image}
    />
  );
};
