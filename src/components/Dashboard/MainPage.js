import React from 'react';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import myStyles from './myStyles'
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';

export default function MainPage() {
  const classes = myStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <>
      {/* {confirm && <AlertDialogueSlide handleClose={handleClose} />} */}
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
    </>
  )
}
