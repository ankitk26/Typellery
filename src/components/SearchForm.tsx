import { createStyles, InputBase, makeStyles, Theme } from "@material-ui/core";
import React, { useContext } from "react";
import { ImageContext } from "../context/ImageContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  })
);

const SearchForm: React.FC = () => {
  const classes = useStyles();
  const { fetchSearchResults, setSearch, search } = useContext(
    ImageContext
  ) as ImageContextInterface;

  const handleSearch = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchSearchResults();
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        value={search}
        inputProps={{ "aria-label": "search" }}
        onChange={handleSearch}
      />
    </form>
  );
};

export default SearchForm;
