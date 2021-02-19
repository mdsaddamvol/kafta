import Head from 'next/head';
import styles from '../styles/Home.module.css';
import NavBar from './../components/navbar';
import Card from './../components/card';
import BottomCard from './../components/bottomCard';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import FormComponent from './../components/FormComponent';
import Cardbottom from '../components/cardbottom';
import { WrapText } from '@material-ui/icons';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },

  cards: {
    width: '40.44vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '70.46vh',
    [theme.breakpoints.down('sm')]: {
      width: '350px',
      height: '430px',
    },
  },
  cardcontainer: {
    width: '100%',
    height: '89.4vh',
    display: 'flex',
    flexWrap: 'Wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '15px',
    [theme.breakpoints.down('sm')]: {
      hight: '1651px',
    },
  },
  footer: {
    width: '100%',
    fontSize: '16px',
    display: 'flex',
    justifyContent: 'center',
    fontSize: '0.875em',
    fontFamily: 'Roboto',
    fontWeight: 'regular',
    alignSelf: 'flex-end',
  },
}));
export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <NavBar />
      <Grid className={classes.cardcontainer} container>
        <Grid textAlign="left" className={classes.cards} xs={12} sm={4} item>
          <Card />
          <Cardbottom />
          <BottomCard />
        </Grid>
        <Grid xs={12} sm={4} item>
          <FormComponent />
        </Grid>
        <div className={classes.footer}>
          By continuing,you agree to our Terms of Service and have read and acknowledge our
          <a href="#"> Privacy policy</a>.
        </div>
      </Grid>
    </div>
  );
}
