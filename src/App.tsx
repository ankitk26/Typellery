import {
  createStyles,
  CssBaseline,
  makeStyles,
  Theme,
} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
          <Container maxWidth="lg" className={classes.root}>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/image/:id" element={<ImageDetails />} />
            </Routes>
          </Container>
        </Router>
      </ImageProvider>
    </ThemeProvider>
  );
};

export default App;
