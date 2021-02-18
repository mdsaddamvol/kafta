import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '20vh',
    flexGrow: 1,
    backgroundColor: '#f2f2f2',
  },
  menuButton: {
    marginRight: theme.spacing(4),
  },
  title: {
    flexGrow: 1,
    color: '#fe6416',
    marginLeft: '20px',
  },
  buttn: {
    marginRight: '20px',
  },
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar elevation={0} color="white" position="static">
      <Toolbar>
        <Typography variant="h5" className={classes.title}>
          Kafta
        </Typography>
        <Button
          width="122px"
          className={classes.buttn}
          max-height="40px"
          elevation={0}
          variant="contained"
          color="primary"
        >
          Contact Us
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
