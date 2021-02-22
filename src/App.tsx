import React from "react";
import { Container, Box, makeStyles } from "@material-ui/core";
import { AppBars } from "./Components/AppBar";
import Balance from "./Components/Balance";
import IncomeExpense from "./Components/IncomeExpense";
import AddTransictions from "./Components/AddTransictions";
import TransactionList from "./Components/TransactionList";

const useStyle = makeStyles((theme) => ({
  root: {marginTop: "5rem",
    [theme.breakpoints.up("sm")]: {
      width: "50%",
      margin: "auto",
      marginTop: "5rem",
      height: "100vh",
      position: "relative",
    },
  },
}));

function App() {
  const classes = useStyle();
  return (
    <Container>
      <AppBars />
      <Box className={classes.root}>
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransictions />
      </Box>
    </Container>
  );
}

export default App;
