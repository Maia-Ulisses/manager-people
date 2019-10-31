import { makeStyles } from '@material-ui/core/styles';

const style = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 800,
      backgroundColor: theme.palette.background.paper,
    },
    button: {
      margin: theme.spacing(1),
      left: 100,
    },
    paper: {
      padding: theme.spacing(2),
      margin: '2% auto',
      backgroundColor: '#c3c3c3',
      maxWidth: 800,
      maxHeight: 400, 
      overflow: 'auto'
    },
    input: {
      display: 'none',
    },
    title:{
      color: 'white'
    }
  }));

export default style;