import {
  AppBar,
  createStyles,
  fade,
  IconButton,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import SearchForm from "./SearchForm";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    homeButton: {
      marginRight: theme.spacing(2),
      display: "none",
      [theme.breakpoints.down("sm")]: {
        display: "block",
      },
    },
    title: {
      flexGrow: 1,
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  })
);

const Header: React.FC = () => {
  const classes = useStyles();

  const history = useHistory();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.homeButton}
          color="inherit"
          aria-label="open drawer"
          onClick={() => history.push("/")}
        >
          <HomeRoundedIcon />
        </IconButton>
        <Typography variant="h4" className={classes.title}>
          <Link to="/">Typellery</Link>
        </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <SearchForm />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
