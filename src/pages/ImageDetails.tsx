import { Box, Typography } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ImageInfoHeader from "../components/ImageInfoHeader";
import { useImage } from "../context/ImageContext";

export default function ImageDetails() {
  const params = useParams();
  const id = params.id;

  const { current, loading, clearCurrent, fetchImageById } = useImage();

  useEffect(() => {
    if (id) {
      fetchImageById(id);
    }

    return () => {
      clearCurrent();
    };

    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Box mb={5}>
      <ImageInfoHeader />
      <img src={current?.urls.small} alt={current?.id} />
      <Box mt={2} />
      <Typography>{current?.description}</Typography>
    </Box>
  );
}
