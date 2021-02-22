import React from "react";
import {
  makeStyles,
  TextField,
  IconButton,Tooltip,Fab,
  Grid,
  Typography,
} from "@material-ui/core";
import AddCircleSharpIcon from "@material-ui/icons/AddCircleSharp";


const useStyle = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: "90%",
    left: "50%",
    transform: "translate(-50%,-10%)",
  
  },
  add: {
    fontSize: "3rem",
    color:theme.palette.primary.main
  },
  text: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "1rem",
  },
  my:{
      margin:"1rem 0"
  }
}));

const AddTransictions = () => {
  const classes = useStyle();
  return (
    <div className={classes.text}>
      <form>
        <Typography>Add Transaction</Typography>
        <div className={classes.my}>
          <TextField
            type="text"
            label="Description"
            variant="outlined"
            fullWidth
            required
          />
        </div>
        <div>
          <TextField
            type="number"
            label="Amount"
            variant="outlined"
            fullWidth
            required
          />
        </div>

        <Tooltip title="add transaction" >
        <Fab type="submit" className={classes.root}>
          <AddCircleSharpIcon className={classes.add}/>
        </Fab>

        </Tooltip>
   
      </form>
    </div>
  );
};

export default AddTransictions;
