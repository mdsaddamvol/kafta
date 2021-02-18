import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  paper: {
    width: '584px',
    height: '104px',
    padding: '30px 83px',
    [theme.breakpoints.down('sm')]: {
      width: '330px',
      height: '104px',
      padding: '20px 20px',
    },
  },
}));

export default function BottomCard() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} variant="outlined" elevation={0}>
      <div
        style={{
          fontSize: '12.5px',
          fontFamily: 'Roboto',
          fontWeight: 'regular',
          width: '287px',
          height: '19px',
        }}
      >
        You can use the extention 15 times per month
      </div>
      <div style={{ fontSize: '19px', fontFamily: 'Roboto', fontWeight: 'regular', width: '226px', height: '32px' }}>
        <b>FREE LIMITED VERSION</b>
      </div>
    </Paper>
  );
}
