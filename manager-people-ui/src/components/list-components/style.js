import { makeStyles } from '@material-ui/core/styles';

const style = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 800,
      backgroundColor: theme.palette.background.paper,
    },
    button: {
      margin: theme.spacing(1),
      left: 57,
  
    },
    paper: {
      padding: theme.spacing(2),
      margin: '2% auto',
      background: '#c3c3c3',
      maxWidth: 800,
    },
    input: {
      display: 'none',
    },
    teste:{
      padding: '0 44px 0 0px',
    }
  }));

export default style;
