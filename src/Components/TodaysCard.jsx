import React, { useState } from "react";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import '../CSS/TodaysCard.css'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Time from "./Time";
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined';


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

 
const TodaysCard = (props) => {
//   console.log(props);
    const classes = useStyles();
    return (<>
    <h1 style={{textAlign:"center" , fontFamily:"cursive"}}>Todays Weather</h1>
        <div className={classes.root}>
            
            <Paper elevation={3} >
            
                <div className="main">
                    
                    <div className="time_el">
                       <h1><LocationOnIcon/>Akola</h1>
                        <Time/>
                    </div>
                    <div className="loc_data">
                        <p>
                           <h3><WbSunnyOutlinedIcon style={{paddingRight:"1rem"}}/>Temp : {props.data.temp} C</h3>
                           <h3><WbSunnyOutlinedIcon style={{paddingRight:"1rem"}}/>Maximum Temp : {props.data.temp_max} C</h3>
                           <h3><WbSunnyOutlinedIcon style={{paddingRight:"1rem"}}/>Minimum Temp : {props.data.temp_min} C</h3>
                        </p>
                    </div>
                    <div className="loc_data">
                        <p>
                          <h2> <img src={`http://openweathermap.org/img/wn/${props.data.icon}@2x.png`} alt="Weather" /> Weather will be :{props.data.weather}</h2>
                           <h3><AcUnitOutlinedIcon style={{paddingRight:"1rem"}}/>Humidity : {props.data.humidity} </h3>
                           <h3><ArrowDownwardOutlinedIcon style={{paddingRight:"1rem"}}/>Pressure : {props.data.pressure} </h3>
                        </p>
                    </div>

                </div>
            </Paper>
        </div>
    </>);
}
export default TodaysCard;








