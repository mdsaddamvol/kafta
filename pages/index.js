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
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: '80vh',
  },
  cards: {
    flex: '0 1 584px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '80vh',
  },
  cardcontainer: {
    maxWidth: 1295,
    height: '80vh',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    padding: '10px',
  },
  footer: {
    fontSize: '12px',
  },
}));
export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <NavBar />
      <Grid className={classes.cardcontainer} container>
        <Grid className={classes.cards} xs={12} sm={4} item>
          <Card />
          <Cardbottom />
          <BottomCard />
        </Grid>

        <Grid xs={12} sm={4} item>
          <Paper className={classes.paper} variant="outlined" elevation={0}>
            <FormComponent />
          </Paper>
        </Grid>
        <p className={classes.footer}>
          By continuing,you agree to our Terms of Service and have read and acknowledge our Privcy policy.
        </p>
      </Grid>
    </div>
  );
}
