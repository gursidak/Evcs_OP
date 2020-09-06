import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
// import Alert from '@material-ui/lab/Alert';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function FormSnackBar({text, severity}) {
    // console.log(`Show Warning in FormSnackBar is ${isOpen}`);
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    return (
        <div className={classes.root}>
            <Snackbar
                open={open}
                autoHideDuration={4000}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'center'
                }}
            >
                <Alert onClose={handleClose} severity={severity} color={severity}>
                    {text}
                </Alert>
            </Snackbar>
        </div>

    );
}
