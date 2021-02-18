import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';

const IOSSwitch = withStyles(theme => ({
  root: {
    width: 30,
    height: 14,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#52d869',
        opacity: 1,
        borderColor: '#52d869',
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 12,
    height: 12,
    marginRight: '2px',
  },
  track: {
    borderRadius: 16 / 2,
    border: '1px solid #52d869',
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  container: {
    width: '150px',
    height: '13px',
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

export default function Switche() {
  const [state, setState] = React.useState({
    checkedB: true,
  });

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className={IOSSwitch.continer}>
      <div
        style={{
          textAlign: 'start',
          fontSize: '12.5px',
          fontFamily: 'Roboto',
          fontWeight: 'regular',
          display: 'inline',
        }}
      >
        Monthly
      </div>
      <IOSSwitch checked={state.checkedB} onChange={handleChange} name="checkedB" />
      <div
        style={{
          textAlign: 'start',
          fontSize: '12.5px',
          fontFamily: 'Roboto',
          fontWeight: 'bold',
          display: 'inline',
        }}
      >
        Yearly
      </div>
    </div>
  );
}
