import {
  createStyles,
  CssBaseline,
  makeStyles,
  Theme,
} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import ImageProvider from "./context/ImageContext";
import ImageDetails from "./pages/ImageDetails";
import Main from "./pages/Main";
import theme from "./theme";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: "center",
      marginTop: theme.spacing(4),
    },
  })
);

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <ImageProvider>
        <CssBaseline />
        <Router>
          <Header />
          <Switch>
            <>
              <Container maxWidth="lg" className={classes.root}>
                <Route exact path="/" component={Main} />
                <Route path="/image/:id" component={ImageDetails} />
              </Container>
            </>
          </Switch>
        </Router>
      </ImageProvider>
    </ThemeProvider>
  );
};

export default App;
