import "./infoBox.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function InfoBox({info}) {

    let imgUrl = "https://images.unsplash.com/photo-1722858343990-1604f540c15d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let cold_url="https://images.unsplash.com/photo-1674407866481-a39b2239f771?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let hot_url="https://images.unsplash.com/photo-1602523499267-7ccc18397511?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let rain_url="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=is&k=20&c=GMlTyTFSxiKCiWyDI-NjFFN0RX6Z5yzRbdR3ThuJEyA=";


    let weatherImage = imgUrl; 
    if (info.humidity > 80) {
        weatherImage = rain_url;
    } else if (info.temp > 15) {
        weatherImage = hot_url; 
    } else if (info.temp <= 15) {
        weatherImage = cold_url;
    }

    
    let weatherIcon;
    if (info.humidity > 80) {
        weatherIcon = <ThunderstormIcon />;
    } else if (info.temp > 15) {
        weatherIcon = <WbSunnyIcon />;
    } else if (info.temp <= 15) {
        weatherIcon = <AcUnitIcon />;
    }

    return (
        <div className="InfoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={weatherImage}
                        title="City weather image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {weatherIcon}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            <p>Temperature: {info.temp}°C</p>
                            <p>Feels Like: {info.feelsLike}°C</p>
                            <p>Humidity: {info.humidity}%</p>
                            <p>Max Temperature: {info.temp_max}°C</p>
                            <p>Min Temperature: {info.temp_min}°C</p>
                            <p>The weather can be described as <i>{info.weather}</i>, and feels like {info.feelsLike}°C.</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
