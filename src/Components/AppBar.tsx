import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { Typography, makeStyles } from "@material-ui/core";
import AccountBalanceSharpIcon from "@material-ui/icons/AccountBalanceSharp";
const useStyle = makeStyles((theme) => ({
  root: {},
}));

export const AppBars = () => {
  return (
    <AppBar>
      <Toolbar>
        <AccountBalanceSharpIcon />
        <Typography variant="h6">Expense Tracker</Typography>
      </Toolbar>
    </AppBar>
  );
};


