import React, { useState } from "react";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import '../CSS/TodaysCard.css'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(10),
            width: theme.spacing(140),
            height: theme.spacing(30),
        },
    },
}));

const TodaysCard = () => {
    const classes = useStyles();
    const [time, setTime] = useState();

    setInterval(() => {
        setTime(new Date().toLocaleTimeString())
    }, 1000);





    return (<>
    <h1 style={{textAlign:"center" , fontFamily:"cursive"}}>Todays Weather</h1>
        <div className={classes.root}>
            
            <Paper elevation={3} >
            
                <div className="main">
                    
                    <div className="time_el">

                        <h1>{time}</h1>
                        <span>{new Date().toDateString()}</span>
                    </div>
                    <div className="loc_data">
                        <p>
                           
                        </p>
                    </div>

                </div>
            </Paper>
        </div>
    </>);
}
export default TodaysCard;








