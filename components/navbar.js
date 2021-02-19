import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '7.4vh',
    flexGrow: 1,
    backgroundColor: '#f2f2f2',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuButton: {
    marginRight: theme.spacing(4),
  },
  title: {
    flexGrow: 1,
    color: '#fe6416',
    marginLeft: '1.38vw',
  },
  buttn: {
    marginRight: '1.38vw',
    width: '8.47vw',
    height: '3.7vh',
    backgroundColor: '#2860E1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '0.875em',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#ffffff',
    cursor: 'pointer',
    borderRadius: '5px',
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
        <div className={classes.buttn}>Contact Us</div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
