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
    width: '159px',
    height: '59px',
  },
  half2: {
    width: '153px',
    height: '120px',
  },

  Chi: {
    width: '61px',
    height: '16px',
    marginLeft: '100px',
    alignSelf: 'flex-end',
    backgroundColor: '#FE641640',
    textAlign: 'center',
    color: '#FE6416',
    borderRadius: '5px',
    fontSize: '12px',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '80px',
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
            fontSize: '12.5px',
            fontFamily: 'Roboto',
            fontWeight: 'regular',
          }}
        >
          All features Unlimited
        </div>
        <div
          style={{
            fontSize: '19px',
            fontFamily: 'Roboto',
            fontWeight: 'bold',
            color: '#006CFF',
            height: '32px',
          }}
        >
          UNLIMITED PLAN
        </div>
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
            fontSize: '24px',
            fontFamily: 'Roboto',
            fontWeight: 'bold',
          }}
        >
          <b>$69 / Year</b>
        </div>
        <Typography
          style={{
            textAlign: 'center',
            fontSize: '14px',
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
