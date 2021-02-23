import React from "react";
import { Container, Box, makeStyles } from "@material-ui/core";
import { AppBars } from "./Components/AppBar";
import Balance from "./Components/Balance";
import IncomeExpense from "./Components/IncomeExpense";
import AddTransictions from "./Components/AddTransictions";
import TransactionList from "./Components/TransactionList";
import {GlobalProvider} from './Context/GlobalState';

const useStyle = makeStyles((theme) => ({
  root: {
    paddingTop: "6rem",
    color:theme.palette.text.secondary,
    [theme.breakpoints.up("sm")]: {
      width: "50%",
      margin: "auto",     
      height: "100vh",
      position: "relative",
    },
  },
  bg:{
    backgroundColor:theme.palette.grey[100],
    
  }
}));

function App() {
  const classes = useStyle();
  return (
    <Container className={classes.bg}>
      <AppBars  />
      <Box className={classes.root}>
        <GlobalProvider>
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransictions />

        </GlobalProvider>

      </Box>
    </Container>
  );
}

export default App;
