import { makeStyles } from '@material-ui/core/styles';

 const style = makeStyles(theme => ({
    root: {
      width: '46vw',
      height: '56vh',

    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }));

  export default style;