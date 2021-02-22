import React from "react";
import {
  List,
  Avatar,
  ListItem,
  Card,
  CardActionArea,
  CardHeader,
  CardContent,
  Hidden,
} from "@material-ui/core";
import {
  Typography,
  Grid,
  makeStyles,
  IconButton,
  CardActions,
} from "@material-ui/core";
import DriveEtaSharpIcon from "@material-ui/icons/DriveEtaSharp";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

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
  let date = new Date().toLocaleDateString();

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={12} md={12}>         
          <Typography variant="h6">History</Typography>          
      </Grid>

      <Grid item xs={12} sm={12} md={12}>
        <Card className={classes.tlist} >      
          <Typography className={classes.titleDate} variant="h6">$5</Typography>
          <CardActions><IconButton><HighlightOffIcon color="secondary" /></IconButton></CardActions>     
        </Card>
      </Grid>
    </Grid>
  );
};

export default TransactionList;
