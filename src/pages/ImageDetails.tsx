import { Box, Typography } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import React, { useContext, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import ImageInfoHeader from "../components/ImageInfoHeader";
import { ImageContext } from "../context/ImageContext";

const ImageDetails: React.FC<RouteComponentProps<any>> = (props) => {
  const id = props.match.params.id;

  const { current, loading, clearCurrent, fetchImageById } = useContext(
    ImageContext
  ) as ImageContextInterface;

  useEffect(() => {
    fetchImageById(id);

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
};

export default ImageDetails;
