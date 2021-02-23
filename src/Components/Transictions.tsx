import React,{useContext} from 'react'
import {GlobalContext} from './../Context/GlobalState';
import {transactionType} from './../Types/Types';
import {ListItem,IconButton,Card,makeStyles} from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const useStyle = makeStyles((theme) => ({
    root: {},
    list: {
      display: "flex",
      alignItems:"Center",
    },
    listText: {
      flexGrow: 1,
      paddingLeft:"1rem",
      
    },
    my:{
        marginTop:"0.5rem"
    }
  }));


export const Transictions = ({transaction}:transactionType|any) => {
    const classes = useStyle();
    const {deleteTransaction}=useContext(GlobalContext);
    const sign =transaction.amount<0 ? '-':'+'
    return (
        <Card className={classes.my}>
            
            <ListItem className={classes.list}>
                <div className={classes.listText}>
                {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
                </div>
              
              <IconButton onClick={(e)=>deleteTransaction(transaction.id)}>
                  <DeleteForeverIcon/>
              </IconButton>
        </ListItem>
      

        </Card>
        
    )
}
