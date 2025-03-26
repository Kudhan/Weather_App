import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error,setError]=useState(false);
    const API_URL = "http://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "efe425b4d97d3bd7c48a8fe7825b07d5";

    let getWeatherInfo = async () => {
        try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let data = await response.json();
        console.log(data);  // You can log the data to check the API response
        let result={
            city:city,
            temp:data.main.temp,
            temp_min:data.main.temp,
            temp_max:data.main.temp,
            humidity:data.main.humidity,
            feelsLike:data.main.feels_like,
            weather:data.weather[0].description,

        };
        console.log(result);
        return result;
        }catch(err){
            throw err;
        }
    }   


    let handleChange=(event)=>{
        setCity(event.target.value)
    }
    let handleSubmit=async (event)=>{
        try{
        event.preventDefault();
        let newInfo=await getWeatherInfo();
        updateInfo(newInfo);
        setCity("");
        }catch(err){
            setError("No city found")
        }

    }
    return (
        <div className="SearchBox">

            <form onSubmit={handleSubmit}>
                <TextField 
                    id="city" 
                    label="City Name" 
                    variant="outlined" 
                    value={city}
                    onChange={handleChange}
                    required 
                />
                <br></br><br></br>
                <Button variant="contained" type="submit" onClick={handleSubmit}>Search</Button>
                <br></br><br></br>
                {error && <p>No such city found.!</p>}
            </form>
        </div>
    );
}
