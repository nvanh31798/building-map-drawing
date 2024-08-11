import { Image } from "react-konva";
import useImage from "use-image";

interface KonvaImageProps {
  url: string;
  id: string;
}

export const KonvaImage = ({ url, id }: KonvaImageProps) => {
  const [image] = useImage(url);

  return (
    <Image
      onClick={() => console.log("image clicked", id)}
      draggable
      image={image}
    />
  );
};
