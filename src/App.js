import React from "react";
import Navbar from "./Components/Navbar";
import TodaysCard from "./Components/TodaysCard";
import axios from "axios";
//import { giveData } from "./DataService";
const getData = async () => {
    let lat = 0;
    let lon = 0;
    navigator.geolocation.getCurrentPosition(async (success) => {
        const { latitude, longitude } = success.coords;
        lat = latitude;
        lon = longitude
    });

 const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9d46faea8fc499b6e66aefd0a5663786&units=metric`);
    // console.log(res);
     const report = {
        feels_like: res.data.main.feels_like,
        humidity: res.data.main.humidity,
        pressure: res.data.main.pressure,
        temp: res.data.main.temp,
        temp_max: res.data.main.temp_max,
        temp_min: res.data.main.temp_min,
        weather:res.data.weather[0].main,
        icon:res.data.weather[0].icon
    }
   //console.log(report);
    
    return report;
   
  

}

const giveData=  ()=>{
  const prop=getData();
    return prop;
}
const App = () => {
   
    const report=giveData(); 
    console.log(report);
  
     return (<>
        <Navbar/>
        <TodaysCard data={report}/>
    </>);
     
}
export default App;