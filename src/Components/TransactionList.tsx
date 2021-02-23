import React,{useContext} from "react";
import {List} from "@material-ui/core";
import {Typography,Grid, makeStyles} from "@material-ui/core";
import {transactionType} from './../Types/Types';

import {Transictions} from './Transictions';
import {GlobalContext} from './../Context/GlobalState';
const useStyle = makeStyles((theme) => ({
  root: {},
  tlist: {
    display: "flex",
    alignItems:"Center",
  },
  titleDate: {
    flexGrow: 1,
    paddingLeft:"1rem"
  },

}));

const TransactionList = () => {
  const classes = useStyle();
  const { transactions } = useContext(GlobalContext);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={12} md={12}>         
          <Typography variant="h6">History</Typography>          
      </Grid>

      <Grid item xs={12} sm={12} md={12}>
        <List>      
         {
            transactions.map((transaction:transactionType)=>(<Transictions  key={transaction.id} transaction={transaction} />))
         }
        </List>
      </Grid>
    </Grid>
  );
};

export default TransactionList;
