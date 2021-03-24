import { useContext } from "react";
import Masonry from "react-masonry-css";
import { ImageContext } from "../context/ImageContext";
import ImageItem from "./ImageItem";

const ImagesGrid: React.FC = () => {
  const { images } = useContext(ImageContext) as ImageContextInterface;

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpoints}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {images.map((image: Image) => (
        <div key={image.id}>
          <ImageItem image={image} />
        </div>
      ))}
    </Masonry>
  );
};

export default ImagesGrid;
