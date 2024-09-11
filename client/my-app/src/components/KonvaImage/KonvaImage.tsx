import { Image } from "react-konva";
import useImage from "use-image";
import { useKonvaImage } from "../../hooks/useKonvaImage";

interface KonvaImageProps {
  url: string;
  id: string;
  height?: number;
  width?: number;
  onClick?: () => void;
}

export const KonvaImage = ({
  url,
  id,
  onClick,
  height = 500,
  width = 500,
}: KonvaImageProps) => {
  const [image] = useImage(url, "anonymous");

  const { calculateImageScale } = useKonvaImage();

  const scale = calculateImageScale(image?.height, image?.width, height, width);

  const handleClick = () => {
    onClick?.();
  };

  return (
    <>
      {image && (
        <Image
          id={id}
          className={"object-scale-down"}
          onClick={handleClick}
          width={Math.round((image?.width ?? 0) / scale)}
          height={Math.round((image?.height ?? 0) / scale)}
          draggable
          image={image}
        />
      )}
    </>
  );
};
