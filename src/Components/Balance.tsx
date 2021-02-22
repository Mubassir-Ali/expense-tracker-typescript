import React from "react";
import { Box, Avatar, Grid } from "@material-ui/core";
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
        marginTop: "5rem",
    },
    bal:{
        display:"flex",
    },
    balTitle:{
        flexGrow:0.9
    }

   
}));

const Balance = () => {
    const classes = useStyle();

    let date = new Date().toLocaleDateString();
    console.log(date);

    return (
        <div>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={12}>
                    <Card>
                        <CardActionArea className={classes.bal}>
                            <CardHeader className={classes.balTitle}
                                avatar={<Avatar>$</Avatar>}
                                title="Balance"
                                subheader={date}
                            />
                             <Typography variant="h6">{`$200`}</Typography>
                        </CardActionArea>
                    
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default Balance;
