import CircularProgress from "@material-ui/core/CircularProgress";
import { useEffect } from "react";
import ImagesGrid from "../components/ImagesGrid";
import PagePagination from "../components/PagePagination";
import { useImage } from "../context/ImageContext";

export default function Main() {
  const { totalPages, fetchImages, currentPage, loading, fetchSearchResults } =
    useImage();

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
}
