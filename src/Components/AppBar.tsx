import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { Typography, makeStyles } from "@material-ui/core";
import AccountBalanceSharpIcon from "@material-ui/icons/AccountBalanceSharp";
const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor:theme.palette.primary.light
  },
}));

export const AppBars = () => {
  const classes = useStyle();
  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <AccountBalanceSharpIcon />
        <Typography variant="h6">Expense Tracker</Typography>
      </Toolbar>
    </AppBar>
  );
};


