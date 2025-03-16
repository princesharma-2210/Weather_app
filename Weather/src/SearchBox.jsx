import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const SearchBox = ({ updateInfo }) => {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "627bda3ea2fab38c3ed7f44e60d3d11d";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`,
      );
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        windDegree: jsonResponse.wind.deg,
        windSpeed: jsonResponse.wind.speed,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };
  function handleChange(event) {
    setCity(event.target.value);
  }
  async function handleSubmit(event) {
    try {
      setError(false);
      event.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  }
  return (
    <div className="">
      <div className="text-center">
        {/* <h3 style={{ fontWeight: "bold" }}>Search The Weather</h3> */}

        <br />
        <form onSubmit={handleSubmit}>
          <TextField
            id="City"
            label="City Name"
            variant="outlined"
            required
            value={city}
            onChange={handleChange}
          />
          <br /> <br />
          <Button variant="contained" type="submit">
            Submit
          </Button>
          {error && <p className="text-red-600">No Such Place Exists</p>}
        </form>
      </div>
    </div>
  );
};

export default SearchBox;
