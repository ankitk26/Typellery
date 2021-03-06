import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import React, { useContext } from "react";
import { ImageContext } from "../context/ImageContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    pagination: {
      textAlign: "center",
      margin: "2rem auto",
    },
  })
);

const PagePagination: React.FC = () => {
  const classes = useStyles();

  const { currentPage, totalPages, setCurrentPage } = useContext(
    ImageContext
  ) as ImageContextInterface;

  const handlePagination = (e: React.ChangeEvent<unknown>, page: number) => {
    console.log(page);
    setCurrentPage(page);
  };

  return (
    <div className={classes.root}>
      <Pagination
        page={currentPage}
        className={classes.pagination}
        count={totalPages === 0 ? 100 : totalPages}
        variant="outlined"
        color="primary"
        onChange={handlePagination}
      />
    </div>
  );
};

export default PagePagination;
