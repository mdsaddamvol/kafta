import Progress from './progress';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Switche from './switch';
import { Chip } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },

  card: {
    width: '40.44vw',
    height: '21.11vh',
    display: 'flex',
    borderRadius: '4px',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: '20px',
    border: '1px solid #54545440',
    backgroundColor: 'white',
    '&:hover': {
      border: '1px solid #006CFF',
    },
    [theme.breakpoints.down('sm')]: {
      width: '330px',
      height: '130px',
      justifyContent: 'space-aroud',
    },
  },
  half: {
    width: '180px',
    height: '60px',
    [theme.breakpoints.down('sm')]: {
      width: '180px',
      height: '55px',
      display: 'flex',
      flexDirection: 'column',
      justifyConten: 'center',
    },
  },
  half2: {
    width: '153px',
    height: '100px',
    [theme.breakpoints.down('sm')]: {
      width: '97px',
      height: '94px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      justifyConten: 'center',
    },
  },
  bigDeal: {
    fontSize: '1em',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    height: '32px',
    [theme.breakpoints.down('sm')]: {},
  },
  bigPrice: {
    textAlign: 'center',
    fontSize: '1em',
    fontFamily: 'Roboto',
    fontWeight: 'regular',
    margin: '12px 0',
    [theme.breakpoints.down('sm')]: {
      width: '81px',
      height: '30px',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      margin: 0,
      marginTop: '10px',
    },
  },
}));
export default function Cardbottom() {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <div className={classes.half}>
        <div
          style={{
            textAlign: 'start',
            fontSize: '0.875em',
            fontFamily: 'Roboto',
            fontWeight: 'regular',
          }}
        >
          All features Unlimited Forever
        </div>
        <div className={classes.bigDeal}>
          Lifetime Deal <br />
          (3000 Seats)
        </div>
      </div>
      <div className={classes.half2}>
        <Progress className={classes.progres} variant="determinate" value={40} />

        <div
          style={{
            textAlign: 'center',
            fontSize: '0.875em',
            fontFamily: 'Roboto',
            fontWeight: 'regular',
            marginTop: '5px',
            JustifySelf: 'center',
          }}
        >
          1345/3000
        </div>
        <div className={classes.bigPrice}>$99</div>
        <Typography
          style={{
            textAlign: 'center',
            fontSize: '0.875em',
            fontFamily: 'Roboto',
            fontWeight: 'regular',
          }}
        >
          Single payment
        </Typography>
      </div>
    </div>
  );
}
