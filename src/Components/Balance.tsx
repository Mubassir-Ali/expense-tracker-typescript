import React,{useContext,useEffect,useState} from "react";
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
    root: {
        width: "50%",
        margin: "auto",
        paddingTop: "5rem",
    },
    bal:{
        display:"flex",
    },
    balTitle:{
        flexGrow:0.9
    },
    bg:{
        backgroundColor:theme.palette.primary.light,
        color: "white",
        padding:5
    }

   
}));

const Balance = () => {
    const classes = useStyle();

    const {transactions} =useContext(GlobalContext)
    const [balance, setBalance] = useState(0)

    const amounts =transactions.map((transaction:transactionType)=>transaction.amount)
    const total=amounts.reduce((acc:number,item:number)=>(acc +=item), 0).toFixed(2)




    useEffect(() => {
        let sum = 0;
        transactions.map((transaction:transactionType)=>{
            sum += transaction.amount
            return setBalance(sum)
        })
    }, [transactions]);

    return (
        <div>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={12}>
                    <Card className={classes.bg}>
                        <CardActionArea className={classes.bal}>
                            <div className={classes.balTitle}>
                            <Typography variant="h6">Balance</Typography>
                            </div>
                            
                           
                             <Typography variant="h6">{balance<0? '-' : ''} ${Math.abs(balance).toFixed(2)}</Typography>
                        </CardActionArea>
                    
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default Balance;
