
import Header from "./components/Header";
import Main from "./components/Main";
import CssBaseline from '@mui/material/CssBaseline';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { fontFamily } from "@mui/system";

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
  },
  title: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "Roboto",
  },
});


function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Grid container direction="column">
        <Grid item>
          <Header />
        </Grid>
        <Typography variant="h1" gutterBottom component="div" className={classes.title}>MyCrate</Typography>
        <Grid item container>
          <Grid item xs={0} sm={2} />
          <Grid item xs={12} sm={8}>
            <Main />
          </Grid>
          <Grid item xs={0} sm={2} />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;