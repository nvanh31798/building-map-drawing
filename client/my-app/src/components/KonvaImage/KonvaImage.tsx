import { Image } from "react-konva";
import useImage from "use-image";
import { useKonvaImage } from "../../hooks/useKonvaImage";

interface KonvaImageProps {
  url: string;
  id: string;
  onClick?: () => void;
}

export const KonvaImage = ({ url, id, onClick }: KonvaImageProps) => {
  const [image] = useImage(url, "anonymous");
  const height = 500;
  const width = 500;

  const { calculateImageScale } = useKonvaImage();

  const scale = calculateImageScale(image?.height, image?.width, height, width);

  const handleClick = () => {
    onClick?.();
  };

  return (
    <Image
      className={"object-scale-down"}
      onClick={handleClick}
      width={Math.round((image?.width ?? 0) / scale)}
      height={Math.round((image?.height ?? 0) / scale)}
      draggable
      image={image}
    />
  );
};
