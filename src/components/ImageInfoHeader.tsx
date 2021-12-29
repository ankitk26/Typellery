import { Box, createStyles, makeStyles, Theme } from "@material-ui/core";
import ImageStats from "./ImageStats";
import UserHeader from "./UserHeader";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        alignItems: "center",
        gap: theme.spacing(4),
        justifyContent: "center",
      },
    },
  })
);

export default function ImageInfoHeader() {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      className={classes.header}
    >
      <UserHeader />
      <ImageStats />
    </Box>
  );
}
