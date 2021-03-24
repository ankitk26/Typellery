import CircularProgress from "@material-ui/core/CircularProgress";
import { useContext, useEffect } from "react";
import ImagesGrid from "../components/ImagesGrid";
import PagePagination from "../components/PagePagination";
import { ImageContext } from "../context/ImageContext";

const Main: React.FC = () => {
  const {
    totalPages,
    fetchImages,
    currentPage,
    loading,
    fetchSearchResults,
  } = useContext(ImageContext) as ImageContextInterface;

  useEffect(() => {
    if (totalPages === 0) {
      return fetchImages();
    }
    fetchSearchResults();
    // eslint-disable-next-line
  }, [currentPage, totalPages]);

  return (
    <>
      <PagePagination />
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <ImagesGrid />
          <PagePagination />
        </>
      )}
    </>
  );
};

export default Main;
