import React,{ useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import TodaysCard from "./Components/TodaysCard";
import axios from "axios";


const App = () => {
    // const [val1, setVal1] = useState();
    // const [val2, setVal2] = useState();
     
    // const getAnswer = () => {
    //     let lat = 0;
    // let lon = 0;
    // navigator.geolocation.getCurrentPosition((success) => {
    //     const { latitude, longitude } = success.coords;
    //     lat = latitude;
    //     lon = longitude
    // });
    // fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9d46faea8fc499b6e66aefd0a5663786&units=metric`)
    // .then(a => a.json())
    // .then(response => {
    //   //console.log(response);
    //   setVal1(response.main);
    //   setVal2(response.weather);
      
         
    // });
    // console.log(val1);
    // console.log(val2);
    //   };

    //   useEffect(() => {
    //     getAnswer();
    //   }, []);

      
   
     return (<>
        <Navbar/>
        <TodaysCard/>
    </>);
     
}
export default App;