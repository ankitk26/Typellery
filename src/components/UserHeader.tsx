import {
  Avatar,
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useImage } from "../context/ImageContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gap: {
      gap: theme.spacing(2),
    },
  })
);

export default function UserHeader() {
  const classes = useStyles();

  const { current } = useImage();

  return (
    <Link to={{ pathname: current?.user.links.html }} target="_blank">
      <Box display="flex" alignItems="center" className={classes.gap}>
        <Avatar
          src={current?.user.profile_image.large}
          alt={current?.user.name}
        />
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <Typography variant="body1">{current?.user.name}</Typography>
          <Typography variant="body2" color="textSecondary">
            @{current?.user.username}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
}
