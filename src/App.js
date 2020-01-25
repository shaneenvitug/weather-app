import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import './App.css';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <h1>Weather app coming soon!</h1>
       <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="City" />
        {/* button material ui */}
        <Fab variant="extended">
          Search
        </Fab>
      </form>
    </div>
  );
}

export default App;
