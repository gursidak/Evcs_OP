import React from "react";
import clsx from "clsx";
import { MainListItems /* secondaryListItems */ } from "./ListItems";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import myStyles from "./myStyles";

export default function LoginDrawer({ open, handleDrawerClose, setCounter }) {
  const classes = myStyles();
  return (
    <Drawer
      variant="temporary"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
      transitionDuration={500}
    >
      <div className={classes.toolbarIcon}>
        {/* <WebAppBar /> */}
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      {/* <Card /> */}
      <List>
        <MainListItems
          setCounter={setCounter}
          handleDrawerClose={handleDrawerClose}
        />
      </List>
      {/* <Divider /> */}
      {/* <List>{secondaryListItems}</List> */}
    </Drawer>
  );
}
