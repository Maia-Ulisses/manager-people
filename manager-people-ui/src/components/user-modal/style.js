import { makeStyles } from '@material-ui/core/styles';

const style = makeStyles(theme => ({
    root: {
        height: '56vh',
        width: '80vw',
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default style;
