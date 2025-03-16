import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

const InfoBox = ({ info }) => {
  const hot_url =
    "https://media.istockphoto.com/id/1332108668/photo/heatwave-with-warm-thermometer-and-fire-global-warming-and-extreme-climate-environment.jpg?s=1024x1024&w=is&k=20&c=QhEOtUgcu5E94FWjghUGyMZMUSF3DckCOvL7OqfgAVE=";
  const cold_url =
    "https://media.istockphoto.com/id/477839825/photo/cold-weather-ahead-road-warning-sign.jpg?s=1024x1024&w=is&k=20&c=P2bnTOn0JYewI0b7NhbDImnwXgzedGgjPlnpN_F91KA=";
  const rainy_url =
    "https://images.unsplash.com/photo-1583054994298-cc68ddaca862?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const miniHot_url =
    "https://plus.unsplash.com/premium_photo-1733306531071-087c077e1502?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="flex items-center justify-center ">
      <div className="text-center">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? rainy_url
                : info.temp < 15
                  ? cold_url
                  : info.temp > 15 && info.temp < 30
                    ? miniHot_url
                    : hot_url
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 15 ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temperature={info.temp}&deg;C </p>
              <p>Humidity={info.humidity}</p>
              <p>Min Temperature={info.tempMin}&deg;C</p>
              <p>Max Temperature={info.tempMax}&deg;C</p>
              <p>Wind Degree= {info.windDegree}&deg;</p>
              <p>Wind Speed={info.windSpeed} km/h </p>
              <p>
                The Weather Can Be Described as {info.weather} and fells like as{" "}
                {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InfoBox;
