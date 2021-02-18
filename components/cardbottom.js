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
    width: '584px',
    height: '228px',
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
    },
  },
  half: {
    width: '180px',
    height: '87px',
  },
  half2: {
    width: '153px',
    height: '123px',
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
            fontSize: '12.5px',
            fontFamily: 'Roboto',
            fontWeight: 'regular',
          }}
        >
          All features Unlimited Forever
        </div>
        <div
          style={{
            fontSize: '22px',
            fontFamily: 'Roboto',
            fontWeight: 'black',
            height: '32px',
          }}
        >
          Lifetime Deal <br />
          (3000 Seats)
        </div>
      </div>
      <div className={classes.half2}>
        <Progress className={classes.progres} variant="determinate" value={40} />

        <div
          style={{
            textAlign: 'center',
            fontSize: '14px',
            fontFamily: 'Roboto',
            fontWeight: 'regular',
            marginTop: '6px',
          }}
        >
          <b>1345/3000 </b>
        </div>
        <div
          style={{
            textAlign: 'center',
            fontSize: '24px',
            fontFamily: 'Roboto',
            fontWeight: 'regular',
            margin: '12px 0',
          }}
        >
          <b> $99</b>
        </div>
        <Typography
          style={{
            textAlign: 'center',
            fontSize: '14px',
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
