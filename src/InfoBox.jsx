import AcUnitIcon from "@mui/icons-material/AcUnit";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ info }) {
    const IMG_URL = {
        HOT: "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        COLD: "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        RAIN: "https://plus.unsplash.com/premium_photo-1664303017917-71ebeb42343d?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    };

    if (!info.city == "") {
        return (
            <div className="InfoBox">
                <div className="cardContainer">
                    <Card className="card" sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={
                                info.humidity > 80
                                    ? IMG_URL.RAIN
                                    : info.temp > 15
                                    ? IMG_URL.HOT
                                    : IMG_URL.COLD
                            }
                            title="image"
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                {info.humidity > 80 ? (
                                    <WaterDropIcon />
                                ) : info.temp > 15 ? (
                                    <WbSunnyIcon />
                                ) : (
                                    <AcUnitIcon />
                                )}
                                &nbsp;
                                {info.city.toUpperCase()}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ color: "text.secondary" }}
                                component={"span"}
                            >
                                <p>Temperature: {info.temp}&deg;C</p>
                                <p>Humidity: {info.humidity}</p>
                                <p>Minimum Temperature: {info.tempMin}&deg;C</p>
                                <p>Maximum Temperature: {info.tempMax}&deg;C</p>
                                <p>
                                    The weather can be described as{" "}
                                    <b>
                                        <i>{info.weather}</i>
                                    </b>{" "}
                                    and temperature feels like {info.feelsLike}
                                    &deg;C
                                </p>
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    } else {
        return;
    }
}
