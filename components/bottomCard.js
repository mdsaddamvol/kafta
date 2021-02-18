import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  paper: {
    flex: '0 1 584px',
    padding: '20px',
  },
}));

export default function BottomCard() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} variant="outlined" elevation={0}>
      <Typography gutterBottom>You can use the extention 15 times per month</Typography>
      <Typography variant="h5" component="h6">
        <b>FREE LIMITED VERSION</b>
      </Typography>
    </Paper>
  );
}
