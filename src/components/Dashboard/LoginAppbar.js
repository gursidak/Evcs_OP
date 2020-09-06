import React from "react";
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import OfflineBoltRoundedIcon from '@material-ui/icons/OfflineBoltRounded';
import PowerOffRoundedIcon from '@material-ui/icons/PowerOffRounded';
import PowerRoundedIcon from '@material-ui/icons/PowerRounded';
import IconButton from '@material-ui/core/IconButton';
import myStyles from './myStyles'

const LoginAppbar = ({ open, online, setOnline, handleDrawerOpen, setCounter }) => {
  const classes = myStyles();

  return (
    <>
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="default"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="default">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <Badge badgeContent={2} color="default">
              <OfflineBoltRoundedIcon onClick={() => setCounter(2)} />
            </Badge>
          </IconButton>
          <IconButton color="default" onClick={() => setOnline(!online)}>
            <Badge color="default">
              {online ? <PowerOffRoundedIcon /> : <PowerRoundedIcon />}
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default LoginAppbar;