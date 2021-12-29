import {
  createStyles,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import GetAppIcon from "@material-ui/icons/GetApp";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Link } from "react-router-dom";
import { useImage } from "../context/ImageContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    statsContainer: {
      gap: "16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      [theme.breakpoints.down("md")]: {
        marginBottom: theme.spacing(4),
      },
    },
    stats: {
      padding: theme.spacing(1),
      display: "flex",
      gap: "5px",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    downloadLink: {
      backgroundColor: theme.palette.primary.light,
      "& > *": {
        color: theme.palette.common.white,
      },
    },
  })
);

export default function ImageStats() {
  const classes = useStyles();

  const { current } = useImage();

  return (
    <Paper className={classes.statsContainer} variant="outlined">
      <div className={classes.stats}>
        <FavoriteIcon color="primary" />
        <Typography color="primary" variant="body2">
          {current?.likes}
        </Typography>
      </div>

      <div className={classes.stats}>
        <VisibilityIcon color="primary" />
        <Typography color="primary" variant="body2">
          {current?.views}
        </Typography>
      </div>

      <Link to={{ pathname: current?.links.download }} target="_blank">
        <div className={`${classes.stats} ${classes.downloadLink}`}>
          <GetAppIcon color="primary" />
          <Typography color="primary" variant="body2">
            {current?.downloads}
          </Typography>
        </div>
      </Link>
    </Paper>
  );
}
