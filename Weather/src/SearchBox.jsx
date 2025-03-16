import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

const SearchBox = () => {
    let [city,setCity]= useState("");
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="627bda3ea2fab38c3ed7f44e60d3d11d";

    let getWeatherInfo=async()=>{
        let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse= await response.json();
        console.log(jsonResponse);
        let result={
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.tempMin,
            tempMax:jsonResponse.main.tempMax,
            humidity:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feelsLike,
            weather:jsonResponse.weather[0].description,
        };
        console.log(result);

    }
    function handleChange(event){
        setCity(event.target.value);
    }
    function handleSubmit(event){
        event.preventDefault();
        console.log(city);
        setCity("");
        getWeatherInfo();
    }
  return (
    <div className="flex items-center justify-center h-screen">
  <div className="text-center">
  <h3 style={{ fontWeight: "bold" }}>Search The Weather</h3>

    <br />
    <form onSubmit={handleSubmit}>
      <TextField id="City" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
      <br /> <br />
      <Button variant="contained" type="submit" >Submit</Button>
    </form>
  </div>
</div>
  )
}

export default SearchBox
