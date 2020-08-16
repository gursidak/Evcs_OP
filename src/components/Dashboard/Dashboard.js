
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import {withRouter } from 'react-router'
import {useLocation} from 'react-router-dom';
import myStyles from './myStyles'
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import LoginAppbar from './LoginAppbar'
import LoginDrawer from './LoginDrawer';
import AlertDialogueSlide from './AlertDialogueSlide'
import './styles.css'

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                EVCS
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

function Dashboard({props}) {
    let location = useLocation();
    // let { id } = location.state || { from: { pathname: "/" } }
    const classes = myStyles();
    const [open, setOpen] = useState(false);
    const [online, setOnline] = useState(true);
    const [counter, setCounter] = useState(0);
    const [firstTimeLogin, setFirstTimeLogin] = useState(true);
    const [confirm, setShowconfirm] = React.useState(true);

    const handleClose = () => {
        setShowconfirm(false);
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        if (firstTimeLogin)
            setShowconfirm(true);
        // console.log(id);
        console.log(`Props:`, JSON.stringify(location));
    }, []);

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <LoginAppbar
                open={open}
                online={online}
                setOnline={setOnline}
                handleDrawerOpen={handleDrawerOpen}
            />
            <LoginDrawer
                open={open}
                handleDrawerClose={handleDrawerClose}
            />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    {confirm && <AlertDialogueSlide handleClose={handleClose} />}
                    <Grid container spacing={3}>
                        {/* Chart */}
                        <Grid item xs={12} md={8} lg={9}>
                            <Paper className={fixedHeightPaper}>
                                <Chart />
                            </Paper>
                        </Grid>
                        {/* Recent Deposits */}
                        <Grid item xs={12} md={4} lg={3}>
                            <Paper className={fixedHeightPaper}>
                                <Deposits />
                            </Paper>
                        </Grid>
                        {/* Recent Orders */}
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <Orders />
                            </Paper>
                        </Grid>
                    </Grid>
                    <Box pt={4}>
                        <Copyright />
                    </Box>
                </Container>
            </main>
        </div>
    );
}
export default (Dashboard);
