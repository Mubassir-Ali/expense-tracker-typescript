import React,{useContext} from "react";
import { Grid } from "@material-ui/core";
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
    color: theme.palette.text.secondary,
    backgroundColor:theme.palette.success.light
  },
  expense: {
    color: theme.palette.text.secondary,
    backgroundColor:theme.palette.info.light
  },
}));
const IncomeExpense = () => {
    const classes = useStyle();
    const {transactions} =useContext(GlobalContext)
    const amounts =transactions.map((transaction:transactionType)=>transaction.amount)

    const income =amounts
    .filter((item:number)=>item>0)
    .reduce((acc:number,item:number)=>(acc +=item),0)
    .toFixed(2);

   const expense=amounts
   .filter((item:number)=>item<0)
   .reduce((acc:number,item:number)=>(acc +=item),0)
   .toFixed(2);
    
  return <Grid container spacing={1}>
      <Grid item xs={12} sm={12} md={6}>
            <Card className={classes.income}>           
              <CardContent >
                <Typography variant="h6" >+${income}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Card className={classes.expense}>             
              <CardContent>
                <Typography variant="h6" >-${Math.abs(expense)}</Typography>
              </CardContent>
            </Card>
          </Grid>
  </Grid>;
};

export default IncomeExpense;
