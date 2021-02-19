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
    width: '40.55vw',
    height: '21.11vh',
    display: 'flex',
    borderRadius: '4px',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: '1.38vw',
    border: '1px solid #54545440',
    backgroundColor: 'white',
    '&:hover': {
      border: '1px solid #006CFF',
    },
    [theme.breakpoints.down('sm')]: {
      width: '330px',
      height: '130px',
    },
  },
  half: {
    width: '14.4vw',
    height: '5.46vh',
    [theme.breakpoints.down('sm')]: {
      width: '132px',
      height: '46px',
    },
  },

  half2: {
    width: '10.625vw',
    height: '11.11vh',
    [theme.breakpoints.down('sm')]: {
      width: '135px',
      height: '97px',
    },
  },
  bigText: {
    fontSize: '1.5em',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#006CFF',
    height: '2.96vh',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9em',
    },
  },

  Chi: {
    width: '4.24vw',
    height: '1.48vh',
    marginLeft: '100px',
    alignSelf: 'flex-end',
    backgroundColor: '#FE641640',
    textAlign: 'center',
    color: '#FE6416',
    borderRadius: '5px',
    fontSize: '0.875em',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '80px',
      width: '61px',
      height: '19px',
    },
  },
}));
export default function Card() {
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
          All features Unlimited
        </div>
        <div className={classes.bigText}>UNLIMITED PLAN</div>
      </div>
      <div className={classes.half2}>
        <div className={classes.Chi} size="small">
          Save 35%
        </div>
        <div
          style={{
            textAlign: 'center',
          }}
        >
          <Switche />
        </div>

        <div
          style={{
            textAlign: 'center',
            fontSize: '1.5em',
            fontFamily: 'Roboto',
            fontWeight: 'bold',
          }}
        >
          <b>$69 / Year</b>
        </div>
        <Typography
          style={{
            textAlign: 'center',
            fontSize: '0.875em',
            fontFamily: 'Roboto',
            fontWeight: 'regular',
          }}
        >
          $5.75 / Month
        </Typography>
      </div>
    </div>
  );
}
