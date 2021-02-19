import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  paper: {
    width: '40.44vw',
    height: '9.62vh',
    paddingLeft: '5.76vw',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    cursor: 'pointer',
    '&:hover': {
      border: '1px solid #006CFF',
    },
    [theme.breakpoints.down('sm')]: {
      width: '330px',
      height: '104px',
      padding: '20px 20px',
    },
  },
  smalltext: {
    fontSize: '0.875em',
    fontFamily: 'Roboto',
    fontWeight: 'regular',
    width: '20vw',
    height: '1.75vh',
    [theme.breakpoints.down('sm')]: {
      width: '287px',
      height: '19',
    },
  },
  bigtext: {
    fontSize: '1.5em',
    fontFamily: 'Roboto',
    fontWeight: 'black',
    width: '20vw',
    height: '2.96vh',
    [theme.breakpoints.down('sm')]: {
      width: '230px',
      height: '32',
      marginTop: '5px',
    },
  },
}));

export default function BottomCard() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} variant="outlined" elevation={0}>
      <div className={classes.smalltext}>You can use the extention 15 times per month</div>
      <div className={classes.bigtext}>
        <b>FREE LIMITED VERSION</b>
      </div>
    </Paper>
  );
}
