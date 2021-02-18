import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Switche from './switch';
import { Chip } from '@material-ui/core';
import Progress from './progress';

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

export default function Cardbottom() {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <div className={classes.half}>
        <Typography variant="div" component="h6">
          All features Unlimited Forever
        </Typography>
        <Typography variant="div" component="h2">
          <b>LifeTime Deal</b>
        </Typography>
        <Typography variant="div" component="h2">
          <b>(3000 Seats)</b>
        </Typography>
      </div>
      <div className={classes.half}>
        <Progress className={classes.progres} variant="determinate" value={40} />
        <Typography variant="div" component="p" gutterBottom>
          <b>1345/3000 </b>
        </Typography>
        <Typography variant="div" component="span" gutterBottom>
          $99.99
        </Typography>
        <Typography variant="div" component="p" gutterBottom>
          Single payment
        </Typography>
      </div>
    </div>
  );
}
