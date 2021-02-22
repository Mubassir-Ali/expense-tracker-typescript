import React,{useContext} from "react";
import { Container, Box, Avatar, Grid } from "@material-ui/core";
import {GlobalContext} from './../Context/GlobalState';
import {transactionType} from './../Types/Types';
import {
  Typography,
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  income: {
    color: theme.palette.success.main,
  },
  expense: {
    color: theme.palette.warning.main,
  },
}));
const IncomeExpense = () => {
    const classes = useStyle();
    const {transactions} =useContext(GlobalContext)
    const amounts =transactions.map((transaction:transactionType)=>transaction.amount)

    const income =amounts
    .filter((item:any)=>item>0)
    .reduce((acc:any,item:any)=>(acc +=item),0)
    .toFixed(2);

   const expense=amounts
   .filter((item:any)=>item<0)
   .reduce((acc:any,item:any)=>(acc +=item),0)
   .toFixed(2);
    
  return <Grid container spacing={1}>
      <Grid item xs={12} sm={12} md={6}>
            <Card>           
              <CardContent>
                <Typography variant="h6" className={classes.income}>+${income}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Card>             
              <CardContent>
                <Typography variant="h6" className={classes.expense}>-${Math.abs(expense)}</Typography>
              </CardContent>
            </Card>
          </Grid>
  </Grid>;
};

export default IncomeExpense;
