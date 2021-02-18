import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Switche from './switch';
import { Chip } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },

  card: {
    width: '100%',
    display: 'flex',
    borderRadius: '4px',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '25vh',
    padding: '20px',
    border: '1px solid #54545440',
    backgroundColor: 'white',
    '&:hover': {
      border: '1px solid #006CFF',
    },
  },
  half: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '45vw',
  },

  Chi: {
    width: '80px',
    height: '18px',
    marginRight: '2vw',
    alignSelf: 'flex-end',
    backgroundColor: '#FE641640',
    color: '#FE6416',
  },
}));
export default function Card() {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <div className={classes.half}>
        <Typography variant="div" component="h6">
          All features Unlimited
        </Typography>
        <Typography variant="p" color="primary" component="h3">
          <b> UNLIMITED PLAN</b>
        </Typography>
      </div>
      <div className={classes.half}>
        <Chip className={classes.Chi} size="small" label="Save 35%" />
        <Switche />
        <Typography variant="div" component="p">
          <b>$69 / Per Year</b>
        </Typography>
        <Typography variant="div" component="span">
          $5.75/Month
        </Typography>
      </div>
    </div>
  );
}
