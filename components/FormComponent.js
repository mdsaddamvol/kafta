import { Divider, Paper } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    width: '566px',
    height: '797px',
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
    fontSize: '34px',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  main: {
    width: '470px',
    height: '650px',
    display: 'flex',
    borderRadius: '4px',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column',
  },
  google: {
    width: '270px',
    height: '63px',
    border: '2px solid #DCDCDC',
    borderRadius: '5px',
    textAlign: 'center',
    alignSelf: 'flex-start',
  },
  connectGoogle: {
    color: '#2860E1',
    fontSize: '18px',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  g: { color: '#2860E1', fontSize: '38px', fontFamily: 'Roboto', fontWeight: 'regular' },
  o: { color: '#EA4335', fontSize: '34px', fontFamily: 'Roboto', fontWeight: 'regular' },
  o2: { color: '#FBBC05', fontSize: '34px', fontFamily: 'Roboto', fontWeight: 'regular' },
  l: { color: '#34A853', fontSize: '34px', fontFamily: 'Roboto', fontWeight: 'regular' },
  e: { color: '#EA4335', fontSize: '34px', fontFamily: 'Roboto', fontWeight: 'regular' },
  input: {
    width: '100%',
    height: '40px',
    border: '2px solid #70707040',
    padding: '5px',
    paddingLeft: '15px',
    borderRadius: '5px',
  },
  inputlabel: {
    fontSize: '14px',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '100%',
    height: '63px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  inputContainerfull: {
    width: '100%',
    height: '63px',
  },
  inputHalf: {
    width: '48%',
    height: '63px',
  },
  email: {
    backgroundColor: '#F5F5FC',
    width: '100%',
    height: '40px',
    border: '2px solid #70707040',
    padding: '5px',
    borderRadius: '5px',
    paddingLeft: '15px',
  },
  pay: {
    width: '100%',
    height: '40px',
    padding: '5px',
    paddingLeft: '15px',
    borderRadius: '5px',
    backgroundColor: '#2860E1',
    fontSize: '14px',
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
  const classes = useStyles();
  return (
    <div className={classes.paper} variant="outlined" elevation={0}>
      <div className={classes.main}>
        <div className={classes.title}>Subscribe and be unlimited</div>
        <div className={classes.google}>
          <span className={classes.connectGoogle}>Connect with</span>
          <span className={classes.g}> G</span>
          <span className={classes.o}>o</span>
          <span className={classes.o2}>o</span>
          <span className={classes.g}>g</span>
          <span className={classes.l}>l</span>
          <span className={classes.e}>e</span>
        </div>
        <Divider />
        <div className={classes.inputContainerfull}>
          <label className={classes.inputlabel}>Full Name</label>
          <input required className={classes.input} type="text" placeholder="text" />
        </div>
        <div className={classes.inputContainerfull}>
          <label className={classes.inputlabel}>Email Address</label>
          <input required type="email" className={classes.email} placeholder="jhondeo@gmail.com" />
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
            <input required className={classes.input} type="text" placeholder="MM/YY" />
          </div>
          <div className={classes.inputHalf}>
            <label className={classes.inputlabel}>CVC/CVV</label>
            <input required className={classes.input} type="tel" pattern="\d*" maxlength="3" placeholder="123" />
          </div>
        </div>
        <div className={classes.pay}>Pay $69</div>
      </div>
    </div>
  );
};

export default FormComponent;
