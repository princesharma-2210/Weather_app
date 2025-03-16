import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import { useState } from "react";
// import bgImage from "@/src/assets/background_image.jpg"
import bgImage from "./assets/background_image.jpg";
const WeatherApp = () => {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "delhi",
    feelslike: 24.86,
    temp: 25.3,
    tempMin: 25.3,
    tempMax: 25.6,
    humidity: 47,
    windSpeed: 2.4,
    windDegree: 260,
    weather: "haze",
  });
  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h2 className="text-4xl text-center font-bold">
        Welcome Weather App By Prince!
      </h2>
      <SearchBox updateInfo={updateInfo} />
      <br></br>
      <InfoBox info={weatherInfo} />
    </div>
  );
};

export default WeatherApp;
