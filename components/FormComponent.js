import { Divider, Paper } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { useState } from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 0,
  },
  paper: {
    width: '39.30vw',
    height: '73.79vh',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
    border: '1px solid #70707040',
    flexDirection: 'column',
    borderRadius: '5px',

    [theme.breakpoints.down('sm')]: {
      width: '330px',
      hight: '960px',
      padding: '30px',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  title: {
    textAlign: 'start',
    fontSize: '2.125em',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  main: {
    width: '32.64vw',
    height: '60.18vh',
    display: 'flex',
    borderRadius: '4px',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column',
  },
  google: {
    width: '15.41vw',
    height: '5.83vh',
    border: '2px solid #DCDCDC',
    borderRadius: '5px',
    textAlign: 'center',
    alignSelf: 'flex-start',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  connectGoogle: {
    color: '#2860E1',
    fontSize: '0.875em',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  googlesvg: {
    width: '5.18vw',
    height: '2.275vh',
  },
  input: {
    width: '100%',
    height: '3.70vh',
    border: '2px solid #70707040',
    padding: '0.347vw',
    paddingLeft: '1.04vw',
    borderRadius: '5px',
  },
  inputlabel: {
    fontSize: '0.875em',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '100%',
    height: '5.83vh',
    display: 'flex',
    justifyContent: 'space-between',
  },
  inputContainerfull: {
    width: '100%',
    height: '5.83vh',
  },
  inputHalf: {
    width: '48%',
    height: '5.83vh',
  },
  email: {
    backgroundColor: '#F5F5FC',
    width: '100%',
    height: '3.70vh',
    border: '2px solid #70707040',
    padding: '0.347vw',
    borderRadius: '5px',
    paddingLeft: '1.04hw',
  },
  pay: {
    width: '100%',
    height: '3.70vh',
    borderRadius: '5px',
    backgroundColor: '#2860E1',
    fontSize: '0.875em',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: 'white',
    texAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
}));

const FormComponent = () => {
  const [email, setEmail] = useState('');
  console.log(email);
  const classes = useStyles();
  return (
    <form className={classes.paper}>
      <div className={classes.main}>
        <div className={classes.title}>Subscribe and be unlimited</div>
        <div className={classes.google}>
          <span className={classes.connectGoogle}>Connect with</span>
          <img className={classes.googlesvg} src="/google.svg" />
        </div>
        <Divider />
        <div className={classes.inputContainerfull}>
          <label className={classes.inputlabel}>Full Name</label>
          <input required className={classes.input} type="text" placeholder="text" />
        </div>
        <div className={classes.inputContainerfull}>
          <label className={classes.inputlabel}>Email Address</label>
          <input
            required
            type="email"
            className={classes.email}
            onChange={e => setEmail(e.target.value)}
            value={email}
            placeholder="jhondeo@gmail.com"
          />
        </div>
        <div className={classes.inputContainer}>
          <div className={classes.inputHalf}>
            <label className={classes.inputlabel}>Password</label>
            <input required type="password" className={classes.input} placeholder="********" />
          </div>
          <div className={classes.inputHalf}>
            <label className={classes.inputlabel}>Confirm Password</label>
            <input required type="password" className={classes.input} placeholder="********" />
          </div>
        </div>
        <Divider />
        <div className={classes.inputContainerfull}>
          <label className={classes.inputlabel}>Cradit Card Number</label>
          <input required type="number" className={classes.input} placeholder=" 4242 4242 4242" />
        </div>
        <div className={classes.inputContainer}>
          <div className={classes.inputHalf}>
            <label className={classes.inputlabel}>Expire Date</label>
            <input required className={classes.input} type="number" placeholder="MM/YY" />
          </div>
          <div className={classes.inputHalf}>
            <label className={classes.inputlabel}>CVC/CVV</label>
            <input required className={classes.input} type="tel" pattern="\d*" maxlength="3" placeholder="123" />
          </div>
        </div>
        <button type="submit" className={classes.pay}>
          Pay $69
        </button>
      </div>
    </form>
  );
};

export default FormComponent;
