import { alignProperty } from "@mui/material/styles/cssUtils";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo,setweatherInfo]=useState({
        city: "Wonderland",
        feelsLike: 25.03,
        humidity: 57,
        temp: 24.99,
        temp_max: 24.99,
        temp_min: 24.99,
        weather: "smoke"
    });

    let updateInfo=(newInfo)=>{
        setweatherInfo(newInfo);
    }
    return (
        <div style={{textAlign:"center"}}>
            <h1>Weather App</h1>
            <SearchBox  updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}