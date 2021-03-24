import {
  Avatar,
  createStyles,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

interface ImageItemProps {
  image: Image;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1),
    },
    image: {
      maxWidth: "100%",
      objectFit: "contain",
    },
    userInfo: {
      alignItems: "center",
      justifyContent: "center",
      padding: theme.spacing(1),
      gap: theme.spacing(1),
      display: "flex",
    },
  })
);

const ImageItem: React.FC<ImageItemProps> = ({ image }) => {
  const classes = useStyles();

  return (
    <Link to={`/image/${image.id}`}>
      <Paper className={classes.root} variant="outlined">
        <img
          src={image.urls.small}
          alt={`item-${image.id}`}
          className={classes.image}
        />
        <div className={classes.userInfo}>
          <Avatar
            src={image.user.profile_image.large}
            alt={image.user.username}
          />
          <Typography variant="subtitle1">{image.user.name}</Typography>
        </div>
      </Paper>
    </Link>
  );
};

export default ImageItem;
