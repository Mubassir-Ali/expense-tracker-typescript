import React from "react";
import { Container, Box, Avatar, Grid } from "@material-ui/core";
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

    
  return <Grid container spacing={1}>
      <Grid item xs={12} sm={12} md={6}>
            <Card>           
              <CardContent>
                <Typography variant="h6" className={classes.income}>{`Income: $150`}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Card>             
              <CardContent>
                <Typography variant="h6" className={classes.expense}>{`Expense: $150`}</Typography>
              </CardContent>
            </Card>
          </Grid>
  </Grid>;
};

export default IncomeExpense;
