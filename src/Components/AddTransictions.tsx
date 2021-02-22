import React,{useState,useContext} from "react";
import {GlobalContext} from './../Context/GlobalState';
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
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const {addTransaction}=useContext(GlobalContext);

  const onSubmit = (e:any) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction)    
}

  return (
    <div className={classes.text}>
      <form onSubmit={onSubmit}>
        <Typography>Add Transaction</Typography>
        <div className={classes.my}>
          <TextField
            type="text"
            value={text}
            onChange={(e)=>setText(e.target.value)}
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
            value={amount}
            onChange={(e:any)=>setAmount(e.target.value)}
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
