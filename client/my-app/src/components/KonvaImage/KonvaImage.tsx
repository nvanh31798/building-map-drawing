import { Layer, Image } from "react-konva";
import useImage from "use-image";

interface KonvaImageProps {
  url: string;
}

export const KonvaImage = ({ url }: KonvaImageProps) => {
  const [image] = useImage(url);

  return <Image onClick={() => console.log("image clicked")} draggable image={image} />;
};
